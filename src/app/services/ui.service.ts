import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {Observable, Subject} from 'rxjs';
import { Address } from '../Address';
import { AddressDialogComponent } from '../components/address-dialog/address-dialog.component';
import { AddressService } from './address.service';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private dialog: MatDialog, private addressService: AddressService) { }

  addUIAddress() {
    this.addressService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddressDialogComponent, dialogConfig);
  }

  editUIAddress(row: any) {
    this.addressService.populateAddressForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddressDialogComponent, dialogConfig);

  }
}

