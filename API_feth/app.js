// Utilizadno o feth com o then
// fetch("http://localhost:3333/products")
// .then((response) => response.json())
// .then((data) => console.log(data))

// Ultilizadno o feth com Async/await
async function fetchProducts() {
  const response = await fetch("http://localhost:3333/products");
  const data = await response.json();
  console.log(data);
}

// fetchProducts()

// feth de dados com parametros na requisição

async function fetchProductById(id) {
  const response = await fetch(`http://localhost:3333/products/${id}`);
  const data = await response.json();
  console.log(data);
}

// fetchProductById(2)

// metodo post na requisiçao
const productName = document.getElementById("name");
const productPrice = document.getElementById("price");
const productDescription = document.getElementById("description");
const productImg = document.getElementById("img");
const form = document.getElementsByTagName("form");

addEventListener("submit", async (event) => {
  await fetch("http://localhost:3333/products", {
    method: "POST",
    headers: {
      "Context-Type": "aplication/json",
    },
    body: JSON.stringify({
        id: new Date().getTime().toString(),
        name: productName.value,
        price: productPrice.value,
        description: productDescription.value,
        image:  productImg.value
    })
  });

  event.preventDefault();
  console.log("enviando...");

  await fetchProducts();
});

fetchProducts()
