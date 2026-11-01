const apiContainer = document.querySelector(".api");

apiContainer.innerHTML = "<h2>Loading...</h2>";

fetch("https://dummyjson.com/products")

.then((response) => {
    return response.json();
})

.then((data) => {

    apiContainer.innerHTML = "";

    data.products.forEach((product) => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
        
        <h3>ID : ${product.id}</h3>

        <h2>${product.title.slice(0,50)}</h2>

        <img src="${product.thumbnail}" alt="${product.title}">

        <p>
        ${product.description.slice(0,100)}
        </p>

        <p class="price">
        Price : $${product.price}
        </p>

        <p>
        Category : ${product.category}
        </p>
        
        `;

        apiContainer.appendChild(card);

    });

})

.catch((error) => {

    apiContainer.innerHTML = `
    <p class="error">
        ${error}
    </p>
    `;

})

.finally(() => {

    console.log("API request completed");

});