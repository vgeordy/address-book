import { Component,OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddressService } from 'src/app/services/address.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-address-dialog',
  templateUrl: './address-dialog.component.html',
  styleUrls: ['./address-dialog.component.css'],
})

export class AddressDialogComponent implements OnInit {
  constructor(
    public apiService: ApiService,
    public addressService: AddressService,
    public dialogRef: MatDialogRef<AddressDialogComponent>
  ) {}

  ngOnInit() {
    console.log(123);
    this.apiService.getAddresses();
  }

  onSubmit(value: any): void {
    if (this.addressService.addressForm.valid) {
        if (!(this.addressService.addressForm.get('id')!.value)) {
          console.log("from onSubmit function");
          this.addressService.createAddress(value);
          this.apiService.getAddresses().subscribe((addresses)=> (this.addressService.addresses = addresses));
      }else {
        this.addressService.updateAddress(value); 
        window.location.reload();
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
