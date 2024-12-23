import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../request/product.service';
import { LoadingComponent } from '../loading/loading.component';
import { RenderProductComponent } from '../render-product/render-product.component';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [LoadingComponent, RenderProductComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit {
  products: any[] = [];
  skip: number = 0;
  loading: boolean = false;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(): void {
    this.loading = true;
    this.productService.getAllProducts(this.skip).subscribe(
      (response: any) => {
        this.products = [...this.products, ...response.data];
        this.loading = false;
      },
      (error) => {
        console.error('Error loading products:', error);
        this.loading = false;
      }
    );
  }
  // ngOnInit(): void {
  //   this.productService.getAllProducts(this.skip).subscribe((data) => {
  //     this.products = data;
  //   });
  // }

  handleClick(): void {
    this.skip += 8; // Skip the next set of products
    this.loadProducts(); // Load the next batch of products
  }
}
