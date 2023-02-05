import { Component, EventEmitter, OnInit, Output, Input, OnChanges } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Address } from 'src/app/Address';
import { AddressService } from 'src/app/services/address.service';
import { ApiService } from 'src/app/services/api.service';
import { UiService } from 'src/app/services/ui.service';
import { AddressDialogComponent } from '../address-dialog/address-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit{
  displayedColumns = ['id', 'name', 'address','email','actions'];
  subscription!: Subscription;

  constructor(public apiService: ApiService, public dialog: MatDialog, public uiService: UiService, public addressService: AddressService) {
   // this.subscription = this.addressService.onChange().subscribe();
  }

  ngOnInit(): void {
    this.apiService.getAddresses().subscribe((addresses)=> (this.addressService.addresses = addresses));
  }

  
  
}