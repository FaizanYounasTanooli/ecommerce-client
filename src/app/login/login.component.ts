
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { RoleService } from '../services/role.service';
import { NzFormControlComponent } from 'ng-zorro-antd/form';
import { NzFormItemComponent } from 'ng-zorro-antd/form';
import { NzFormLabelComponent } from 'ng-zorro-antd/form';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzFormControlComponent, NzFormItemComponent, NzFormLabelComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    role:FormControl<string>;
  }>;

  constructor(private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }

  submitForm(): void {
    
  }

}
