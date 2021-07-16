import { AbstractControl, FormGroup } from '@angular/forms';

export class ValidaSenhas {
  static compararSenhas(senha: string, senhaMatch: string): any {
    return (group: AbstractControl) => {
      const formGroup = group as FormGroup;
      const controle = formGroup.controls[senha];
      const matchControl = formGroup.controls[senhaMatch];

      if (matchControl.errors && !matchControl.errors.senhasBatem) {
        return null;
      }

      if (controle.value !== matchControl.value) {
        matchControl.setErrors({ senhasBatem: true });
      } else {
        matchControl.setErrors(null);
      }
      return null;
    };
  }
}
