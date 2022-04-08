import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-logout',
  templateUrl: './auth-logout.component.html',
})
export class AuthLogoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/']);
  }
}
