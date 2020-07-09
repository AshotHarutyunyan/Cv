let scrollcontainer = document.querySelector('.main_content');
let links = document.querySelectorAll('.nav_list_link');
let moblinks = document.querySelectorAll('.response_nav_list_link');
let sections = document.querySelectorAll('.main_content_item');
let chekcing = 1;
let lines = document.querySelectorAll('.white_line');
let fieldlines = document.querySelectorAll('.field_line');
let fieldnumber = document.querySelectorAll('.field_number');
let burgerbtn = document.querySelector('.nav_btn');
let translatebtn = document.querySelectorAll('.translate');
let lang =   document.querySelectorAll('.lang');
var changeTimer = false;
    
let searchParams = new URLSearchParams(location.search);
if(searchParams.has('lang')){
    let languege = searchParams.get('lang');
    removeClasses(translatebtn);
    document.querySelector(`.translate[data-lang="${languege}"]`).classList.add('active');
    fetch('js/lang.json')
    .then(response => response.json())
    .then(data => {
        lang.forEach((element) => {
            let key = element.getAttribute('data-key');
            element.textContent = data[languege][key];
        });
    });
}


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

function gotosection(i){
    chekcing = 0;
    removeClasses(links);
    links[i].classList.add('active');
    removeClasses(moblinks);
    moblinks[i].classList.add('active');
    if(i != 0){
        let scrollDiv = sections[i].offsetTop;
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
}


links.forEach((element, i) => {
    element.addEventListener('click', () => {
        gotosection(i);
    });
});

moblinks.forEach((element, i) => {
    element.addEventListener('click', () => {
        document.querySelector('.respones_menu').classList.remove('show');
        document.querySelector('.respones_menu_close').classList.remove('show');
        gotosection(i);
    });
});

burgerbtn.addEventListener('click', () => {
    document.querySelector('.respones_menu').classList.add('show');
    document.querySelector('.respones_menu_close').classList.add('show');
});

document.querySelector('.respones_menu_close').addEventListener('click', () => {
    document.querySelector('.respones_menu').classList.remove('show');
    document.querySelector('.respones_menu_close').classList.remove('show');
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



translatebtn.forEach((element, i) => {
    element.addEventListener('click', () => {
        removeClasses(translatebtn);
        element.classList.add('active');
        let languege = element.getAttribute('data-lang');
        let searchParams = new URLSearchParams(location.search);
        if(searchParams.has('lang')){
            searchParams.set('lang',languege);
        }else{
            searchParams.append('lang',languege);
        }
        window.history.replaceState('','',`?${searchParams}`);
        fetch('js/lang.json')
            .then(response => response.json())
            .then(data => {
                lang.forEach((element) => {
                    let key = element.getAttribute('data-key');
                    element.textContent = data[languege][key];
                });
            });
            });
});
