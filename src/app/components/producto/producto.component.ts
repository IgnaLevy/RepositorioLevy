import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { element } from 'protractor';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  

  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};

  id:string;
  producto: Producto;
  vector_producto: Array<Producto>
  pageActual: number = 1;
  cantItems: number =25;
  constructor(private producto_servicio: ProductoService) { 
    this.producto= new Producto();
    this.vector_producto = new Array<Producto>();
  }

  ngOnInit(): void {
    
  }
  public entrarItem(id){
    console.log("en producto component:"+id);
    this.producto_servicio.unProducto(id).subscribe(
      (result) => {
        this.producto=result;
        console.log(this.producto);
        console.log(this.producto.id);
        console.log(this.producto.title);
    },
    error => { alert("Error en la petición"); } 
    )
  
  }

  public cargarProductos()
  {
    this.producto_servicio.listProducto(this.id).subscribe(
      (result) => {
        this.vector_producto = new Array<Producto>();
        result['results'].forEach(element => {
        this.producto=new Producto();
        Object.assign(this.producto,element);
        this.vector_producto.push(this.producto);
      });
      console.log(this.vector_producto);
      console.log(this.producto);
    },
    error => { alert("Error en la petición"); } )
  }
  public cargarProductosAsc()
  {
    this.producto_servicio.listProductoAsc(this.id).subscribe(
      (result) => {
        this.vector_producto = new Array<Producto>();
        result['results'].forEach(element => {
        this.producto=new Producto();
        Object.assign(this.producto,element);
        this.vector_producto.push(this.producto);
      });
      console.log(this.vector_producto);
      console.log(this.producto);
    },
    error => { alert("Error en la petición"); } )
  }
  public cargarProductosDesc()
  {
    this.producto_servicio.listProductoDesc(this.id).subscribe(
      (result) => {
        this.vector_producto = new Array<Producto>();
        result['results'].forEach(element => {
        this.producto=new Producto();
        Object.assign(this.producto,element);
        this.vector_producto.push(this.producto);
      });
      console.log(this.vector_producto);
      console.log(this.producto);
    },
    error => { alert("Error en la petición"); } )
  }

}
