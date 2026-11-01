let apiContainer = document.querySelector(".api");

apiContainer.innerHTML = "Loading...";

fetch("https://dummyjson.com/products")
.then((response)=>{
    return response.json();
})

.then((data)=>{

    apiContainer.innerHTML = "";

    data.products.forEach((product,index)=>{

        console.log(product.title);

        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `

        <h1>${product.title}</h1>

        <h2>
        ID : ${product.id}
        <br>
        ${product.title}
        </h2>

        <p>
        First 30 Characters :
        ${product.title.slice(0,30)}
        </p>

        <p>
        Description :
        ${product.description.slice(0,100)}
        </p>

        <div>
        <img src="${product.thumbnail}" width="200">
        </div>

        <p>
        Price : $${product.price}
        </p>

        <h3>
        ${product.category}
        </h3>

        <p>
        Upper Case :
        ${product.title.toUpperCase()}
        </p>

        <p>
        Character Count :
        ${product.title.length}
        </p>

        `;

        apiContainer.appendChild(card);

    });

})

.catch((error)=>{

    apiContainer.innerHTML =
    `<p style="color:red">${error}</p>`;

})

.finally(()=>{

    console.log("API request completed");

});