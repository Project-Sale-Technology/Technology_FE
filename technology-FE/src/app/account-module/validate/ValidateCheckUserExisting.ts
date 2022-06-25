import {AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {AccountService} from "../service/account.service";
import {User} from "../../model/User";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

export function checkUserExisting(userService: AccountService): AsyncValidatorFn  {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    console.log(control.value);
    return userService.checkUserExisting(control.value).pipe(map(
      (user: User) => {
        console.log(user);
        return (user && user != null) ? {"userExisting": true} : null;
      }
    ))
  };
}
