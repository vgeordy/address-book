import { Injectable, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject} from 'rxjs';
import { Address } from '../Address';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class AddressService {

  
  

  addresses: Address[] = [];


  public addressForm: FormGroup<Address> = new FormGroup<Address>({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  constructor(private apiService: ApiService) {
    
  }

  initializeFormGroup() {

    this.addressForm.setValue({
      id: null,
      name: '',
      address: '',
      email: ''
    });
  }

  updateAddress(input: Address) {
    this.apiService.editAddress(input).subscribe();
    
  }

  deleteAddress(input: Address) {
    this.apiService.deleteAddress(input).subscribe(()=> (this.addresses = this.addresses.filter(a => a.id !== input.id)))
  }

  createAddress(input: any) {
    this.apiService.addAddress(input).subscribe((ad) => (this.addresses.push(ad)));
  }

  populateAddressForm(row: any) {
    this.addressForm.setValue(row);
  }

  // onChange(): Observable<any> {
  //   return this.addressUpdate.asObservable();
  // }

}
