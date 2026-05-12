const searchInput = document.getElementById("searchInput");

const filterSelect = document.getElementById("filterSelect");

const products = document.querySelectorAll(".product-card");

function filterProducts(){

    const searchValue = searchInput.value.toLowerCase();

    const filterValue = filterSelect.value;

    products.forEach((product)=>{

        const productName = product.querySelector("h3").textContent.toLowerCase();

        const category = product.getAttribute("data-category");

        const searchMatch = productName.includes(searchValue);

        const filterMatch =
        filterValue === "all" || category === filterValue;

        if(searchMatch && filterMatch){

            product.style.display = "block";

        }

        else{

            product.style.display = "none";

        }

    });

}

searchInput.addEventListener("keyup", filterProducts);

filterSelect.addEventListener("change", filterProducts);