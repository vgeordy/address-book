import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { Address } from 'src/app/Address';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-address-dialog',
  templateUrl: './address-dialog.component.html',
  styleUrls: ['./address-dialog.component.css']
})

export class AddressDialogComponent {


  @Output() onEditAddress: EventEmitter<Address> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<AddressDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Address) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}




