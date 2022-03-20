import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css'],
})
export class LoginsuccessComponent implements OnInit {
  constructor(
    private tokenStorage: TokenStorageService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  logout() {
    this.tokenStorage.signOut;
    this._router.navigate(['']);
  }
}
