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
        similar: { 'српудель': 50, 'портводсобака': 50, 'пули': 50 }
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
        similar: { 'немец': 50, 'вео': 50, 'хердер': 50, 'бордер': 50 }
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
        similar: { 'кавказ': 50, 'ньюфаундленд': 50, 'сенбернар': 50, 'тибет': 50 }
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
        similar: { 'шелти': 50, 'бордер': 50, 'аусси': 50, 'борзая': 50 }
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
        similar: { 'бордер': 50, 'кули': 50, 'якут': 50, 'пом': 50, 'самоед': 50 }
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
        similar: { 'выжла': 50, 'курцхаар': 50 }
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
        similar: { 'грюнендаль': 50, 'малинуа': 50, 'коллидш': 50 }
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
        name: 'карело-финская лайка, финский шпиц',
        level: 3,
        images: ['https://foxspb.com/img/porody/finskij-shpicz-(karelo-finskaya-lajka).jpg','https://yac-wh-sb-prod-s3-media-04001.storage.yandexcloud.net/db_connection/1/layer_item/1/articles/6351/wysiwig-img/34870398_m_normal_none.webp'],
        similar: { 'рел': 50, 'сиба': 50, 'лис': 50 }
    },
    {
        id: 'норвэлкхаунд',
        name: 'норвежский элкхаунд',
        level: 3,
        images: ['https://kisapes.ru/wp-content/uploads/2022/01/norwegian-elkhound-06.jpg'],
        similar: { 'шведхунд': 50, 'зсл': 50, 'кеесхонд': 50 }
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
        similar: { 'шикоку': 50, 'акита': 50 }
    },
    {
        id: 'кликай',
        name: 'аляскинский кли-кай',
        level: 3,
        images: ['https://lapkins.ru/upload/resize_cache/iblock/634/412_2150_1/6341cb687fb112aa70a4c300c30555fc.jpg','https://sobakovod.club/uploads/posts/2021-12/thumbs/1638895668_1-sobakovod-club-p-sobaki-poroda-kli-kai-1.png'],
        similar: { 'хаски': 50, 'пом': 50, 'маламут': 50 }
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
        similar: { 'алабай': 50, 'акбаш': 50, 'пиреней': 50 }
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
        similar: { 'доберман': 50, 'ротвейлер': 50 }
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
        name: 'тайган (киргизская борзая)',
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
        similar: { 'бладхаунд': 50, 'спиноне': 50 }
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
        similar: { 'немец': 50, 'малинуа': 50, 'бшо': 50 }
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
        similar: { 'гриффон': 50, 'цвергшнауцер': 50, 'бельгийскийгриффон': 50 }
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
        images: [''],
        similar: { 'грейхаунд': 50, 'харт': 50, 'хортая': 50 }
    },
    {
        id: 'канарион',
        name: 'поденко канарио',
        level: 4,
        images: [''],
        similar: { 'фараон': 50, 'ибиценко': 50, 'чирнеко': 50 }
    },
    {
        id: 'вахтельхунд',
        name: 'немецкий вахтельхунд',
        level: 4,
        images: [''],
        similar: { 'спрингер': 50, 'бретон': 50, 'кокер': 50, 'русспаник': 50 }
    },
    {
        id: 'перуанская',
        name: 'перуанская голая собака',
        level: 4,
        images: [''],
        similar: { 'ксоло': 50, 'китай': 50, 'уиппет': 50 }
    },
    {
        id: 'портводсобака',
        name: 'португальская водяная собака',
        level: 4,
        images: [''],
        similar: { 'водсобака': 50, 'пули': 50, 'барбет': 50, 'пудель': 50 }
    },
    {
        id: 'пули',
        name: 'пули',
        level: 4,
        images: [''],
        similar: { 'комондор': 50, 'бергамаско': 50, 'водсобака': 50 }
    },
    {
        id: 'рчт',
        name: 'русский черный терьер',
        level: 4,
        images: [''],
        similar: { 'ризен': 50, 'эрдель': 50, 'бувье': 50, 'ньюф': 50 }
    },
    {
        id: 'бородатыйколли',
        name: 'бородатый колли',
        level: 4,
        images: [''],
        similar: { 'бобтейл': 50, 'бриар': 50, 'польскаянизинная': 50 }
    },
    {
        id: 'шведхунд',
        name: 'шведский вальхунд',
        level: 4,
        images: [''],
        similar: { 'пемброк': 50, 'норвэлкхаунд': 50, 'лайка': 50 }
    },
    {
        id: 'акита',
        name: 'акита-ину',
        level: 4,
        images: [''],
        similar: { 'сиба': 50, 'шикоку': 50, 'амакита': 50, 'лайка': 50 }
    },
    {
        id: 'амакита',
        name: 'американская акита',
        level: 4,
        images: [''],
        similar: { 'акита': 50, 'маламут': 50, 'кангал': 50 }
    },
    {
        id: 'аргентин',
        name: 'аргентинский дог',
        level: 4,
        images: [''],
        similar: { 'питбуль': 50, 'канекорсо': 50, 'алабай': 50 }
    },
    {
        id: 'фила',
        name: 'фила бразилейро',
        level: 4,
        images: [''],
        similar: { 'бладхаунд': 50, 'мастино': 50, 'бульмастиф': 50 }
    },
    {
        id: 'преса',
        name: 'канарский дог (преса канарио)',
        level: 4,
        images: [''],
        similar: { 'канекорсо': 50, 'стафф': 50, 'питбуль': 50, 'алабай': 50 }
    },
    {
        id: 'манчестер',
        name: 'манчестер-терьер',
        level: 4,
        images: [''],
        similar: { 'цвергпинчер': 50, 'той': 50, 'немпинчер': 50 }
    },
    {
        id: 'скай',
        name: 'скай-терьер',
        level: 4,
        images: [''],
        similar: { 'скотч': 50, 'силихем': 50, 'керн': 50 }
    },
    {
        id: 'силихем',
        name: 'силихем-терьер',
        level: 4,
        images: [''],
        similar: { 'вест': 50, 'скай': 50, 'скотч': 50, 'дендидимонт': 50 }
    },
    {
        id: 'дендидимонт',
        name: 'денди-динмонт-терьер',
        level: 4,
        images: [''],
        similar: { 'бедлингтон': 50, 'силихем': 50, 'пудель': 50 }
    },
    {
        id: 'кламбер',
        name: 'кламбер-спаниель',
        level: 4,
        images: [''],
        similar: { 'англкокер': 50, 'сенбернар': 50, 'суссекс': 50 }
    },
    {
        id: 'суссекс',
        name: 'суссекс-спаниель',
        level: 4,
        images: [''],
        similar: { 'кламбер': 50, 'кокер': 50, 'филд': 50 }
    },
    {
        id: 'бергамаско',
        name: 'бергамская овчарка (бергамаско)',
        level: 4,
        images: [''],
        similar: { 'пули': 50, 'комондор': 50, 'бриар': 50 }
    },
    {
        id: 'лаготто',
        name: 'лаготто-романьоло',
        level: 4,
        images: [''],
        similar: { 'водсобака': 50, 'пудель': 50, 'бедлингтон': 50 }
    },
    {
        id: 'келпи',
        name: 'австралийский келпи',
        level: 4,
        images: [''],
        similar: { 'хилер': 50, 'кули': 50, 'бордер': 50, 'немпинчер': 50 }
    },
    {
        id: 'крашки',
        name: 'крашская овчарка',
        level: 4,
        images: [''],
        similar: { 'шарпланинац': 50, 'кавказ': 50, 'леонбергер': 50 }
    },

// ... другие породы ...
    
    // === ДВОРНЯГА (ОДИН ОБЪЕКТ, МНОГО ФОТО) ===
    {
        id: 'dvornyaga',
        name: 'Дворняга',
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

