import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-personal-statement',
  templateUrl: './personal-statement.component.html',
  styleUrls: ['./personal-statement.component.css']
})
export class PersonalStatementComponent implements OnInit {
  environment = environment;

  constructor() { }

  ngOnInit() {
  }

}
