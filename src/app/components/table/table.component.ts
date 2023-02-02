import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Address } from 'src/app/Address';
import { AddressService } from 'src/app/services/address.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit{
  addresses: Address[] = [];
  displayedColumns = ['id', 'name', 'address','email','actions'];
  @Output() onDeleteTask: EventEmitter<Address> = new EventEmitter();
  @Output() onEditTask: EventEmitter<Address> = new EventEmitter();

  constructor(private addressService: AddressService) {}


  ngOnInit(): void {
      this.addressService.getAddresses().subscribe((addresses)=> (this.addresses = addresses));
  }

  onDelete(address: Address) {
    this.addressService.deleteAddress(address).subscribe(()=> (this.addresses = this.addresses.filter(a => a.id !== address.id)));
  }
  
  onEdit() {

  // modal pop up
    
   // save the changes in address variable

   // make the http call
    //this.addressService.editAddress(address).subscribe();
  }

}


