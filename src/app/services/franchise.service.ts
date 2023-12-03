import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FranchiseService {
  url:string = "https://localhost:7276/api"
  constructor(private httpClient:HttpClient) { }

  getFranchises(): Observable<any> {
    return this.httpClient.get(`${this.url}/Franchise/GetFranchises`);
  }
}
