export class Producto {
    id: string;
    site_id: string;
    title: string;
    price: string;
    available_quantity: string;
    sold_quantity: string;
    listing_type_id: string;
    condition:string;
    thumbnail:string;
    status:string;
    initial_quantity:string;
    base_price:string;
    warranty:string;

    producto(id?:string,site_id?:string,title?:string,price?:string,available_quantity?:string,sold_quantity?:string,listing_type_id ?:string,condition?:string,thumbnail?:string,status?:string,initial_quantity?:string,base_price?:string,warranty?:string){
        this.id=id;
        this.site_id=site_id;
        this.title=title;
        this.price=price;
        this.available_quantity=available_quantity;
        this.sold_quantity=sold_quantity;
        this.listing_type_id=listing_type_id;
        this.condition=condition;
        this.thumbnail=thumbnail;
        this.status=status;
        this.initial_quantity=initial_quantity;
        this.base_price=base_price;
        this.warranty=warranty;
    }
}
