import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  producto: Array<any> = [];
  mostrarFormulario = false;


  constructor() { 
    
  }

  ngOnInit(): void {

  }

  receptor(event: any) {
    console.log(event)  
    this.producto.push(event); 
    console.log(this.producto)
    this.mostrarFormulario = false;
  } 

  nuevoItem(){
    this.mostrarFormulario = true;
  }
  cancelar(){
    this.mostrarFormulario = false;
  }

  eliminar() { 
    this.producto.pop();
  }
  

}
