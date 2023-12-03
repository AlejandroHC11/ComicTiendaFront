import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comic } from '../models/comic';
import { Franchise } from '../models/franchise';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  url:string = "https://localhost:7276/api"
  constructor(private httpClient:HttpClient) { }

  getComics():Observable<Comic[]>{
    return this.httpClient.get<Comic[]>(`${this.url}/Comic/GetComics/page/0/size/5`)
  }

  createComic(comicData: any): Observable<Comic[]> {
    return this.httpClient.post<Comic[]>(`${this.url}/Comic/CreateComic`, comicData);
  }

  getComicById(id?: number): Observable<Comic> {
    return this.httpClient.get<Comic>(`${this.url}/Comic/GetComicById/${id}`);
  }

  updateComic(comicData: any): Observable<Comic[]> {
    return this.httpClient.put<Comic[]>(`${this.url}/Comic/UpdateComic`, comicData);
  }

  getFranchiseNameById(franchiseId: string): Observable<Franchise> {
    return this.httpClient.get<Franchise>(`${this.url}/Franchise/GetFranchiseById/${franchiseId}`);
  }

  deleteComic(id?: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.url}/Comic/DeleteComic?id=${id}`);
  }




}
