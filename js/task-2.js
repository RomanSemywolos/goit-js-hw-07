const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  }
];

const docFragment = document.createDocumentFragment();

images.forEach(image => {
  const li = document.createElement("li");
  li.classList.add("gallery-li");

  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;
  img.classList.add("gallery-li-img");

  li.appendChild(img);
  docFragment.appendChild(li);
});

document.querySelector("ul.gallery").appendChild(docFragment);