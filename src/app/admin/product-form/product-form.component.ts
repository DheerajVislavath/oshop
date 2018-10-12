import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  id;
  product = {};
  
  constructor( private router: Router, private categoryService: CategoryService, 
                private productService: ProductService, private route: ActivatedRoute) {

    this.categories$ = categoryService.getAll()
    this.id = route.snapshot.paramMap.get('id');
    if(this.id) {
      productService.getById(this.id).take(1).subscribe(product => this.product = product); 
    }
   };

  ngOnInit() {
  } 
  save(product) {
    if(this.id) {
      this.productService.updateProduct(this.id, product);
    }
    else {
      this.productService.create(product);
    }
    
    this.router.navigate(['admin/products'])
  }

delete() {

    if(confirm("Are you sure, you want to delete ?")) {
      this.productService.deleteProduct(this.id);
      this.router.navigate(['admin/products']);
    }

    return;
    
  }
 }
