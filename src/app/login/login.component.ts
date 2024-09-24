import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormsModule, ReactiveFormsModule, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzFormModule,NzInputModule,NzButtonModule,BrowserAnimationsModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  

  constructor(private fb: NonNullableFormBuilder) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  loginForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>;

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Value:', this.loginForm.value);
      // Implement your login logic here
    }
  }
}
