import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-render-product',
  standalone: true,
  imports: [],
  templateUrl: './render-product.component.html',
  styleUrl: './render-product.component.css',
})
export class RenderProductComponent {
  @Input() product: any;
  addcart: string = 'assets/addcart.png';
  favorite: string = 'assets/favorite.png';
}
