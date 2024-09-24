import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormsModule, ReactiveFormsModule, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzOptionComponent, NzSelectComponent } from 'ng-zorro-antd/select';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzFormModule,NzInputModule,NzButtonModule,FormsModule,ReactiveFormsModule,NzSelectComponent,NzOptionComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  loginForm: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
  }>;
  constructor(private fb: NonNullableFormBuilder) {

    this.loginForm = this.fb.group({
      username: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }
    

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Value:', this.loginForm.value);
      // Implement your login logic here
    }
  }
}
