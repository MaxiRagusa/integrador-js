const products = [
    {
        id: "0",
        name: "Colorinche T-shirts",
        price: "75",
        imgSrc: "img/products/f1.jpg",
    },
    {
        id: "1",
        name: "Flores verdes",
        price: "77",
        imgSrc: "img/products/f2.jpg",
    },
    {
        id: "2",
        name: "Floreadita T-shirts",
        price: "72",
        imgSrc: "img/products/f3.jpg",
    },
    {
        id: "3",
        name: "Flores rositas",
        price: "65",
        imgSrc: "img/products/f4.jpg",
    },
    {
        id: "4",
        name: "Rosas T-shirts",
        price: "45",
        imgSrc: "img/products/f5.jpg",
    },
    {
        id: "5",
        name: "Camperona",
        price: "80",
        imgSrc: "img/products/f6.jpg",
    },
    {
        id: "6",
        name: "Pantalones de viejito",
        price: "35",
        imgSrc: "img/products/f7.jpg",
    },
    {
        id: "7",
        name: "Remera de viejita",
        price: "50",
        imgSrc: "img/products/f8.jpg",
    },
    {
        id: "8",
        name: "Camisa celeste",
        price: "61",
        imgSrc: "img/products/n1.jpg",
    },
    {
        id: "9",
        name: "Camisa a Cuadros",
        price: "78",
        imgSrc: "img/products/n2.jpg",
    },
    {
        id: "10",
        name: "Camisa blanca",
        price: "69",
        imgSrc: "img/products/n3.jpg",
    },
    {
        id: "11",
        name: "Camisa de Paco",
        price: "45",
        imgSrc: "img/products/n4.jpg",
    },
    {
        id: "12",
        name: "Camisa Soldador",
        price: "66",
        imgSrc: "img/products/n5.jpg",
    },
    {
        id: "13",
        name: "Bermudasa",
        price: "54",
        imgSrc: "img/products/n6.jpg",
    },
    {
        id: "14",
        name: "Camisuli",
        price: "74",
        imgSrc: "img/products/n7.jpg",
    },
    {
        id: "15",
        name: "Camisa nenedemama",
        price: "60",
        imgSrc: "img/products/n8.jpg",
    },
    
]





const productsEl = document.querySelector(".pro-container");
let botonesAgregar = document.querySelectorAll(".add-tocart");
const numerito = document.querySelector("#numerito");





function renderProdcuts() {
    products.forEach((products) => {
      productsEl.innerHTML += `
      <div class="pro">
        <img src="${products.imgSrc}" alt="">
        <div class="des">
            <span>adidas</span>
            <h5>${products.name}</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
          <h4>$${products.price}</h4>
      </div>
      <button class="add-tocart" id="${products.id}">Agregar</button>
    </div>
         `;
    });
    actualizarBotonesAgregar()
  }


renderProdcuts();




function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".add-tocart");
   
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", addToCart);
    });
}

let productsInCart;

let productsCartLS = localStorage.getItem("products-in-cart");


if (productsCartLS) {

    productsInCart =  JSON.parse(productsCartLS);
    actualizarNumerito()
} else {
    productsInCart = [];
};



function addToCart(e) {

    const idBoton = e.currentTarget.id;
    const productosAdd = products.find(producto => producto.id === idBoton);
    
    if(productsInCart.some(producto => producto.id === idBoton)){
        const index = productsInCart.findIndex(producto => producto.id === idBoton)
        productsInCart[index].cantidad++;
    } else {
        productosAdd.cantidad = 1;
        productsInCart.push(productosAdd);
    }

    actualizarNumerito();

    localStorage.setItem("products-in-cart", JSON.stringify(productsInCart));
}

function actualizarNumerito() {
    let nuevoNumerito = productsInCart.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}


