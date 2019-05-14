import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/internal/operators';
import {environment} from '../environments/environment';

@Injectable()
export class ProductService {
    private productUri = environment.baseUrl + '/product';
    // private categoryUri = environment.baseUrl + '/product';

    constructor(private http: HttpClient) {
    }
    getList(): Observable<Product[]> {
        return this.http.get(this.productUri)
            .pipe(
                map((data: Product[]) => {

                    return data;
                }),
                catchError(
                    err => this.handelError(err)
                )
            );
    }
    getProductsByCategory(category: string): Observable<Product[]> {
        return this.http.get(this.productUri + '/' +  category)
            .pipe(
                map((data: Product[]) => {

                    return data;
                }),
                catchError(
                    err => this.handelError(err)
                )
            );
    }
    getListCategory(): Observable<string[]> {
        return this.http.get(environment.baseUrl + '/Category')
            .pipe(
                map((data: string[]) => {

                    return data;
                }),
                catchError(
                    err => this.handelError(err)
                )
            );
    }

    private handelError(error: Response) {

        return throwError(error || 'server error');

    }
}
