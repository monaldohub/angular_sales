import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'productSearch',
    pure: false
})
export class ProductSearchPipe implements PipeTransform {
    transform(productData: any[], searched: string ) {
        if (!productData || !searched) {
            return productData;
        }
        return productData.filter(data => data.productName.toLowerCase().includes(searched.toLowerCase()) ||
        data.productID.includes(searched));
    }
}