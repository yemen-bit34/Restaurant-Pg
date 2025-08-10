const contactSection = () => {
    
  const section = document.createElement("section");
  section.classList.add("contact");

  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "Phone: +1 (234) 567-890";

  const email = document.createElement("p");
  email.textContent = "Email: info@tiramisu-cafe.com";

  const address = document.createElement("p");
  address.textContent = "Address: 123 Coffee St, Sanaa, Yemen";

  const img = document.createElement("img");
  img.src = "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=60";
  img.alt = "Coffee Shop";
  img.loading = "lazy";

  section.appendChild(title);
  section.appendChild(phone);
  section.appendChild(email);
  section.appendChild(address);
  section.appendChild(img);

  return section;
};

export default contactSection;