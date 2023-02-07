import { Component, EventEmitter, Output } from '@angular/core';
import { Address } from 'src/app/Address';


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
