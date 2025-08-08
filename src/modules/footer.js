const footer = () => {
  const footerEl = document.createElement('footer');
  footerEl.id = 'footer';

  const copyRight = document.createElement('p');
  copyRight.textContent = "© 2025 Tiramisu Cafe. All rights reserved.";

  footerEl.appendChild(copyRight);
  return footerEl;
};

export default footer;