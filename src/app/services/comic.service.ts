import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comic } from '../models/comic';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  url:string = "https://api.mockfly.dev/mocks/4e198eb4-8ac3-4111-932a-ed7c617d80c0/getComics"
  constructor(private httpClient:HttpClient) { }

  getComics():Observable<Comic[]>{
    return this.httpClient.get<Comic[]>(this.url)
  }
}
