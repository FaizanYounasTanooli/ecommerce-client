import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationConfig } from '@angular/core';
import EcommerceUrls from '../constants/serviceurls';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
 
  
  
  async getRoles() {
     var roles =await firstValueFrom<(this.httpClient.get(EcommerceUrls.roles));
    }
  constructor(private httpClient: HttpClient) {

   }
}
