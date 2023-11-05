import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VIACEPService {

  constructor(private httpClient: HttpClient) { }

   getVIACEPService( cep: string = '5222011210'){
      return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`)
   }
}
