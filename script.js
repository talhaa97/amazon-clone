const cardsEl = document.querySelector(".card-el");

const infoCardData = [
  {
    title: "Gaming accessories",
    imgpath: "./images/1.jpg",
  },
  {
    title: "Gaming accessories",
    imgpath: "images/2.jpg",
  },
  {
    title: "Gaming accessories",
    imgpath: "images/3.jpg",
  },
  {
    title: "Gaming accessories",
    imgpath: "images/4.jpg",
  },
  {
    title: "Gaming accessories",
    imgpath: "images/5.jpg",
  },
  {
    title: "Gaming accessories",
    imgpath: "images/6.jpg",
  },
  {
    title: "Gaming accessories",
    imgpath: "images/7.jpg",
  },
  {
    title: "Gaming accessories",
    imgpath: "images/8.jpg",
  },
  {
    title: "Gaming accessories",
    imgpath: "images/9.jpg",
  },
  {
    title: "Gaming accessories",
    imgpath: "images/10.jpg",
  },
  {
    title: "Gaming accessories",
    imgpath: "images/11.jpg",
  },
  {
    title: "Gaming accessories",
    imgpath: "images/12.jpg",
  },
  {
    title: "Gaming accessories",
    imgpath: "images/13.jpg",
  },
  {
    title: "Gaming accessories",
    imgpath: "images/14.jpg",
  },
];

const data = infoCardData.map((item) => {
  
  const cardData = `<div class="card mx-3 my-3" style="width: 18rem;">
  <img src="${item.imgpath}" class="card-img-top h-50" alt="...">
  <div class="card-body">
    <p class="card-text">${item.title}</p>
    <a href="">See more</a>
  </div>
</div>
 
  
    `;

  cardsEl.innerHTML += cardData;
});
