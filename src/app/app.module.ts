import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table'; 
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewaddressbuttonComponent } from './components/new-address-button/new-address-button.component';
import { TableComponent } from './components/table/table.component';
import { AddressDialogComponent } from './components/address-dialog/address-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewaddressbuttonComponent,
    TableComponent,
    AddressDialogComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
