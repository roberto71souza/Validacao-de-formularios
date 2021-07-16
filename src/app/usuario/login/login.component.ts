import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  get formControl(): any {
    return this.form.controls;
  }
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.validacaoFormulario();
  }

  public validacaoFormulario(): void {
    this.form = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });
  }

  public validaControle(campo: FormControl): any {
    return { invalid: campo.errors && campo.touched };
  }

  logar(): void {
    alert('ola visitante');
  }
}
