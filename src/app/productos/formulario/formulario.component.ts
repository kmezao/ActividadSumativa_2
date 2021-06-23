import { Component, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  @Output() emisor = new EventEmitter <any>();  
  productos: Array<any> = []

  formularioProducto = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    precio: new FormControl(''),
    cantidad: new FormControl(''),
    descripcion: new FormControl('')
  })

  guardar(){
    
      let newProducto = new producto();

      newProducto.codigo = this.formularioProducto.value.codigo;
      newProducto.nombre = this.formularioProducto.value.nombre;
      newProducto.precio = this.formularioProducto.value.precio;
      newProducto.cantidad = this.formularioProducto.value.cantidad;
      newProducto.descripcion = this.formularioProducto.value.descripcion;
      newProducto.total1 = parseInt(this.formularioProducto.value.precio) * parseInt(this.formularioProducto.value.cantidad);
      newProducto.total2 = parseInt(this.formularioProducto.value.precio) * parseInt(this.formularioProducto.value.cantidad)
    + (parseInt(this.formularioProducto.value.precio) * parseInt(this.formularioProducto.value.cantidad) * 0.19);
      

      this.emisor.emit(newProducto);
    }
  }


export class producto{
  codigo:any;
  nombre:any;
  precio:any;
  cantidad:any;
  descripcion:any;
  total1:any;
  total2:any;
}