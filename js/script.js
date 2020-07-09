let scrollcontainer = document.querySelector('.main_content');
    let links = document.querySelectorAll('.nav_list_link');
    let moblinks = document.querySelectorAll('.response_nav_list_link');
    let sections = document.querySelectorAll('.main_content_item');
    let chekcing = 1;
    let lines = document.querySelectorAll('.white_line');
    let fieldlines = document.querySelectorAll('.field_line');
    let fieldnumber = document.querySelectorAll('.field_number');
    let burgerbtn = document.querySelector('.nav_btn');


    function fillLines(n,m) {
        lines.forEach((element, i) => {
            if (i <= n && i >= m) {
                var precent = element.getAttribute('data-id');
                fieldlines[i].style.width = precent + '%';
                var w = 0,
                    t = setInterval(function () {
                        w = w + 1;
                        fieldnumber[i].textContent = w+'%';
                        fieldnumber[i].classList.add('fielded');
                        if (w == precent) {
                            clearInterval(t);
                            w = 0;
                        }
                    }, 25);
            }
        });
    }
    if(window.innerWidth > 768 ){
        fillLines(2,0);
    }

    function removeClasses(elemets) {
        for (var i = 0; i < elemets.length; i++) {
            elemets[i].classList.remove('active');
        }
    }

    function scrollLinks() {
        if (chekcing == 1) {
            if (event.srcElement.scrollTop >= sections[4].offsetTop - 100) {
                removeClasses(links);
                removeClasses(moblinks);
                links[4].classList.add('active');
                moblinks[4].classList.add('active');
            } else if (event.srcElement.scrollTop >= sections[3].offsetTop - 100) {
                removeClasses(links);
                removeClasses(moblinks);
                links[3].classList.add('active');
                moblinks[3].classList.add('active');
            } else if (event.srcElement.scrollTop >= sections[2].offsetTop - 100) {
                removeClasses(links);
                removeClasses(moblinks);
                links[2].classList.add('active');
                moblinks[2].classList.add('active');
            } else if (event.srcElement.scrollTop >= sections[1].offsetTop - 100) {
                removeClasses(links);
                removeClasses(moblinks);
                links[1].classList.add('active');
                moblinks[1].classList.add('active');
            } else {
                removeClasses(links);
                removeClasses(moblinks);
                links[0].classList.add('active');
                moblinks[0].classList.add('active');
            }
        }
    }

    var changeTimer = false;
    links.forEach((element, i) => {
        element.addEventListener('click', () => {
            chekcing = 0;
            removeClasses(links);
            links[i].classList.add('active');
            if(i != 0){
                let scrollDiv = sections[i].offsetTop - 70;
                scrollcontainer.scrollTo({
                    top: scrollDiv,
                    behavior: 'smooth'
                });
            }else{
                scrollcontainer.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
            if (changeTimer !== false) clearTimeout(changeTimer);
            changeTimer = setTimeout(function () {
                chekcing = 1;
                changeTimer = false;
            }, 1800);
        });
    });

    var changeMobTimer = false;
    moblinks.forEach((element, i) => {
        element.addEventListener('click', () => {
            document.querySelector('.respones_menu').classList.remove('show');
            document.querySelector('.respones_menu_close').classList.remove('show');
            chekcing = 0;
            removeClasses(links);
            links[i].classList.add('active');
            removeClasses(moblinks);
            moblinks[i].classList.add('active');
            if(i != 0){
                let scrollDiv = sections[i].offsetTop - 70;
                scrollcontainer.scrollTo({
                    top: scrollDiv,
                    behavior: 'smooth'
                });
            }else{
                scrollcontainer.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
            if (changeMobTimer !== false) clearTimeout(changeMobTimer);
            changeMobTimer = setTimeout(function () {
                chekcing = 1;
                changeMobTimer = false;
            }, 1800);
        });
    });

    burgerbtn.addEventListener('click', () => {
        document.querySelector('.respones_menu').classList.add('show');
        document.querySelector('.respones_menu_close').classList.add('show');
        showvar = 1;
    });

    document.querySelector('.respones_menu_close').addEventListener('click', () => {
        document.querySelector('.respones_menu').classList.remove('show');
        document.querySelector('.respones_menu_close').classList.remove('show');
        showvar = 1;
    });

    scrollcontainer.addEventListener('scroll', (event) => {
        scrollLinks();
        if(window.innerWidth <= 768 && event.srcElement.scrollTop >= 250 && !fieldnumber[2].classList.contains('fielded') ){
            fillLines(2,0);
        }
        if (event.srcElement.scrollTop >= 530 && !fieldnumber[4].classList.contains('fielded') && window.innerWidth > 768 ) {
            fillLines(10,3);
        }
        if (event.srcElement.scrollTop >= 1180 && !fieldnumber[4].classList.contains('fielded') && window.innerWidth <= 768 ) {
            fillLines(10,3);
        }
    });

    let arrLang = {
        'Eng': {
          'about': 'About Me',
          'personal': 'Personal Information',
          'education': 'Education',
          'skils': 'Skils',
          'works': 'My works',
          'download':"Download CV",
          'my_name':'Ashot Harutyunyan',
          'my_proffesion':'Junior Front End Developer',
          'about_sub':'21 year old / Front End Developer',
          'about_info':"Hi, I'm Ashot. From an early age, I've always been interested in computer games and apps. From the age of thirteen, I went to the TUMO Center and from there came up with the idea of ​​unlimited Internet opportunities. From the age of seventeen, I became interested in web programming. I am a calm person by nature, I quickly get along with new people, I am responsible and patient. I will be happy to join a new team, invest my knowledge in the progress of any business, acquire new knowledge and use it for my team, I will be happy to share my success with my colleagues.",
          'addres':'r. Armavir, v. Merdzavan, h. Yerevanyan, b. 63, a. 41, Armenia',
          'dmy':'24 april 1999',
          'langueges':'Langueges',
          'arm':'Armenian',
          'ru':'Russian',
          'eng':'English',
          'school':'School',
          'school_info':"From 2005 to 2014, I attended high school. Among my successes at school, I can mention my place in the top ten in the region in the kangaroo math competition.",
          'tumo_info':'From 2013 to 2016, I studied at TUMO Technology Center and was one of the best students at the center.',
          'collage':'Collage',
          'collage_info':'From 2014 to 2017, I studied at the Yerevan State College of Informatics.',
          'army':'Army',
          'army_info':'From 2017 to 2019, I served in the Armed Forces of the Republic of Armenia, in the combat positions of Artsakh.',
          'courses':'Private courses',
          'courses_info':'After demobilization in 2019, I went to BeeOnCode Center of web programming  and perfectly well finished courses.',
          'works_brusshete':'My first experience was creating some new pages on brusshete.com. From this site I have gained experience working with shopify cms.',
          'works_armfres':'I participated in the creation of the armfresh.com website, I created the app page that works with the ajax method, I created an opportunity to search the site with the ajax method.',
        },
        'Ru': {
            'about': 'О мне',
            'personal': 'Персоналная Информация',
            'education': 'Образавние',
            'skils': 'Навыки И Умения',
            'works': 'Мои работы',
            'download':"Скачать CV",
            'my_name':'Ашот Арутянян',
            'my_proffesion':'Начинаяший Front End Прогромист',
            'about_sub':'21 лет/ Front End Developer',
            'about_info':"Привет, я Ашот. С раннего возраста я всегда интересовался компьютерными играми и приложениями. С тринадцати лет я пошел в центр TUMO и оттуда пришел к идее неограниченных возможностей в Интернете. С семнадцати лет я заинтересовался веб-программированием. Я спокойный человек по натуре, я быстро ладлю с новыми людьми, я ответственен и терпелив. Я буду рад присоединиться к новой команде, вкладывать свои знания в развитие любого бизнеса, приобретать новые знания и использовать их для своей команды, я буду рад поделиться своим успехом с моими коллегами.",
            'addres':'р. Армавир, с. Мердзаван, у. Ереванян, д. 63, к. 41, Армения',
            'dmy':'24 апреля 1999',
            'langueges':'Знание Языков',
            'arm':'Армянскый',
            'ru':'Русскый',
            'eng':'Английскый',
            'school':'Школа',
            'school_info':"С 2005 по 2014 год я посещал среднюю школу. Среди моих успехов в школе я могу упомянуть свое место в десятке лучших в регионе на конкурсе математики по кенгуру.",
            'tumo_info':'С 2013 по 2016 год я учился в технологическом центре TUMO и был одним из лучших студентов в центре.',
            'collage':'Колледж',
            'collage_info':'С 2014 по 2017 год я учился в Ереванском государственном колледже информатики.',
            'army':'Служба',
            'army_info':'С 2017 по 2019 год служил в Вооруженных силах Республики Армения, на боевых позициях Арцаха.',
            'courses':'Приватные урокы',
            'courses_info':'После демобилизации в 2019 году я поступил в Центр обучения веб-программированию BeeOnCode и закончил с отличием.',
            'works_brusshete':'Моим первым опытом было создание нескольких новых страниц на brusshete.com. С этого сайта я приобрел опыт работы с shopify cms.',
            'works_armfres':'Я принимал участие в создании сайта armfresh.com, создал страницу приложения, которая работает с помощью метода ajax, я создал возможность поиска по сайту с помощью метода ajax.',
        },
        'Arm':{
            'about': 'Իմ Մասին',
            'personal': 'Անձնական տեղեկատվություն',
            'education': 'Կրթություն',
            'skils': 'Հմտություններ',
            'works': 'Իմ աշխատանքները',
            'download':"Ներբեռնել ռեզյումեն",
            'my_name':'Աշոտ Հարությունյան',
            'my_proffesion':'Սկսնակ Front End ծրագրավորող',
            'about_sub':'21 տարեկան/ Front End Developer',
            'about_info':"Ողջույն ես Աշոտն եմ:Փոքր տարիքից ես միշտ հետաքրքրվել եմ համակարգչային խաղերի, ծրագրերի ստեղծմամբ:Տասներեք տարեկանից հաճախել եմ ԹՈՒՄՈ կենտրոն և այնտեղից գաղափար եմ ձեռք բերել համացանցի անսահմանափակ հնարավորությունների մասին:Տասնյոթ տարեկանից սկսելեմ հետաքրքրվել վեբ ծրագրավորումով և փորձել եմ անել իմ  առաջին քայլերը այդ բնագավառում:Բնավորությամբ հանգիստ մարդ եմ ,արագ մերվում եմ նոր շրջապատի հետ,պատասխանատու եմ և համբերատար:Ուրախ կլինեմ միանալ նոր թիմի և ներդնել գիտելիքներս ցանկացած գործի առաջընթացի համար, և ձեռք բերել նոր գիտելիքներ ու դրանք օգտագործել ի շահ իմ թիմի, մեծ հաճույքով կկիսեմ հաջողություններս գործընկերներիս հետ:",
            'addres':'մ. Արմավիր, գ. Մերձավան, փ. Երևանյան, բ. 63, տ. 41, Հայաստան',
            'dmy':'24 ապրիլի 1999',
            'langueges':'Լեզուների իմացություն',
            'arm':'Հայերեն',
            'ru':'Ռուսերեն',
            'eng':'Անգրելեն',
            'school':'Դպրոց',
            'school_info':"2005 թվականից մինջև 2014 թվականը սովորել եմ  միջնակարգ դպրոցում : Դպրոցում ունեցած հաջողություններիցս կարող եմ նշել կենգուրու մաթեմատիկական մրցույթում մարզի լավագույն տասնյակում տեղ զբաղեցնելս:",
            'tumo_info':'2013 ից 2016 թվականներին սովորել եմ ԹՈՒՄՈ տեխնոլոգիական կենտրոնում և եղել եմ կենտրոնի լավագույն սաներից:',
            'collage':'Քոլեջ',
            'collage_info':'2014 ից 2017 թվականներին սովորել եմ Երեվանի ինֆորմատիկայի պետական քոլեջում :',
            'army':'Բանակ',
            'army_info':'2017 ից 2019 թվականներին ծառայել եմ Հայաստանի Հանրապետության զինված ուժերում ,Արցախի մարտական դիրքերում:',
            'courses':'Մասնավոր դասընթացներ',
            'courses_info':'2019 թվականին զորացրվելուց հետո սովորել եմ BeeOnCode վեբ ծրագրավորման ուսումնական կենտրոնում և ավարտել եմ գերազանց:',
            'works_brusshete':'Առաջին աշխատանքային փորձս եղել է   brusshete.com կայքում մի քանի նոր էջերի պատրաստումը: Այս կայքից ձեռք եմ բերել փորձ աշխատել  shopify cms-ով:',
            'works_armfres':'Մասնակցել եմ armfresh.com կայքի ստեղծմանը , ստեղծել եմ ապրաքների էջը որը աշխատում է այաքսային մեթոդիկայով ,ստեղծել եմ այաքսային մեթոդիկայով որոնման հնարավորություն կայքում:',
        }
    };

    let translatebtn = document.querySelectorAll('.translate');
    let lang =   document.querySelectorAll('.lang');

    translatebtn.forEach((element, i) => {
        element.addEventListener('click', () => {
            removeClasses(translatebtn);
            element.classList.add('active');
            let languege = element.getAttribute('data-lang');
            lang.forEach((element) => {
                let key = element.getAttribute('data-key');
                console.log(arrLang[languege][key]);
                element.textContent = arrLang[languege][key];
            });
        });
    });
