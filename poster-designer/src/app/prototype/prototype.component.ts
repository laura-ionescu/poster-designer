import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.css']
})
export class PrototypeComponent implements OnInit {

  constructor (private httpService: HttpClient) { 

  }
  
  prototypes: string [];

  ngOnInit () {
    this.httpService.get('./assets/text.json').subscribe(
      data => {
        this.prototypes = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.prototypes);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
