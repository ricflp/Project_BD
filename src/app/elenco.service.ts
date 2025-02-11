import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElencoService {
  private apiUrl = 'http://localhost:5432/elenco'; // Ajuste a URL do seu backend

  constructor(private http: HttpClient) {}

  // Atualizar um jogador
  addElenco(id: number, jogador: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}`, jogador);
  }

}
