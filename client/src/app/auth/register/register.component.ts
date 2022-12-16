import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  registerHandler() {
    const { email, password } = this.form.value;
    this.authService.register(email!, password!)
      .subscribe(user => {
        this.authService.user = user;
        sessionStorage.setItem('email', user.email);
        sessionStorage.setItem('authToken', user.accessToken);
        sessionStorage.setItem('userId', user._id);
        this.router.navigate(['/book/list']);
      });
  }
}