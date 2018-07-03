import { AuthService } from './../servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(
    public authTokenService: Angular2TokenService
  ) { }

  ngOnInit() {
  }

}
