import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Address } from '../Address';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl: string = "http://localhost:3000/addresses"

  constructor(private http: HttpClient) { }

  getAddresses():Observable<Address[]> {
    return this.http.get<Address[]>(this.apiUrl);
  }

  deleteAddress(address: Address): Observable<Address> {
    const url = `${this.apiUrl}/${address.id}`;
    return this.http.delete<Address>(url,httpOptions)
  }

  editAddress(address: Address): Observable<Address> {
    const url = `${this.apiUrl}/${address.id}`;
    return this.http.put<Address>(url,address, httpOptions);
  }

  addAddress(address: Address): Observable<Address> {
    const url = this.apiUrl;
    return this.http.post<Address>(url,address, httpOptions);
  }

}