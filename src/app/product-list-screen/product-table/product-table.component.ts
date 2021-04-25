import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { ProductListCommonDataService } from "../product-list-screen-common-data.service";
import { Column, Product } from "../product-list-screen.model";
import { ProductListScreenService } from "../product-list-screen.service";

@Component({
    selector: 'app-product-table',
    templateUrl: './product-table.component.html',
    styleUrls: ['./product-table.component.less']
})
export class ProductTableComponent implements OnInit {
    constructor(public commonService: ProductListCommonDataService,
        private service: ProductListScreenService,
        private messageService: MessageService){}
    columns: Column[] = [
        {
            field: 'name',
            header: 'Name'
        },
        {
            field: 'description',
            header: 'Description'
        },
        {
            field: 'price',
            header: 'Price'
        },
        {
            field: 'stock',
            header: 'Stock'
        }
    ];

    ngOnInit() {
            this.commonService.getProducts();
    }

    editProduct(selectedProduct: Product) {
        this.commonService.selectedRow = selectedProduct;
        this.commonService.dialogIsInEditMode = true;
        this.commonService.addEditProductForm.setValue({
            name: selectedProduct.name,
            description: selectedProduct.description,
            price: selectedProduct.price,
            stock: selectedProduct.stock
        });
        this.commonService.addEditProductDialogVisible = true;

    }
    async deleteProduct(selectedProduct: Product) {
        const response = await this.service.deleteProduct(selectedProduct.id).toPromise().then(data => data).catch(error=> {
            this.messageService.add({severity:'error', summary: 'Error', detail: 'Something Went Wrong.'});
            return null;
           });
           if (response) {
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Product Deleted Succesfully.'});
            this.commonService.getProducts();
        }
    }

    
}