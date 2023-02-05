import { Component, EventEmitter, Output } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { Address } from 'src/app/Address';
import { MatDialog } from '@angular/material/dialog';
import { AddressDialogComponent } from '../address-dialog/address-dialog.component';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  title: string = "ADDRESS BOOK";

  constructor(private uiService: UiService) {}

  onAddAddress() {
    this.uiService.addUIAddress();
  
  }
}



