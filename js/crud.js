//  get input id   1

var productNameInput = document.getElementById('ProductName');
var productPriceInput = document.getElementById('prductPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');
var addBtn = document.getElementById('addBtn');  // 16  
var updateBtn = document.getElementById('updateBtn');  // 16


var indexUpdate = 0 //17
var tmb; //17
// Array for save object    3

var productsContainer = [];

if(localStorage.getItem("products") != null){   // 12
  productsContainer =JSON.parse(localStorage.getItem('products')) ;
  displayProcuts(productsContainer)  // 13
}

// catch input value  2

function addProduct(){

    var product = {
        productName: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,
    }

    // push products details in array   5
    productsContainer.push(product);

    // local storage 11
    localStorage.setItem("products" ,JSON.stringify(productsContainer) );

    // call display products after push 6
    displayProcuts(productsContainer);

    // call reset inputs    8
    resetInputs();

    // reset inputs     7
   function resetInputs(){
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = '';
    productDescInput.value = '';
   }

    // console.log(productsContainer);
    
};

// addProduct(); >>>> for button


// display products     4

function displayProcuts(arr){
    var productsBox = ``;
    for (var i = 0; i<arr.length; i++){

        productsBox += `  <tr>
              <td>${i + 1}</td>
              <td>${arr[i].productName}</td>
              <td>${arr[i].price}</td>
              <td>${arr[i].category}</td>
              <td>${arr[i].desc}</td>
              <td><button onclick="setUpdate(${i});" class="btn btn-outline-warning btn-sm ">update</button></td>
              <td><button onclick="deleteProduct(${i});" class="btn btn-outline-danger btn-sm ">delete</button></td>
            </tr>`
    };
    document.getElementById('tableBody').innerHTML = productsBox;
}


// delete product   9

function deleteProduct(productIndex){
    productsContainer.splice(productIndex,1);
    localStorage.setItem("products" ,JSON.stringify(productsContainer) );  // 14
    displayProcuts(productsContainer); // call display after delete 10
}


// search  15

function searchProducts(term){

    var matchedProducts = [];
    for (var i=0; i<productsContainer.length; i++){
        if(productsContainer[i].productName.toLowerCase().includes(term.toLowerCase()) === true){
            
            matchedProducts.push(productsContainer[i]);        

        }
    }

    // console.log(matchedProducts);
    displayProcuts(matchedProducts);
}

// set update  16



function setUpdate(i){

    indexUpdate = i;
    addBtn.classList.replace('d-block' , 'd-none');
    updateBtn.classList.replace('d-none' , 'd-block');
    productNameInput.value = productsContainer[i].productName;
    productPriceInput.value = productsContainer[i].price;
    productCategoryInput.value = productsContainer[i].category;
    productDescInput.value = productsContainer[i].desc;
   
    
    
}

// 17 update
function Update(i){

    tmb = {
        productName: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,
    };
    addBtn.classList.replace('d-none' , 'd-block');
    updateBtn.classList.replace('d-block' , 'd-none');
  
    productsContainer.splice(indexUpdate , 1 , tmb);
    localStorage.setItem("products" ,JSON.stringify(productsContainer) );
    displayProcuts(productsContainer);
    resetInputs();
   
    // console.log(productsContainer);

    function resetInputs(){
        productNameInput.value = "";
        productPriceInput.value = "";
        productCategoryInput.value = '';
        productDescInput.value = '';
       }

    
}