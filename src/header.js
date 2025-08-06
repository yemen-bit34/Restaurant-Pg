import tiramisuLogo from './asset/t-dessert.jpg';

 const header = () => {

    const headderElement = document.createElement('header');
    headderElement.id = 'header';

    const logo = document.createElement('img');
    logo.src = tiramisuLogo;
    headderElement.appendChild(logo);

    navs.forEach(nav => {
        headderElement.appendChild(nav);
    });

    return headderElement;

}

export default header;