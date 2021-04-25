import { Component } from "@angular/core";
import { ProductListCommonDataService } from "./product-list-screen-common-data.service";
import { ProductListScreenService } from "./product-list-screen.service";

@Component({
    selector: 'app-product-list-screen',
    templateUrl: './product-list-screen.component.html',
    styleUrls: ['./product-list-screen.component.less']
})
export class ProductListScreenComponent {
    constructor(private service: ProductListScreenService, public commonService: ProductListCommonDataService){}

    async addProductButtonClick() {
        this.commonService.dialogIsInEditMode = false;
        this.commonService.addEditProductForm.reset();
        this.commonService.addEditProductDialogVisible = true;
    }
}