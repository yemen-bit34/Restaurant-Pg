import tImageBg from "../asset/tiramisu-bg.jpg"
const loadHomepage = () => {
    const home = document.createElement("section");
    home.classList.add("home");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Tiramisu Cafe";

    const paragraph = document.createElement("p");
    paragraph.textContent = `Serving the best homemade
                            tiramisu with love and
                            coffee since 2020.`;

const homeImage = document.createElement("img");
homeImage.src = tImageBg;
homeImage.alt = "Tiramisu";
homeImage.loading = "lazy";

home.appendChild(heading);
home.appendChild(paragraph);
home.appendChild(homeImage);

return home;
}
export default loadHomepage;