import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {User} from "../../model/User";
import {ResetPasswordService} from "../reset-password/service/reset-password.service";

export function checkPwdUsed(resetPasswordService: ResetPasswordService): AsyncValidatorFn  {
  /* Get token */
  const token = window.localStorage.getItem('reset_token');
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return resetPasswordService.checkPasswordUsed(token , control.value).pipe(map(
      (user: User) => {
        return (user && user != null) ? {"passwordUsedCurrently": true} : null;
      }
    ))
  };
}
