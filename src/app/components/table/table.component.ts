import { Component } from '@angular/core';
import { DATA } from 'src/app/mock-address';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  data = DATA;
  displayedColumns = ['id', 'name', 'email'];
}
