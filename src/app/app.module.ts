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
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import { MatMenuModule } from '@angular/material/menu';
import {RouterModule, Routes} from "@angular/router"

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewaddressbuttonComponent } from './components/new-address-button/new-address-button.component';
import { TableComponent } from './components/table/table.component';
import { AddressDialogComponent } from './components/address-dialog/address-dialog.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AddressBookComponent } from './components/address-book/address-book.component';

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"

  },
  {
  path: "orders/address-book",
  component: AddressBookComponent,
  pathMatch: "full"

  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewaddressbuttonComponent,
    TableComponent,
    AddressDialogComponent,
    NavBarComponent,
    HomeComponent,
    AddressBookComponent
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
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
