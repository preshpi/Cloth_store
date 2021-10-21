let product = [
  {
      product_name: "Jumpsuit",
      product_img: "pic4",
      price: "$2300"
  },

  {
    product_name: "Men's fit",
    product_img: "pic5",
    price: "$2300"
},

{
    product_name: "Sneakers",
    product_img: "pic6",
    price: "$2300"
},

{
    product_name: "Ladie's fit",
    product_img: "pic7",
    price: "$2300"
},

{
    product_name: "Tie",
    product_img: "trend5",
    price: "$200"
},

{
    product_name: "Sari",
    product_img: "img7",
    price: "$5300"
},

{
    product_name: "Suite and Trouser",
    product_img: "img2",
    price: "$5300"
},

{
    product_name: "Blazer and Trouser",
    product_img: "img3",
    price: "$5300"
},

{
    product_name: "Blue Top",
    product_img: "img4",
    price: "$5300"
},

{
    product_name: "jewelry",
    product_img: "pic2",
    price: "$100"
},

{
    product_name: "Necklase",
    product_img: "pic1",
    price: "$200"
},

{
    product_name: "Mini skrit",
    product_img: "pic3",
    price: "$200"
},

];


let hard = document.querySelector('#wrapper')
let loop = ``;

product.forEach(element => {
 loop += `
 <div class="col-lg-3 col-md-4 col-sm-6 container"">
   <div class="product-card">
     <img src="./image/${element.product_img}.jpg" alt="kids" width="100%" height="auto" class="py-3" >
  </div>

  <div class="product_name">
     <h4 class="ms-4">${element.product_name}</h4>
  </div>
  <p class="fs-4 py-1 text-danger ms-4">${element.price}</p> 
</div>

 

 `;
 hard.innerHTML = loop;
});


