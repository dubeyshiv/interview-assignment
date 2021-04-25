import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./product-list-screen.model";

@Injectable()
export class ProductListScreenService {
    constructor(private httpClient: HttpClient){}
    readonly baseUrl: string = 'http://localhost:3000/product';

    addProduct(product: Product): Observable<Product> {
        return this.httpClient.post<Product>(this.baseUrl, product);
    }

    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.baseUrl);
    }

    updateProducts(product: Product): Observable<Product> {
        const updateUrl: string = this.baseUrl + '/' +product.id;
        return this.httpClient.put<Product>(updateUrl, product);
    }
    
    deleteProduct(id: number): Observable<Product> {
        const updateUrl: string = this.baseUrl + '/' +id;
        return this.httpClient.delete<Product>(updateUrl);
    }
}