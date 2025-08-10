import cTiramisu from "../asset/cTiramisu.jpg";
import sTiramisu from "../asset/sTiramisu.jpg";
import mTiramisu from "../asset/mTiramisu.jpg";
import Espresso from "../asset/Espresso.jpg";
import Cappuccino from "../asset/Cappuccino.jpg";
import affogato from "../asset/affogato.jpg";
import Cannoli from "../asset/Cannoli.jpg";
import kRicotta from "../asset/kRicotta.jpg";
import Panna from "../asset/Panna.jpg";

const menuCategories = [
{
category: "Tiramisu Specials",
items: [
    {name: "Classic Tiramisu",price: "$6.99",image:cTiramisu,},
    {name: "Strawberry Tiramisu",price: "$7.50",image:sTiramisu,},
    {name: "Matcha Tiramisu",price: "$7.99",image:mTiramisu ,},
    ],
},{
category: "Coffee Drinks",
items: [
    {name: "Espresso",price: "$2.99",image:Espresso ,},
    {name: "Cappuccino",price: "$3.99",image:Cappuccino ,},
    {name: "Affogato",price: "$4.50",image: affogato,},
    ],
},{
category: "Italian Cakes & Desserts",
items: [
    {name: "Cannoli",price: "$3.99",image:Cannoli,},
    {name: "Ricotta Cheesecake",price: "$5.50",image:kRicotta,},
    {name: "Panna Cotta",price: "$4.75",image:Panna ,},
    ],
},
];
const menuPage = ()=>{
    const section = document.createElement("section");//container that will take all of cont of menu section
    section.classList.add("menu");

    const title = document.createElement("h1");//title for the section
    title.textContent = "Our Menu";
    section.appendChild(title);//append it inside section

    menuCategories.forEach((category) => {//foreach Category on menu
        const cardTitle = document.createElement("h2");//category title
        cardTitle.textContent = category.category;
        cardTitle.classList.add("menu-category-title");

        const menuItems = document.createElement("div"); //container for every item
         menuItems.classList.add("menu-items");

        category.items.forEach((item)=>{//loop on each item in category

            const itemDiv = document.createElement("div");//foreach product build card
            itemDiv.classList.add("menu-item");

            const img = document.createElement("img");//add img
            img.src = item.image;
            img.alt = item.name;

            const name = document.createElement("h3");//pro name
            name.textContent = item.name

            const price = document.createElement("p");//pro price
            price.textContent = item.price;

            itemDiv.appendChild(img)//add everything to product card
            itemDiv.appendChild(name)
            itemDiv.appendChild(price)


            menuItems.appendChild(itemDiv);//add each card to div
        })
        section.appendChild(cardTitle)//add cardTitle and its content to the section of menu
        section.appendChild(menuItems)
    })
    return section;
}
export default menuPage;