import { lazy } from "react";

const aboutUsSection = () =>{

    const contentDiv = document.getElementById("content")

    const aboutDiv = document.createElement("section")
    aboutDiv.classList.add("about");

    const header = document.createElement("h1");
    header.textContent = "About Us";

    const description = document.createElement("p");
    description.textContent = `We bring you the authentic taste of Italian coffee and desserts,
  made with love and tradition. Our café is a cozy spot for coffee lovers,
  dessert enthusiasts, and those who appreciate a warm atmosphere.`;

    const picImg = document.createElement("img");
    picImg.src = "https://images.unsplash.com/photo-1509042239860-f550ce710b93";
    picImg.alt = "Coffe shop";

    aboutDiv.appendChild(header);
    aboutDiv.appendChild(description);
    aboutDiv.appendChild(picImg);

    contentDiv.appendChild(aboutDiv);
}
export default aboutUsSection;
