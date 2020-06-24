import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }  from '@angular/common/http';
import { observable,Observable }  from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http: HttpClient) { }

  public listProducto(id:string):Observable<any>{
        console.log(id);

   console.log("https://api.mercadolibre.com/sites/MLA/search?q="+id);
    return this._http.get("https://api.mercadolibre.com/sites/MLA/search?q="+id);
    
  }
  public listProductoAsc(id:string):Observable<any>{
    console.log(id);
  console.log("https://api.mercadolibre.com/sites/MLA/search?q="+id+"&sort=sortId=price_asc");
  return this._http.get("https://api.mercadolibre.com/sites/MLA/search?q="+id+"&sort=sortId=price_asc");
  }
  public listProductoDesc(id:string):Observable<any>{
    console.log(id);
  console.log("https://api.mercadolibre.com/sites/MLA/search?q="+id+"&sort=sortId=price_desc");
  return this._http.get("https://api.mercadolibre.com/sites/MLA/search?q="+id+"&sort=sortId=price_desc");
  }
  public unProducto(id:string):Observable<any>{
    console.log("en producto service:"+id);
  console.log("https://api.mercadolibre.com/items/"+id);
  return this._http.get("https://api.mercadolibre.com/items/"+id);
  }
  
}