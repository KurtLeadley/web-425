import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prdFilter'
})
export class ProductPipe implements PipeTransform {
  transform(productData: any[], filter: Object): any {
    if (!productData || !filter) {
        return productData;
    }
    console.log(productData)
    return productData.filter(prd => prd.service_name === "Plug in Router");
  }
}
