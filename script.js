// Переменные состояния игры
let gameQueue = [];       
let currentIndex = 0;     
let score = 0;            
let currentCorrectBreed = null; 

const MUTT_ID = 'dvornyaga'; // ID дворняги из breeds.js

// DOM элементы
const menuScreen = document.getElementById('menu-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const imgEl = document.getElementById('dog-image');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');
const qCurrentEl = document.getElementById('q-current');
const qTotalEl = document.getElementById('q-total');

// === ФУНКЦИЯ ЗАПУСКА ИГРЫ ===
function startGame(mode) {
    // 1. Находим объект дворняги (Мастер-объект)
    const muttMaster = breedsData.find(b => b.id === MUTT_ID);
    
    // 2. Собираем обычные породы (Исключая дворнягу, чтобы она не выпала случайно)
    let standardBreeds = [];
    if (mode === 'all') {
        standardBreeds = breedsData.filter(b => b.id !== MUTT_ID);
    } else {
        // Фильтруем по уровню (1, 2, 3 или 4)
        standardBreeds = breedsData.filter(b => b.level === mode && b.id !== MUTT_ID);
    }

    if (standardBreeds.length === 0) {
        alert("Нет пород для этого уровня! Проверьте файл breeds.js");
        return;
    }

    // 3. Генерируем вопросы про дворняг
    let muttQuestions = [];
    if (muttMaster) {
        // Сколько дворняг добавлять?
        // Если уровень 4 или "all" - добавляем много (10), иначе мало (3)
        const count = (mode === 'all') ? 10 : 3;
        
        // Берем все фото дворняг, перемешиваем их
        const shuffledImages = [...muttMaster.images].sort(() => Math.random() - 0.5);
        
        // Берем нужное количество (или сколько есть, если фоток мало)
        const selectedImages = shuffledImages.slice(0, count);

        // Создаем КЛОНЫ объектов.
        // ID и Имя остаются теми же, но у каждого клона массив images состоит из 1 уникального фото.
        muttQuestions = selectedImages.map(imgUrl => {
            return {
                ...muttMaster,   // Копируем все свойства (id, name, similar...)
                images: [imgUrl] // Перезаписываем массив фото, оставляя только одно
            };
        });
    }

    // 4. Объединяем обычных собак и клонов дворняг
    gameQueue = [...standardBreeds, ...muttQuestions];

    // 5. Перемешиваем всю очередь
    gameQueue.sort(() => Math.random() - 0.5);

    // Сброс UI
    currentIndex = 0;
    score = 0;
    scoreEl.textContent = 0;
    qTotalEl.textContent = gameQueue.length;

    showScreen('game');
    renderQuestion();
}

// === ГЕНЕРАЦИЯ ВОПРОСА ===
function renderQuestion() {
    optionsContainer.innerHTML = '';
    nextBtn.style.display = 'none';
    
    currentCorrectBreed = gameQueue[currentIndex];
    qCurrentEl.textContent = currentIndex + 1;

    // Берем изображение (так как мы делали клонов с 1 фото, берем нулевое)
    // Если это обычная порода - берем случайное из её массива
    const randomImg = currentCorrectBreed.images[Math.floor(Math.random() * currentCorrectBreed.images.length)];
    imgEl.src = randomImg;

    // Генерируем варианты ответов
    const options = generateOptions(currentCorrectBreed);

    options.forEach(breed => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = breed.name;
        btn.onclick = () => checkAnswer(breed, btn);
        optionsContainer.appendChild(btn);
    });
}

// Генерация вариантов
function generateOptions(correct) {
    // Кандидаты - все породы из базы
    // Фильтр убирает:
    // 1. Саму правильную породу (по ID)
    // 2. Дворнягу (если правильный ответ и так дворняга, чтобы не было дублей кнопок)
    
    let candidates = breedsData
        .filter(b => b.id !== correct.id) 
        .map(breed => {
            let weight = 1;
            // Учитываем схожесть
            if (correct.similar && correct.similar[breed.id]) {
                weight = correct.similar[breed.id];
            }
            // Если правильный ответ Дворняга, увеличим вес для "похожих" (хаски, овчарки и т.д.)
            // Это прописано в similar у дворняги в breeds.js
            return { breed: breed, weight: weight };
        });

    // Выбираем 3 неправильных варианта на основе весов (схожести)
    const wrongOptions = [];
    for(let i=0; i<3; i++) {
        if(candidates.length === 0) break;
        
        let totalWeight = candidates.reduce((sum, item) => sum + item.weight, 0);
        let randomVal = Math.random() * totalWeight;
        let sum = 0;
        
        for(let j=0; j<candidates.length; j++) {
            sum += candidates[j].weight;
            if(randomVal <= sum) {
                wrongOptions.push(candidates[j].breed);
                candidates.splice(j, 1);
                break;
            }
        }
    }

    // Добавляем правильный и перемешиваем
    let allOptions = [correct, ...wrongOptions];
    return allOptions.sort(() => Math.random() - 0.5);
}

// === ПРОВЕРКА ОТВЕТА ===
function checkAnswer(selectedBreed, btnElement) {
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(btn => btn.disabled = true);

    // Сравнение по ID работает идеально, так как у всех клонов дворняг ID = 'dvornyaga'
    if (selectedBreed.id === currentCorrectBreed.id) {
        btnElement.classList.add('correct');
        score++;
        scoreEl.textContent = score;
    } else {
        btnElement.classList.add('wrong');
        // Подсветка правильного
        allBtns.forEach(btn => {
            if (btn.textContent === currentCorrectBreed.name) {
                btn.classList.add('correct');
            }
        });
    }

    nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < gameQueue.length) {
        renderQuestion();
    } else {
        finishGame();
    }
}

function finishGame() {
    showScreen('result');
    const total = gameQueue.length;
    const percent = Math.round((score / total) * 100);
    
    document.getElementById('final-score').textContent = percent;
    document.getElementById('correct-count').textContent = score;
    document.getElementById('total-count').textContent = total;

    const titleEl = document.getElementById('final-title');
    if (percent === 100) { titleEl.textContent = "👑 Бог Кинологии!"; titleEl.style.color = "#d63384"; }
    else if (percent >= 90) { titleEl.textContent = "🧠 Гений!"; titleEl.style.color = "#6f42c1"; }
    else if (percent >= 80) { titleEl.textContent = "🥇 Эксперт по породам"; titleEl.style.color = "#28a745"; }
    else if (percent >= 60) { titleEl.textContent = "🥈 Любитель собак"; titleEl.style.color = "#007bff"; }
    else if (percent >= 40) { titleEl.textContent = "🥉 Начинающий"; titleEl.style.color = "#fd7e14"; }
    else { titleEl.textContent = "🤡 Ты точно любишь собак?"; titleEl.style.color = "#dc3545"; }
}

function showScreen(screenName) {
    menuScreen.classList.remove('active');
    gameScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    if (screenName === 'menu') menuScreen.classList.add('active');
    if (screenName === 'game') gameScreen.classList.add('active');
    if (screenName === 'result') resultScreen.classList.add('active');
}

function showMenu() {
    showScreen('menu');
}