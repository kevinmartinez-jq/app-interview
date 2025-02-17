import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule, NgFor } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  providers: [ApiService],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent implements OnInit {
  clients: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getClients().subscribe({
      next: (data) => {
        console.log('Clientes:', data); // ✅ Verifica en la consola
        this.clients = data;
      },
      error: (err) => console.error('Error cargando clientes:', err)
    });
  }

}
