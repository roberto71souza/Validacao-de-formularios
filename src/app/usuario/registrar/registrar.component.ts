import { Component, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidaSenhas } from 'src/app/_helper/validaSenhas';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent implements OnInit {
  form: FormGroup;

  get formControl(): any {
    return this.form.controls;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.validaFormulario();
  }

  public validaFormulario(): void {
    const formOptions: AbstractControlOptions = {
      validators: ValidaSenhas.compararSenhas('senha', 'confirmSenha'),
    };
    this.form = this.formBuilder.group(
      {
        nome: ['', [Validators.required, Validators.max(60)]],
        email: ['', [Validators.required, Validators.email]],
        telefone: ['', [Validators.required]],
        senha: ['', [Validators.required, Validators.minLength(5)]],
        confirmSenha: ['', [Validators.required]],
      },
      formOptions
    );
  }

  public validaControle(campo: FormControl): any {
    return { invalid: campo.errors && campo.touched };
  }

  registrar(): void {
    if (this.form.valid) {
      alert(
        `Usuario ${this.form.controls.nome.value} cadastrado com sucesso !!`
      );
      this.form.reset();
    }
  }
}
