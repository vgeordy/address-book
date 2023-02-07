import {
  Component,
  OnInit,
} from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { ApiService } from 'src/app/services/api.service';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns = ['id', 'name', 'address', 'email', 'phone-number','actions'];
  

  constructor(
    public apiService: ApiService,
    public uiService: UiService,
    public addressService: AddressService
    
  ) { }

  ngOnInit(): void {
    this.apiService
      .getAddresses()
      .subscribe((addresses) => (this.addressService.addresses = addresses));

      
  }
}
