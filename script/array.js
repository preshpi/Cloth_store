let product = [
  {
      product_name: "Skickers",
      product_img: "trend1",
      price: "$2300"
  },

  {
    product_name: "Bag",
    product_img: "trend2",
    price: "$2300"
},

{
    product_name: "Sunglass",
    product_img: "trend3",
    price: "$2300"
},

{
    product_name: "FaceCap",
    product_img: "trend4",
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
    product_name: "Shirt and Trouser",
    product_img: "img5",
    price: "$100"
},

{
    product_name: "Hoddie",
    product_img: "img6",
    price: "$200"
},

];

let hard = document.querySelector('#wrapper')
let loop = ``;

product.forEach(element => {
 loop += `
 <div class="container-fluid ">
   <div class="img">
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



