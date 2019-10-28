import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: string;

  constructor(private restService: RestService) { }

  ngOnInit() {

    console.log('Cookie : ' + document.cookie);

    this.restService.sendGetRequest('cookie').subscribe((data: any[]) => {
      console.log('Cookie received : ' + JSON.stringify(data));
      console.log('Cookie set to : ' + document.cookie);
    });

    this.restService.sendGetRequest('get').subscribe((data: any[]) => {
      console.log('Response received : ' + JSON.stringify(data));
      this.data = JSON.stringify(data);
    });
  }

}
