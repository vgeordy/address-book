import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table'; 
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewaddressbuttonComponent } from './components/new-address-button/new-address-button.component';
import { TableComponent } from './components/table/table.component';
import { AddressDialogComponent } from './components/address-dialog/address-dialog.component';
import { AddAddressComponent } from './components/add-address/add-address.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewaddressbuttonComponent,
    TableComponent,
    AddressDialogComponent,
    AddAddressComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
