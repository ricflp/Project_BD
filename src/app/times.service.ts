import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private apiUrl = 'http://localhost:5432/time'; // Ajuste a URL do seu backend

  constructor(private http: HttpClient) {}

  deleteTime(id: any): Observable<any> {
    return this.http.delete<any>(this.apiUrl, id);
  }

  updateTime(id: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, id);
  }

}
