// // Function to add a product to the table
// function addProduct() {
//     // Get input values
//     var productName = document.getElementById('productName').value;
//     var sellingPrice = document.getElementById('sellingPrice').value;
//     var category = document.getElementById('category').value;

//     // Create a new row
//     var table = document.getElementById('productTable');
//     var row = table.insertRow(-1);

//     // Insert cells in the row
//     var nameCell = row.insertCell(0);
//     var priceCell = row.insertCell(1);
//     var categoryCell = row.insertCell(2);
//     var actionCell = row.insertCell(3);

//     // Set cell values
//     nameCell.innerHTML = productName;
//     priceCell.innerHTML = sellingPrice;
//     categoryCell.innerHTML = category;
//     actionCell.innerHTML = '<button onclick="deleteProduct(this)">Delete</button>';

//     // Clear the form inputs
//     document.getElementById('productName').value = '';
//     document.getElementById('sellingPrice').value = '';
//     document.getElementById('category').value = '';

//     // Save the product in local storage
//     var product = {
//       name: productName,
//       price: sellingPrice,
//       category: category
//     };

//     var products = [];
//     if (localStorage.getItem('sellerProducts')) {
//       products = JSON.parse(localStorage.getItem('sellerProducts'));
//     }

//     products.push(product);
//     localStorage.setItem('sellerProducts', JSON.stringify(products));
//   }

//   // Function to delete a product from the table
//   function deleteProduct(button) {
//     var row = button.parentNode.parentNode;
//     var index = row.rowIndex;
//     var products = JSON.parse(localStorage.getItem('sellerProducts'));
//     products.splice(index - 1, 1);
//     localStorage.setItem('sellerProducts', JSON.stringify(products));
//     row.parentNode.removeChild(row);
//   }

//   // Function to load the products from local storage
//   function loadProducts() {
//     var products = JSON.parse(localStorage.getItem('sellerProducts'));

//     if (products) {
//       var table = document.getElementById('productTable');

//       for (var i = 0; i < products.length; i++) {
//         var product = products[i];

//         var row = table.insertRow(-1);
//         var nameCell = row.insertCell(0);
//         var priceCell = row.insertCell(1);
//         var categoryCell = row.insertCell(2);
//         var actionCell = row.insertCell(3);

//         nameCell.innerHTML = product.name;
//         priceCell.innerHTML = product.price;
//         categoryCell.innerHTML = product.category;
//         actionCell.innerHTML = '<button onclick="deleteProduct(this)">Delete</button>';
//       }
//     }
//   }

//   // Load the products on page load
//   loadProducts();

//   // Add submit event listener to the form
//   document.getElementById('productForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     addProduct();
//   });

const baseUrl = "https://crudcrud.com/api/c143ff08ff714ca69840622ac9445556/wyldTest";
let formState = {
  "productName": "",
  "category": "",
  "item": "",
  "sellingPrice": ""
};

let inventory;

document.addEventListener("DOMContentLoaded", async () => {
  //calling callback fn after dom content is loaded;
  getDataFromApi_and_RenderTable();
});

async function getDataFromApi_and_RenderTable() {
  inventory = await getDataFromApi();
  if(!(inventory && inventory.length)){
    inventory = [];
  }
  renderTableData();
}
async function getDataFromApi() {
  const response = await fetch(baseUrl, {
    method: "GET",
    headers: {
      'content-type': 'application/json'
      // security purpose
    }
  })
  console.log(response);
  return response.json(); //return an array
}

function renderTableData(){
/*
inventory = [
  {name: 'vedEclairs'},
  {name:'wyldChoco'}
]
 */

/*

 */
const tbody = document.querySelector('#productTable tbody')
for(let i = 0; i < inventory.length; i++){
  const new_row = document.createElement('tr');
  new_row = objectToTableRow(inventory[i]);
}
}

