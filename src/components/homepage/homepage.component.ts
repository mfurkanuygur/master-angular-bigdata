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
  products: any;
  count: number = 10;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  handleClick() {
    this.count += 10;
  }
}
