import { Component, inject, OnInit, signal } from '@angular/core';
import { Health } from '../../services/health';

@Component({
  selector: 'app-ticket-list',
  imports: [],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.scss',
})
export class TicketList implements OnInit{
  
  private healthService = inject(Health);

  backendStatus = signal('Checking....');

  ngOnInit(): void {
    this.healthService.checkHealth().subscribe({
      next: () => this.backendStatus.set('Backend Connected ✅'),
      error: (err) => {
        console.error('Health check failed:', err);
        this.backendStatus.set('Backend not reachable ❌');
      }
    });
  }
}
