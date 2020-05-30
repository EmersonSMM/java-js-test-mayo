class Product {
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
} 

class UI {
    addProduct (product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class= "card-body">
                 <strong> PRODUCTO </strong>: ${product.name}
                 <strong> PRECIO </strong>: ${product.price}
                 <strong> FECHA </strong>: ${product.year}
                 <a> </a>
                 <a href="#" class="btn btn-danger" name="delete"> BORRAR </a>
            </div>
        </div>
        `;
        productList.appendChild(element);
        this.resetForm();
    }

    resetForm(){
        document.getElementById('product-Form').reset();
    }

    deleteProduct(element){
        if(element.name == 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Successfully', 'info'); 
        }
    }
    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function () { document.querySelector('.alert').remove(); }, 3000);
    }    
}

//Eventos Dom
document.getElementById('product-Form')
    .addEventListener('submit', function(e) {
   const name = document.getElementById('name').value;
   const price = document.getElementById('price').value;
   const year = document.getElementById('year').value;

    
   const product = new Product(name,price,year);
  
   const ui = new UI();

    if(name === '' || year === '' || price === ''){
        return ui.showMessage('Falta Informacion', 'danger');
    }
   ui.addProduct(product);
   ui.showMessage('Producto Agregado Correctamente','success');
   e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI;
    ui.deleteProduct(e.target);

});

