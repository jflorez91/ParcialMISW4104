import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cafe } from '../cafes/Cafe';

@Injectable({
  providedIn: 'root'
})
export class CafesService {

private url = environment.Url;

  constructor(private httpClient : HttpClient) { }

  getCafes():Observable<Cafe[]>{
    return this.httpClient.get<Cafe[]>(this.url)
  }
  
}
