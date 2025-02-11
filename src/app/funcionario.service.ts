import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private apiUrl = 'http://localhost:5432/funcionarios'; // Ajuste a URL do seu backend

  constructor(private http: HttpClient) {}

  addFuncionario(funcionario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, funcionario);
  }

}
