import { Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { Address } from 'src/app/Address';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AddressService } from 'src/app/services/address.service';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-address-dialog',
  templateUrl: './address-dialog.component.html',
  styleUrls: ['./address-dialog.component.css']
})


export class AddressDialogComponent implements OnInit {

  constructor(public apiService: ApiService, public addressService: AddressService, public dialogRef: MatDialogRef<AddressDialogComponent>) {}
  
  ngOnInit() {
    this.apiService.getAddresses();
  }
  
  onSubmit(value: any): void {
    if (this.addressService.addressForm.valid) {
        if (!(this.addressService.addressForm.get('id')!.value) ) {
          this.addressService.createAddress(value);
      }else {
        this.addressService.updateAddress(value);
        this.onClose();
      }
    }
  }

  onClose(): void {
    this.addressService.addressForm.reset();
    this.addressService.initializeFormGroup();
    this.dialogRef.close();
  }
}




