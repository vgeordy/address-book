import { Component, EventEmitter, OnInit, Output, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Address } from 'src/app/Address';
import { AddressService } from 'src/app/services/address.service';
import { UiService } from 'src/app/services/ui.service';
import { AddressDialogComponent } from '../address-dialog/address-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit{
  
  @Input() addresses: Address[] = [];
  
  displayedColumns = ['id', 'name', 'address','email','actions'];
  changedAddress!: Address;
  subscription!: Subscription;


  constructor(private addressService: AddressService, private dialog: MatDialog, private uiService: UiService) {
    this.subscription = this.uiService.onAddClick().subscribe(value => this.onAddAddress(value));

  }

  ngOnInit(): void {
    this.addressService.getAddresses().subscribe((addresses)=> (this.addresses = addresses));
  }

  onDelete(address: Address) {
    this.addressService.deleteAddress(address).subscribe(()=> (this.addresses = this.addresses.filter(a => a.id !== address.id)));
  }
  
  onEdit(address: Address) {
    this.addressService.editAddress(address).subscribe((s) => {this.updateArray(s)});
  }
  


  openDialog(row: Address): void {
    
    const dialogRef = this.dialog.open(AddressDialogComponent, {
      width: '500px',
      height: '500px',
      data: {id: row.id, name: row.name, address: row.address, email: row.email}
    });
  
    
    dialogRef.afterClosed().subscribe(result => (this.changedAddress = result));
    console.log("changed address: ",this.changedAddress);
  }

  updateArray(input: Address) {
    var foundIndex = this.addresses.findIndex(x => x.id == input.id);
    this.addresses[foundIndex] = input;
    console.log("input:", input);
    console.log("addressess: ", this.addresses)
    }


  onAddAddress(address:Address) {
    this.addressService.addAddress(address).subscribe((value) => this.addresses.push(value)); 
}
}