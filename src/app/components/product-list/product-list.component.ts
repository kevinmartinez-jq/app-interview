import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule], // ✅ Necesario para *ngFor
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProducts().subscribe({
      next: (data) => {
        console.log('Productos:', data); // ✅ Verifica en la consola
        this.products = data;
      },
      error: (err) => console.error('Error cargando productos:', err)
    });
  }
}
