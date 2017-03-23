import {
    PRODUCTS
} from '../mocks';
import {
    Injectable
} from '@angular/core';
import {
    Product
} from '../Product/Product'


@Injectable()
export class ProductDataService {
    products: Product[] = PRODUCTS;
    getProductData() {
        return PRODUCTS;
    }
    addProduct(newProduct) {
    	this.products.push(newProduct);
        console.log(newProduct);
    }

    getAllProduct() {
        return this.products;
    }
   
}