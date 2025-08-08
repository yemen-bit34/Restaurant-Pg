import "./styles/styles.css";
import header from "./modules/header";
import loadHomepage from './modules/home';
import menuPage from "./modules/menu";
import aboutUsSection from "./modules/aboutUs"
import contactSection from "./modules/contact"
import footer from './modules/footer';

const content = document.querySelector("#content");

//creating the buttons of the nav
function createNavButtons() {
    const names = ["Home", "Menu", "About", "Contact"];
    return names.map((name) => {
    const btn = document.createElement("button");
    btn.textContent = name;
    btn.id = `${name.toLowerCase()}Btn`; // يعطيه id مثل homeBtn
    return btn;
    });
}
const navs = createNavButtons();
content.appendChild(header(navs));
content.appendChild(menuPage());



//get buttons to add listenr to it 
const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const contactBtn =  document.querySelector("#contactBtn");
//function to clean content before adding another content
function clearContent() {
    //delete everything exept header
    const headerElement = document.getElementById("header");
    content.innerHTML = "";
    content.appendChild(headerElement); //retrn header
    content.appendChild(footer());
}
//connect it with the button which is the homePage
homeBtn.addEventListener("click",()=>{
    clearContent();
    const homePage = loadHomepage();
    content.appendChild(homePage);
})
menuBtn.addEventListener("click",()=>{
    clearContent();
    const menupage = menuPage();
    content.appendChild(menupage);
})
aboutBtn.addEventListener("click",()=>{
    clearContent();
    aboutUsSection(); //bcz it calls itself from function itself
})
contactBtn.addEventListener("click",()=>{
    clearContent();
    const contactsection = contactSection();
    content.appendChild(contactsection);
})