// База данных пород
const breedsData = [
    // === УРОВЕНЬ 1 (Популярные) ===
    {
        id: 'йорк',
        name: 'йоркширский терьер',
        level: 1,
        images: [
            'https://sobakovod.club/uploads/posts/2022-02/1644238441_4-sobakovod-club-p-sobaki-klassicheskaya-strizhka-yorka-10.jpg',
            'https://cdn.britannica.com/48/233848-050-C8254DF7/Yorkshire-Terrier-dog.jpg',
            'https://лайкин.рф/wp-content/uploads/2020/01/%D1%81%D1%82%D1%80%D0%B8%D0%B6%D0%BA%D0%B0-%D0%BA%D0%BE%D0%B3%D1%82%D0%B5%D0%B9-%D0%BF%D1%80%D0%B5%D0%B2%D1%8C%D1%8E.png',
            'https://sobakovod.club/uploads/posts/2022-02/1644238441_4-sobakovod-club-p-sobaki-klassicheskaya-strizhka-yorka-10.jpg'
        ],
        similar: { 'шелк': 50, 'бивер': 50 }
    },
    {
        id: 'чих',
        name: 'чихуахуа',
        level: 1,
        images: [
            'https://www.purina.ru/sites/default/files/2021-02/BREED%20Hero_0034_chihuahua_smooth.jpg',
            'https://pcdn.bellfordev.pro/image/cache/catalog/Blog/Blog-Pictures/chihuahua-w690-h690.jpg',
            'https://storage.yandexcloud.net/yac-wh-sb-prod-s3-media-03005/uploads/breed/25.07/chichi3.webp',
            'https://thumbs.dreamstime.com/b/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9-%D0%BC%D0%B5%D1%80%D0%BB%D0%B5-%D1%87%D0%B8%D1%85%D1%83%D0%B0%D1%85%D1%83%D0%B0-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D1%8B-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-221598871.jpg'
        ],
        similar: { 'той': 50, 'крысарик': 50 }
    },
    {
        id: 'мопс',
        name: 'мопс',
        level: 1,
        images: [
            'https://www.purina.ru/sites/default/files/2021-02/BREED%20Hero_0100_pug.jpg',
            'https://media.istockphoto.com/id/1286709883/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%BC%D0%BE%D0%BF%D1%81-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=170667a&w=0&k=20&c=xrDYCmxafP_IZgIMWwk_jt04pQydFhZN2mQF5qIEeZY='
        ],
        similar: { 'англбульдог': 50, 'фрбульдог': 50 }
    },
    {
        id: 'хаски',
        name: 'сибирский хаски',
        level: 1,
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/c/ca/Siberian-husky.jpg',
            'https://img.freepik.com/premium-photo/siberian-husky-sled-dogs-team-harness-run-pull-dog-driver-winter-sport-championship-competition_77829-3597.jpg',
            'https://sobakovod.club/uploads/posts/2022-02/1644676750_2-sobakovod-club-p-sobaki-khaski-aguti-4.jpg',
            'https://glaza.info/uploads/posts/2024-02/img_20240113_113347.webp'
        ],
        similar: { 'маламут': 50, 'аляска': 50, 'кликай': 50, 'якут': 50, 'сахалин': 50 }
    },
    {
        id: 'маламут',
        name: 'аляскинский маламут',
        level: 1,
        images: [
            'https://img.maganimo.com/1200x675/2024-11-27/alaskan-malamute.webp',
            'https://zoonika.com/wp-content/uploads/2023/01/alyaskinskij-malamut-vyazka.jpg'
        ],
        similar: { 'якут': 50, 'хаски': 50 }
    },
    {
        id: 'немец',
        name: 'немецкая овчарка',
        level: 1,
        images: [
            'https://lapkins.ru/upload/iblock/65d/65d078d526dceea58f18cdb773ffb373.jpg',
            'https://cs7.pikabu.ru/post_img/big/2019/03/21/4/1553143371130437824.jpg',
            'https://avatars.dzeninfra.ru/get-zen_doc/1926321/pub_629cc1b4db9da0588be5208a_629cc1ffdb9da0588be5be5e/scale_1200'
        ],
        similar: { 'малинуа': 50, 'вео': 50 }
    },
    {
        id: 'фрбульдог',
        name: 'французский бульдог',
        level: 1,
        images: [
            'https://storage-api.petstory.ru/resize/0x0x70/c7/d3/64/c7d36419fe2049638f7a089098d30645.jpeg',
            'https://storage.yandexcloud.net/4lapy-strapi/upload_19124402_79e2cb776b.jpg',
            'https://yac-wh-sb-prod-s3-media-04001.storage.yandexcloud.net/db_connection/1/layer_item/1/articles/8882/wysiwig-img/%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D1%83%D0%B7%D1%81%D0%BA%D0%B8%D0%B9_%D0%B1%D1%83%D0%BB%D1%8C%D0%B4%D0%BE%D0%B3.webp'
        ],
        similar: { 'англбульдог': 50, 'мопс': 50 }
    },
    {
        id: 'пом',
        name: 'померанский шпиц',
        level: 1,
        images: [
            'https://www.purina.ru/sites/default/files/2021-02/BREED%20Hero_0095_pomeranian.jpg',
            'https://cojo.ru/wp-content/uploads/2022/12/shpits-merl-6-1.webp',
            'https://spitz.su/tn/1000x1000/dogs/photo_58920.jpg',
            'https://foto.petovod.ru/fotos/2017/10/25/150893864226.jpg'
        ],
        similar: { 'немшпиц': 50, 'чих': 50, 'самоед': 50 }
    },
    {
        id: 'пекинес',
        name: 'пекинес',
        level: 1,
        images: [
            'https://moizver.com/upload/medialibrary/884/8847fed2b0584fc5800375cba03ebdb9.jpg',
            'https://www.dogster.com/wp-content/uploads/2024/03/Cute-and-funny-red-light-pekingese-dog-in-autumn-park-playing-with-leaves_T.Den_Team_Shutterstock.jpg'
        ],
        similar: { 'пом': 50, 'лхаса': 50 }
    },
    {
        id: 'шитцу',
        name: 'ши-тцу',
        level: 1,
        images: [
            'https://cdn.britannica.com/05/234205-050-F8D2E018/Shih-tzu-dog.jpg',
            'https://www.psy.pl/wp-content/uploads/2022/04/shutterstock_2436580153.jpg'
        ],
        similar: { 'пекинес': 50, 'мальтезе': 50 }
    },
    {
        id: 'той',
        name: 'русский той',
        level: 1,
        images: [
            'https://storage-api.petstory.ru/resize/0x0x70/38/6b/a2/386ba2622c69496d848bfdfeaf918499.jpeg',
            'https://lapkins.ru/upload/iblock/6bc/6bc2460ef1c9f477c6c2cf80e64e71d2.jpg',
            'https://sobakovod.club/uploads/posts/2021-12/1639316646_2-sobakovod-club-p-sobaki-toi-terer-mini-dlinnosherstnii-2.jpg'
        ],
        similar: { 'чих': 50, 'крысарик': 50, 'цвергпинчер': 50 }
    },
    {
        id: 'мальтезе',
        name: 'мальтезе, мальтийская болонка',
        level: 1,
        images: [
            'https://hvost.news/upload/medialibrary/ea7/ea7778952d3f7b058215abf97dd7c7b0.jpg',
            'https://f1.dikidi.net/c4/v3267/4tabeghb0f.jpg'
        ],
        similar: { 'бишон': 50, 'гаванез': 50, 'шитцу': 50 }
    },
    {
        id: 'лабр',
        name: 'лабрадор-ретривер',
        level: 1,
        images: [
            'https://sobakovod.club/uploads/posts/2022-02/1644623426_1-sobakovod-club-p-sobaki-labrador-korotkosherstnii-1.jpg',
            'https://www.earthflora.ru/wp-content/uploads/2011-11-28/labrador-retriver_1.jpg'
        ],
        similar: { 'голден': 50, 'прямретривер': 50 }
    },
    {
        id: 'голден',
        name: 'золотистый ретривер',
        level: 1,
        images: [
            'https://old.bigenc.ru/media/2018/02/05/1238984586/36363.jpg',
            'https://eu-central-1.graphassets.com/AnwjgMYRvQfWK3bRPjoq3z/resize=height:608,width:1080/output=format:webp/S268hZkfS9i4z8KBKVxz'
        ],
        similar: { 'лабр': 50, 'прямретривер': 50 }
    },
    {
        id: 'пемброк',
        name: 'вельш корги пемброк',
        level: 1,
        images: [
            'https://kot-filimon.ru/images/2.webp',
            'https://static.tildacdn.com/tild6562-3139-4638-b963-626532626661/breed3.jpeg'
        ],
        similar: { 'кардиган': 50, 'сиба': 50 }
    },
    {
        id: 'кардиган',
        name: 'вельш корги кардиган',
        level: 1,
        images: [
            'https://zoo-vision.com/images/veter24.webp',
            'https://yac-wh-sb-prod-s3-media-04001.storage.yandexcloud.net/db_connection/1/layer_item/1/articles/10503/wysiwig-img/156072880_m_normal_none.webp'
        ],
        similar: { 'пемброк': 50, 'кайкен': 50 }
    },
{
        id: 'китай',
        name: 'китайская хохлатая',
        level: 1,
        images: [
            'https://i.bigenc.ru/resizer/resize?sign=zLoPHYoiH1oTbFKFBJCUSg&filename=vault/da9944fc4dd22f1dd79859671d723ef9.webp&width=1200',
            'https://santreyd.ru/upload/iblock/5f9/5f92c7c7a6ebf9cd40f73aa8ac09b164.jpg.b.jpg'
        ],
        similar: { 'шитцу': 50, 'пом': 50, 'тойпудель': 50, 'лхаса': 50 }
    },
    {
        id: 'англкокер',
        name: 'английский кокер-спаниель',
        level: 1,
        images: [
            'https://s3.pet-yes.com/thumbs/512/BreedPhotos/609c4dc1991b5.jpeg',
            'https://storage.yandexcloud.net/yac-wh-sb-prod-s3-media-03005/uploads/breed/files/7c47c34573337b9ef6afa7fdf7536f2c.webp'
        ],
        similar: { 'амкокер': 50, 'русспаник': 50, 'српудель': 50, 'спрингер': 50, 'кавалер': 50, 'кингчарльз': 50 }
    },
    {
        id: 'амкокер',
        name: 'американский кокер-спаниель',
        level: 1,
        images: ['https://жизньпитомца.рф/upload/iblock/6d0/6d0324a31618382b118ad6b50640d0db.jpg'],
        similar: { 'англкокер': 50, 'русспаник': 50, 'српудель': 50, 'спрингер': 50, 'кавалер': 50, 'кингчарльз': 50 }
    },
    {
        id: 'чау',
        name: 'чау чау',
        level: 1,
        images: ['https://storage.yandexcloud.net/yac-wh-sb-prod-s3-media-03005/uploads/breed/files/f6285af6093335a91cf16580df0d28e3.webp'],
        similar: { 'кеесхонд': 50, 'маламут': 50, 'шарпей': 50 }
    },
    {
        id: 'српудель',
        name: 'малый пудель',
        level: 1,
        images: ['https://80.img.avito.st/image/1/1.P-BK1ba4kwl8fFEMOO0pm2B0kQ_0dBEBPHGRC_p8mwP8.uTOF85PvrXlCf2w6xeipsOUuoxyYUMR7Rdfh0Xw5TPM'],
        similar: { 'тойпудель': 50, 'болпудель': 50, 'минпудель': 50, 'водсобака': 50 }
    },
    {
        id: 'болпудель',
        name: 'большой пудель',
        level: 1,
        images: [
            'https://kisapes.ru/wp-content/uploads/2021/05/poodle-02.jpg',
            'https://sobakovod.club/uploads/posts/2022-01/1641832118_2-sobakovod-club-p-sobaki-samii-bolshoi-pudel-2.jpg'
        ],
        similar: { 'српудель': 50, 'тойпудель': 50, 'минпудель': 50 }
    },
    {
        id: 'минпудель',
        name: 'миниатюрный пудель',
        level: 1,
        images: ['https://crave-pet.ru/img/fabfa4d8-cd36-427a-8d50-dcdfb3be525b/img.png'],
        similar: { 'болпудель': 50, 'српудель': 50, 'тойпудель': 50 }
    },
    {
        id: 'тойпудель',
        name: 'той пудель',
        level: 1,
        images: ['https://irecommend.ru/sites/default/files/product-images/35050/x_e00e59fe.jpg'],
        similar: { 'болпудель': 50, 'српудель': 50, 'минпудель': 50 }
    },
    {
        id: 'доберман',
        name: 'доберман',
        level: 1,
        images: [
            'https://storage.yandexcloud.net/4lapy-strapi/upload_18215474_011063ec0e.jpg',
            'https://cs10.pikabu.ru/post_img/big/2020/04/08/6/1586336437121058008.jpg',
            'https://images.squarespace-cdn.com/content/v1/5fcd4f79f35c2027aed964a6/1651341152507-P8DOLSFHCGF47SXMW8R2/Gambit3-1.jpg'
        ],
        similar: { 'ротвейлер': 50, 'питбуль': 50, 'немдог': 50 }
    },
    {
        id: 'ротвейлер',
        name: 'ротвейлер',
        level: 1,
        images: ['https://storage.yandexcloud.net/yac-wh-sb-prod-s3-media-03005/uploads/breed/12.09.24/Shutterstock_1421374736-min.webp'],
        similar: { 'доберман': 50, 'питбуль': 50 }
    },
    {
        id: 'питбуль',
        name: 'американский питбультерьер',
        level: 1,
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/001_American_Pit_Bull_Terrier.jpg/1200px-001_American_Pit_Bull_Terrier.jpg',
            'https://images.thevoicemag.ru/upload/img_cache/b3a/b3a82680e560701d92cb0b40c41d3a04_cropped_510x765.webp'
        ],
        similar: { 'стафф': 50, 'стаффбуль': 50, 'буль': 50, 'минибуль': 50, 'булли': 50 }
    },
    {
        id: 'стафф',
        name: 'американский стаффордширский терьер',
        level: 1,
        images: [
            'https://petsi.net/images/blog/text/amerikanskiy-staffordshirskiy-teryer-interesnyye-fakty-o-porode/amerikanskiy-staffordshirskiy-teryer.jpeg',
            'https://www.staffzah.ru/photo/dogZAH217-1.jpg'
        ],
        similar: { 'питбуль': 50, 'стаффбуль': 50, 'буль': 50, 'минибуль': 50, 'булли': 50 }
    },
    {
        id: 'буль',
        name: 'английский бультерьер',
        level: 1,
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/f/f5/Bullterrierrouge_femelle.jpg',
            'https://s0.rbk.ru/v6_top_pics/media/img/5/23/347175114682235.webp'
        ],
        similar: { 'минибуль': 50, 'стаффбуль': 50, 'питбуль': 50, 'стафф': 50, 'булли': 50 }
    },
    {
        id: 'такса',
        name: 'такса',
        level: 1,
        images: [
            'https://s3.pet-yes.com/articles/photos/be526b1923dda46cdf77425222fe6dc6.jpeg',
            'https://lh5.googleusercontent.com/proxy/TsfZA0AA6NH_eDZv9AWqSI0LyH64BJZDEfuYbtY_5kDfdcvnH-D1GScLuvIHPnwpydafetwpSE0fHi0ph0pq6w',
            'https://lh3.googleusercontent.com/proxy/qJ8wlPNcZCrZz0-pP8A9zKn4gf8Np3WYiirBpL91rXKZyIXidQLnuXgboJyYRqKlIsplJvnSLM2wog',
            'https://www.purina.ru/sites/default/files/2021-02/BREED%20Hero_0042_dachshund_wire_standard.jpg'
        ],
        similar: { 'бассетгриффон': 50, 'бассетхаунд': 50, 'пемброк': 50, 'кардиган': 50 }
    },
    {
        id: 'дрт',
        name: 'джек-рассел-терьер',
        level: 1,
        images: [
            'https://images.prismic.io/doge/20243398-c490-40bb-be76-5d918a46266f_s1200.jpg?auto=compress,format',
            'https://drougmagazine.ru/upload/resize_cache/iblock/233/413_265_2/2338afb24da8ecde3408abd2a5b44ee0.jpg'
        ],
        similar: { 'прт': 50, 'фокс': 50, 'жестфокс': 50 }
    },
    {
        id: 'бигль',
        name: 'бигль',
        level: 1,
        images: ['https://yac-wh-sb-prod-s3-media-04001.storage.yandexcloud.net/db_connection/1/layer_item/1/articles/5510/wysiwig-img/43333881_m_normal_none.webp'],
        similar: { 'дрт': 50, 'прт': 50, 'русспеггончая': 50, 'бассетхаунд': 50, 'басенджи': 50, 'англфоксхаунд': 50, 'харьер': 50, 'древер': 50, 'поинтер': 50 }
    },
    {
        id: 'бладхаунд',
        name: 'бладхаунд',
        level: 1,
        images: ['https://sun9-21.userapi.com/s/v1/ig2/E8SJclY1CYB1UKRasUv2EKZp_HgC116L3bL4MMy06OYlj0zZrQXy8-WRLiwbTJUXnlrTRdXBKgoKRZPTv5p5ywYm.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2109x1406&from=bu&u=tr4-hPdTLtr5TkJjXrQYz9AH7fDFSpkT28WDiEdbLrU&cs=640x0'],
        similar: { 'браккоитальано': 50, 'бигль': 50 }
    },
    {
        id: 'вест',
        name: 'вест-хайленд-уайт-терьер',
        level: 1,
        images: ['https://royal-groom.ru/sites/default/files/breed/vesthailenduaitterer.jpg'],
        similar: { 'керн': 50, 'гленофимаал': 50, 'норфолк': 50, 'норвич': 50, 'скотч': 50 }
    },
    {
        id: 'фокс',
        name: 'гладкошерстный фокстерьер',
        level: 1,
        images: [
            'https://irecommend.ru/sites/default/files/product-images/69705/rascal_fair_1.jpg',
            'https://i.pinimg.com/736x/60/84/bf/6084bf5fa4db934fe4748a88ad1306d0.jpg'
        ],
        similar: { 'жестфокс': 50, 'дрт': 50, 'прт': 50 }
    },
    {
        id: 'цверг',
        name: 'цвергшнауцер',
        level: 1,
        images: [
            'https://zoonika.com/wp-content/uploads/2023/02/tsvergshnautser-kharakter-e1701351815936.jpg',
            'https://storage-api.petstory.ru/resize/0x0x70/fe/24/a1/fe24a1277b624054bd818eda8f7cf749.jpeg'
        ],
        similar: { 'ризен': 50, 'миттель': 50 }
    },
    {
        id: 'ризен',
        name: 'ризеншнауцер',
        level: 1,
        images: ['https://zoopt.ru/images/article/rizen-10.09.25-01.png'],
        similar: { 'миттель': 50, 'цверг': 50, 'рчт': 50 }
    },
    {
        id: 'миттель',
        name: 'миттельшнауцер',
        level: 1,
        images: [
            'https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/Standard-Schnauzer.jpg?itok=XSF9YF_Q',
            'https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11163957/202106standard-schnauzer-salt-pepper.jpg'
        ],
        similar: { 'ризен': 50, 'цверг': 50, 'рчт': 50, 'эрдель': 50 }
    },
    {
        id: 'эрдель',
        name: 'эрдельтерьер',
        level: 1,
        images: ['https://lapkins.ru/upload/iblock/ac4/ac4b82d8aabc4122dc9ec8e230e66cef.jpg'],
        similar: { 'ризен': 50, 'миттель': 50, 'рчт': 50, 'керриблю': 50, 'лайкленд': 50 }
    },
    {
        id: 'кавалер',
        name: 'кавалер-кинг-чарльз-спаниель',
        level: 1,
        images: [
            'https://storage.yandexcloud.net/yac-wh-sb-prod-s3-media-03005/uploads/breed/674/de50b14a7285b864a3042f6f7b9a9d26.webp',
            'https://storage.yandexcloud.net/yac-wh-sb-prod-s3-media-03005/uploads/breed/files/4a235dcf8ac4c4ed003b23e1587863ca.webp'
        ],
        similar: { 'кингчарльз': 50, 'тойпудель': 50, 'мальтезе': 50 }
    },
    {
        id: 'кингчарльз',
        name: 'кинг-чарльз-спаниель',
        level: 1,
        images: [
            'https://image.petmd.com/files/inline-images/english-toy-spaniel-3.jpeg?VersionId=jle8_BbikgJkOavQnjmD7Ar9Pbm2fRVk',
            'https://image.petmd.com/files/inline-images/english-toy-spaniel-4.jpeg?VersionId=EibmF7aoZoIMhstV_6P6rwsP9OZjQNux'
        ],
        similar: { 'кавалер': 50, 'мальтезе': 50, 'тойпудель': 50 }
    },
    {
        id: 'мальтипу',
        name: 'мальтипу',
        level: 1,
        images: [
            'https://ajo-pet.ru/u/ckupload/files/maltipu-7.jpg',
            'https://pethealthpros.com/cdn/shop/articles/noelle-dgf2nfg_j7k-unsplash-1695644804798_ee34e35b-086e-4b26-8d66-ba2dc3ecd839.jpg?v=1703079942'
        ],
        similar: { 'мальтезе': 50, 'тойпудель': 50, 'бишон': 50, 'гаванез': 50 }
    },
    {
        id: 'бишон',
        name: 'бишон фризе',
        level: 1,
        images: [
            'https://images.prismic.io/doge/bf7af29e-2373-4f28-ba3e-dec7f5486a69_bishon_frize_5.jpg?auto=compress,format',
            'https://s0.rbk.ru/v6_top_pics/media/img/5/55/347192439509555.webp'
        ],
        similar: { 'мальтезе': 50, 'тойпудель': 50, 'мальтипу': 50, 'гаванез': 50 }
    },
    {
        id: 'гаванез',
        name: 'гаванский бишон',
        level: 1,
        images: [
            'https://s3.pet-yes.com/thumbs/512/BreedPhotos/609d885405265.png',
            'https://www.purina.ru/sites/default/files/2021-02/BREED%20Hero_0064_havanese.jpg'
        ],
        similar: { 'бишон': 50, 'мальтипу': 50, 'тойпудель': 50, 'мальтезе': 50, 'кавалер': 50, 'лхаса': 50 }
    },
    {
        id: 'немдог',
        name: 'немецкий дог',
        level: 1,
        images: [
            'https://foxspb.com/img/porody/nemeczkij-dog.jpg',
            'https://kisapes.ru/wp-content/uploads/2020/11/great-dane-02.jpg'
        ],
        similar: { 'бульмастиф': 50, 'доберман': 50, 'ротвейлер': 50 }
    },
    {
        id: 'ньюф',
        name: 'ньюфаундленд',
        level: 1,
        images: [
            'https://old.bigenc.ru/media/2016/10/27/1237288325/23199.jpg',
            'https://sobakovod.club/uploads/posts/2021-12/1640009832_1-sobakovod-club-p-sobaki-nyufaundlend-cherno-belii-1.jpg'
        ],
        similar: { 'сент': 50, 'ландсир': 50, 'леон': 50, 'мастино': 50, 'кавказ': 50 }
    },
    {
        id: 'сент',
        name: 'сенбернар',
        level: 1,
        images: ['https://egida.by/_pu/5/44648269.jpg', 'https://dog-life.com/upload/images/2015-08-14-dog-03.jpg'],
        similar: { 'ньюф': 50, 'москвастор': 50 }
    },
    {
        id: 'бульмастиф',
        name: 'бульмастиф',
        level: 1,
        images: ['https://kisapes.ru/wp-content/uploads/2021/09/bullmastiff-04.jpg'],
        similar: { 'мастино': 50, 'немдог': 50, 'испмастиф': 50 }
    },
    {
        id: 'канекорсо',
        name: 'кане корсо',
        level: 1,
        images: ['https://catfishes.ru/wp-content/uploads/2021/06/korso3.jpg'],
        similar: { 'немдог': 50, 'бульмастиф': 50 }
    },
    {
        id: 'водсобака',
        name: 'испанская водяная собака',
        level: 1,
        images: ['https://kisapes.ru/wp-content/uploads/2022/07/spanish-water-dog-07.jpg','https://egida.by/_pu/6/40457573.jpg'],
        similar: { 'српудель': 50, 'портводсобака': 50, 'пули': 50, 'дворняга': 50 }
    },
    
    // === УРОВЕНЬ 2 (Сложнее) ===
    {
        id: 'выжла',
        name: 'венгерская выжла',
        level: 2,
        images: ['https://petglobals.com/imagesaver/iblockdefault/big/kjvicceijrnbnkvpsdpb_1599565963.jpg','https://kisapes.ru/wp-content/uploads/2023/09/wirehaired-vizsla-05.jpg'],
        similar: { 'веймаранер': 50, 'курцхаар': 50, 'риджбек': 50, 'руспеггончая': 50 }
    },
    {
        id: 'ирсеттер',
        name: 'ирландский сеттер',
        level: 2,
        images: ['https://guldog.ru/assets/server/post_images/12214/c63d2fca14e4ed1b7cbea5a84f88236b-min.jpeg','https://sobakovod.club/uploads/posts/2022-01/1641900631_1-sobakovod-club-p-sobaki-irlandskii-setter-1.jpg'],
        similar: { 'англсеттер': 50, 'гордон': 50, 'голден': 50, 'ллавелн': 50 }
    },
    {
        id: 'англсеттер',
        name: 'английский сеттер',
        level: 2,
        images: ['https://animalreader.ru/wp-content/uploads/2014/02/anglijskij-setter_1_1.jpeg','https://media.istockphoto.com/id/507142416/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%81%D0%B5%D1%82%D1%82%D0%B5%D1%80-%D0%BD%D0%B0-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D0%B0%D1%8F-%D1%82%D1%80%D0%B0%D0%B2%D0%B0-%D0%B3%D0%B0%D0%B7%D0%BE%D0%BD.jpg?s=612x612&w=0&k=20&c=eSjUoB-Yz-HbokaXwnp6JPIkGZOJlgvNUNOt8RAJwRk='],
        similar: { 'ирсеттер': 50, 'поинтер': 50, 'далматин': 50, 'ллавелн': 50 }
    },
    {
        id: 'риджбек',
        name: 'родезийский риджбек',
        level: 2,
        images: ['https://storage-api.petstory.ru/resize/0x0x70/34/fa/86/34fa868f4c7847ea94619422c5c725bd.jpeg','https://images.prismic.io/doge/4534a94b-7ea8-42a1-b3bc-3d641f9c0f5e_6e295660ddbf71d45c758044635bae09.jpg?auto=compress,format'],
        similar: { 'выжла': 50, 'веймаранер': 50, 'доберман': 50, 'тайскийриджбек': 50 }
    },
    {
        id: 'папильон',
        name: 'папильон',
        level: 2,
        images: ['https://dog-life.com/upload/images/2015-05-05-dog-05.jpg','https://kinpet.ru/upload/uf/1ca/2zafjvnft36goxo3khsjl40jhtws9ued/65_405_380.jpg'],
        similar: { 'чих': 50, 'хин': 50, 'кавалер': 50, 'фален': 50 }
    },
    {
        id: 'шелти',
        name: 'шелти',
        level: 2,
        images: ['https://storage-api.petstory.ru/resize/0x0x70/d2/b1/22/d2b1223bb56241a8965c74a17c5353c5.jpeg','https://optim.tildacdn.com/tild6366-3236-4631-a335-613865643638/-/resize/600x/-/format/webp/1.jpg.webp'],
        similar: { 'коллидш': 50, 'бордер': 50, 'аусси': 50, 'якут': 50 }
    },
    {
        id: 'малинуа',
        name: 'бельгийская овчарка малинуа',
        level: 2,
        images: ['https://storage.yandexcloud.net/yac-wh-sb-prod-s3-media-03005/uploads/breed/12.09.24/Shutterstock_2202226837-min.webp','https://tvoidrug.com/wp-content/uploads/2017/01/foto_193_5.jpg','https://i.pinimg.com/736x/e4/d5/0c/e4d50c16f1b1a07009a9ec1f9f95eb32.jpg'],
        similar: { 'немец': 50, 'вео': 50, 'хердер': 50, 'бордер': 50, 'дворняга': 50 }
    },
    {
        id: 'бшо',
        name: 'белая швейцарская овчарка',
        level: 2,
        images: ['https://pet-dog.ru/wp-content/uploads/2023/05/belaya-shvejtsarskaya-ovcharka.jpeg','https://www.ekzotika.com/ekzotika_img/dogs/13.jpg'],
        similar: { 'немец': 50, 'самоед': 50, 'хаски': 50, 'вео': 50 }
    },
    {
        id: 'кавказ',
        name: 'кавказская овчарка',
        level: 2,
        images: ['https://egida.by/_pu/6/66854546.jpg','https://house-animals.ru/sites/default/files/media/user-1/dog/exterior-caucasian-ovcharka.jpg'],
        similar: { 'алабай': 50, 'леонбергер': 50, 'тибет': 50, 'карабаш': 50 }
    },
    {
        id: 'алабай',
        name: 'среднеазиатская овчарка алабай',
        level: 2,
        images: ['https://cdn2.botanichka.ru/wp-content/uploads/2020/01/alabay-03.jpg','https://images.techinsider.ru/upload/img_cache/087/087531f672eb3a7d6a435904f48f0112_cropped_510x287.webp'],
        similar: { 'кавказ': 50, 'кангал': 50, 'карабаш': 50, 'акбаш': 50 }
    },
    {
        id: 'тибет',
        name: 'тибетский мастиф',
        level: 2,
        images: ['https://yac-wh-sb-prod-s3-media-04001.storage.yandexcloud.net/db_connection/1/layer_item/1/articles/6193/wysiwig-img/%D1%82%D0%B8%D0%B1%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9-%D0%BC%D0%B0%D1%81%D1%82%D0%B8%D1%84.webp','https://tvoidrug.com/wp-content/uploads/2017/02/foto_137_7_300.jpg'],
        similar: { 'чау': 50, 'ньюфаундленд': 50, 'кавказ': 50, 'леонбергер': 50 }
    },
    {
        id: 'англмастиф',
        name: 'английский мастиф',
        level: 2,
        images: ['https://lapkins.ru/upload/iblock/5a7/n23o7g2zw5yg01unax28mwzwmcc7j77b.jpg'],
        similar: { 'бульмастиф': 50, 'немдог': 50, 'бордос': 50, 'канекорсо': 50 }
    },
    {
        id: 'бордос',
        name: 'бордоский дог',
        level: 2,
        images: ['https://static.tildacdn.com/tild3133-6365-4962-b538-316632373163/10007280_90170161318.jpg'],
        similar: { 'боксер': 50, 'бульмастиф': 50, 'англмастиф': 50, 'канекорсо': 50 }
    },
    {
        id: 'леонбергер',
        name: 'леонбергер',
        level: 2,
        images: ['https://upload.wikimedia.org/wikipedia/commons/e/ea/Grupp_2_LEONBERGER%2C_C.I.B._NO_V%26NORD_V-14_NO_V-15_NORD_UCH_SE_JV-13_SE_V-14_-15_Namupalan_Bling_Smack_Chap_%2824264081756%29.jpg'],
        similar: { 'кавказ': 50, 'ньюфаундленд': 50, 'сенбернар': 50, 'тибет': 50, 'дворняга': 50 }
    },
    {
        id: 'москсторожевая',
        name: 'московская сторожевая',
        level: 2,
        images: ['https://volumes.ru/wp-content/uploads/2024/12/moskauer-wachhund.webp','https://static.wikia.nocookie.net/dogopedyrussian/images/d/d6/Moscowwatchdog.png/revision/latest?cb=20191105150748&path-prefix=ru'],
        similar: { 'сенбернар': 50, 'кавказ': 50, 'алабай': 50, 'леонбергер': 50 }
    },
    {
        id: 'рпб',
        name: 'русская псовая борзая',
        level: 2,
        images: ['https://i.bigenc.ru/resizer/resize?sign=8L3lo0dOs8YbzDkDxflgJQ&filename=vault/62ce7ac1e1e6266ea7385a308eeb2f01.webp&width=1200','https://upload.wikimedia.org/wikipedia/commons/f/fb/%D0%91%D0%BE%D1%80%D0%B7%D1%8B%D0%B5.jpg','https://i.pinimg.com/1200x/b7/c7/5c/b7c75cacad9f8870072e678aa90fc53b.jpg'],
        similar: { 'афган': 50, 'тайган': 50, 'салюки': 50, 'силки': 50 }
    },
    {
        id: 'афган',
        name: 'афганская борзая',
        level: 2,
        images: ['https://zoopt.ru/upload/iblock/f25/borzaya_m.png','https://storage-api.petstory.ru/resize/0x0x80/3f/c8/65/3fc865ba483d43cfb73086e7ffc0f7ab.jpeg'],
        similar: { 'тазы': 50, 'салюки': 50, 'тайган': 50, 'бакхмуль': 50 }
    },
    {
        id: 'грейхаунд',
        name: 'грейхаунд',
        level: 2,
        images: ['https://hvost.news/upload/resize_cache/iblock/639/750_400_1/6394a2f4526e49e1caf4c932069337c1.jpg','https://storage-api.petstory.ru/resize/0x0x80/c9/03/36/c90336f9db5f4b19bfb3b561f5068c96.jpeg'],
        similar: { 'уиппет': 50, 'левретка': 50, 'ибиценко': 50, 'гальго': 50 }
    },
    {
        id: 'уиппет',
        name: 'уиппет',
        level: 2,
        images: ['https://royal-groom.ru/sites/default/files/breed/uippet.jpg','https://istoriyal.ru/wp-content/uploads/2011/02/21464217.jpg'],
        similar: { 'грейхаунд': 50, 'левретка': 50, 'бедлингтон': 50, 'гладфокс': 50 }
    },
    {
        id: 'левретка',
        name: 'левретка',
        level: 2,
        images: ['https://static.tildacdn.com/tild3865-3830-4139-b239-373433383164/923af1d0-09f5-4ef4-a.jpg','https://storage-api.petstory.ru/resize/0x0x70/64/8e/17/648e1719902a46b982d0149c020335a2.jpeg'],
        similar: { 'уиппет': 50, 'тойтерьер': 50, 'грейхаунд': 50, 'чирнеко': 50 }
    },
    {
        id: 'волкодав',
        name: 'ирландский волкодав',
        level: 2,
        images: ['https://catfishes.ru/wp-content/uploads/2021/06/irlvolk3.jpg','https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Irish_wolfhound_giaccomo.JPG/1200px-Irish_wolfhound_giaccomo.JPG'],
        similar: { 'дирхаунд': 50, 'немдог': 50, 'ризен': 50, 'рчт': 50 }
    },
    {
        id: 'бостон',
        name: 'бостон терьер',
        level: 2,
        images: ['https://upload.wikimedia.org/wikipedia/commons/f/fe/BOSTON_TERRIER%2C_Ving%C3%A5rdens_Essi_von_Richards_%2823995273800%29.2.jpg'],
        similar: { 'фрбульдог': 50, 'мопс': 50, 'боксер': 50, 'стафф': 50 }
    },
    {
        id: 'стаффбуль',
        name: 'стаффордширский бультерьер',
        level: 2,
        images: ['https://static.tildacdn.com/tild3261-3861-4630-b836-326639393537/Lawstaff_Ulysses.jpg','https://sun9-80.userapi.com/impg/9eBNTmXrEicjBYphqbN54Gzh8hnP83oEjXtELA/j9VTu6Gl154.jpg?size=600x600&quality=95&sign=e38e6d3b2b72331751982012659b1e85&type=album'],
        similar: { 'стафф': 50, 'питбуль': 50, 'буль': 50, 'булли': 50 }
    },
    {
        id: 'скотч',
        name: 'скотч терьер',
        level: 2,
        images: ['https://lapkins.ru/upload/iblock/7ec/7ec63f9afc6b7a0134c816158bb73f94.jpg','https://zoopt.ru/upload/webp/resize_cache/9a6/1148_560_1/cd42ec9a570ffa239ac7fd7ce61b7bed.webp'],
        similar: { 'вести': 50, 'керн': 50, 'цверг': 50, 'норвич': 50 }
    },
    {
        id: 'керн',
        name: 'керн терьер',
        level: 2,
        images: ['https://zoohome.ru/wp-content/uploads/2022/01/kern-terer-glavnaya.jpg'],
        similar: { 'вест': 50, 'скотч': 50, 'норвич': 50, 'йорк': 50 }
    },
    {
        id: 'жестфокс',
        name: 'жесткошерстный фокстерьер',
        level: 2,
        images: ['https://pitomec.online/upload/shop_55/5/1/5/item_51547/item_image51547.jpg','https://www.ekzotika.com/ekzotika_img/dogs/33.jpg'],
        similar: { 'дрт': 50, 'гладфокс': 50, 'лейкленд': 50, 'прт': 50 }
    },
    {
        id: 'бедлингтон',
        name: 'бедлингтон терьер',
        level: 2,
        images: ['https://lapkins.ru/upload/iblock/d55/d55a54c26bd52e36eb1ca92071640832.jpg'],
        similar: { 'српудель': 50, 'уиппет': 50, 'дендидимонт': 50, 'керриблю': 50 }
    },
    {
        id: 'пшеничник',
        name: 'ирландский мягкошерстный пшеничный терьер',
        level: 2,
        images: ['https://zoonika.com/wp-content/uploads/2023/02/irlandskiy-myagkoshyorstnyy-pshenichnyy-terer-opisanie.jpg'],
        similar: { 'керриблю': 50, 'эрдель': 50, 'болпудель': 50, 'ризен': 50 }
    },
    {
        id: 'басенджи',
        name: 'басенджи',
        level: 2,
        images: ['https://s0.rbk.ru/v6_top_pics/media/img/8/69/347213823717698.webp','https://storage.yandexcloud.net/yac-wh-sb-prod-s3-media-03005/uploads/breed/files/8ff2d9849291714475f1ead46fa8b461.webp'],
        similar: { 'сиба': 50, 'тайскийриджбек': 50, 'цвергпинчер': 50, 'фараон': 50 }
    },
    {
        id: 'гриффон',
        name: 'брюссельский гриффон',
        level: 2,
        images: ['https://storage-api.petstory.ru/4d/f7/7d/4df77d778c6d4bd2aeb4a8be10ae0f76.jpeg'],
        similar: { 'мопс': 50, 'аффенпинчер': 50, 'шитцу': 50, 'брабансон': 50 }
    },
    {
        id: 'хин',
        name: 'японский хин',
        level: 2,
        images: ['https://images.prismic.io/doge/6438f5bb-2f71-4a6b-83da-d230f41638ec_yaponskiy_hin_6.jpg?auto=compress,format&rect=20,0,541,541&w=456&h=456'],
        similar: { 'пекинес': 50, 'папильон': 50, 'кавалер': 50, 'фален': 50 }
    },
    {
        id: 'лхаса',
        name: 'лхаса апсо',
        level: 2,
        images: ['https://tutknow.ru/uploads/posts/2017-04/1491735733_lhasa-apso-pravila-uhoda-i-soderzhaniya-psa.jpg'],
        similar: { 'шитцу': 50, 'мальтезе': 50, 'гаванез': 50, 'тибеттерьер': 50 }
    },
    {
        id: 'кеесхонд',
        name: 'кеесхонд',
        level: 2,
        images: ['https://egida.by/_pu/6/78076599.jpg'],
        similar: { 'якут': 50, 'чау': 50, 'самоед': 50, 'евразиер': 50 }
    },
    {
        id: 'япшпиц',
        name: 'японский шпиц',
        level: 2,
        images: ['https://s3.pet-yes.com/BreedPhotos/f96d40026bbd67bccb0de2704310c609.jpeg'],
        similar: { 'самоед': 50, 'пом': 50, 'вольпино': 50, 'эскимосс': 50 }
    },
    {
        id: 'бобтейл',
        name: 'бобтейл',
        level: 2,
        images: ['https://cs14.pikabu.ru/post_img/big/2023/12/21/7/1703154421162186918.png'],
        similar: { 'бриар': 50, 'южак': 50, 'бородатыйколли': 50, 'комондор': 50 }
    },
    {
        id: 'пиреней',
        name: 'пиренейская горная собака',
        level: 2,
        images: ['https://santreyd.ru/upload/iblock/011/0118b73f489be6560e35455304cf3703.jpg','https://thumbs.dreamstime.com/b/%D0%BF%D0%B8%D1%80%D0%B5%D0%BD%D0%B5%D0%B9%D1%81%D0%BA%D0%B0%D1%8F-%D0%B3%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B9-%D0%BF%D0%B8%D1%80%D0%B5%D0%BD%D0%B5%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D0%BF%D1%91%D1%81-%D0%B2-%D0%B3%D0%BE%D1%80%D0%BD%D0%BE%D0%BC-274436066.jpg'],
        similar: { 'кувас': 50, 'маремма': 50, 'акбаш': 50, 'самоед': 50 }
    },
    {
        id: 'коллидш',
        name: 'колли длинношерстный',
        level: 2,
        images: ['https://www.ekzotika.com/ekzotika_img/dogs/47.jpg','https://storage-api.petstory.ru/c6/f1/93/c6f1937e459445aaa6d2451b9fa9114f.jpeg'],
        similar: { 'шелти': 50, 'бордер': 50, 'аусси': 50, 'борзая': 50, 'дворняга': 50 }
    },
    {
        id: 'спрингер',
        name: 'английский спрингер спаниель',
        level: 2,
        images: ['https://www.spanielimooir.org/wp-content/uploads/2017/01/EnglishSpringerSpaniel_004.jpg'],
        similar: { 'кокер': 50, 'бретон': 50, 'сеттер': 50, 'вахтельхунд': 50 }
    },
    {
        id: 'бордер',
        name: 'бордер колли',
        level: 2,
        images: ['https://storage.yandexcloud.net/yac-wh-sb-prod-s3-media-03005/uploads/breed/12.09.24/Shutterstock_2265495145-min.webp','https://dogzilla.ru/wp-content/uploads/2019/02/border-kolli-2-e1612793914442.jpg','https://sobakovod.club/uploads/posts/2021-11/1636565045_5-sobakovod-club-p-sobaki-border-kolli-shokoladnii-okras-5.jpg'],
        similar: { 'аусси': 50, 'кули': 50, 'коллигш': 50, 'хаски': 50, 'дворняга': 50, 'якут': 50 }
    },
    {
        id: 'аусси',
        name: 'аусси, австралийская овчарка',
        level: 2,
        images: ['https://api.zapovednik96.ru/upload/iblock/f0e/shutterstock_2423372331.jpg','https://fotkiflo.ru/wp-content/uploads/aussi-avstraliiskaia-ovcharka-61.webp'],
        similar: { 'бордер': 50, 'кули': 50, 'якут': 50, 'пом': 50, 'самоед': 50, 'дворняга': 50 }
    },
    {
        id: 'самоед',
        name: 'самоед',
        level: 2,
        images: ['https://zooclub.ru/attach/58000/58828.jpg','https://e-plus.media/wp-content/uploads/2022/08/istock-525448661-1024x804.jpg'],
        similar: { 'якут': 50, 'маламут': 50, 'хаски': 50, 'эскимосс': 50, 'гренка': 50 }
    },
    {
        id: 'берн',
        name: 'бернский зенненхунд',
        level: 2,
        images: ['https://animaljournal.ru/articles/pets/dogs/bernskiy_zennenhund/bernskiy_zennenhund.jpg'],
        similar: { 'аппенцеллер': 50, 'энтлебухер': 50, 'болзеннен': 50, 'доберман': 50, 'ротвейлер': 50 }
    },
    {
        id: 'англбульдог',
        name: 'английский бульдог',
        level: 2,
        images: ['https://cs14.pikabu.ru/post_img/big/2022/03/06/6/1646553738159525869.png'],
        similar: { 'фрбульдог': 50, 'бостон': 50, 'мопс': 50, 'булли': 50 }
    },
    {
        id: 'боксер',
        name: 'боксер',
        level: 2,
        images: ['https://lapkins.ru/upload/iblock/ffc/ffc4dbf4edf57c3cdfe0efb91216e6d1.jpg'],
        similar: { 'поинтер': 50, 'доберман': 50, 'русспеггончая': 50 }
    },
    {
        id: 'шарпей',
        name: 'шарпей',
        level: 2,
        images: ['https://mepet.ru/photo/breed/159480931968.jpg','https://zoonika.com/wp-content/uploads/2023/02/sharpey-opisanie.jpg'],
        similar: { 'чау': 50, 'доса': 50, 'тоса': 50 }
    },
    {
        id: 'далматин',
        name: 'далматин',
        level: 2,
        images: ['https://www.bethowen.ru/upload/medialibrary/dd5/dd53f5a249cea964ea16102c6b163ea5.jpg','https://i.pinimg.com/564x/0f/a5/c4/0fa5c441ade6600da6b069a8c208c437.jpg'],
        similar: { 'поинтер': 50, 'англсеттер': 50 }
    },
    {
        id: 'бассетхаунд',
        name: 'бассетхаунд',
        level: 2,
        images: ['https://hvost.news/upload/medialibrary/b60/b60e5bb92a25c02c6537eaab7789a239.jpg'],
        similar: { 'такса': 50, 'древер': 50, 'бигль': 50 }
    },
    {
        id: 'веймаранер',
        name: 'веймаранер',
        level: 2,
        images: ['https://kinpet.ru/upload/resize_cache/uf/435/hsucuxj2tu7l7z9ev2mhqvy9nct533yt/405_380_2/shutterstock_1678642684.jpg','https://hvost.news/upload/medialibrary/c70/c70ac40769fe66534b2283fc00e0c840.jpg'],
        similar: { 'выжла': 50, 'курцхаар': 50, 'дратхаар': 50 }
    },
    {
        id: 'курцхаар',
        name: 'курцхаар',
        level: 2,
        images: ['https://resizer.mail.ru/p/56e4b097-8af2-5458-9279-fc6e8c561f79/AQAOsLjd1U7yPr5tr9MP88B2e8DdfhsLlGq2jGPEVEN153phTiP2oatljpnD4sqIhQjBbCodRUuQ0BCB5P3Vl8TEJ94.jpg'],
        similar: { 'дратхаар': 50, 'выжла': 50, 'веймаранер': 50 }
    },
    {
        id: 'дратхаар',
        name: 'дратхаар',
        level: 2,
        images: ['https://storage-api.petstory.ru/resize/0x0x70/cb/c9/cc/cbc9cc0d378547228e798bc66abd7468.jpeg'],
        similar: { 'выжла': 50, 'курцхаар': 50, 'дворняга': 50 }
    },

    // === УРОВЕНЬ 3 (Дополнительные: Лайки, Овчарки, Гончие, Борзые и др.) ===
    // --- БЕЛЬГИЙСКИЕ ОВЧАРКИ ---
    {
        id: 'грюнендаль',
        name: 'бельгийская овчарка грюнендаль',
        level: 3,
        images: ['https://for-pet.ru/wp-content/uploads/2020/04/ris.2.-chernaja-belgijskaja-ovcharka.jpg','https://s0.rbk.ru/v6_top_pics/resized/960xH/media/img/4/51/347325383796514.webp'],
        similar: { 'тервюрен': 50, 'малинуа': 50, 'бшо': 50, 'немец': 50 }
    },
    {
        id: 'тервюрен',
        name: 'бельгийская овчарка тервюрен',
        level: 3,
        images: ['https://www.purina.ru/sites/default/files/styles/ttt_image_930/public/2021-02/BREED%20Hero%20Mobile_0166_belgian_shepherd_tervueren.webp?itok=rWdPcd-j','https://egida.by/_pu/4/38779364.jpg'],
        similar: { 'грюнендаль': 50, 'малинуа': 50, 'коллидш': 50, 'дворняга': 50 }
    },
    {
        id: 'лакенуа',
        name: 'бельгийская овчарка лакенуа',
        level: 3,
        images: ['https://cdn.tvaryny.com/wp-content/uploads/2014/10/laekenois-dog.jpeg','https://egida.by/_pu/6/95444295.jpg'],
        similar: { 'малинуа': 50, 'пикардийская': 50, 'болпудель': 50 }
    },

    // --- ЛАЙКИ И ШПИЦЫ ---
    {
        id: 'якут',
        name: 'якутская лайка',
        level: 3,
        images: ['https://i.pinimg.com/1200x/7d/41/49/7d41492662a010aca5bdc7b0f2ea209b.jpg','https://sobakovod.club/uploads/posts/2021-11/thumbs/1637873972_1-sobakovod-club-p-sobaki-yakutskaya-laika-okrasi-1.jpg','https://storage-api.petstory.ru/c1/3f/fc/c13ffca5bf674448b9d2fd22ee92efab.jpeg'],
        similar: { 'самоед': 50, 'хаски': 50, 'маламут': 50, 'аусси': 50, 'бордер': 50 }
    },
    {
        id: 'зсл',
        name: 'западно-сибирская лайка',
        level: 3,
        images: ['https://мосохота.рф/25754-large_default/zapadno-sibirskaya-lajka-rossiya.jpg','https://volumes.ru/wp-content/uploads/2024/04/west-siberian-laika.webp'],
        similar: { 'всл': 50, 'рел': 50, 'дворняга': 50 }
    },
    {
        id: 'всл',
        name: 'восточно-сибирская лайка',
        level: 3,
        images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Eastsiberianlaika.JPG/1280px-Eastsiberianlaika.JPG','https://yac-wh-sb-prod-s3-media-04001.storage.yandexcloud.net/db_connection/1/layer_item/1/articles/6346/wysiwig-img/FD_IMG_4911.tif'],
        similar: { 'зсл': 50, 'рел': 50, 'хаски': 50, 'дворняга': 50, 'медвежья': 50 }
    },
    {
        id: 'рел',
        name: 'русско-европейская лайка',
        level: 3,
        images: ['https://catfishes.ru/wp-content/uploads/2021/06/ruslaika1.jpg'],
        similar: { 'карелка': 50, 'зсл': 50, 'всл': 50, 'медвежья': 50 }
    },
    {
        id: 'карелка',
        name: 'карельская лайка, карело-финская лайка',
        level: 3,
        images: ['https://hvost.news/upload/medialibrary/48d/48d96e554657cd7282ae4abaa1ca1840.jpg'],
        similar: { 'рел': 50, 'сиба': 50, 'лис': 50, 'дворняга': 50 }
    },
    {
        id: 'норвэлкхаунд',
        name: 'норвежский элкхаунд',
        level: 3,
        images: ['https://kisapes.ru/wp-content/uploads/2022/01/norwegian-elkhound-06.jpg'],
        similar: { 'шведхунд': 50, 'зсл': 50, 'кеесхонд': 50, 'дворняга': 50 }
    },
    {
        id: 'шикоку',
        name: 'шикоку',
        level: 3,
        images: ['https://lapkins.ru/upload/iblock/b26/73lx57h4w451wqw0qdhv962y4mpmexwr.jpg'],
        similar: { 'сиба': 50, 'акита': 50, 'кайкен': 50 }
    },
    {
        id: 'кайкен',
        name: 'кай (кай кен)',
        level: 3,
        images: ['https://kisapes.ru/wp-content/uploads/2023/10/kai-ken-12.jpg','https://i0.wp.com/kaisociety.org/wp-content/uploads/2023/05/DSC0850-1-scaled.jpg?resize=1536%2C1015&ssl=1'],
        similar: { 'шикоку': 50, 'акита': 50, 'хердер': 50 }
    },
    {
        id: 'кликай',
        name: 'аляскинский кли-кай',
        level: 3,
        images: ['https://lapkins.ru/upload/resize_cache/iblock/634/412_2150_1/6341cb687fb112aa70a4c300c30555fc.jpg','https://sobakovod.club/uploads/posts/2021-12/thumbs/1638895668_1-sobakovod-club-p-sobaki-poroda-kli-kai-1.png'],
        similar: { 'хаски': 50, 'пом': 50, 'маламут': 50, 'помски': 50 }
    },

    // --- ПАСТУШЬИ И ОХРАННЫЕ (МАРЕММЫ И ПОХОЖИЕ) ---
    {
        id: 'маремма',
        name: 'маремма-абруцкая овчарка',
        level: 3,
        images: ['https://sobakovod.club/uploads/posts/2021-12/thumbs/1639033469_1-sobakovod-club-p-sobaki-poroda-sobak-maremma-1.jpg'],
        similar: { 'кувас': 50, 'пиреней': 50, 'чувач': 50, 'алабай': 50 }
    },
    {
        id: 'кувас',
        name: 'венгерский кувас',
        level: 3,
        images: ['https://s9.stc.all.kpcdn.net/family/wp-content/uploads/2022/05/kuvas-960x540-1-960x540.jpg'],
        similar: { 'маремма': 50, 'комондор': 50, 'чувач': 50, 'пиреней': 50 }
    },
    {
        id: 'комондор',
        name: 'комондор',
        level: 3,
        images: ['https://www.purinaone.ru/sites/default/files/styles/image_992/public/2023-12/%D0%9A%D0%BE%D0%BC%D0%BE%D0%BD%D0%B4%D0%BE%D1%801_0.webp?itok=pzxxw_Xo'],
        similar: { 'пули': 50, 'южак': 50, 'бергамаско': 50 }
    },
    {
        id: 'кангал',
        name: 'кангал',
        level: 3,
        images: ['http://static.baubau.bg/resources/kangal.jpg','https://i.pinimg.com/1200x/f4/2d/f5/f42df50d72a3a777eef1d717aa9008a1.jpg'],
        similar: { 'алабай': 50, 'акбаш': 50, 'пиреней': 50, 'дворняга': 50 }
    },
    {
        id: 'акбаш',
        name: 'акбаш',
        level: 3,
        images: ['https://i.pinimg.com/1200x/87/5f/c4/875fc49abb07e290b14485f458ae8a63.jpg'],
        similar: { 'кангал': 50, 'алабай': 50, 'кувас': 50 }
    },
    {
        id: 'подгалян',
        name: 'польская подгалянская овчарка',
        level: 3,
        images: ['https://hvost.news/upload/resize_cache/iblock/b38/750_400_1/pol_skaja_podgaljanskaja_ovcharka.jpg'],
        similar: { 'чувач': 50, 'маремма': 50, 'кувас': 50 }
    },
    {
        id: 'южак',
        name: 'южнорусская овчарка',
        level: 3,
        images: ['https://s3.animalia.bio/pets/animals/photos/full/1x1/4Kfx4LWBaQENVXhwnWldDpFZ4DP9yGm3LNHDR1sK.webp?id=9c46d7e2a9d5202664bc8ae63b4020dd'],
        similar: { 'бобтейл': 50, 'комондор': 50, 'маремма': 50 }
    },
    {
        id: 'шарпланинац',
        name: 'шарпланинац',
        level: 3,
        images: ['https://media.dog-learn.com/images/sarplaninac-sz4.jpg'],
        similar: { 'кавказ': 50, 'крашки': 50, 'леонбергер': 50 }
    },
    {
        id: 'ховаварт',
        name: 'ховаварт',
        level: 3,
        images: ['https://kisapes.ru/wp-content/uploads/2022/04/hovawart-10.jpg','https://www.fci.be/Nomenclature/Illustrations/190g02.jpg'],
        similar: { 'голден': 50, 'прямретривер': 50, 'леонбергер': 50 }
    },
    {
        id: 'босерон',
        name: 'босерон',
        level: 3,
        images: ['https://caomaradagem.pt/wp-content/uploads/2024/11/Beauceron_uros_cropped-1024x787.jpg','https://i0.wp.com/wildfire-kennels.com/wp-content/uploads/2022/07/HarlequinBeauceron2.jpg?fit=768%2C512&ssl=1'],
        similar: { 'доберман': 50, 'ротвейлер': 50, 'дворняга': 50 }
    },
    {
        id: 'бриар',
        name: 'бриар',
        level: 3,
        images: ['https://old.bigenc.ru/media/2016/10/27/1235157047/4026.jpg'],
        similar: { 'бобтейл': 50, 'южак': 50 }
    },
    {
        id: 'хилер',
        name: 'австралийский хилер',
        level: 3,
        images: ['https://storage-api.petstory.ru/31/ba/55/31ba552b16814c57b012c5691580e081.jpeg'],
        similar: { 'аусси': 50, 'келпи': 50, 'бордер': 50, 'кули': 50 }
    },

    // --- БОРЗЫЕ (SIGHTHOUNDS) ---
    {
        id: 'салюки',
        name: 'салюки',
        level: 3,
        images: ['https://dogzilla.ru/wp-content/uploads/2021/02/481px-jidu_wikemedia.jpg'],
        similar: { 'афган': 50, 'тазы': 50, 'тайган': 50, 'рпб': 50 }
    },
    {
        id: 'азавак',
        name: 'азавак',
        level: 3,
        images: ['https://cs12.pikabu.ru/post_img/big/2022/05/22/7/165321791017541096.jpg'],
        similar: { 'слюги': 50, 'ибиценко': 50, 'грейхаунд': 50 }
    },
    {
        id: 'слюги',
        name: 'слюги',
        level: 3,
        images: ['https://mypets.kz/wp-content/uploads/2020/09/slyugi3-1200x800.jpg'],
        similar: { 'хортая': 50, 'салюки': 50, 'чиппипарай': 50, 'раджапалайам': 50 }
    },
    {
        id: 'гальго',
        name: 'испанский гальго',
        level: 3,
        images: ['https://i.ytimg.com/vi/Y_FWHvYMvuw/maxresdefault.jpg'],
        similar: { 'грейхаунд': 50, 'ибиценко': 50, 'слюги': 50, 'уиппет': 50 }
    },
    {
        id: 'дирхаунд',
        name: 'дирхаунд',
        level: 3,
        images: ['https://natureworld.ru/breeds_dog/deerhound_01.jpg'],
        similar: { 'волкодав': 50, 'стагхаунд': 50 }
    },
    {
        id: 'тазы',
        name: 'тазы',
        level: 3,
        images: ['https://astanatv.kz/cache/imagine/1200/uploads/article/2025/8/10/6898ab3064170769760634.jpg'],
        similar: { 'салюки': 50, 'тайган': 50, 'рпб': 50, 'шаньси': 50 }
    },
    {
        id: 'тайган',
        name: 'тайган, киргизская борзая',
        level: 3,
        images: ['https://egida.by/_pu/4/44764525.jpg'],
        similar: { 'салюки': 50, 'тазы': 50, 'бакхмуль': 50, 'шаньси': 50 }
    },
    {
        id: 'хортая',
        name: 'хортая борзая',
        level: 3,
        images: ['https://kisapes.ru/wp-content/uploads/2024/08/chortai-07.jpg'],
        similar: { 'харт': 50, 'уиппет': 50, 'мадьяр': 50, 'мудхол': 50 }
    },
    {
        id: 'фараон',
        name: 'фараонова собака',
        level: 3,
        images: ['https://kisapes.ru/wp-content/uploads/2022/04/pharaoh-sobaka-01.jpg'],
        similar: { 'чирнеко': 50, 'ибиценко': 50, 'канарион': 50 }
    },
    {
        id: 'чирнеко',
        name: 'чирнеко дель этна',
        level: 3,
        images: ['https://s14.stc.all.kpcdn.net/family/wp-content/uploads/2022/07/chirneko-del-ehtna-sobaka-725-483-1.jpg'],
        similar: { 'фараон': 50, 'левретка': 50, 'ибиценко': 50 }
    },

    // --- ГОНЧИЕ (SCENTHOUNDS) ---
    {
        id: 'русгончая',
        name: 'русская гончая',
        level: 3,
        images: ['https://i.bigenc.ru/resizer/resize?sign=v4yOnAS7QcBBLT57orx2fg&filename=vault/b979bf5b17f9617c9bb308555252d408.webp&width=1200'],
        similar: { 'русспеггончая': 50, 'эстонка': 50, 'дворняга': 50 }
    },
    {
        id: 'русспеггончая',
        name: 'русская пегая гончая',
        level: 3,
        images: ['https://rus.team/images/article/81114/1737405938-hcwpj.webp'],
        similar: { 'русгончая': 50, 'фоксхаунд': 50 }
    },
    {
        id: 'эстонка',
        name: 'эстонская гончая',
        level: 3,
        images: ['https://tvoidrug.com/wp-content/uploads/2017/02/foto_201_3_600.jpg'],
        similar: { 'бигль': 50, 'русгончая': 50 }
    },
    {
        id: 'бассетгриффон',
        name: 'малый вандейский бассет-гриффон',
        level: 3,
        images: ['https://www.petshealth.ru/upload/medialibrary/17e/17e43bef758d1a7f3f3dfa3e847c679e.jpg'],
        similar: { 'бассетхаунд': 50, 'дрт': 50 }
    },
    {
        id: 'порселен',
        name: 'порселен, фарфоровая гончая',
        level: 3,
        images: ['https://storage-api.petstory.ru/07/a0/ba/07a0bad43da248c2af0aa4f69c5df0b1.jpeg'],
        similar: { 'эстонка': 50, 'далматин': 50 }
    },
    {
        id: 'баварская',
        name: 'баварская горная гончая',
        level: 3,
        images: ['https://resizer.mail.ru/p/9ee5b0fc-c485-5771-a602-7e0be63cd1d8/AQAOXjUyY71aXRygHPBCsMpu4O1lzI2c-Gn6zjS1bj2t_f-uFoeimW_54kMAqh-0XeVetZ_q1oEkxzQ86ypbo_ARvzY.jpg'],
        similar: { 'риджбек': 50, 'выжла': 50 }
    },
    {
        id: 'фоксхаунд',
        name: 'английский фоксхаунд',
        level: 3,
        images: ['https://natureworld.ru/breeds_dog/english_foxhound_03.jpg'],
        similar: { 'русспеггончая': 50, 'бигль': 50 }
    },
    {
        id: 'оттерхаунд',
        name: 'оттерхаунд',
        level: 3,
        images: ['https://cs14.pikabu.ru/post_img/big/2022/11/04/10/166758014815714111.png'],
        similar: { 'бладхаунд': 50, 'спиноне': 50, 'дворняга': 50 }
    },

    // --- ТЕРРЬЕРЫ И ПИНЧЕРЫ (Недостающие популярные) ---
    {
        id: 'цвергпинчер',
        name: 'цвергпинчер',
        level: 3,
        images: ['https://resizer.mail.ru/p/f34704e7-d603-50fb-bcf3-c54d80df1663/AQAO4cvmtCXCeYh7bT5O0eZazbxeuPYw34za7D8t2qV5UOz4cEYxhdMkD2LHvGx6SVEi_ijfzf0_ev9Sf7xYQBi0EMU.jpg'],
        similar: { 'той': 50, 'доберман': 50, 'немпинчер': 50 }
    },
    {
        id: 'немпинчер',
        name: 'немецкий пинчер',
        level: 3,
        images: ['https://kisapes.ru/wp-content/uploads/2022/10/german-pinscher-04.jpg'],
        similar: { 'доберман': 50, 'цвергпинчер': 50 }
    },
    {
        id: 'бордертерьер',
        name: 'бордер-терьер',
        level: 3,
        images: ['https://zoogalaktika.ru/assets/images/pets/canis-familiaris/border-teryer.jpeg'],
        similar: { 'керн': 50, 'норвич': 50 }
    },
    {
        id: 'норвич',
        name: 'норвич-терьер',
        level: 3,
        images: ['https://storage.yandexcloud.net/yac-wh-sb-prod-s3-media-03005/uploads/breed/712/712.webp'],
        similar: { 'норфолк': 50, 'керн': 50 }
    },
    {
        id: 'норфолк',
        name: 'норфолк-терьер',
        level: 3,
        images: ['https://www.norwich-terrier.su/image/catalog/articles/kern_and_norfolk/norfolk_1200px.jpg'],
        similar: { 'норвич': 50, 'керн': 50 }
    },
    {
        id: 'ягдтерьер',
        name: 'немецкий ягдтерьер',
        level: 3,
        images: ['https://egida.by/_pu/5/87161895.jpg','https://lapkins.ru/upload/iblock/65a/65aef96695c875239f924019e65dc62d.jpg'],
        similar: { 'жестфокс': 50, 'доберман': 50, 'цвергпинчер': 50 }
    },
    {
        id: 'керриблю',
        name: 'керри-блю-терьер',
        level: 3,
        images: ['https://yac-wh-sb-prod-s3-media-04001.storage.yandexcloud.net/db_connection/1/layer_item/1/articles/6260/wysiwig-img/26087066_m_normal_none.webp'],
        similar: { 'эрдель': 50, 'цверг': 50, 'пшеничник': 50 }
    },
    {
        id: 'парсон',
        name: 'парсон-рассел-терьер',
        level: 3,
        images: ['https://lapkins.ru/upload/iblock/eab/eab5202f4fc862a7de2360b509712e2f.jpg','https://fs.pet-yes.com/article/photo/2023-12-13/018c631f-e162-73a1-a68d-51eefa8f25db.jpg'],
        similar: { 'дрт': 50, 'гладфокс': 50, 'жестфокс': 50 }
    },

    // === УРОВЕНЬ 4 (Эксперт / Редкие / Специальные) ===
    {
        id: 'вео',
        name: 'восточно-европейская овчарка',
        level: 4,
        images: ['https://s10.stc.all.kpcdn.net/family/wp-content/uploads/2022/07/vostochnoevropejskaya-ovcharka-725-3.jpg'],
        similar: { 'немец': 50, 'малинуа': 50, 'бшо': 50, 'дворняга': 50 }
    },
    {
        id: 'крысарик',
        name: 'пражский крысарик',
        level: 4,
        images: ['https://daylapu.ru/sobakovodstvo/poroda/photo/prazhskiy_krisarik_(ratlik).jpg'],
        similar: { 'той': 50, 'чих': 50, 'цвергпинчер': 50 }
    },
    {
        id: 'булли',
        name: 'американский булли',
        level: 4,
        images: ['https://sun9-71.userapi.com/impg/oMv6oD6NQUqzC1zJvqgpJ_KMTFv8Kg_FEr1-5Q/Aesw2LZBlu4.jpg?size=2560x1653&quality=96&sign=85914617f0f03451274cfe12cbb93108&type=album','https://sobakovod.club/uploads/posts/2021-12/1640599090_1-sobakovod-club-p-sobaki-sobaka-ekzot-bulli-1.jpg'],
        similar: { 'питбуль': 50, 'стафф': 50, 'амстафф': 50, 'англбульдог': 50 }
    },
    {
        id: 'минибуль',
        name: 'миниатюрный бультерьер',
        level: 4,
        images: ['https://s14.stc.all.kpcdn.net/family/wp-content/uploads/2022/07/miniatyurnyj-bulterer-sobaka-725-483-2.jpg'],
        similar: { 'питбуль': 50, 'стаффбуль': 50, 'стафф': 50 }
    },
    {
        id: 'русспаник',
        name: 'русский охотничий спаниель',
        level: 4,
        images: ['https://zoonika.com/wp-content/uploads/2024/02/russkiy-ohotnichie-spaniel-poroda.jpeg'],
        similar: { 'англкокер': 50, 'амкокер': 50, 'спрингер': 50, 'вахтельхунд': 50 }
    },
    {
        id: 'аффенпинчер',
        name: 'аффенпинчер',
        level: 4,
        images: ['https://storage-api.petstory.ru/bd/bd/83/bdbd83780abc4959a0a1f2b38ae3f773.jpeg'],
        similar: { 'гриффон': 50, 'цвергшнауцер': 50, 'гриффон': 50, 'дворняга': 50 }
    },
    {
        id: 'брабансон',
        name: 'пти-брабансон',
        level: 4,
        images: ['https://usatiki.ru/wp-content/uploads/2017/08/pti-brabanson-4.jpg.webp'],
        similar: { 'гриффон': 50, 'мопс': 50, 'той': 50 }
    },
    {
        id: 'тибеттерьер',
        name: 'тибетский терьер',
        level: 4,
        images: ['https://kinpet.ru/upload/resize_cache/uf/0b5/itm1ih527sp5b9b8andportryzv8ao6t/405_380_2/297_405_380.jpg'],
        similar: { 'лхаса': 50, 'шитцу': 50, 'бобтейл': 50 }
    },
    {
        id: 'эскимосс',
        name: 'американский эскимосский шпиц',
        level: 4,
        images: ['https://i.pinimg.com/736x/a7/7d/4c/a77d4cacbbd4cd0930fd827b45fa6ea0.jpg'],
        similar: { 'самоед': 50, 'немшпиц': 50, 'япшпиц': 50, 'вольпино': 50 }
    },
    {
        id: 'гренка',
        name: 'гренландская собака',
        level: 4,
        images: ['https://kisapes.ru/wp-content/uploads/2022/07/greenland-dog-14.jpg','https://kisapes.ru/wp-content/uploads/2022/07/greenland-dog-06.jpg','https://zoonika.com/wp-content/uploads/2023/02/grenlandskaya-sobaka-opisanie-1-e1697458217447.jpg'],
        similar: { 'самоед': 50, 'маламут': 50, 'хаски': 50 }
    },
    {
        id: 'аппенцеллер',
        name: 'аппенцеллер зенненхунд',
        level: 4,
        images: ['https://petglobals.com/imagesaver/form/big/6e6il7cycd2ku3mccdkh_1665812675.jpeg'],
        similar: { 'энтлебухер': 50, 'берн': 50, 'болзеннен': 50 }
    },
    {
        id: 'энтлебухер',
        name: 'энтлебухер зенненхунд',
        level: 4,
        images: ['https://catfishes.ru/wp-content/uploads/2021/06/enzen2.jpg'],
        similar: { 'аппенцеллер': 50, 'берн': 50, 'бигль': 50 }
    },
    {
        id: 'болзеннен',
        name: 'большой швейцарский зенненхунд',
        level: 4,
        images: ['https://storage-api.petstory.ru/fd/91/cc/fd91cce115d74756ae478ebb2da11fa1.jpeg'],
        similar: { 'берн': 50, 'аппенцеллер': 50, 'ротвейлер': 50 }
    },
    {
        id: 'тоса',
        name: 'тоса-ину',
        level: 4,
        images: ['https://images.prismic.io/doge/7db525e4-4df8-46a3-96cb-435321be79c9_2727e93afcc408906c717ac7b41a4e17.jpg?auto=compress,format'],
        similar: { 'доса': 50, 'шарпей': 50, 'бульмастиф': 50, 'канекорсо': 50 }
    },
    {
        id: 'доса',
        name: 'корейский мастиф, доса-ину',
        level: 4,
        images: ['https://i.pinimg.com/1200x/f8/7f/0e/f87f0e1fceee000c0a318d6fa304ce36.jpg'],
        similar: { 'тоса': 50, 'шарпей': 50, 'мастино': 50, 'бладхаунд': 50 }
    },
    {
        id: 'пикардийская',
        name: 'пикардийская овчарка',
        level: 4,
        images: ['https://kisapes.ru/wp-content/uploads/2022/11/berger-picard-08.jpg'],
        similar: { 'лакенуа': 50, 'бриар': 50, 'босерон': 50 }
    },
    {
        id: 'медвежья',
        name: 'карельская медвежья собака',
        level: 4,
        images: ['https://volumes.ru/wp-content/uploads/2023/11/karjalankarhukoira.webp'],
        similar: { 'рел': 50, 'всл': 50, 'зсл': 50 }
    },
    {
        id: 'вольпино',
        name: 'вольпино итальяно',
        level: 4,
        images: ['https://cdn.tvaryny.com/wp-content/uploads/2015/01/volpino-ap-0rhtuf-645.jpg'],
        similar: { 'япшпиц': 50, 'эскимосс': 50, 'пом': 50, 'немшпиц': 50 }
    },
    {
        id: 'кули',
        name: 'австралийский кули',
        level: 4,
        images: ['https://static.wixstatic.com/media/f1812a_f1179a6c6a8445f7ae6c7ceb133528e7~mv2.png/v1/fill/w_568,h_408,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f1812a_f1179a6c6a8445f7ae6c7ceb133528e7~mv2.png','https://i.pinimg.com/736x/85/49/f2/8549f2f3da3f66053ebaa58fd77aa5ad.jpg','https://i.pinimg.com/736x/65/1b/27/651b27a51c790c418691a8daa0960e10.jpg'],
        similar: { 'бордер': 50, 'аусси': 50, 'келпи': 50 }
    },
    {
        id: 'древер',
        name: 'древер',
        level: 4,
        images: ['https://guldog.ru/assets/server/post_images/12214/f50349ad51fd7f18cf6ce4e7c4439769-min.jpg'],
        similar: { 'такса': 50, 'бигль': 50, 'бассетхаунд': 50 }
    },
    {
        id: 'поинтер',
        name: 'английский поинтер',
        level: 4,
        images: ['https://lapkins.ru/upload/iblock/32c/32c67cd171158cc0cbfcb4df182e954b.jpg'],
        similar: { 'курцхаар': 50, 'англсеттер': 50, 'далматин': 50 }
    },
    {
        id: 'браккоитальано',
        name: 'бракко итальяно',
        level: 4,
        images: ['https://kinpet.ru/upload/resize_cache/uf/512/r1tz3eq0d8ehqedplfcvgmhgz5iqz4lc/405_380_2/382_405_380.jpg'],
        similar: { 'спиноне': 50, 'бладхаунд': 50, 'выжла': 50 }
    },
    {
        id: 'гленофимаал',
        name: 'глен-оф-имаал терьер',
        level: 4,
        images: ['https://i.pinimg.com/736x/ef/f8/44/eff8445395e588e9aa0cce948cd9d164.jpg'],
        similar: { 'вест': 50, 'керн': 50, 'ирландскийтерьер': 50 }
    },
    {
        id: 'лейкленд',
        name: 'лейкленд терьер',
        level: 4,
        images: ['https://i.bigenc.ru/resizer/resize?sign=2Taym-CfVXEy0rbL4eRcBg&filename=vault/42d23db8754f33703859d70efe4b88c1.webp&width=1200'],
        similar: { 'эрдель': 50, 'фокс': 50, 'вельштерьер': 50, 'жестфокс': 50 }
    },
    {
        id: 'спиноне',
        name: 'итальянский спиноне',
        level: 4,
        images: ['https://guldog.ru/assets/server/post_images/12214/b5752562e50f684187e20c37bd9c73af-min.jpg'],
        similar: { 'браккоитальано': 50, 'дратхаар': 50, 'гриффонкор': 50 }
    },
    {
        id: 'харт',
        name: 'польский харт',
        level: 4,
        images: ['https://cdn-images.vetstreet.com/09/fd8b10a7e711e0a0d50050568d634f/file/Chart-Polski-3-645mk070111.jpg'],
        similar: { 'грейхаунд': 50, 'хортая': 50, 'мадьяр': 50 }
    },
    {
        id: 'мадьяр',
        name: 'венгерская борзая, мадьяр-агар',
        level: 4,
        images: ['https://kisapes.ru/wp-content/uploads/2023/09/magyar-agar-04.jpg'],
        similar: { 'грейхаунд': 50, 'харт': 50, 'хортая': 50 }
    },
    {
        id: 'канарион',
        name: 'поденко канарио',
        level: 4,
        images: ['https://sobakovod.club/uploads/posts/2021-12/1639518358_2-sobakovod-club-p-sobaki-podenko-kanario-2.jpg','https://cdn.tvaryny.com/wp-content/uploads/2025/06/gallery-141460.jpg'],
        similar: { 'фараон': 50, 'ибиценко': 50, 'чирнеко': 50 }
    },
    {
        id: 'вахтельхунд',
        name: 'немецкий вахтельхунд',
        level: 4,
        images: ['https://kisapes.ru/wp-content/uploads/2021/09/vakhtelkhund-nemetskij-spaniel-02.jpg'],
        similar: { 'спрингер': 50, 'бретон': 50, 'кокер': 50, 'русспаник': 50 }
    },
    {
        id: 'перуанская',
        name: 'перуанская голая собака',
        level: 4,
        images: ['https://perusumaq.com/wp-content/uploads/2016/10/707a2-peruvianhairlessdog.jpg?w=685&h=514'],
        similar: { 'ксоло': 50, 'китай': 50, 'уиппет': 50 }
    },
    {
        id: 'портводсобака',
        name: 'португальская водяная собака',
        level: 4,
        images: ['https://egida.by/_pu/5/57465471.jpg'],
        similar: { 'водсобака': 50, 'пули': 50, 'барбет': 50, 'пудель': 50 }
    },
    {
        id: 'пули',
        name: 'пули',
        level: 4,
        images: ['https://yac-wh-sb-prod-s3-media-04001.storage.yandexcloud.net/db_connection/1/layer_item/1/articles/7246/wysiwig-img/ENCIKLOPEDIYA_DOG_2021_BOOK_II_all_AB_2024.jpg'],
        similar: { 'комондор': 50, 'бергамаско': 50, 'водсобака': 50 }
    },
    {
        id: 'рчт',
        name: 'русский черный терьер',
        level: 4,
        images: ['https://lapkins.ru/upload/iblock/916/916a9ba0a32f765b05f8a1e34b1d330a.jpg'],
        similar: { 'ризен': 50, 'эрдель': 50, 'бувье': 50, 'ньюф': 50 }
    },
    {
        id: 'бородатыйколли',
        name: 'бородатый колли',
        level: 4,
        images: ['https://images.prismic.io/doge/019adc34-ab4a-406f-a702-71766d39840f_borodatyy_kolli_4.jpg?auto=compress,format&rect=0,0,600,600&w=456&h=456'],
        similar: { 'бобтейл': 50, 'бриар': 50, 'польскаянизинная': 50, 'дворняга': 50 }
    },
    {
        id: 'шведхунд',
        name: 'шведский вальхунд',
        level: 4,
        images: ['https://kisapes.ru/wp-content/uploads/2023/03/swedish-vallhund-06.jpg'],
        similar: { 'пемброк': 50, 'норвэлкхаунд': 50, 'лайка': 50 }
    },
    {
        id: 'акита',
        name: 'акита-ину',
        level: 4,
        images: ['https://drougmagazine.ru/upload/resize_cache/iblock/901/413_265_2/901033256261bf00f3ec9869d9b7aa28.jpg','https://domashnij-zapovednik.com/wp-content/uploads/2019/01/tigrovye_akita_inu_1_02162510.jpg'],
        similar: { 'сиба': 50, 'шикоку': 50, 'амакита': 50, 'лайка': 50 }
    },
    {
        id: 'амакита',
        name: 'американская акита',
        level: 4,
        images: ['https://optim.tildacdn.com/tild6362-6337-4463-b061-326561346434/-/resize/600x/-/format/webp/w6R-jbWiAH8_1.jpg.webp','https://media.istockphoto.com/id/816366428/photo/dog-breed-american-akita.jpg?s=612x612&w=0&k=20&c=HDqnLa2ANcrTQfyQwZyl92NkajvonIBSXmWXvIQQZzg='],
        similar: { 'акита': 50, 'маламут': 50, 'кангал': 50 }
    },
    {
        id: 'аргентин',
        name: 'аргентинский дог',
        level: 4,
        images: ['https://zoonika.com/wp-content/uploads/2023/01/argentinskij-dog-zdorove-e1680676781809.jpg'],
        similar: { 'питбуль': 50, 'канекорсо': 50, 'алабай': 50 }
    },
    {
        id: 'фила',
        name: 'фила бразилейро',
        level: 4,
        images: ['https://catfishes.ru/wp-content/uploads/2021/06/fila1.jpg'],
        similar: { 'бладхаунд': 50, 'мастино': 50, 'бульмастиф': 50 }
    },
    {
        id: 'преса',
        name: 'канарский дог, преса канарио',
        level: 4,
        images: ['https://kisapes.ru/wp-content/uploads/2022/08/presa-canario-08.jpg'],
        similar: { 'канекорсо': 50, 'стафф': 50, 'питбуль': 50, 'алабай': 50 }
    },
    {
        id: 'манчестер',
        name: 'манчестер-терьер',
        level: 4,
        images: ['https://santreyd.ru/upload/staff/upload/staff/vplate/all_photos/0cfaa1d6a4561a565c6586abaad784a48113ceae.jpg'],
        similar: { 'цвергпинчер': 50, 'той': 50, 'немпинчер': 50 }
    },
    {
        id: 'скай',
        name: 'скай-терьер',
        level: 4,
        images: ['https://lapkins.ru/upload/iblock/7a6/mvym1zegy5uy20h7yy849lgroxnon48f.jpg'],
        similar: { 'скотч': 50, 'силихем': 50, 'керн': 50 }
    },
    {
        id: 'силихем',
        name: 'силихем-терьер',
        level: 4,
        images: ['https://santreyd.ru/upload/iblock/e9e/e9ed50d2e3a7ac5755f7bf68e492a4f7.jpg'],
        similar: { 'вест': 50, 'скай': 50, 'скотч': 50, 'дендидимонт': 50 }
    },
    {
        id: 'дендидимонт',
        name: 'денди-динмонт-терьер',
        level: 4,
        images: ['https://pet-dog.ru/wp-content/uploads/2023/07/dendi-dinmont-terer.jpeg'],
        similar: { 'бедлингтон': 50, 'силихем': 50, 'пудель': 50 }
    },
    {
        id: 'кламбер',
        name: 'кламбер-спаниель',
        level: 4,
        images: ['https://yac-wh-sb-prod-s3-media-04001.storage.yandexcloud.net/db_connection/1/layer_item/1/articles/6331/wysiwig-img/CS.tif'],
        similar: { 'англкокер': 50, 'сенбернар': 50, 'суссекс': 50 }
    },
    {
        id: 'суссекс',
        name: 'сассекс-спаниель',
        level: 4,
        images: ['https://dogzilla.ru/wp-content/uploads/2021/02/sasseks-spaniel.jpg'],
        similar: { 'кламбер': 50, 'кокер': 50, 'филд': 50 }
    },
    {
        id: 'бергамаско',
        name: 'бергамская овчарка, бергамаско',
        level: 4,
        images: ['https://www.dogeat.ru/img/images-blog/sobaka-porody-bergamskaya-ovcharka.jpg'],
        similar: { 'пули': 50, 'комондор': 50, 'бриар': 50 }
    },
    {
        id: 'лаготто',
        name: 'лаготто-романьоло',
        level: 4,
        images: ['https://images.prismic.io/doge/4b195441-c536-44ad-80f4-770bb35b61d1_Lagotto-romanjolo-12.jpg?auto=compress,format&rect=44,0,525,525&w=456&h=456'],
        similar: { 'водсобака': 50, 'пудель': 50, 'бедлингтон': 50 }
    },
    {
        id: 'келпи',
        name: 'австралийский келпи',
        level: 4,
        images: ['https://images.prismic.io/doge/12008756-6b2c-4867-b32b-f7ebc0527030_australian_kelpie.jpg?auto=compress,format','https://foxspb.com/img/porody/avstralijskij-kelpi.......jpg'],
        similar: { 'хилер': 50, 'кули': 50, 'бордер': 50, 'зеврада': 50 }
    },
    {
        id: 'крашки',
        name: 'крашская овчарка',
        level: 4,
        images: ['https://mepet.ru/photo/breed/158434545688.jpg'],
        similar: { 'шарпланинац': 50, 'кавказ': 50, 'леонбергер': 50 }
    },

    // === УРОВЕНЬ 5 (Энциклопедия) ===
    {
        id: 'гордон',
        name: 'шотландский сеттер (гордон)',
        level: 5,
        images: ['https://lapkins.ru/upload/iblock/b83/4lhpixdu4qph4c3akqxr66n2wyrl46ui.jpg'],
        similar: { 'ирсеттер': 50, 'англсеттер': 50, 'дратхаар': 50 }
    },
    {
        id: 'вельштерьер',
        name: 'вельштерьер',
        level: 5,
        images: ['https://storage-api.petstory.ru/resize/0x0x80/81/a3/25/81a325800bf04c8f81e4d982525ae8bd.jpeg'],
        similar: { 'эрдель': 50, 'лейкленд': 50, 'фокс': 50 }
    },
    {
        id: 'ирландскийтерьер',
        name: 'ирландский терьер',
        level: 5,
        images: ['https://old.bigenc.ru/media/2018/01/24/1238972475/36353.jpg'],
        similar: { 'вельштерьер': 50, 'эрдель': 50, 'гленофимаал': 50 }
    },
    {
        id: 'толлер',
        name: 'новошотландский ретривер (толлер)',
        level: 5,
        images: ['https://storage-api.petstory.ru/4b/a8/dc/4ba8dc7ff9f0457b9c9a6ba584923592.jpeg'],
        similar: { 'голден': 50, 'коллидш': 50, 'спаниель': 50 }
    },
    {
        id: 'чесапик',
        name: 'чесапик-бей-ретривер',
        level: 5,
        images: ['https://storage-api.petstory.ru/07/53/e9/0753e903e80c40c6b5d7b2f058de6f92.jpeg'],
        similar: { 'лабр': 50, 'курчавый': 50, 'ньюф': 50 }
    },
    {
        id: 'курчавый',
        name: 'курчавошерстный ретривер',
        level: 5,
        images: ['https://egida.by/_pu/6/85802472.jpg'],
        similar: { 'чесапик': 50, 'лабр': 50, 'пудель': 50 }
    },
    {
        id: 'харьер',
        name: 'харьер',
        level: 5,
        images: ['https://catfishes.ru/wp-content/uploads/2020/08/70603599.jpg'],
        similar: { 'бигль': 50, 'фоксхаунд': 50, 'эстонка': 50 }
    },
    {
        id: 'хердер',
        name: 'голландская овчарка (хердер)',
        level: 5,
        images: ['https://cs9.pikabu.ru/post_img/big/2019/11/20/6/1574240630139333729.png','https://cs13.pikabu.ru/post_img/big/2019/11/19/9/157417512412118608.png','https://dogipediya.ru/wp-content/uploads/2019/03/raznovidnosti-Hollandse-herder.jpg'],
        similar: { 'малинуа': 50, 'вео': 50, 'босерон': 50 }
    },
    {
        id: 'евразиер',
        name: 'евразиер',
        level: 5,
        images: ['https://zoonika.com/wp-content/uploads/2023/02/evrazier-opisanie-e1697635100418.jpg'],
        similar: { 'чау': 50, 'кеесхонд': 50, 'самоед': 50 }
    },
    {
        id: 'бурбуль',
        name: 'южноафриканский бурбуль',
        level: 5,
        images: ['https://media.istockphoto.com/id/147030366/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%8E%D0%B6%D0%BD%D0%BE%D0%B0%D1%84%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%B1%D1%83%D1%80%D0%B1%D1%83%D0%BB%D1%8C-%D0%BD%D0%B0-%D1%82%D1%80%D0%B0%D0%B2%D0%B5.jpg?s=612x612&w=0&k=20&c=BqvK1FQcRE4a-Ddgl7ImK0xs6FICY1iJwjNCSM79YSA='],
        similar: { 'бульмастиф': 50, 'англмастиф': 50, 'тоса': 50 }
    },
    {
        id: 'тибетспаниель',
        name: 'тибетский спаниель',
        level: 5,
        images: ['https://www.purinaone.ru/sites/default/files/2024-04/%D0%A2%D0%B8%D0%B1%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9%20%D1%81%D0%BF%D0%B0%D0%BD%D0%B8%D0%B5%D0%BB%D1%8C.png'],
        similar: { 'пекинес': 50, 'хин': 50, 'папильон': 50 }
    },
    {
        id: 'филд',
        name: 'филд-спаниель',
        level: 5,
        images: ['https://pitomec.online/upload/shop_55/5/1/4/item_51412/item_image51412.jpg'],
        similar: { 'суссекс': 50, 'англкокер': 50, 'спрингер': 50 }
    },
    {
        id: 'вельшспрингер',
        name: 'вельш-спрингер-спаниель',
        level: 5,
        images: ['https://fs.pet-yes.com/breed/cover/2023-12-05/018c3a8a-e98b-7083-9e5a-16d9a647b8bc.jpg'],
        similar: { 'спрингер': 50, 'бретон': 50, 'англкокер': 50 }
    },
    {
        id: 'ирлводный',
        name: 'ирландский водяной спаниель',
        level: 5,
        images: ['https://petstory.ru/resize/800x800x80/upload/images/articles/breeds/irish-water-spaniel/1.jpg'],
        similar: { 'испводсобака': 50, 'барбет': 50, 'портводсобака': 50 }
    },
    {
        id: 'амводный',
        name: 'американский водяной спаниель',
        level: 5,
        images: ['https://pro-animal.ru/wp-content/uploads/2023/08/vodenoy800x600-min.jpg'],
        similar: { 'вахтельхунд': 50, 'ирлводный': 50, 'бойкин': 50 }
    },
    {
        id: 'мюнстер',
        name: 'малый мюнстерлендер',
        level: 5,
        images: ['https://kisapes.ru/wp-content/uploads/2022/09/small-munsterlander-07.jpg'],
        similar: { 'спрингер': 50, 'бретон': 50, 'дратхаар': 50 }
    },
    {
        id: 'немдлинношерстная',
        name: 'лангхаар',
        level: 5,
        images: ['https://dogbreeds.name/wp-content/uploads/2023/03/poroda-langkhaar.jpg'],
        similar: { 'мюнстер': 50, 'сеттер': 50, 'курцхаар': 50 }
    },
    {
        id: 'пуми',
        name: 'пуми',
        level: 5,
        images: ['https://kisapes.ru/wp-content/uploads/2022/12/pumi-dog-01.jpg'],
        similar: { 'пули': 50, 'керриблю': 50, 'муди': 50 }
    },
    {
        id: 'муди',
        name: 'муди',
        level: 5,
        images: ['https://guldog.ru/assets/server/post_images/12214/mudi-08-min.jpg','https://santreyd.ru/upload/staff/upload/staff/vplate/all_photos/4b7672920584a05b851b7a18424f85b07cc30653.jpg'],
        similar: { 'пуми': 50, 'бордер': 50, 'кроатиан': 50, 'дворняга': 50 }
    },
    {
        id: 'ланкашир',
        name: 'ланкаширский хилер',
        level: 5,
        images: ['https://zoonika.com/wp-content/uploads/2023/02/lankashirskiy-hiler-opisanie.jpg'],
        similar: { 'хилер': 50, 'кардиган': 50, 'келпи': 50 }
    },
    {
        id: 'катахула',
        name: 'леопардовая собака катахулы',
        level: 5,
        images: ['https://yhhy.ru/uploads/images/content/202103/leopardovaya-sobaka-katahuly.jpg','https://www.cuteness.com/cuteness/catahoula-dog/24ca207cb2b3493ca6e63d7483aef265.jpg'],
        similar: { 'босерон': 50, 'немдог': 50, 'бордер': 50 }
    },
    {
        id: 'паттердейл',
        name: 'паттердейл-терьер',
        level: 5,
        images: ['https://idbc-dog.ru/wp-content/uploads/2021/07/Pdyi2XB3b94-768x868.jpg'],
        similar: { 'ягдтерьер': 50, 'стаффбуль': 50, 'дрт': 50 }
    },
    {
        id: 'рэт',
        name: 'рэт-терьер',
        level: 5,
        images: ['https://kisapes.ru/wp-content/uploads/2024/04/rat-terrier-05.jpg','https://kinpet.ru/upload/uf/12f/yugejar6pxprxf336sn23v5u3teg9wnt/ret_pryamoug.jpg'],
        similar: { 'дрт': 50, 'той': 50, 'прт': 50 }
    },
    {
        id: 'австралтерьер',
        name: 'австралийский терьер',
        level: 5,
        images: ['https://kinpet.ru/upload/resize_cache/uf/5bc/58iqp7stptvxg7lb5z9dqwd2dgtu77ze/405_380_2/Oblozhkashutterstock_1160904817.jpg'],
        similar: { 'шелк': 50, 'йорк': 50, 'керн': 50 }
    },
    {
        id: 'шелк',
        name: 'австралийский шелковистый терьер',
        level: 5,
        images: ['https://s3.pet-yes.com/BreedPhotos/607603fc05a1f.jpeg'],
        similar: { 'йорк': 50, 'австралтерьер': 50, 'скай': 50 }
    },
    {
        id: 'чешский',
        name: 'чешский терьер',
        level: 5,
        images: ['https://egida.by/_pu/4/89066458.jpg'],
        similar: { 'силихем': 50, 'скотч': 50, 'дендидимонт': 50 }
    },
    {
        id: 'японскийтерьер',
        name: 'японский терьер',
        level: 5,
        images: ['https://kinpet.ru/upload/uf/32d/7ngccsuz5abeb1ooo5jlcd15smz6c5bn/cover.jpg'],
        similar: { 'той': 50, 'гладфокс': 50, 'левретка': 50 }
    },
    {
        id: 'болоньезе',
        name: 'болоньез',
        level: 5,
        images: ['https://static.wikia.nocookie.net/dog/images/1/1f/Bolonyez.png/revision/latest?cb=20240128094645&path-prefix=ru'],
        similar: { 'бишон': 50, 'мальтезе': 50, 'котон': 50 }
    },
    {
        id: 'котон',
        name: 'котон-де-тулеар',
        level: 5,
        images: ['https://kisapes.ru/wp-content/uploads/2022/09/coton-de-tulear-07.jpg'],
        similar: { 'бишон': 50, 'гаванез': 50, 'болоньезе': 50 }
    },
    {
        id: 'левхен',
        name: 'малая львиная собака, левхен',
        level: 5,
        images: ['https://lh4.googleusercontent.com/proxy/l5wdvvH5XxJGMlaNATJG1oM3SZ2gr2hgZM9yJ4d2vhE6qZzA8yPeRAC2e6NfBom--FVlsKfy'],
        similar: { 'тойпудель': 50, 'китай': 50, 'мальтезе': 50 }
    },
    {
        id: 'ханаан',
        name: 'ханаанская собака',
        level: 5,
        images: ['https://lh5.googleusercontent.com/proxy/SV4OU1k0SXtni1cId5gDvdimniCMsKFd2JQTddmp1z2inxeueOVeES4GRL_uXg3u_qhisuMn'],
        similar: { 'басенджи': 50, 'сиба': 50, 'лайка': 50 }
    },
    {
        id: 'джиндо',
        name: 'корейский чиндо',
        level: 5,
        images: ['https://brit-petfood.com/file/nodes/product/Korejsk%C3%BD%20Jindo%20Dog.jpg'],
        similar: { 'сиба': 50, 'акита': 50, 'кишу': 50 }
    },
    {
        id: 'лундехунд',
        name: 'норвежский лундехунд',
        level: 5,
        images: ['https://lapkins.ru/upload/uf/7e6/472aybeacexzgzoqzbwtvkks3ujgep19.jpg'],
        similar: { 'шипперке': 50, 'норвэлкхаунд': 50, 'шведхунд': 50 }
    },
    {
        id: 'финлапп',
        name: 'финский лаппхунд',
        level: 5,
        images: ['https://volumes.ru/wp-content/uploads/2023/11/suomenlapinkoira-1.webp'],
        similar: { 'шведлапп': 50, 'самоед': 50, 'кеесхонд': 50 }
    },
    {
        id: 'шведлапп',
        name: 'шведский лаппхунд',
        level: 5,
        images: ['https://kisapes.ru/wp-content/uploads/2023/03/swedish-lapphund-09.jpg'],
        similar: { 'финлапп': 50, 'шипперке': 50, 'шпиц': 50 }
    },
    {
        id: 'кунхаунд',
        name: 'черно-подпалый кунхаунд',
        level: 5,
        images: ['https://storage-api.petstory.ru/resize/0x0x70/16/19/a3/1619a327da5548e59e94ddeb8ca9b730.jpeg'],
        similar: { 'бладхаунд': 50, 'доберман': 50, 'гончая': 50 }
    },
    {
        id: 'плотт',
        name: 'плотт-хаунд',
        level: 5,
        images: ['https://foxspb.com/img/porody/plottxaund-(plott-xaund).jpg'],
        similar: { 'кунхаунд': 50, 'стафф': 50, 'гончая': 50 }
    },
    {
        id: 'гамильтон',
        name: 'гамильтонстёваре',
        level: 5,
        images: ['https://egida.by/_pu/7/73407253.jpg'],
        similar: { 'эстонка': 50, 'фоксхаунд': 50, 'бигль': 50 }
    },
    {
        id: 'дункер',
        name: 'дункер (норвежская гончая)',
        level: 5,
        images: ['https://eu-central-1.graphassets.com/AnwjgMYRvQfWK3bRPjoq3z/resize=height:778,width:1080/output=format:webp/Q3i4x9XNTQG0iZGPypPK'],
        similar: { 'русспеггончая': 50, 'катахула': 50, 'гончая': 50 }
    },
    {
        id: 'штирийская',
        name: 'австрийский брудастый бракк',
        level: 5,
        images: ['https://sun9-78.userapi.com/s/v1/if2/kyRvhTiaLOEsGfaYC0HbCrE1dITWAiJBturAsog9FwDp5ytyhqH9IOsvd7LkG0fmPhwEbZLLTMAhmR2OvmE9K7Yk.jpg?quality=96&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2400x1800&from=bu&cs=1080x0'],
        similar: { 'баварская': 50, 'бассетгрифон': 50, 'гриффон': 50 }
    },
    {
        id: 'билли',
        name: 'билли',
        level: 5,
        images: ['https://www.casitadeperro.com/wp-content/uploads/2024/04/billy-perro-en-el-cesped.jpg'],
        similar: { 'порселен': 50, 'поинтер': 50, 'гончая': 50 }
    },
    {
        id: 'барбет',
        name: 'барбет',
        level: 5,
        images: ['https://storage-api.petstory.ru/d9/19/48/d91948c34cc548b6a099f732658b3010.jpeg'],
        similar: { 'портводсобака': 50, 'водсобака': 50, 'лаготто': 50 }
    },
    {
        id: 'брохольмер',
        name: 'брохольмер',
        level: 5,
        images: ['https://kisapes.ru/wp-content/uploads/2022/06/broholmer-09.jpg'],
        similar: { 'бульмастиф': 50, 'мастиф': 50, 'бордос': 50 }
    },
    {
        id: 'мудхол',
        name: 'мудхол, караванная борзая',
        level: 5,
        images: ['https://www.k9rl.com/wp-content/uploads/2016/04/Caravan-Hound.jpg'],
        similar: { 'грейхаунд': 50, 'слюги': 50, 'хортая': 50 }
    },
    {
        id: 'каракачан',
        name: 'каракачанская собака',
        level: 5,
        images: ['https://assets.puzzlefactory.com/puzzle/253/296/original.jpg'],
        similar: { 'кавказ': 50, 'шарпланинац': 50, 'ландсир': 50 }
    },
    {
        id: 'кромфорлендер',
        name: 'кромфорлендер',
        level: 5,
        images: ['https://kisapes.ru/wp-content/uploads/2022/09/kromfohrlander-06.jpg'],
        similar: { 'дрт': 50, 'фокс': 50, 'бретон': 50 }
    },
    {
        id: 'шипперке',
        name: 'шипперке',
        level: 3,
        images: ['https://shipperke.ru/2023/dec/23.10.27_0002.jpg'],
        similar: { 'грюнендаль': 50, 'немшпиц': 50 }
    },
    {
        id: 'тайскийриджбек',
        name: 'тайский риджбек',
        level: 3,
        images: ['https://lapkins.ru/upload/iblock/33d/33df9ad7c1968d14b8bd0d4da0284ddc.jpg'],
        similar: { 'риджбек': 50, 'басенджи': 50, 'ксоло': 50 }
    },
    {
        id: 'ксоло',
        name: 'ксолоитцкуинтли',
        level: 3,
        images: ['https://storage-api.petstory.ru/eb/16/44/eb1644c388e545cf892a73fa4c197a67.jpeg'],
        similar: { 'китай': 50, 'перуанская': 50 }
    },
    {
        id: 'бретон',
        name: 'бретонский эпаньоль',
        level: 3,
        images: ['https://yac-wh-sb-prod-s3-media-04001.storage.yandexcloud.net/db_connection/1/layer_item/1/articles/6341/wysiwig-img/%D0%91%D1%80%D0%B5%D1%82%D0%BE%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%8D%D1%81%D0%BF%D0%B0%D0%BD%D1%8C%D0%BE%D0%BB%D1%8C%201.jpg'],
        similar: { 'спрингер': 50, 'ирсеттер': 50 }
    },

    // === УРОВЕНЬ 6 (Новые / Редкие / Экзотические) ===
    {
        id: 'сиба',
        name: 'сиба-ину',
        level: 6,
        images: ['https://upload.wikimedia.org/wikipedia/commons/a/a3/Taro_%28black_and_tan%2C_reu%29_-_Chiko_%28rood%2C_reu%29_-_Ichigo_%28rood%2C_teef%29.jpg'],
        similar: { 'акита': 50, 'шикоку': 50, 'хоккайдо': 50, 'кишу': 50 }
    },
    {
        id: 'бувье',
        name: 'фландрский бувье',
        level: 6,
        images: ['https://fs.pet-yes.com/article/photo/2023-09-06/018a6c5b-3ce1-7073-b379-3d77585fd4b3.jpg'],
        similar: { 'ризен': 50, 'рчт': 50, 'бриар': 50, 'южак': 50 }
    },
    {
        id: 'мастино',
        name: 'неаполитанский мастиф',
        level: 6,
        images: ['https://volumes.ru/wp-content/uploads/2023/09/neapolitan-mastiff.webp','https://prohvost.club/wp-content/uploads/2019/06/post_5cfd028bb8086.jpg'],
        similar: { 'канекорсо': 50, 'бульмастиф': 50, 'англмастиф': 50, 'фила': 50 }
    },
    {
        id: 'влчак',
        name: 'чехословацкая волчья собака',
        level: 6,
        images: ['https://puppyshow.ru/wa-data/public/shop/img/cheshskij-vlchak.jpg'],
        similar: { 'инуит': 50, 'хаски': 50, 'маламут': 50, 'сарлос': 50 }
    },
    {
        id: 'сарлос',
        name: 'волчья собака Сарлоса',
        level: 6,
        images: ['https://povodok.by/files/volchia-sobaka-sarlosa4.jpeg'],
        similar: { 'немец': 50, 'влчак': 50, 'хаски': 50, 'маламут': 50 }
    },
    {
        id: 'амбуль',
        name: 'американский бульдог',
        level: 6,
        images: ['https://lapkins.ru/upload/iblock/9b4/9b40cdb3983c66d23487881ec2c87d75.jpg'],
        similar: { 'стафф': 50, 'питбуль': 50, 'боксер': 50, 'англбульдог': 50 }
    },
    {
        id: 'испмастиф',
        name: 'испанский мастиф',
        level: 6,
        images: ['https://static.wikia.nocookie.net/dog/images/7/77/%D0%9D%D0%B5%D0%B0%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B0%D0%BD%D0%BE.png/revision/latest?cb=20240128115854&path-prefix=ru'],
        similar: { 'мастино': 50, 'пиреней': 50, 'кавказ': 50, 'сенбернар': 50 }
    },
    {
        id: 'пирмастиф',
        name: 'пиренейский мастиф',
        level: 6,
        images: ['https://egida.by/_pu/5/91330163.jpg'],
        similar: { 'кавказ': 50, 'пиреней': 50, 'сенбернар': 50, 'маремма': 50 }
    },
    {
        id: 'эштрельская',
        name: 'эштрельская горная собака',
        level: 6,
        images: ['https://i.pinimg.com/736x/19/5f/5a/195f5a949fa49d7cb16188c022be1266.jpg'],
        similar: { 'кавказ': 50, 'леонбергер': 50, 'шарпланинац': 50, 'крашки': 50 }
    },
    {
        id: 'каталонская',
        name: 'каталонская овчарка',
        level: 6,
        images: ['https://static.wikia.nocookie.net/dog/images/6/65/Uljana_chebotar_katalonskaja.jpg/revision/latest?cb=20151109164339&path-prefix=ru'],
        similar: { 'бриар': 50, 'пикардийская': 50, 'пиреней': 50, 'бородатыйколли': 50 }
    },
    {
        id: 'исландская',
        name: 'исландская собака',
        level: 6,
        images: ['https://cs12.pikabu.ru/post_img/big/2022/10/12/6/1665561834176841465.png'],
        similar: { 'норвэлкхаунд': 50, 'финлапп': 50, 'шведлапп': 50, 'лайка': 50 }
    },
    {
        id: 'хоккайдо',
        name: 'хоккайдо, айну',
        level: 6,
        images: ['https://en.petglobals.com/imagesaver/form/big/hm74tlbjnphr7uyzfsxa_1705827562.jpg'],
        similar: { 'акита': 50, 'сиба': 50, 'шикоку': 50, 'кишу': 50 }
    },
    {
        id: 'кишу',
        name: 'кишу',
        level: 6,
        images: ['https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/animal/breed/dog/adult/669e702e6814c899341292.jpg'],
        similar: { 'акита': 50, 'сиба': 50, 'хоккайдо': 50, 'джиндо': 50 }
    },
    {
        id: 'ямтхунд',
        name: 'ямтхунд',
        level: 6,
        images: ['https://kisapes.ru/wp-content/uploads/2023/03/swedish-elkhound-08.jpg'],
        similar: { 'норвэлкхаунд': 50, 'зсл': 50, 'всл': 50, 'карелка': 50 }
    },
    {
        id: 'ибиценко',
        name: 'поденко ибиценко',
        level: 6,
        images: ['https://yac-wh-sb-prod-s3-media-04001.storage.yandexcloud.net/db_connection/1/layer_item/1/articles/5365/wysiwig-img/155929021_m_normal_none.webp'],
        similar: { 'фараон': 50, 'чирнеко': 50, 'канарион': 50, 'гальго': 50 }
    },
    {
        id: 'блютик',
        name: 'крапчато-голубой кунхаунд',
        level: 6,
        images: ['https://i.pinimg.com/736x/5a/46/35/5a46352c0185ff11a3ae408061d74384.jpg'],
        similar: { 'кунхаунд': 50, 'плотт': 50, 'русгончая': 50, 'бладхаунд': 50 }
    },
    {
        id: 'редбон',
        name: 'редбон кунхаунд',
        level: 6,
        images: ['https://doggit.app/breeds/large/redbone-coonhound.jpg'],
        similar: { 'кунхаунд': 50, 'плотт': 50, 'выжла': 50, 'риджбек': 50 }
    },
    {
        id: 'уолкер',
        name: 'древесная енотовая собака Уолкера',
        level: 6,
        images: ['https://s3.pet-yes.com/BreedPhotos/609d8d6751709.jpeg'],
        similar: { 'кунхаунд': 50, 'бигль': 50, 'фоксхаунд': 50, 'русспеггончая': 50 }
    },
    {
        id: 'тойфокс',
        name: 'той-фокстерьер',
        level: 6,
        images: ['https://zdorovet.ru/public/upload/8d13323c945de3c9b81cad332d5b2f5f.jpeg'],
        similar: { 'фокс': 50, 'дрт': 50, 'той': 50, 'цвергпинчер': 50 }
    },
    {
        id: 'цветнаяболонка',
        name: 'русская цветная болонка',
        level: 6,
        images: ['https://storage-api.petstory.ru/resize/0x0x80/b9/0f/63/b90f63eb9e504c2eb9f2e913429ef848.jpeg'],
        similar: { 'мальтезе': 50, 'болоньезе': 50, 'шитцу': 50, 'гаванез': 50 }
    },
    {
        id: 'стабихун',
        name: 'стабихун',
        level: 6,
        images: ['https://kisapes.ru/wp-content/uploads/2024/04/stabihun-11.jpg'],
        similar: { 'мюнстер': 50, 'лангхаар': 50, 'дрентская': 50, 'спрингер': 50 }
    },
    {
        id: 'дрентская',
        name: 'дрентская куропаточная собака',
        level: 6,
        images: ['https://lh6.googleusercontent.com/proxy/hvSlOwUQWUgcQ3BSnxn6bQjFPK0pvXVKHCNueiGW_pWgVOZVIZ3u5DgiiJFPzdsOsByN8Zs'],
        similar: { 'стабихун': 50, 'мюнстер': 50, 'сеттер': 50, 'спрингер': 50 }
    },
    {
        id: 'гриффонкор',
        name: 'гриффон Кортальса',
        level: 6,
        images: ['https://egida.by/_pu/7/14784938.jpg'],
        similar: { 'дратхаар': 50, 'спиноне': 50, 'фоусек': 50, 'поинтер': 50 }
    },
    {
        id: 'пудельпойнтер',
        name: 'пудельпойнтер',
        level: 6,
        images: ['https://www.cacciapassione.com/wp-content/uploads/2020/07/Pudelpointer.jpg'],
        similar: { 'дратхаар': 50, 'гриффонкор': 50, 'поинтер': 50, 'спиноне': 50 }
    },
    {
        id: 'чувач',
        name: 'словацкий чувач',
        level: 6,
        images: ['https://worlddogfinder.com/imager/1300x740/upload/slovensky_cuvac.jpg'],
        similar: { 'кувас': 50, 'подгалян': 50, 'маремма': 50, 'пиреней': 50 }
    },
    {
        id: 'копов',
        name: 'словацкий копов',
        level: 6,
        images: ['https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/animal/breed/dog/adult/66fd04bb6d273269380925.jpg'],
        similar: { 'баварская': 50, 'русгончая': 50, 'альпийская': 50, 'эстонка': 50 }
    },
    {
        id: 'бойкин',
        name: 'бойкин-спаниель',
        level: 6,
        images: ['https://petstory.ru/resize/800x800x80/upload/images/articles/breeds/boykin-spaniel/1.jpg'],
        similar: { 'амводный': 50, 'амкокер': 50, 'спрингер': 50, 'вахтельхунд': 50 }
    },
    {
        id: 'гроссшпиц',
        name: 'большой немецкий шпиц, гроссшпиц',
        level: 6,
        images: ['https://sobakovod.club/uploads/posts/2021-11/1638108654_1-sobakovod-club-p-sobaki-nemetskii-grossshpits-1.jpg'],
        similar: { 'миттельшпиц': 50, 'самоед': 50, 'кеесхонд': 50, 'евразиер': 50 }
    },
    {
        id: 'миттельшпиц',
        name: 'немецкий средний шпиц, миттельшпиц',
        level: 6,
        images: ['https://santreyd.ru/upload/staff/upload/staff/vplate/all_photos/664fd4c2f56c49b266c2243bc9e1f87d8394f79f.jpg','https://elitedoggy.com/uploads/posts/2013-09/1378753329_bolshoy-shpic.jpg'],
        similar: { 'гроссшпиц': 50, 'пом': 50, 'кеесхонд': 50, 'япшпиц': 50 }
    },
    {
        id: 'торньяк',
        name: 'торньяк',
        level: 6,
        images: ['https://kisapes.ru/wp-content/uploads/2024/06/tornjak-05.jpg'],
        similar: { 'шарпланинац': 50, 'кавказ': 50, 'крашки': 50, 'алабай': 50 }
    },
    {
        id: 'миоритская',
        name: 'румынская миоритская овчарка',
        level: 6,
        images: ['https://pet-guide.ru/wp-content/uploads/2023/04/rumynskaya-mioritskaya-ovcharka.jpg'],
        similar: { 'бобтейл': 50, 'южак': 50, 'комондор': 50, 'кавказ': 50 }
    },
    {
        id: 'карпатская',
        name: 'румынская карпатская овчарка',
        level: 6,
        images: ['https://images.prismic.io/doge/422575a9-c71d-4a9b-9a1b-0f5b25d877c6_rumynskaya-ovcharka-karpatskaya-11.jpg?auto=compress,format'],
        similar: { 'кавказ': 50, 'шарпланинац': 50, 'эштрельская': 50, 'леонбергер': 50 }
    },
    {
        id: 'симаррон',
        name: 'уругвайский симаррон',
        level: 6,
        images: ['https://dogbreeds.name/wp-content/uploads/2022/12/sobaka-uruguay-cimarron-1.jpg'],
        similar: { 'канекорсо': 50, 'преса': 50, 'стафф': 50, 'питбуль': 50 }
    },
    {
        id: 'brazilian',
        name: 'бразильский терьер',
        level: 6,
        images: ['https://biogroom.ru/wp-content/uploads/2022/04/brazilianterr.jpg'],
        similar: { 'дрт': 50, 'прт': 50, 'гладфокс': 50, 'тойфокс': 50 }
    },
    {
        id: 'трансильванская',
        name: 'трансильванская гончая',
        level: 6,
        images: ['https://dogbreeds.name/wp-content/uploads/2024/01/transilvanskaja-gonchaja.jpg'],
        similar: { 'копов': 50, 'русгончая': 50, 'эстонка': 50, 'бигль': 50 }
    },
    {
        id: 'сербская',
        name: 'сербская гончая',
        level: 6,
        images: ['https://upload.wikimedia.org/wikipedia/commons/3/35/Serbian_hound_1.jpg'],
        similar: { 'трансильванская': 50, 'русгончая': 50, 'копов': 50, 'эстонка': 50 }
    },
    {
        id: 'англовчарка',
        name: 'английская овчарка',
        level: 6,
        images: ['https://egida.by/_pu/8/89303418.jpg','https://cdn2.thedogapi.com/images/H1QyMe5EQ.jpg'],
        similar: { 'бордер': 50, 'аусси': 50, 'коллидш': 50, 'уэльская': 50 }
    },
    {
        id: 'каролинская',
        name: 'каролинская собака',
        level: 6,
        images: ['https://yhhy.ru/uploads/images/content/202103/karolinskaya-sobaka.jpg'],
        similar: { 'басенджи': 50, 'ханаан': 50, 'тайскийриджбек': 50, 'дворняга': 50 }
    },
    {
        id: 'чинук',
        name: 'чинук',
        level: 6,
        images: ['https://lh4.googleusercontent.com/proxy/zozFMz1GjwbuGJVW6r8L7WZthPA2DBtutWTs9uJxHgMOYCHZzhsRewlSFQuEjVgUNENEVhMMpw','https://kisapes.ru/wp-content/uploads/2024/07/chinook-14.jpg'],
        similar: { 'хаски': 50, 'маламут': 50, 'аляска': 50, 'дворняга': 50 }
    },
    {
        id: 'баскская',
        name: 'баскская овчарка',
        level: 6,
        images: ['https://storage-api.petstory.ru/resize/0x0x80/2b/43/15/2b43154a38f24f56a049a7c739411f13.jpeg'],
        similar: { 'голден': 50, 'толлер': 50, 'бордер': 50, 'каталонская': 50 }
    },
    {
        id: 'рафейру',
        name: 'рафейру ду алентежу',
        level: 6,
        images: ['https://kisapes.ru/wp-content/uploads/2022/12/rafeiro-do-alentejo-06.jpg'],
        similar: { 'испмастиф': 50, 'пирмастиф': 50, 'алабай': 50, 'кангал': 50 }
    },
    {
        id: 'бургосская',
        name: 'бургосская легавая',
        level: 6,
        images: ['https://malteze.net/wp-content/uploads/2017/12/burgosskaya_3_75647487465657.jpg'],
        similar: { 'курцхаар': 50, 'браккоитальано': 50, 'выжла': 50, 'поинтер': 50 }
    },
    {
        id: 'овернский',
        name: 'овернский бракк',
        level: 6,
        images: ['https://dogbreeds.name/wp-content/uploads/2023/12/brak-d-overn-5.jpg'],
        similar: { 'курцхаар': 50, 'поинтер': 50, 'бургосская': 50, 'выжла': 50 }
    },
    {
        id: 'голубойпикард',
        name: 'голубой пикардийский спаниель',
        level: 6,
        images: ['https://infodog.ru/wp-content/uploads/2020/07/gpe.jpg'],
        similar: { 'ирсеттер': 50, 'мюнстер': 50, 'лангхаар': 50, 'спрингер': 50 }
    },
    {
        id: 'большоймюнстер',
        name: 'большой мюнстерлендер',
        level: 6,
        images: ['https://egida.by/_pu/7/26534395.jpg'],
        similar: { 'мюнстер': 50, 'лангхаар': 50, 'дратхаар': 50, 'англсеттер': 50 }
    },
    {
        id: 'альпийская',
        name: 'альпийская таксообразная гончая',
        level: 6,
        images: ['https://catfishes.ru/wp-content/uploads/2020/10/10437619.jpg'],
        similar: { 'такса': 50, 'баварская': 50, 'копов': 50, 'древер': 50 }
    },
    {
        id: 'норрботтен',
        name: 'норрботтен шпиц',
        level: 6,
        images: ['https://images.prismic.io/doge/eb7147b6-1b4b-41de-b2f6-03d39d7a3215_1714502_original.jpg?auto=compress,format'],
        similar: { 'финлапп': 50, 'карелка': 50, 'лундехунд': 50, 'шведхунд': 50 }
    },
    {
        id: 'фоусек',
        name: 'чешский фоусек',
        level: 6,
        images: ['https://ohota-rybalka-kirov.ru/wp-content/uploads/2021/10/CHeshskij-fousek1.jpg'],
        similar: { 'дратхаар': 50, 'гриффонкор': 50, 'пудельпойнтер': 50, 'курцхаар': 50 }
    },
    {
        id: 'кастро',
        name: 'као де кастро лаборейро',
        level: 6,
        images: ['https://i.pinimg.com/736x/b9/8b/0e/b98b0ecdd89c46530e850b425ae08c32.jpg','https://i.pinimg.com/originals/1a/23/c4/1a23c45c8469124106d42e4b5e4e9c2b.jpg'],
        similar: { 'эштрельская': 50, 'фила': 50, 'канекорсо': 50, 'дворняга': 50 }
    },
    {
        id: 'вестфальский',
        name: 'вестфальский таксообразный бракк',
        level: 6,
        images: ['https://upload.wikimedia.org/wikipedia/commons/8/80/Westf%C3%A4lische_Dachsbracke.jpg'],
        similar: { 'древер': 50, 'такса': 50, 'бигль': 50, 'русгончая': 50 }
    },

    // === УРОВЕНЬ 7 (Новые и Редкие) ===

    // --- Популярные, Дизайнерские и Новые ---
    {
        id: 'бивер',
        name: 'бивер йоркширский терьер',
        level: 7,
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOiBfb9c1pNNKYJWDzQGfG5Vk9yXsIbEH2Z9KKcoTNXaDaQNqldWHS17pag8-UfLF2BqxPvt2Rs21QbEV4QsehFqbf5z15vDqOM9zbw&s=10'],
        similar: { 'йорк': 50, 'мальтезе': 50, 'шитцу': 50, 'австралтерьер': 50 }
    },
    {
        id: 'прямретривер',
        name: 'прямошерстный ретривер',
        level: 7,
        images: ['https://egida.by/_pu/5/45760961.jpg'],
        similar: { 'лабр': 50, 'голден': 50, 'курчавый': 50, 'ирсеттер': 50 }
    },
    {
        id: 'помски',
        name: 'помски',
        level: 7,
        images: ['https://files.cdn-files-a.com/uploads/6807665/normal_64fda12985657.jpg'],
        similar: { 'хаски': 50, 'пом': 50, 'кликай': 50, 'немшпиц': 50 }
    },
    {
        id: 'польскаянизинная',
        name: 'польская низинная овчарка',
        level: 7,
        images: ['https://i.pinimg.com/736x/03/d9/69/03d969ea96c4f49ed024a1b8b5412f3c.jpg'],
        similar: { 'бобтейл': 50, 'бриар': 50, 'бородатыйколли': 50, 'пули': 50 }
    },
    {
        id: 'агт',
        name: 'американский голый терьер',
        level: 7,
        images: ['https://for-pet.ru/wp-content/uploads/2020/04/amerikanskij-golyj-terer-64-1024x811-1.jpg'],
        similar: { 'рэт': 50, 'дрт': 50, 'перуанская': 50, 'китай': 50, 'тойфокс': 50 }
    },
    {
        id: 'лабрадудль',
        name: 'лабрадудль',
        level: 7,
        images: ['https://fs.pet-yes.com/article/photo/2023-09-27/018ad868-e577-72c2-8fe1-5496bc5ee209.jpg'],
        similar: { 'лабр': 50, 'болпудель': 50, 'мальтипу': 50, 'голден': 50 }
    },
    {
        id: 'инуит',
        name: 'северная инуитская собака',
        level: 7,
        images: ['https://upload.wikimedia.org/wikipedia/commons/c/c9/Northern_Inuit_Dog.jpg'],
        similar: { 'хаски': 50, 'маламут': 50, 'влчак': 50, 'сарлос': 50 }
    },
    {
        id: 'амфокс',
        name: 'американский фоксхаунд',
        level: 7,
        images: ['https://www.prodograw.com/wp-content/uploads/2025/09/American-Foxhound-2-1.jpg'],
        similar: { 'фоксхаунд': 50, 'русспеггончая': 50, 'кунхаунд': 50, 'бигль': 50 }
    },
    {
        id: 'богемская',
        name: 'чешская пастушья собака, ходская собака',
        level: 7,
        images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/IRLUKA_KROSANDRA_%281%29.jpg/1280px-IRLUKA_KROSANDRA_%281%29.jpg'],
        similar: { 'немец': 50, 'грюнендаль': 50, 'аусси': 50, 'вео': 50 }
    },

    // --- Овчарки и Пастушьи ---
    {
        id: 'койкер',
        name: 'коикерхондье',
        level: 7,
        images: ['https://kisapes.ru/wp-content/uploads/2023/11/kooikerhondje-06.jpg'],
        similar: { 'толлер': 50, 'спаниель': 50, 'бретон': 50, 'папильон': 50 }
    },
    {
        id: 'шапендуа',
        name: 'шапендуа',
        level: 7,
        images: ['https://fs.pet-yes.com/article/photo/2024-09-25/01922b32-f6c5-715a-b8ee-ade7aa13a44e.jpg'],
        similar: { 'бородатыйколли': 50, 'бриар': 50, 'польскаянизинная': 50, 'каталонская': 50 }
    },
    {
        id: 'пиренейскаяовчарка',
        name: 'пиренейская овчарка',
        level: 7,
        images: ['https://georgiapuppiesfromheaven.com/dog-breed-photos/pyreshep.jpg'],
        similar: { 'бриар': 50, 'каталонская': 50, 'пиреней': 50, 'аусси': 50 }
    },
    {
        id: 'стамп',
        name: 'австралийская короткохвостая пастушья собака',
        level: 7,
        images: ['https://dkw0th85j7rqd.cloudfront.net/breed-originals/australian-stumpy-tail-cattle-dog.webp'],
        similar: { 'хилер': 50, 'келпи': 50, 'пемброк': 50, 'аусси': 50 }
    },
    {
        id: 'буковинская',
        name: 'буковинская овчарка',
        level: 7,
        images: ['https://kisapes.ru/wp-content/uploads/2023/08/bucovina-shepherd-dog-07.jpg'],
        similar: { 'каракачан': 50, 'торньяк': 50, 'алабай': 50, 'кавказ': 50 }
    },
    {
        id: 'куньмин',
        name: 'куньминская овчарка',
        level: 7,
        images: ['https://i.pinimg.com/736x/06/c6/16/06c61612a50b2f88e158d2bd9f175b3a.jpg'],
        similar: { 'немец': 50, 'малинуа': 50, 'вео': 50, 'хердер': 50 }
    },
    {
        id: 'портовчарка',
        name: 'португальская овчарка',
        level: 7,
        images: ['https://kisapes.ru/wp-content/uploads/2022/12/portuguese-sheepdog-07.jpg'],
        similar: { 'бриар': 50, 'каталонская': 50, 'пикардийская': 50, 'пудель': 50 }
    },
    {
        id: 'гарденхунд',
        name: 'датско-шведская фермерская собака',
        level: 7,
        images: ['https://images.clubexpress.com/459025/graphics/Farmdog_History_Dog_295869696.jpeg'],
        similar: { 'дрт': 50, 'фокс': 50, 'рэт': 50, 'бигль': 50 }
    },
    {
        id: 'лапполен',
        name: 'лапландская оленегонная собака',
        level: 7,
        images: ['https://volumes.ru/wp-content/uploads/2021/11/lapinporokoira.webp'],
        similar: { 'финлапп': 50, 'шведлапп': 50, 'келпи': 50, 'ненецкая': 50, 'дворняга': 50 }
    },
    {
        id: 'кроатиан',
        name: 'хорватская овчарка',
        level: 7,
        images: ['https://kisapes.ru/wp-content/uploads/2023/02/croatian-sheepdog-04.jpg'],
        similar: { 'муди': 50, 'пуми': 50, 'грюнендаль': 50, 'дворняга': 50 }
    },

    // --- Молоссы и Охранные ---
    {
        id: 'кадебо',
        name: 'ка-де-бо',
        level: 7,
        images: ['https://storage-api.petstory.ru/resize/0x0x70/0c/67/bb/0c67bb6cace74f9f8d07f95bb26c838d.jpeg'],
        similar: { 'канекорсо': 50, 'бульмастиф': 50, 'боксер': 50, 'амбуль': 50 }
    },
    {
        id: 'гампр',
        name: 'гампр, армянский волкодав',
        level: 7,
        images: ['https://pro-animal.ru/wp-content/uploads/2023/11/gampr-2-min.jpg'],
        similar: { 'алабай': 50, 'кавказ': 50, 'кангал': 50, 'акбаш': 50 }
    },
    {
        id: 'хотошо',
        name: 'бурят-монгольский волкодав, хотошо',
        level: 7,
        images: ['https://pro-animal.ru/wp-content/uploads/2023/11/gampr-2-min.jpg'],
        similar: { 'тибет': 50, 'кавказ': 50, 'ньюф': 50, 'монгол': 50 }
    },
    {
        id: 'айди',
        name: 'айди, атласская овчарка',
        level: 7,
        images: ['https://www.hundrasguiden.se/media/img/Aidi.Dog.jpg'],
        similar: { 'кангал': 50, 'алабай': 50, 'пиреней': 50, 'леонбергер': 50 }
    },
    {
        id: 'азорская',
        name: 'фила сан-мигель',
        level: 7,
        images: ['https://static.wikia.nocookie.net/dogs/images/1/1b/Saint_Miguel_Cattle_Dog.png/revision/latest?cb=20230423043841'],
        similar: { 'фила': 50, 'канекорсо': 50, 'хилер': 50, 'преса': 50 }
    },
    {
        id: 'бангкеу',
        name: 'тайский бангку',
        level: 7,
        images: ['https://thedogsjournal.com/wp-content/uploads/2022/04/Thai-Bangkaew-Dog.jpg'],
        similar: { 'немшпиц': 50, 'самоед': 50, 'лайка': 50, 'чау': 50 }
    },

    // --- Гончие и Борзые ---
    {
        id: 'грандбассет',
        name: 'большой вандейский бассет-гриффон',
        level: 7,
        images: ['https://yhhy.ru/uploads/images/content/202109/bolsho-vandeski-basset-griffon.jpg'],
        similar: { 'бассетгриффон': 50, 'бассетхаунд': 50, 'оттерхаунд': 50, 'спиноне': 50 }
    },
    {
        id: 'гасконская',
        name: 'большая голубая гасконская гончая',
        level: 7,
        images: ['https://www.petshealth.ru/upload/medialibrary/9e7/9e7d6c443d74bcc2406e66e68c1b027b.jpg'],
        similar: { 'бладхаунд': 50, 'русгончая': 50, 'кунхаунд': 50, 'блютик': 50 }
    },
    {
        id: 'фингончая',
        name: 'финская гончая',
        level: 7,
        images: ['https://mydog.press/standart-book/6gr/img6/finnish.jpg'],
        similar: { 'русгончая': 50, 'эстонка': 50, 'бигль': 50, 'фоксхаунд': 50 }
    },
    {
        id: 'сегуджо',
        name: 'итальянская гончая сегудижо',
        level: 7,
        images: ['https://brit-petfood.com/file/nodes/product/Italsky%20segugio.jpg'],
        similar: { 'грейхаунд': 50, 'курцхаар': 50, 'русгончая': 50, 'трансильванская': 50 }
    },
    {
        id: 'огар',
        name: 'польский огар',
        level: 7,
        images: ['https://images.prismic.io/doge/36cbf788-6537-4582-a1fe-6700c42849c4_Polskij-ogar5.jpg?auto=compress,format'],
        similar: { 'копов': 50, 'бладхаунд': 50, 'русгончая': 50, 'трансильванская': 50 }
    },
    {
        id: 'поденгу',
        name: 'португальский поденгу',
        level: 7,
        images: ['https://alchetron.com/cdn/portuguese-podengo-4958b405-11ab-4378-95b2-751a2d1956a-resize-750.jpg','https://d121tcdkpp02p4.cloudfront.net/clim/93218/Three-Podengos-together-front.jpg'],
        similar: { 'ибиценко': 50, 'чирнеко': 50, 'дрт': 50, 'басенджи': 50 }
    },
    {
        id: 'посавская',
        name: 'посавская гончая',
        level: 7,
        images: ['https://streunerherzen.com/wp-content/uploads/2024/07/Posavac-Hound_reinrassig_2.jpg'],
        similar: { 'сербская': 50, 'бигль': 50, 'эстонка': 50, 'копов': 50 }
    },
    {
        id: 'арьежуа',
        name: 'арьежуа',
        level: 7,
        images: ['https://lh3.googleusercontent.com/proxy/ryqL32Rul8M0eNPATTPeN_7LmZOOoAA4jONyOtZLJe_-wYd04cHLcymvF_8ofdEvwWIBIDc'],
        similar: { 'порселен': 50, 'бигль': 50, 'русспеггончая': 50, 'гасконская': 50 }
    },
    {
        id: 'пуатевин',
        name: 'пуатевин',
        level: 7,
        images: ['https://s3.pet-yes.com/thumbs/512/BreedPhotos/60a27cfaf0796.jpeg'],
        similar: { 'фоксхаунд': 50, 'русспеггончая': 50, 'русгончая': 50, 'грейхаунд': 50 }
    },
    {
        id: 'ниверне',
        name: 'нивернеский гриффон',
        level: 7,
        images: ['https://i.pinimg.com/736x/61/18/38/6118380b4fa13561bb0e9887f231c755.jpg'],
        similar: { 'оттерхаунд': 50, 'спиноне': 50, 'гриффонкор': 50, 'бассетгриффон': 50 }
    },
    {
        id: 'шиллер',
        name: 'шиллерстёваре',
        level: 7,
        images: ['https://ohota-rybalka-kirov.ru/wp-content/uploads/2017/02/schiller-hound.png'],
        similar: { 'фингончая': 50, 'гамильтон': 50, 'русгончая': 50, 'эстонка': 50 }
    },

    // --- Легавые и Спаниели ---
    {
        id: 'францспаниель',
        name: 'французский спаниель',
        level: 7,
        images: ['https://egida.by/_pu/4/43889896.jpg'],
        similar: { 'ирсеттер': 50, 'мюнстер': 50, 'бретон': 50, 'спрингер': 50 }
    },
    {
        id: 'понтодемер',
        name: 'эпаньоль понт-одемер',
        level: 7,
        images: ['https://lh3.googleusercontent.com/proxy/9oqbPUTaSGaeeaFUumgzBikmJTJjMsLgCQDybZGRCcen1CK1n4Bm-8ZfXGSJy1Xt4v2ztuduswA'],
        similar: { 'ирлводный': 50, 'пудель': 50, 'барбет': 50, 'спаниель': 50 }
    },
    {
        id: 'словацкая',
        name: 'словацкая жесткошерстная легавая',
        level: 7,
        images: ['https://cdn.tvaryny.com/wp-content/uploads/2014/11/gallery-148097_1.jpg'],
        similar: { 'дратхаар': 50, 'фоусек': 50, 'веймаранер': 50, 'гриффонкор': 50 }
    },
    {
        id: 'арьежбракк',
        name: 'арьежский бракк',
        level: 7,
        images: ['https://egida.by/_pu/8/31236682.jpg'],
        similar: { 'овернский': 50, 'бургосская': 50, 'курцхаар': 50, 'поинтер': 50 }
    },
    {
        id: 'стародатская',
        name: 'стародатская легавая',
        level: 7,
        images: ['https://storage-api.petstory.ru/resize/800x800x80/c8/e8/d8/c8e8d8f8428548f2a32612cda57fac1f.jpeg'],
        similar: { 'курцхаар': 50, 'поинтер': 50, 'браккоитальано': 50, 'веймаранер': 50 }
    },

    // --- Терьеры и Шпицы ---
    {
        id: 'немшпиц',
        name: 'немецкий малый шпиц, кляйншпиц',
        level: 7,
        images: ['https://fotkiflo.ru/wp-content/uploads/nemetskii-kliain-shpits-belyi-1.webp'],
        similar: { 'миттельшпиц': 50, 'пом': 50, 'гроссшпиц': 50, 'вольпино': 50 }
    },
    {
        id: 'ненецкая',
        name: 'ненецкая оленегонная лайка',
        level: 7,
        images: ['https://rus.team/images/article/81121/1737570492-bo0hm.webp','https://nia14.ru/images/news/qa1036.JPG'],
        similar: { 'самоед': 50, 'лапполен': 50, 'финлапп': 50, 'шведлапп': 50 }
    },
    {
        id: 'канадская',
        name: 'канадская эскимосская собака',
        level: 7,
        images: ['https://www.omlet.us/images/cache/1024/683/canadian-eskimo-dog-in-the-wilderness.jpg','https://www.purina.co.uk/sites/default/files/2022-07/Canadian%20Eskimo%20Dog1.jpg?h=01c2aecf&itok=_Vzh4PCv'],
        similar: { 'гренка': 50, 'маламут': 50, 'хаски': 50, 'самоед': 50 }
    },
    {
        id: 'пунгсан',
        name: 'пунгсан',
        level: 7,
        images: ['https://lh3.googleusercontent.com/proxy/h1Gbae7cZd6bofHbs9vJ_aSQle-XkBFq2oQO89rPtJwj-h3QrYDQmVlsfyIQHP6HJgfRyh_2ZawRtDKUZHnV2DN2ImWH8ABFx7oEb6p2d5942T5146o4slw4'],
        similar: { 'джиндо': 50, 'всл': 50, 'кишу': 50, 'хоккайдо': 50 }
    },
    {
        id: 'тедди',
        name: 'тедди-рузвельт-терьер',
        level: 7,
        images: ['https://images.prismic.io/doge/e3f3560f-2e9e-4f71-aa32-a985a6d7e667_teddy-roosevelt-terrier-2.jpg?auto=compress,format'],
        similar: { 'рэт': 50, 'дрт': 50, 'тойфокс': 50, 'цвергпинчер': 50 }
    },
    {
        id: 'килео',
        name: 'ки-лео',
        level: 7,
        images: ['https://www.allekleinehunderassen.de/img/hunderasse/kyi-leo/kyi-leo-101.jpg'],
        similar: { 'мальтезе': 50, 'лхаса': 50, 'шитцу': 50, 'гаванез': 50 }
    },

    // --- Редкие и Экзотические ---
    {
        id: 'шалайка',
        name: 'собака сулимова, шалайка',
        level: 7,
        images: ['https://sev-in.ru/sites/default/files/inline-images/1548863830_0_138_1772_1135_600x0_80_0_0_daf3e30d7c3d44264e9388c7734accfe.jpg'],
        similar: { 'зсл': 50, 'дворняга': 50, 'немшпиц': 50, 'сиба': 50 }
    },
    {
        id: 'теломиан',
        name: 'теломиан',
        level: 7,
        images: ['https://petchef.my/wp-content/uploads/2024/10/telomian_1.webp'],
        similar: { 'басенджи': 50, 'каролинская': 50, 'ханаан': 50, 'дворняга': 50 }
    },
    {
        id: 'блэкмаут',
        name: 'блэк-маут-кер',
        level: 7,
        images: ['https://www.dogster.com/wp-content/uploads/2019/11/Black-Mouth-Cur-sitting-on-snow_Wirestock-Creators_Shutterstock.jpg'],
        similar: { 'риджбек': 50, 'дворняга': 50, 'питбуль': 50, 'русгончая': 50 }
    },

    // === УРОВЕНЬ 8 (Редкие, Аборигенные и Новые) ===
    {
        id: 'бухунд',
        name: 'норвежский бухунд',
        level: 8,
        images: ['https://zoogalaktika.ru/assets/images/pets/canis-familiaris/articles-str/Norveghskiy-buhund.webp'],
        similar: { 'норвэлкхаунд': 50, 'шведхунд': 50, 'исландская': 50, 'финлапп': 50, 'зсл': 50 }
    },
    {
        id: 'хеллефорс',
        name: 'хеллефорсхунд',
        level: 8,
        images: ['https://images.prismic.io/doge/98df6237-f8d1-435e-8fd5-23a0d5887758_halleforshund.png?auto=compress,format'],
        similar: { 'ямтхунд': 50, 'норвэлкхаунд': 50, 'зсл': 50, 'лайка': 50, 'карелка': 50 }
    },
    {
        id: 'черныйэлк',
        name: 'черный норвежский элкхаунд',
        level: 8,
        images: ['https://www.hedmarkelghundklubb.no/wp-content/uploads/2021/08/21-Ella-stiller-opp-scaled.jpg'],
        similar: { 'норвэлкхаунд': 50, 'ямтхунд': 50, 'шведлапп': 50, 'карелка': 50, 'шипперке': 50 }
    },
    {
        id: 'чукотская',
        name: 'чукотская ездовая',
        level: 8,
        images: ['https://www.russiadiscovery.com/upload/files/meta_tur-na-chukotku-na-sobakakh-3_1624882235.jpg'],
        similar: { 'хаски': 50, 'маламут': 50, 'самоед': 50, 'гренка': 50, 'якут': 50, 'канадская': 50 }
    },
    {
        id: 'сахалин',
        name: 'сахалинский хаски, карафуто-кен',
        level: 8,
        images: ['https://lapkins.ru/upload/iblock/f86/2phwi86y1ofjkdotsowo1amirgpttn7s.jpg'],
        similar: { 'хаски': 50, 'акита': 50, 'маламут': 50, 'хоккайдо': 50, 'якут': 50 }
    },
    {
        id: 'чунцин',
        name: 'китайский чунцин',
        level: 8,
        images: ['https://dogipediya.ru/wp-content/uploads/2019/01/kitajskij-buldog.jpg'],
        similar: { 'шарпей': 50, 'тайскийриджбек': 50, 'стафф': 50, 'мопс': 50, 'кангал': 50 }
    },
    {
        id: 'рюкю',
        name: 'рюкю-ину',
        level: 8,
        images: ['https://upload.wikimedia.org/wikipedia/commons/a/a4/Ryukyu_dog_pair.jpg'],
        similar: { 'кайкен': 50, 'шикоку': 50, 'сиба': 50, 'кишу': 50, 'тайскийриджбек': 50 }
    },
    {
        id: 'кинтамани',
        name: 'кинтамани',
        level: 8,
        images: ['https://kisapes.ru/wp-content/uploads/2023/11/kintamani-06.jpg'],
        similar: { 'самоед': 50, 'япшпиц': 50, 'ханаан': 50, 'дворняга': 50, 'сиба': 50 }
    },
    {
        id: 'тайвань',
        name: 'тайваньская собака (формоз)',
        level: 8,
        images: ['https://i.pinimg.com/originals/8f/03/b6/8f03b60fa7e99b8e8bd5659b529df5bc.jpg'],
        similar: { 'ханаан': 50, 'каролинская': 50, 'басенджи': 50, 'ксоло': 50, 'теломиан': 50 }
    },
    {
        id: 'фишпиц',
        name: 'финский шпиц',
        level: 8,
        images: ['https://brit-petfood.com/file/nodes/product/finsky%20spic.JPG'],
        similar: { 'карелка': 50, 'зсл': 50, 'норрботтен': 50, 'лундехунд': 50, 'норвэлкхаунд': 50 }
    },
    {
        id: 'англтой',
        name: 'английский той-терьер',
        level: 8,
        images: ['https://upload.wikimedia.org/wikipedia/commons/c/ca/ENGLISH_TOY_TERRIER%2C_NO_JV-14_NO_UCH_X-Pected_Dine_Mites_X-Factor_%2823995274170%29.jpg'],
        similar: { 'манчестер': 50, 'цвергпинчер': 50, 'той': 50, 'пражскийкрысарик': 50, 'левретка': 50 }
    },
    {
        id: 'лукас',
        name: 'лукас-терьер',
        level: 8,
        images: ['https://egida.by/_pu/6/74062242.jpg'],
        similar: { 'силихем': 50, 'норфолк': 50, 'керн': 50, 'дендидимонт': 50, 'чешский': 50 }
    },
    {
        id: 'пламмер',
        name: 'пламмер-терьер',
        level: 8,
        images: ['https://egida.by/_pu/4/32181901.jpg'],
        similar: { 'бигль': 50, 'дрт': 50, 'паттердейл': 50, 'гладфокс': 50, 'рэт': 50 }
    },
    {
        id: 'тентерфилд',
        name: 'тентерфилд-терьер',
        level: 8,
        images: ['https://lh5.googleusercontent.com/proxy/U8ujWo22U-8pnG2pwAaRJemb4A1l8L5pT4IZlvN66f0g5_Crbsjg_WeShZkHUUAezh8LfhdFiw'],
        similar: { 'дрт': 50, 'тойфокс': 50, 'рэт': 50, 'цвергпинчер': 50, 'бразильский': 50 }
    },
    {
        id: 'смоусхонд',
        name: 'голландский смоусхонд',
        level: 8,
        images: ['https://petstory.ru/resize/800x800x80/upload/images/articles/breeds/hollandse-smoushond/1.jpg'],
        similar: { 'миттельшнауцер': 50, 'бордертерьер': 50, 'гриффон': 50, 'пинчер': 50, 'ирландскийтерьер': 50 }
    },
    {
        id: 'австрийский',
        name: 'австрийский пинчер',
        level: 8,
        images: ['https://dogzilla.ru/wp-content/uploads/2019/05/avstrijskij-pincher-2.jpg'],
        similar: { 'немпинчер': 50, 'цвергпинчер': 50, 'энтлебухер': 50, 'дворняга': 50, 'келпи': 50 }
    },
    {
        id: 'блюгасконь',
        name: 'голубой гасконский бассет',
        level: 8,
        images: ['https://s3.pet-yes.com/BreedPhotos/609d8a56a9972.jpeg'],
        similar: { 'гасконская': 50, 'бассетхаунд': 50, 'бассетгриффон': 50, 'бигль': 50, 'грандбассет': 50 }
    },
    {
        id: 'фовбассет',
        name: 'рыжий бретонский бассет',
        level: 8,
        images: ['https://kisapes.ru/wp-content/uploads/2024/04/basset-fauve-de-bretagne-09.jpg'],
        similar: { 'бассетгриффон': 50, 'гриффон': 50, 'древер': 50, 'такса': 50, 'грандбассет': 50 }
    },
    {
        id: 'фовгриффон',
        name: 'рыжий бретонский гриффон',
        level: 8,
        images: ['https://мосохота.рф/25085-large_default/bretonskij-ryzhevatyj-griffonryzhij-bretonskij-griffon-franciya.jpg'],
        similar: { 'бассетгриффон': 50, 'оттерхаунд': 50, 'ниверне': 50, 'спиноне': 50, 'гриффонкор': 50 }
    },
    {
        id: 'инглишкун',
        name: 'английский красно-крапчатый кунхаунд',
        level: 8,
        images: ['https://ohota-rybalka-kirov.ru/wp-content/uploads/2017/02/Coonhound6.jpg'],
        similar: { 'кунхаунд': 50, 'блютик': 50, 'редбон': 50, 'уолкер': 50, 'плотт': 50 }
    },
    {
        id: 'маджестик',
        name: 'маджестик трии хаунд',
        level: 8,
        images: ['https://static.wikia.nocookie.net/animals-are-cool/images/d/d6/MajesticTreeHoundDogBull2YearsOld.jpg/revision/latest?cb=20230729012251'],
        similar: { 'бладхаунд': 50, 'кунхаунд': 50, 'плотт': 50, 'дворняга': 50, 'блютик': 50 }
    },
    {
        id: 'керрибигль',
        name: 'керри-бигль',
        level: 8,
        images: ['https://cdn.shopify.com/s/files/1/2570/4610/files/kerry_beag_large.jpg?v=1521018422'],
        similar: { 'бигль': 50, 'фоксхаунд': 50, 'эстонка': 50, 'харьер': 50, 'русгончая': 50 }
    },
    {
        id: 'артуа',
        name: 'артуазская гончая',
        level: 8,
        images: ['https://egida.by/_pu/8/62090784.jpg'],
        similar: { 'бигль': 50, 'бассет': 50, 'францгончая': 50, 'гончая': 50, 'арьежуа': 50 }
    },
    {
        id: 'бернская',
        name: 'бернская гончая',
        level: 8,
        images: ['https://storage-api.petstory.ru/resize/0x0x80/63/16/8c/63168c4d50ad467993f3d961c2894eba.jpeg'],
        similar: { 'юрская': 50, 'швицкая': 50, 'эстонка': 50, 'бигль': 50, 'русгончая': 50 }
    },
    {
        id: 'юрская',
        name: 'юрская гончая (бруно)',
        level: 8,
        images: ['https://upload.wikimedia.org/wikipedia/commons/2/27/Jura_Laufhund.jpg'],
        similar: { 'бладхаунд': 50, 'копов': 50, 'баварская': 50, 'гончая': 50, 'бернская': 50 }
    },
    {
        id: 'люцерн',
        name: 'люцернская гончая',
        level: 8,
        images: ['https://sobakovod.club/uploads/posts/2021-12/1639957231_1-sobakovod-club-p-sobaki-lyutsernskaya-gonchaya-1.jpg'],
        similar: { 'гасконская': 50, 'гончая': 50, 'эстонка': 50, 'русспеггончая': 50, 'блютик': 50 }
    },
    {
        id: 'швицкая',
        name: 'швицкая гончая',
        level: 8,
        images: ['https://i0.wp.com/jagen.blog/wp-content/uploads/2021/09/SZ.jpg?ssl=1'],
        similar: { 'бигль': 50, 'эстонка': 50, 'гончая': 50, 'фоксхаунд': 50, 'порселен': 50 }
    },
    {
        id: 'истрийская',
        name: 'истрийская гончая',
        level: 8,
        images: ['https://www.petshealth.ru/upload/medialibrary/dbc/dbcf9eee46a69fd88d3d7a60a3f41c29.jpg'],
        similar: { 'посавская': 50, 'сегуджо': 50, 'грейхаунд': 50, 'гончая': 50, 'поденгу': 50 }
    },
    {
        id: 'барак',
        name: 'боснийская грубошерстная гончая (барак)',
        level: 8,
        images: ['https://fordogtrainers.ru/images/breeds/poroda-sobak-bosnijskaya-grubosherstnaya-gonchaya.jpg'],
        similar: { 'спиноне': 50, 'гриффонкор': 50, 'дратхаар': 50, 'гончая': 50, 'ниверне': 50 }
    },
    {
        id: 'алано',
        name: 'аланский дог',
        level: 8,
        images: ['https://santreyd.ru/upload/staff/upload/staff/vplate/all_photos/d5639d89c2bbb8af8abcc02083762aec743fe45e.jpg'],
        similar: { 'канекорсо': 50, 'преса': 50, 'стафф': 50, 'боксер': 50, 'аргентин': 50 }
    },
    {
        id: 'конти',
        name: 'континентальный бульдог',
        level: 8,
        images: ['https://static.wikia.nocookie.net/dog/images/8/80/Continental-Bulldog-Brindle-Stud.jpg/revision/latest?cb=20151113155656&path-prefix=ru'],
        similar: { 'англбульдог': 50, 'боксер': 50, 'амбуль': 50, 'стафф': 50, 'ренессанс': 50 }
    },
    {
        id: 'олдбуль',
        name: 'староанглийский бульдог',
        level: 8,
        images: ['https://www.dogster.com/wp-content/uploads/2019/11/olde-english-bulldog-standing-on-grass-outdoors_Thorsten-Stark_Shutterstock.jpg'],
        similar: { 'англбульдог': 50, 'питбуль': 50, 'амбуль': 50, 'булли': 50, 'боксер': 50 }
    },
    {
        id: 'алапах',
        name: 'алапахский чистокровный бульдог',
        level: 8,
        images: ['https://images.prismic.io/doge/f863eaca-fbb5-443b-bb51-2f1f566cec61_9.jpg?auto=compress,format&rect=68,0,687,687&w=456&h=456'],
        similar: { 'амбуль': 50, 'питбуль': 50, 'катахула': 50, 'стафф': 50, 'аргентин': 50 }
    },
    {
        id: 'трансмонтано',
        name: 'трансмонтано (португальский мастиф)',
        level: 8,
        images: ['https://upload.wikimedia.org/wikipedia/commons/6/68/TRANSMONTANO.jpg'],
        similar: { 'эштрельская': 50, 'рафейру': 50, 'испмастиф': 50, 'алабай': 50, 'кавказ': 50 }
    },
    {
        id: 'бестиар',
        name: 'майоркская овчарка (ка де бестиар)',
        level: 8,
        images: ['https://i.pinimg.com/originals/bb/a9/b2/bba9b2d15d0c5c9c349c19b57d1e1080.jpg'],
        similar: { 'лабрадор': 50, 'доберман': 50, 'канекорсо': 50, 'преса': 50, 'босерон': 50 }
    },
    {
        id: 'аммастиф',
        name: 'американский мастиф',
        level: 8,
        images: ['https://zoonika.com/wp-content/uploads/2023/02/amerikanskiy-mastif-zdorove1-e1693318051184.jpeg'],
        similar: { 'англмастиф': 50, 'кангал': 50, 'сенбернар': 50, 'бурбуль': 50, 'бульмастиф': 50 }
    },
    {
        id: 'гарофиано',
        name: 'пастор гастрофьяно',
        level: 8,
        images: ['https://animalxop.com/cdn/shop/articles/d357e475-0efd-49b0-8444-cce1db79303c.jpg?v=1701897654'],
        similar: { 'немовчарка': 50, 'бельгийская': 50, 'колли': 50, 'аусси': 50, 'грюнендаль': 50 }
    },
    {
        id: 'корб',
        name: 'румынская воронная овчарка',
        level: 8,
        images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Romaniankorppi2.jpg/1280px-Romaniankorppi2.jpg'],
        similar: { 'алабай': 50, 'кавказ': 50, 'кангал': 50, 'карпатская': 50, 'ньюф': 50 }
    },
    {
        id: 'кинг',
        name: 'королевская овчарка',
        level: 8,
        images: ['https://www.dogbreedinfo.com/images27/KingShepherdMia2YearsOldPurebredDog1.jpg'],
        similar: { 'немец': 50, 'маламут': 50, 'шайло': 50, 'вео': 50, 'леонбергер': 50 }
    },
    {
        id: 'шайло',
        name: 'шилонская овчарка',
        level: 8,
        images: ['https://egida.by/_pu/4/14673953.jpg'],
        similar: { 'немец': 50, 'вео': 50, 'маламут': 50, 'кинг': 50, 'тервюрен': 50 }
    },
    {
        id: 'макнаб',
        name: 'макнаб',
        level: 8,
        images: ['https://upload.wikimedia.org/wikipedia/commons/a/ae/McNab_dog.jpg'],
        similar: { 'бордер': 50, 'келпи': 50, 'кули': 50, 'хилер': 50, 'англовчарка': 50 }
    },
    {
        id: 'блюлейси',
        name: 'блю-лейси',
        level: 8,
        images: ['https://petstory.ru/resize/800x800x80/upload/images/articles/breeds/blue-lacy/1.jpg'],
        similar: { 'веймаранер': 50, 'риджбек': 50, 'катахула': 50, 'гончая': 50, 'ибиценко': 50 }
    },
    {
        id: 'пикардспаниель',
        name: 'пикардийский спаниель',
        level: 8,
        images: ['https://images.prismic.io/doge/8908080e-61b8-468a-aa83-70e36131301d_pikardijskiy_spaniel_5.jpg?auto=compress,format&rect=0,0,700,700&w=456&h=456'],
        similar: { 'голубойпикард': 50, 'сеттер': 50, 'мюнстер': 50, 'спаниель': 50, 'бретон': 50 }
    },
    {
        id: 'сенусуж',
        name: 'эпаньоль де сент юзюж',
        level: 8,
        images: ['https://ohotnichiesobaki.ru/wp-content/uploads/2024/06/epanol-de-sent-yusyuzh2.jpg'],
        similar: { 'мюнстер': 50, 'бретон': 50, 'лангхаар': 50, 'спаниель': 50, 'францспаниель': 50 }
    },
    {
        id: 'мюррей',
        name: 'мюррей-ривер-ретривер',
        level: 8,
        images: ['https://i.pinimg.com/736x/68/f2/ec/68f2eca95c42be89c23eafad2055c1b2.jpg'],
        similar: { 'курчавый': 50, 'ирлводный': 50, 'спаниель': 50, 'чесапик': 50, 'пудель': 50 }
    },
    {
        id: 'силки',
        name: 'шелковистый виндхаунд',
        level: 8,
        images: ['https://kisapes.ru/wp-content/uploads/2024/07/silken-windhound-11.jpg'],
        similar: { 'борзая': 50, 'уиппет': 50, 'шелти': 50, 'салюки': 50, 'рпб': 50 }
    },
    {
        id: 'лонгвиппет',
        name: 'силкен виндспрайт',
        level: 8,
        images: ['https://maylilyfields.de/wp-content/uploads/2025/02/13Silkisweb-1024x768.jpg','https://www.silkenwindsprite-club.de/wp-content/uploads/2020/07/swc-silken-windsprite-merlin.jpg'],
        similar: { 'уиппет': 50, 'силки': 50, 'грейхаунд': 50, 'салюки': 50, 'тайган': 50 }
    },
    {
        id: 'русалка',
        name: 'русская салонная собака',
        level: 8,
        images: ['https://upload.wikimedia.org/wikipedia/commons/8/8c/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B0_%D0%A0%D0%BE%D1%81%D1%81_%D0%94%D0%BE%D0%BD_%D0%9F%D0%B5%D0%B4%D1%80%D0%BE%28%D1%81%D1%82%D0%BE%D0%B9%D0%BA%D0%B0%29.jpg'],
        similar: { 'йорк': 50, 'шицу': 50, 'пудель': 50, 'цветнаяболонка': 50, 'бивер': 50 }
    },
    {
        id: 'одис',
        name: 'одис',
        level: 8,
        images: ['https://www.mini-dogs.ru/photos/articles/petstory-odis-7.jpg'],
        similar: { 'южак': 50, 'фокс': 50, 'пудель': 50, 'цветнаяболонка': 50, 'тибеттерьер': 50 }
    },
    {
        id: 'канарская',
        name: 'лабито эренье',
        level: 8,
        images: ['https://i.pinimg.com/736x/51/94/8a/51948ad8d99ca1b702a5e04a9110b811.jpg'],
        similar: { 'немовчарка': 50, 'малинуа': 50, 'бордер': 50, 'гарофиано': 50, 'аусси': 50 }
    },
    // === УРОВЕНЬ 9 (Редкие, Аборигенные и Энциклопедические) ===
    
    // --- ЕВРОПЕЙСКИЕ ЛЕГАВЫЕ И ВОДЯНЫЕ ---
    {
        id: 'веттерхун',
        name: 'веттерхун (голландский водяной спаниель)',
        level: 9,
        images: ['https://worlddogfinder.com/imager/1300x740/upload/wetterhoun_1.png'],
        similar: { 'водсобака': 50, 'портводсобака': 50, 'курчавый': 50, 'спаниель': 50, 'стабихун': 50 }
    },
    {
        id: 'маркиз',
        name: 'маркизье, голландский тульпхонд',
        level: 9,
        images: ['https://www.infohund.de/wp-content/uploads/2025/02/Markiesje-4-Kopie.jpg'],
        similar: { 'кавалер': 50, 'папильон': 50, 'фален': 50, 'кокер': 50, 'спаниель': 50 }
    },
    {
        id: 'бурбонне',
        name: 'бракк дю бурбонне',
        level: 9,
        images: ['https://mepet.ru/photo/breed/158417794919.jpg'],
        similar: { 'курцхаар': 50, 'бретон': 50, 'выжла': 50, 'поинтер': 50, 'браккоитальано': 50 }
    },
    {
        id: 'сенжермен',
        name: 'бракк сен-жермен',
        level: 9,
        images: ['https://cdn.tvaryny.com/wp-content/uploads/2014/11/braque-saint-germain-dog.webp'],
        similar: { 'поинтер': 50, 'курцхаар': 50, 'браккоитальано': 50, 'веймаранер': 50, 'сеттер': 50 }
    },
    {
        id: 'францбракк',
        name: 'французский бракк (гасконский тип)',
        level: 9,
        images: ['https://cdn.tvaryny.com/wp-content/uploads/2014/11/le-braque-francais-gascogne-french-pointer.jpg'],
        similar: { 'курцхаар': 50, 'поинтер': 50, 'пикардспаниель': 50, 'выжла': 50, 'сеттер': 50 }
    },
    {
        id: 'брике',
        name: 'брикет-гриффон вандейский',
        level: 9,
        images: ['https://lh4.googleusercontent.com/proxy/g7-3Gg3yuiLnBnY0KJuKd064bCM6oIMzDrKakKPgWQMHpuJ530UjtzCLkQwgszBB-qmCDVUh'],
        similar: { 'бассетгриффон': 50, 'грандбассет': 50, 'гриффон': 50, 'спиноне': 50, 'дрт': 50, 'оттерхаунд': 50 }
    },

    // --- ЕВРОПЕЙСКИЕ ГОНЧИЕ ---
    {
        id: 'ганновер',
        name: 'ганноверская гончая',
        level: 9,
        images: ['https://s3.pet-yes.com/thumbs/512/BreedPhotos/609d888bd1020.jpeg'],
        similar: { 'баварская': 50, 'бладхаунд': 50, 'риджбек': 50, 'гончая': 50, 'копов': 50 }
    },
    {
        id: 'нембракк',
        name: 'немецкий бракк',
        level: 9,
        images: ['https://www.deutschebracken.de/s/cc_images/teaserbox_2411585715.jpg?t=1520980180'],
        similar: { 'вестфальский': 50, 'бигль': 50, 'русгончая': 50, 'трансильванская': 50, 'эстонка': 50 }
    },
    {
        id: 'францгончая',
        name: 'французская трехцветная гончая',
        level: 9,
        images: ['https://mepet.ru/photo/breed/158469138843.jpg'],
        similar: { 'русспеггончая': 50, 'фоксхаунд': 50, 'бигль': 50, 'посавская': 50, 'грейхаунд': 50 }
    },
    {
        id: 'малаявенерия',
        name: 'англо-французская малая венерия',
        level: 9,
        images: ['https://www.assuropoil.fr/wp-content/uploads/2023/08/anglo-francais-de-petite-venerie-chien-e1561647671822.jpg'],
        similar: { 'бигль': 50, 'харьер': 50, 'эстонка': 50, 'русгончая': 50, 'фоксхаунд': 50 }
    },
    {
        id: 'тирольская',
        name: 'тирольская гончая',
        level: 9,
        images: ['https://egida.by/_pu/4/99784458.jpg'],
        similar: { 'австрийский': 50, 'баварская': 50, 'копов': 50, 'русгончая': 50, 'эстонка': 50 }
    },
    {
        id: 'брандл',
        name: 'австрийский гладкошерстный бракк, брандл',
        level: 9,
        images: ['https://welpen.vdh.de/fileadmin/_processed_/d/8/csm_0c508d9dba87a4a5201ad0e5a937657148dd7680_b94cc4ab32.jpg'],
        similar: { 'копов': 50, 'трансильванская': 50, 'доберман': 50, 'эстонка': 50, 'гончая': 50 }
    },

    // --- ИБЕРИЙСКИЕ И СРЕДИЗЕМНОМОРСКИЕ ---
    {
        id: 'андалуз',
        name: 'поденко андалуз',
        level: 9,
        images: ['https://www.doogweb.es/wp-content/uploads/2012/06/Podenco_andaluz.jpg'],
        similar: { 'ибиценко': 50, 'поденгу': 50, 'чирнеко': 50, 'фараон': 50, 'гальго': 50 }
    },
    {
        id: 'мането',
        name: 'мането',
        level: 9,
        images: ['https://image.jimcdn.com/app/cms/image/transf/none/path/scc4975d26ee1665c/image/i0e772c2ca5888289/version/1391491717/image.jpg'],
        similar: { 'такса': 50, 'поденгу': 50, 'древер': 50, 'корги': 50, 'бассет': 50 }
    },
    {
        id: 'ратонеро',
        name: 'андалузский ратонеро',
        level: 9,
        images: ['https://www.hola.com/horizon/square/a5f07aae0d2b-bodeguero-t.jpg?im=Resize=(960),type=downsize'],
        similar: { 'дрт': 50, 'фокс': 50, 'прт': 50, 'тойфокс': 50, 'рэт': 50, 'бразильский': 50 }
    },
    {
        id: 'паллейро',
        name: 'кан де паллейро',
        level: 9,
        images: ['https://upload.wikimedia.org/wikipedia/commons/3/3d/Can_de_Palleiro_machos.jpg'],
        similar: { 'малинуа': 50, 'немец': 50, 'хердер': 50, 'восточноевропейская': 50, 'дворняга': 50 }
    },
    {
        id: 'махореро',
        name: 'махореро',
        level: 9,
        images: ['https://kisapes.ru/wp-content/uploads/2023/12/perro-majorero-08.jpg'],
        similar: { 'преса': 50, 'канекорсо': 50, 'стафф': 50, 'алабай': 50, 'дворняга': 50 }
    },
    {
        id: 'вильяно',
        name: 'вильяно де лас энкартасьонес',
        level: 9,
        images: ['https://animalxop.com/cdn/shop/articles/15693338fbf1b706f4c3bf59cf0b7aff.jpg?v=1701896681'],
        similar: { 'алано': 50, 'преса': 50, 'стафф': 50, 'канекорсо': 50, 'боксер': 50 }
    },
    {
        id: 'барбадо',
        name: 'барбадо да терсейра',
        level: 9,
        images: ['https://upload.wikimedia.org/wikipedia/commons/5/56/Barbado_da_Terceira_%28young_female%29.jpg'],
        similar: { 'каталонская': 50, 'пикардийская': 50, 'бриар': 50, 'пудель': 50, 'дворняга': 50 }
    },
    {
        id: 'кокони',
        name: 'кокони',
        level: 9,
        images: ['https://upload.wikimedia.org/wikipedia/commons/8/85/Kokoni.jpg'],
        similar: { 'дворняга': 50, 'спаниель': 50, 'папильон': 50, 'тибетспаниель': 50, 'пекинес': 50 }
    },
    {
        id: 'критская',
        name: 'критская гончая',
        level: 9,
        images: ['https://www.cretanbeaches.com/images/stories/fauna/mammals/hound/1.jpg'],
        similar: { 'чирнеко': 50, 'фараон': 50, 'басенджи': 50, 'ибиценко': 50, 'уиппет': 50 }
    },
    {
        id: 'греческая',
        name: 'греческая овчарка',
        level: 9,
        images: ['https://images.prismic.io/doge/3adea50a-d296-4cf7-abea-bd8d24c2948f_grecheskaya_ovcharka_1.jpg?auto=compress,format&rect=0,0,800,800&w=456&h=456'],
        similar: { 'торньяк': 50, 'акбаш': 50, 'алабай': 50, 'кавказ': 50, 'пиреней': 50 }
    },
    {
        id: 'корсиканская',
        name: 'корсиканская собака, курсину',
        level: 9,
        images: ['https://upload.wikimedia.org/wikipedia/commons/4/47/Corsicandogcursinu2.jpg'],
        similar: { 'босерон': 50, 'ханаан': 50, 'дворняга': 50, 'малинуа': 50, 'келпи': 50 }
    },

    // --- СКАНДИНАВСКИЕ И БАЛТИЙСКИЕ ---
    {
        id: 'готландская',
        name: 'готландская гончая',
        level: 9,
        images: ['https://www.skk.se/contentassets/30d2557c5f5e4eb783553bfb4182d36c/gotlandsstovare-2.jpg?width=1536&height=1024&quality=80&timestamp=20250612130853'],
        similar: { 'гамильтон': 50, 'фингончая': 50, 'шиллер': 50, 'эстонка': 50, 'русгончая': 50 }
    },
    {
        id: 'хальден',
        name: 'хальденстоваре',
        level: 9,
        images: ['https://upload.wikimedia.org/wikipedia/commons/1/1d/Haldenst%C3%B6vare.jpg'],
        similar: { 'русспеггончая': 50, 'фоксхаунд': 50, 'дункер': 50, 'бигль': 50, 'харрьер': 50 }
    },
    {
        id: 'хюген',
        name: 'хюгенхунд',
        level: 9,
        images: ['https://egida.by/_pu/4/81943508.jpg'],
        similar: { 'дункер': 50, 'бигль': 50, 'эстонка': 50, 'фингончая': 50, 'австрийский': 50 }
    },
    {
        id: 'датскийшпиц',
        name: 'датский шпиц',
        level: 9,
        images: ['https://upload.wikimedia.org/wikipedia/commons/d/d4/Dansk_spids2.jpg'],
        similar: { 'самоед': 50, 'немшпиц': 50, 'исландская': 50, 'эскимосс': 50, 'япшпиц': 50 }
    },
    {
        id: 'латвийская',
        name: 'латвийская гончая',
        level: 9,
        images: ['https://mepet.ru/photo/breed/158435179943.jpg'],
        similar: { 'эстонка': 50, 'литовская': 50, 'русгончая': 50, 'бигль': 50, 'копов': 50 }
    },
    {
        id: 'литовская',
        name: 'литовская гончая',
        level: 9,
        images: ['https://pet-dog.ru/wp-content/uploads/2023/08/litovskaya-gonchaya.jpeg'],
        similar: { 'латвийская': 50, 'копов': 50, 'гончая': 50, 'бладхаунд': 50, 'баварская': 50 }
    },

    // --- АМЕРИКАНСКИЕ РАБОЧИЕ И ДИЗАЙНЕРСКИЕ ---
    {
        id: 'маунтин',
        name: 'маунтин кер',
        level: 9,
        images: ['https://worldanimalfoundation.org/wp-content/uploads/2022/12/Mountain-Cur-Health-and-Care-review-1024x598.jpg'],
        similar: { 'блэкмаут': 50, 'плотт': 50, 'гончая': 50, 'питбуль': 50, 'дворняга': 50 }
    },
    {
        id: 'стивенс',
        name: 'стивенс кер',
        level: 9,
        images: ['https://i.pinimg.com/474x/83/0a/20/830a2047fc6c67427cf8a059bf8f722e.jpg'],
        similar: { 'маунтин': 50, 'кунхаунд': 50, 'дворняга': 50, 'плотт': 50, 'русгончая': 50 }
    },
    {
        id: 'леопардоваяам',
        name: 'американская леопардовая гончая',
        level: 9,
        images: ['https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/08151937/American-Leopard-Hound-On-White-01.jpg'],
        similar: { 'катахула': 50, 'плотт': 50, 'блютик': 50, 'кунхаунд': 50, 'гончая': 50 }
    },
    {
        id: 'аляска',
        name: 'аляскинский хаски',
        level: 9,
        images: ['https://media.istockphoto.com/id/1132995922/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D0%BB%D1%8F%D1%81%D0%BA%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D1%85%D0%B0%D1%81%D0%BA%D0%B8-%D1%81%D0%B0%D0%BD%D0%BA%D0%B8-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B8-%D0%B6%D0%B4%D1%83%D1%82-%D1%81%D0%B0%D0%BD%D0%B8-%D0%BF%D0%BE%D1%82%D1%8F%D0%BD%D1%83%D0%B2-%D1%81%D0%BE%D0%B1%D0%B0%D1%87%D0%B8%D0%B9-%D1%81%D0%BF%D0%BE%D1%80%D1%82-%D0%B7%D0%B8%D0%BC%D0%BE%D0%B9-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B8-%D0%BF%D0%B5%D1%80%D0%B5%D0%B4-%D0%B3%D0%BE%D0%BD%D0%BA%D0%BE%D0%B9-%D0%BD%D0%B0.jpg?s=170667a&w=0&k=20&c=y8Dw_56ZbktoopV9usKIRq7DCaTfHqtnfP5iRCLDcjU=','https://img.freepik.com/premium-photo/alaskan-husky-dog-chain-before-training-winter-fulllength-portrait-against-background-snow_666347-3249.jpg?w=360','https://img.freepik.com/premium-photo/two-black-red-alaskan-husky-dogs-chain-before-training-winter-standing-each-other_666347-3248.jpg'],
        similar: { 'хаски': 50, 'инуит': 50, 'якут': 50, 'зсл': 50, 'дворняга': 50 }
    },
    {
        id: 'пагль',
        name: 'пагль',
        level: 9,
        images: ['https://ufagorvet.ru/wp-content/uploads/2022/08/pagl2.jpg'],
        similar: { 'мопс': 50, 'бигль': 50, 'брабансон': 50, 'францбульдог': 50, 'бостон': 50 }
    },
    {
        id: 'голдендудль',
        name: 'голдендудль',
        level: 9,
        images: ['https://avatars.dzeninfra.ru/get-zen_doc/59126/pub_618ec4744a5c82530797a687_618ec716ce257623417a68ca/scale_1200'],
        similar: { 'голден': 50, 'пудель': 50, 'лабрадудль': 50, 'мальтипу': 50, 'водсобака': 50 }
    },
    {
        id: 'кавапу',
        name: 'кавапу',
        level: 9,
        images: ['https://ukr.media/static/ba/aimg/4/1/4/414114_2.jpg'],
        similar: { 'кавалер': 50, 'пудель': 50, 'кокер': 50, 'мальтипу': 50, 'бишон': 50 }
    },
    {
        id: 'бандог',
        name: 'американский бандог',
        level: 9,
        images: ['https://pro-animal.ru/wp-content/uploads/2023/12/bandog800x600-min.jpg'],
        similar: { 'питбуль': 50, 'мастино': 50, 'амбуль': 50, 'канекорсо': 50, 'стафф': 50 }
    },

    // --- АЗИАТСКИЕ И АБОРИГЕННЫЕ ---
    {
        id: 'фукуок',
        name: 'фукуокский риджбек',
        level: 9,
        images: ['https://static.wixstatic.com/media/266222_97eb64a4396c412bbd11b7c8535bd6e3~mv2.jpeg/v1/fill/w_960,h_800,al_c,q_85,enc_avif,quality_auto/266222_97eb64a4396c412bbd11b7c8535bd6e3~mv2.jpeg'],
        similar: { 'тайскийриджбек': 50, 'риджбек': 50, 'дворняга': 50, 'басенджи': 50, 'ханаан': 50 }
    },
    {
        id: 'сапсари',
        name: 'сапсари',
        level: 9,
        images: ['https://volumes.ru/wp-content/uploads/2022/12/sapsali.webp'],
        similar: { 'бобтейл': 50, 'тибеттерьер': 50, 'южак': 50, 'терьер': 50, 'пудель': 50 }
    },
    {
        id: 'булликутта',
        name: 'булли кутта, пакистанский мастиф',
        level: 9,
        images: ['https://santreyd.ru/upload/iblock/133/1333a4ac0db6873130ce0f4d5df9fe3c.jpg.b.jpg'],
        similar: { 'алабай': 50, 'дог': 50, 'кангал': 50, 'аргентин': 50, 'амбуль': 50 }
    },
    {
        id: 'раджа',
        name: 'раджапалайям',
        level: 9,
        images: ['https://pecik.ru/upload/information_system_15/5/5/7/item_557/information_items_property_702.jpg'],
        similar: { 'мудхол': 50, 'грейхаунд': 50, 'чиппипарай': 50, 'салюки': 50, 'дог': 50 }
    },
    {
        id: 'чиппипарай',
        name: 'чиппипарай',
        level: 9,
        images: ['https://upload.wikimedia.org/wikipedia/commons/a/a4/Chippiparai.jpg'],
        similar: { 'слюги': 50, 'азавак': 50, 'салюки': 50, 'грейхаунд': 50, 'канни': 50 }
    },
    {
        id: 'канни',
        name: 'канни',
        level: 9,
        images: ['https://preview.redd.it/indian-breed-dog-chippiparai-one-of-the-most-beautiful-dog-v0-ew1evarltg1b1.jpg?width=600&format=pjpg&auto=webp&s=305cbd480898b705c49ecd80f5e586bfa6b276f7'],
        similar: { 'чиппипарай': 50, 'грейхаунд': 50, 'уиппет': 50, 'салюки': 50, 'азавак': 50 }
    },
    {
        id: 'комбай',
        name: 'комбай',
        level: 9,
        images: ['https://images.news18.com/ibnlive/uploads/2022/04/kombai.jpg'],
        similar: { 'риджбек': 50, 'блэкмаут': 50, 'дворняга': 50, 'питбуль': 50, 'стафф': 50 }
    },
    {
        id: 'бакхмуль',
        name: 'бакхмуль (афганская аборигенная борзая)',
        level: 9,
        images: ['https://petstory.ru/resize/800x800x80/upload/images/articles/breeds/bakhmull/2.jpg'],
        similar: { 'афган': 50, 'тазы': 50, 'салюки': 50, 'тайган': 50, 'силки': 50 }
    },

    // --- НОВЫЕ И РЕДКИЕ ---
    {
        id: 'тамаскан',
        name: 'тамасканская собака',
        level: 9,
        images: ['https://image.jimcdn.com/app/cms/image/transf/none/path/s157574a57f87fddd/image/i2967ace4ea862d1a/version/1578640169/image.jpg'],
        similar: { 'инуит': 50, 'хаски': 50, 'маламут': 50, 'влчак': 50, 'сарлос': 50 }
    },
    {
        id: 'эло',
        name: 'эло',
        level: 9,
        images: ['https://lh5.googleusercontent.com/proxy/f_E-39Ne0DuI-jdRRy0LyGquIVG5BAypKGQnCtut5MPJsrJlZdj6ZDFoV2v4kbwLX-5JV3kK'],
        similar: { 'евразиер': 50, 'чау': 50, 'бобтейл': 50, 'самоед': 50, 'пекинес': 50 }
    },

// ... другие породы ...
    
    // === ДВОРНЯГА (ОДИН ОБЪЕКТ, МНОГО ФОТО) ===
    {
        id: 'дворняга',
        name: 'дворняга',
        level: 'special', // Специальный уровень, чтобы не попадал в выборку фильтром, мы добавим его вручную
        images: [
            'https://sun9-84.userapi.com/s/v1/ig1/PqASSwp9xNYaLl44Mn-wFJR34ROXWILAKV4CrPgWwThnznRBahh_codiDLpVn-7Fbf5nBOA1.jpg?quality=96&as=32x51,48x77,72x115,108x173,160x256,240x384,360x576,480x768,540x864,640x1024,720x1152,1080x1728,1200x1920&from=bu&cs=1200x0',
            'https://sun9-51.userapi.com/s/v1/ig2/VhnRdhTFQLhGsRD5R7QMmiESZAiXgcYFN9AFH5u7_AmJ0yZr84tl9rGEBl5oyDgVqmmpP_HhFIrcXJrbaUzM7GRw.jpg?quality=96&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1067x1600&from=bu&cs=1067x0',
            'https://sun9-33.userapi.com/s/v1/ig1/F7R0Lnkep5bXzmKmP8cFbufxGsteWy2aowQ6LESklmvWn1cM_EAQ27pi75Q33Z3d7N2CT6TY.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&from=bu&cs=1080x0',
            'https://sun9-19.userapi.com/s/v1/ig1/gIPJf-eqMAa5DbJJ8y1X2L9fXUe8Pj-aZfKPeMc0nGacJHEa-qP9RM0JZipRvQmGtNEt0fWc.jpg?quality=96&as=32x31,48x47,72x71,108x106,160x157,240x235,360x353,480x470,540x529,640x627,720x705,1080x1058,1279x1253&from=bu&cs=1279x0',
            'https://sun9-44.userapi.com/s/v1/ig2/ITpSiheiMQSV8TZokpcTiZK3_Ky5gC60d9zBIyazS6uvGq_T3YRTOuCZPidOWrRt30k8cWwNSz0jIahzvpSbUlVL.jpg?quality=96&as=32x47,48x70,72x105,108x157,160x233,240x350,360x524,480x699,540x787,640x932,659x960&from=bu&cs=659x0',
            'https://sun9-86.userapi.com/s/v1/ig2/Zm-678F6kHRnTmtCJhGDY3m8H-KepL36bCAoiINzprnlsth9xheuvTymHH6aMmASmPThe9NlN5rMU6FycjyE5oZu.jpg?quality=95&as=32x46,48x69,72x104,108x156,160x231,240x347,360x520,480x693,540x780,640x924,720x1040,1080x1559,1280x1848,1440x2079,1773x2560&from=bu&cs=1773x0',
            'https://sun9-1.userapi.com/s/v1/ig2/fTK8sNnc2_ohRYyFBfO845Xb0kBOo6FwYhXJksxRSOMI_18JAT_gRkEXlBfi1S8VooMtak7GKkTHQcXCyY-MNzS-.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1074x1074&from=bu&cs=1074x0',
            'https://sun9-31.userapi.com/s/v1/ig2/vteTTgvs6qMFx_XCtRHRHIKWNDfTcQ2kx6dUoyrYUpniu0vu3wkpiNXdQF07gksiTooMGxDOwbHt9YpwaJ6CHFVI.jpg?quality=95&as=32x21,48x31,72x46,108x69,160x103,240x154,360x231,480x308,540x347,640x411,720x463,1080x694,1280x822,1440x925,2560x1645&from=bu&cs=2560x0',
            'https://sun9-5.userapi.com/s/v1/ig2/gtatxKYSs733hixkmmZulT1U8YbKKMvfVb4w2qCeH6XyqirHSXDVqviT-yN-l_PaRCYz71TLEdoW9xBEufeHh5-Z.jpg?quality=96&as=32x21,48x32,72x48,108x72,160x106,240x159,360x239,480x319,540x358,640x425,720x478,1080x717,1280x849,1440x956,2560x1699&from=bu&cs=2560x0',
            'https://sun9-4.userapi.com/s/v1/ig2/2ifVHsxP1ceBQWUnI9AkJiNJlHC0PVPTHNxrlb5paJ9ZF-e9_d0iI4FOO2P0fJsRvpwfvUOP4-E4dQ2IL3DWNvVj.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x241,240x361,360x541,480x722,540x812,640x962,720x1082,1080x1623,1280x1924,1440x2165,1703x2560&from=bu&cs=1703x0',
            'https://sun9-31.userapi.com/s/v1/ig2/bmMTT9W_Uq1Yu_e_wBBG5EJ172i6UL0rX_axtGeabn-tJqHB6UYgcVAr1l0zpzAUc3o6XZ_XQBFaAnDOVD_I1l2M.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,754x754&from=bu&cs=754x0',
            'https://sun9-21.userapi.com/s/v1/ig2/YD2JTbgNgcPYLCKDZl9pE-prQ1NxHzfM8TUriDc-rFcr4cKsjCvjjBdCU8GYFFWsRLXMkOf58FFBUXUsrU_vlg4H.jpg?quality=96&as=32x40,48x60,72x90,108x135,160x200,240x300,360x450,480x600,540x675,640x800,720x900,828x1035&from=bu&cs=828x0'
        ],
        similar: { 'хаски': 50, 'немец': 50, 'бордер': 50, 'аусси': 50, 'зсл': 50, 'кавказ': 50, 'кули': 50, 'лабрадор': 50, 'англкокер': 50, 'малинуа': 50, 'грюнендаль': 50, 'ротвейлер': 50, 'кавалер': 50, 'маремма': 50, 'ягдтерьер': 50, 'бассетгрифон': 50, 'дрт': 50, 'фоксхаунд': 50 } 
    }
];

