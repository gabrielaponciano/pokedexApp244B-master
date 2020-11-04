import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0';


  constructor(private http: HttpClient) { }

  public buscarTodos(pagina: number){
    if(pagina <= 0){
      pagina = 1;
    }
    return this.http.get(`${this.url}?page=${pagina}`);
  }
  
  public buscarId(url: string){
    return this.http.get(`${url}`);
  }
}
