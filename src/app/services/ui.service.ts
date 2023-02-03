import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Observable, Subject} from 'rxjs';
import { Address } from '../Address';
import { AddressDialogComponent } from '../components/address-dialog/address-dialog.component';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private newAddress!: Address;
  private subject = new Subject<any>();



  constructor(private dialog: MatDialog) { }


  addUIAddress() {
    const dialogRef = this.dialog.open(AddressDialogComponent, {
      width: '500px',
      height: '500px',
      data: {}
    });
  
    
    dialogRef.afterClosed().subscribe(result => (this.newAddress = result));
    console.log(this.newAddress);
    this.subject.next(this.newAddress);
  }

  onAddClick(): Observable<any> {
    return this.subject.asObservable();
  }


}

