import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {Product} from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontTest';
    errorMessage: string;
    liste: Array<Product>;
    listeCategory: Array<string>;
    category: string;
    constructor(private productService: ProductService, private cdr: ChangeDetectorRef) { }
    ngOnInit() {
        this.getListProducts();
        this.getListecategory();
    }
    getListProducts() {
        this.productService.getList()
            .subscribe(
                products => {
                    this.liste = products;
                    this.cdr.detectChanges();
                }
                , error => {
                    this.errorMessage = <any> error;

                    console.log('error', error);
                },
            );
    }
    getListProductsBycategory() {
        this.productService.getProductsByCategory(this.category)
            .subscribe(
                products => {
                    console.log('products', products);
                    this.liste = products;
                    this.cdr.detectChanges();
                }
                , error => {
                    this.errorMessage = <any> error;

                    console.log('error', error);
                },
            );
    }
    getListecategory(){
      this.productService.getListCategory().subscribe( listeCategory => {
        this.listeCategory = listeCategory;
        this.cdr.detectChanges();
      });
    }
}
