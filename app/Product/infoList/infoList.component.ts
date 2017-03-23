import {
    Component
} from '@angular/core';
import {
    Product
} from '../Product';
import {
    ProductDataService
}from '../../services/product-data.service';
import{
    ProductDataFileService
}from '../../services/product-data-file.service';

@Component({
    selector: 'showInfoList',
    templateUrl: 'app/Product/infoList/infoList.component.html',
    styleUrls: ['app/Product/infoList/infoList.component.css']
})
export class infoListComponent {

    products: Product[] = [];

    constructor(private productDataService: ProductDataService){}

    ngOnInit() {
        this.products = this.productDataService.getAllProduct();
    }

    checkString(product){
        if(product.description.length < 50){
            return product.description;
        }else{
            return product.description.substring(0,46) + "...";
        }
    }

    showInfo(product){
        alert("product's information: \n" +
        "id: " + product.id + "\n"+
        "name: " + product.name + "\n"+
        "description: " + product.description + "\n"+
        "image: " + product.image + "\n"+
        "price: " + product.price + "\n"+
        "amount: " + product.amount + "\n"+
        "rate: " + product.rate + "\n" );
    }



}