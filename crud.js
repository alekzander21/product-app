class Product{
  constructor(name,price,year){
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI{
  addProduct(product){
    const productlist = document.getElementById('product-list');
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="card text-center mb-4">
    <div class="card-body">
     <strong>Product Name</strong>: ${product.name}
     <strong>Product Price</strong>: ${product.price}
     <strong>Product Year</strong>: ${product.year}
     <a href="#" class="btn btn-danger" name="delete">Delete</a>
    </div>
    </div>
    `;

    productlist.appendChild(element);
    this.resetForm();
  }

  deleteProduct(element){
    if(element.name === 'delete'){
      //Eliminamos el elemento padre con parentElement
      element.parentElement.parentElement.parentElement.remove();
      this.showMessage('Producto eliminado satisfactoriamente','info')
    } 
  }

  showMessage(message,cssClass){
    const div = document.createElement('div');
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    /*Mostrando en el DOM*/
    const container = document.querySelector('.container');
    const app = document.querySelector('#App');
    container.insertBefore(div,app);
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000)
  }
  resetForm(){
    document.getElementById('product-form').reset();
  }
}

document
  .getElementById("product-form")
  .addEventListener("submit", (e) => {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    //Creamos una constante en donde accedemos a la clase Producto con su constructor
    const product = new Product(name,price,year);


    //Creamos una constante en donde guardamos las funcionalidades de mi interfaz con el constructor
    const ui = new UI();
    if(name === ''||price === '' || year === ''){
      return ui.showMessage('Completa los datos perro...','danger')
    }
    ui.addProduct(product)
    ui.resetForm();
    ui.showMessage('Producto agregado correctamente....','success');

    /*Cancela el evento predeterminado*/
    e.preventDefault();
  });

document.getElementById('product-list').addEventListener('click', (e) =>{
  const ui = new UI();
  ui.deleteProduct(e.target);
})
/*Notas a tomar en cuenta*/
/*En los constructor dentro de una clase nos permite crear datos para utilizarlos en nuestra interfaz gráfica; La interfaz grafica
se encarga de realizar las funcionalidades de nuestro proyecto
*/