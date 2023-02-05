import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Address } from 'src/app/Address';
import { AddressDialogComponent } from '../address-dialog/address-dialog.component';

@Component({
  selector: 'app-new-address-button',
  templateUrl: './new-address-button.component.html',
  styleUrls: ['./new-address-button.component.css']
})
export class NewaddressbuttonComponent {

@Output() onAddAddress: EventEmitter<Address> = new EventEmitter();


constructor() {}


onAdd() {
  this.onAddAddress.emit();    
  };


}
