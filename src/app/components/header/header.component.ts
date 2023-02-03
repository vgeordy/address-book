import { Component, EventEmitter, Output } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { Address } from 'src/app/Address';
import { MatDialog } from '@angular/material/dialog';
import { AddressDialogComponent } from '../address-dialog/address-dialog.component';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { __values } from 'tslib';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title: string = "ADDRESS BOOK";
  address!: Address;
  subscription!: Subscription;


  constructor(private addressService: AddressService, private uiService: UiService) {
    this.subscription = this.uiService.onAddClick().subscribe((value) => (this.address = value));
  }


  onAddAddress() {
    console.log(1234);
    this.uiService.addUIAddress()
    }



  }



