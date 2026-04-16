const data = [
  {
    id: 1,
    name: "Rolex",
    img: "images/watch09.jpeg", 
    price: "450",
    cat: "Luxury"
  },
  {
    id: 2,
    name: "OCEANUS watch",
    img: "images/watch08.jpeg", 
    price: "120",
    cat: "Dress"
  },
  {
    id: 3,
    name: "Black Patek Philippe",
    img: "images/watch05.jpg", 
    price: "750",
    cat: "Luxury"
  },
  {
    id: 4,
    name: "Orient watch",
    img: "images/watch02.jpeg",
    price:"400",
    cat: "Casual"
  },
  {
    id: 5,
    name: "Green Smartwatch",
    img: "images/watch03.jpeg",
    price: "470",
    cat: "Smartwatch"
  },
  {
    id: 6,
    name: "Patek Philippe watch",
    img: "images/watch07.jpeg",
    price: "520",
    cat: "Dress"
  },
   {
    id: 7,
    name: "Rolex The Diamond",
    img: "images/watch01.jpeg",
    price: "560",
    cat: "Luxury"
  }
];

const productContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts =(filteredProduct)=>{
    productContainer.innerHTML = filteredProduct.map(product=>`
                <div class="product">
                    <img src="${product.img}" alt="">
                    <span class="name">${product.name}</span>
                    <span class="price">${product.price}</span>
                </div>
        `).join("");
};
displayProducts(data);

searchInput.addEventListener('keyup',(e)=>{
    const value =e.target.value.toLowerCase();
    if(value){
        displayProducts(data.filter(item=>item.name.toLowerCase().indexOf(value) !== -1));
    }else{
        displayProducts(data);
    }
    
});

const setCat = ()=>{
    const allCat = data.map(item=>item.cat);
    const categories =["All",...allCat.filter((item,i)=>{
        return allCat.indexOf(item) === i;
    })];
    categoriesContainer.innerHTML = categories.map(cat=>`
        <span class="cat">${cat}</span>
        `).join(""); 
};


categoriesContainer.addEventListener('click',(e)=>{
  const selectedCat = e.target.textContent;
  selectedCat === 'All'?displayProducts(data):displayProducts(data.filter(item=>item.cat===selectedCat));
});

const setPrice =()=>{
  const priceList =data.map((item)=>item.price);
 
  const minPrice =Math.min(...priceList);
  const maxPrice =Math.max(...priceList);
  console.log(minPrice);
  
   priceRange.min=minPrice;
   priceRange.max=maxPrice;
   priceRange.value=maxPrice;
   priceValue.textContent='$'+maxPrice;

   priceRange.addEventListener('input',(e)=>{
   priceValue.textContent='$'+e.target.value;
   displayProducts(data.filter(item=>item.price<=e.target.value));
   });
}
setPrice();
setCat();