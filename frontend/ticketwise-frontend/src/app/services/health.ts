import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Service()
export class Health {
    private http = inject(HttpClient);
    private apiUrl = environment.apiUrl;

    checkHealth(){
        return this.http.get(`${this.apiUrl}/HealthCheck`, {responseType : 'text'});
    }
}
