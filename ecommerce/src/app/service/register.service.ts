import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  url1="http://localhost:8080/insert"
  constructor(private http:HttpClient) { }
  insertData(data: any) {
    return this.http.post(this.url1, data);
  }
}
