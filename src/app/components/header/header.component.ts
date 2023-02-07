import { Component} from '@angular/core';
import { UiService } from 'src/app/services/ui.service';


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
  
  onClick() {
    window.location.reload();
  }


}



