import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { sameValueGroupValidator } from 'src/app/shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    pass: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: []
      },
      {
        validators: [sameValueGroupValidator('password', 'rePassword')]
      }
    )
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  registerHandler() {
    if (this.form.invalid) { return; }
    const { email, pass: { password } = { } } = this.form.value;
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