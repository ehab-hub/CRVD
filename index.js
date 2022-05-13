// cursor
var cursor1 = document.querySelector('.cursor1');
var cursor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove', function(e) {
    cursor1.style.cssText = cursor2.style.cssText = "left: " + e.clientX +
        "px; top: " + e.clientY + "px;";
});
//end cursor
// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
    // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
    // nav links click event
    navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }
}
/////////////////// arabic version //////////////////
var english = document.querySelector(".english");
var arabic = document.querySelector(".arabic");
// 
var navItem1 = document.querySelector(".nav-item-1");
var navItem2 = document.querySelector(".nav-item-2");
var navItem3 = document.querySelector(".nav-item-3");
var navItem4 = document.querySelector(".nav-item-4");
var navItem5 = document.querySelector(".nav-item-5");

// 
var aboutMainTextEn = document.querySelector(".about-main-text");
var aboutMainTextAr = document.querySelector(".about-main-text-ar");

var buttonsHolder = document.querySelector(".buttons-holder");
var contactBtn = document.querySelector(".contact-btn");
var servicesBtn = document.querySelector(".services-btn");

// 
var visionHeaderEn = document.querySelector(".vision-header");
var visionHeaderAr = document.querySelector(".vision-header-ar");

var visionParagraphEn = document.querySelector(".vision-p");
var visionParagraphAr = document.querySelector(".vision-p-ar");
//
var servicesHeaderEn = document.querySelector(".services-header");
var servicesParagraphEn = document.querySelector(".services-p");
var arabicDiv = document.querySelector(".arabic-div");

// var servicesParagraphEn = document.querySelector(".services-p");
// var servicesParagraphAr = document.querySelector(".services-p-ar");
// 
var cardTitle1En = document.querySelector(".card-title-1");
var cardTitle2En = document.querySelector(".card-title-2");
var cardTitle3En = document.querySelector(".card-title-3");

var cardTitle1Ar = document.querySelector(".card-title-1-ar");
var cardTitle2Ar = document.querySelector(".card-title-2-ar");
var cardTitle3Ar = document.querySelector(".card-title-3-ar");
// 
var quote1En = document.querySelector(".quote-1");
var quote2En = document.querySelector(".quote-2");
var quote3En = document.querySelector(".quote-3");

var quote1Ar = document.querySelector(".quote-1-ar");
var quote2Ar = document.querySelector(".quote-2-ar");
var quote3Ar = document.querySelector(".quote-3-ar");
// 
var addBtn1 = document.querySelector(".add-btn-3");
var addBtn2 = document.querySelector(".add-btn-2");
var addBtn3 = document.querySelector(".add-btn-1");
// 
var sectionHeader = document.querySelector(".section-header");

var sendText = document.querySelector(".send-text");
var place = document.querySelector(".place");

var copyrightEn = document.querySelector(".copyright");
var copyrightAr = document.querySelector(".copyright-ar");

// 


arabic.addEventListener('click', function() {
    navItem1.innerHTML = "مهمتنا والرؤيه";
    navItem2.innerHTML = "خدماتنا";
    navItem3.innerHTML = "تواصل معنا";
    navItem4.innerHTML = "انجليزى";
    navItem5.innerHTML = "عربى";

    // 
    aboutMainTextEn.style.display = "none";
    aboutMainTextAr.style.display = "block";
    // 
    // buttonsHolder.style.float = "right";
    buttonsHolder.classList.add("arabic-buttons");
    contactBtn.innerHTML = "تواصل معنا";
    servicesBtn.innerHTML = "خدماتنا";
    // 
    visionHeaderEn.style.display = "none";
    visionHeaderAr.style.display = "block";
    visionParagraphEn.style.display = "none";
    visionParagraphAr.style.display = "block";
    // 
    servicesHeaderEn.style.display = "none";
    servicesParagraphEn.style.display = "none";
    arabicDiv.style.display = "block";
    // 
    cardTitle1En.style.display = "none";
    cardTitle2En.style.display = "none";
    cardTitle3En.style.display = "none";
    cardTitle1Ar.style.display = "block";
    cardTitle2Ar.style.display = "block";
    cardTitle3Ar.style.display = "block";
    // 
    quote1En.style.display = "none";
    quote2En.style.display = "none";
    quote3En.style.display = "none";
    quote1Ar.style.display = "block";
    quote2Ar.style.display = "block";
    quote3Ar.style.display = "block";
    quote1Ar.style.textAlign = "right";
    quote2Ar.style.textAlign = "right";
    quote3Ar.style.textAlign = "right";
    // 
    addBtn1.innerHTML = "طلب";
    addBtn2.innerHTML = "طلب";
    addBtn3.innerHTML = "طلب";
    addBtn1.style.left = "unset";
    addBtn2.style.left = "unset";
    addBtn3.style.left = "unset";
    addBtn1.style.right = "5%";
    addBtn2.style.right = "5%";
    addBtn3.style.right = "5%";



    sendText.innerHTML = "ارسال";
    sendText.style.letterSpacing = "0px";

    place.innerHTML = "مصر , السعوديه";
    place.style.letterSpacing = "0px";

    sectionHeader.innerHTML = "تواصل معنا";
    sectionHeader.style.letterSpacing = "0px";


    copyrightEn.innerHTML = "&copy; CRVDجميع الحقوق محفوظة لـ ";
    copyrightEn.style.letterSpacing = "0px";


    // copyrightEn.style.display = "none";
    // copyrightAr.style.display = "block";

});

english.addEventListener('click', function() {
    navItem1.innerHTML = "Vision & Mission";
    navItem2.innerHTML = "Service";
    navItem3.innerHTML = "Contact";
    navItem4.innerHTML = "ENG";
    navItem5.innerHTML = "AR";

    aboutMainTextEn.style.display = "block";
    aboutMainTextAr.style.display = "none";
    // buttonsHolder.style.float = "left";
    buttonsHolder.classList.remove("arabic-buttons");
    contactBtn.innerHTML = "Contact us";
    servicesBtn.innerHTML = "Services";
    // 
    visionHeaderEn.style.display = "block";
    visionHeaderAr.style.display = "none";
    visionParagraphEn.style.display = "block";
    visionParagraphAr.style.display = "none";
    // 
    // servicesParagraphEn.style.display = "block";
    // servicesParagraphAr.style.display = "none";
    servicesHeaderEn.style.display = "inline-block";
    servicesParagraphEn.style.display = "block";
    arabicDiv.style.display = "none";
    arabicDiv.style.position = "relative";
    arabicDiv.style.right = "5%";

    // 
    cardTitle1En.style.display = "block";
    cardTitle2En.style.display = "block";
    cardTitle3En.style.display = "block";
    cardTitle1Ar.style.display = "none";
    cardTitle2Ar.style.display = "none";
    cardTitle3Ar.style.display = "none";
    // 
    quote1En.style.display = "block";
    quote2En.style.display = "block";
    quote3En.style.display = "block";

    quote1Ar.style.display = "none";
    quote2Ar.style.display = "none";
    quote3Ar.style.display = "none";

    addBtn1.innerHTML = "Request";
    addBtn2.innerHTML = "Request";
    addBtn3.innerHTML = "Request";
    addBtn1.style.left = "5%";
    addBtn2.style.left = "5%";
    addBtn3.style.left = "5%";
    addBtn1.style.right = "unset";
    addBtn2.style.right = "unset";
    addBtn3.style.right = "unset";

    sendText.innerHTML = "SEND";
    sendText.style.letterSpacing = "1px";

    place.innerHTML = "Egypt and Saudi Arabia";
    place.style.letterSpacing = "1px";

    copyrightEn.style.letterSpacing = "1px";

    // sectionHeader.style.letterSpacing = "6px";
    // place.style.letterSpacing = "0px";
    sectionHeader.innerHTML = "CONTACT";


    copyrightEn.innerHTML = "&copy; ALL RIGHTS RESERVED FOR CRVD";

});