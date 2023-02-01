import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewaddressbuttonComponent } from './components/newaddressbutton/newaddressbutton.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewaddressbuttonComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
