import { Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { ProductListCommonDataService } from "../product-list-screen-common-data.service";
import { Product } from "../product-list-screen.model";
import { ProductListScreenService } from "../product-list-screen.service";

@Component({
    selector: 'app-add-edit-product',
    templateUrl: './add-edit-product.component.html',
    styleUrls: ['./add-edit-product.component.less'],
    providers: [MessageService]
})
export class AddEditProductComponent {
    constructor(public service: ProductListScreenService,
         public commonService: ProductListCommonDataService,
         private messageService: MessageService){}

    async add() {
       const payload: Product = {...this.commonService.addEditProductForm.value};
       let response: Product;
       let successMessage: string;
       if (!this.commonService.dialogIsInEditMode) {
        response = await this.service.addProduct(payload).toPromise().then(data => data).catch(error=> {
            this.messageService.add({severity:'error', summary: 'Error', detail: 'Something Went Wrong.'});
            return null;
           });
           successMessage = 'Product Added Succesfully.';
       } else {
           payload.id = this.commonService.selectedRow.id;
            response = await this.service.updateProducts(payload).toPromise().then(data => data).catch(error=> {
            this.messageService.add({severity:'error', summary: 'Error', detail: 'Something Went Wrong.'});
            return null;
           });
           successMessage = 'Product Updated Succesfully.';
       }
       
        if (response) {
            this.messageService.add({severity:'success', summary: 'Success', detail: successMessage});
            this.cancel();
            this.commonService.getProducts();
        }
    }
    cancel () {
        this.commonService.addEditProductForm.reset();
        this.commonService.addEditProductDialogVisible = false;
    }
}