import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { Product } from "./product-list-screen.model";
import { ProductListScreenService } from "./product-list-screen.service";

@Injectable()
export class ProductListCommonDataService {
    constructor(private service: ProductListScreenService) {}

    products: Product[];
    selectedRow: Product;
    addEditProductDialogVisible: boolean;
    dialogIsInEditMode: boolean;
    addEditProductForm: FormGroup = new FormGroup({
        name: new FormControl('',  Validators.compose([
            Validators.required, Validators.minLength(2), Validators.maxLength(20)
        ])),
        description: new FormControl('', Validators.compose([
            Validators.required, Validators.minLength(2), Validators.maxLength(20)
        ])),
        price: new FormControl(null, Validators.compose([
            Validators.required, Validators.pattern('^[0-9]+$')
        ])),
        stock: new FormControl(null, Validators.compose([
            Validators.required, Validators.pattern('^[0-9]+$')
        ]))
    });

    async getProducts() {
        this.products = await this.service.getProducts().toPromise().then(data => data);
    }
}