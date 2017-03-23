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
    selector: 'showInfo',
    templateUrl: 'app/Product/information/information.component.html',
    styleUrls: ['app/Product/information/information.component.css']
})
export class InformationComponent {

    products: Product[] = [];

    constructor(private productDataService: ProductDataService){}

    ngOnInit() {
        this.products = this.productDataService.getAllProduct();
    }



}