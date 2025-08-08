import tiramisuLogo from '../asset/tiramishus.png';

 const header = (navs) => {

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