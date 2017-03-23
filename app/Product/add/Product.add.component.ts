import {
    Component
} from '@angular/core';
import {
    Product
} from '../Product';

import {
    ProductDataService
} from '../../services/product-data.service';

@Component({
    selector: 'addinfo',
    templateUrl: 'app/Product/add/Product.add.component.html',
    //styleUrls: ['app/students/students.component.css']
})
export class ProductComponent {


    products: Product = new Product();

    //productArr: Product[];

    constructor(private productDataService: ProductDataService){}

    // ngOnInit() {
    //     console.log(this.products);
    // }


    addProduct(productImage) {
        if(productImage.length === 0){
            this.products.image = "no picture";
        }
        else {
            this.products.image = productImage[0].name;
        }
        this.productDataService.addProduct(this.products);
        alert("the product is successfully added \n"+
        "id:" + this.products.id + "\n"+
        "name:" + this.products.name + "\n"+
        "description:" + this.products.description + "\n"+
        "image:" + this.products.image + "\n"+
        "price:" + this.products.price + "\n"+
        "amount:" + this.products.amount + "\n"+
        "rate:" + this.products.rate + "\n" );
          
    }

    resetProduct(){
        this.products.id = null;
        this.products.name = "";
        this.products.description = "";
        this.products.image = "";
        this.products.price = null;
        this.products.amount = null;
        this.products.rate = null;
    }


}