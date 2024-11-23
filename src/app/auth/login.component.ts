import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { LoginRequest } from './login-request';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import {  MatInputModule } from '@angular/material/input';
import { AuthService } from './auth.service';
import { LoginRespond } from './login-respond';
import { A } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterLink,
    MatInputModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  form!: UntypedFormGroup;
  loginRequest!: LoginRequest;
  constructor(private authService: AuthService) {

  }
  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
}

onSubmit(): void {
  var loginRequest : LoginRequest = {
    userName: this.form.controls["userName"].value,
    password: this.form.controls["password"].value
  };
  var loginRespond : LoginRespond;

  this.authService.login(loginRequest).subscribe(
    {
      next: result => {
        console.log(result);
        if (result.success) {
          localStorage.setItem('mytoken', result.token);
        }
      },
      error: e => console.error(e)
    }
  )

}
}


