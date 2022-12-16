import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  loginHandler() {
    if (this.form.invalid) { return; }
    const { email, password } = this.form.value;
    this.authService.login(email!, password!)
      .subscribe(user => {
        sessionStorage.setItem('email', user.email);
        sessionStorage.setItem('authToken', user.accessToken);
        sessionStorage.setItem('userId', user._id);
        this.router.navigate(['/book/list']);
      });
  }
}