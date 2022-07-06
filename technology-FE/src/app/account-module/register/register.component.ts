import {Component, OnInit, Pipe} from '@angular/core';
import {Province} from '../../model/Province';
import {AccountService} from '../service/account.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {checkUserExisting} from '../validate/ValidateCheckUserExisting';
import {UserRegisterDTO} from '../../dto/UserRegisterDTO';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /* Set name for current page */
  currentPage = 'Registration';

  /* Get list provinces */
  provinces: Province[];

  /* Initialize form registration */
  formRegister: FormGroup;
  userSaved: UserRegisterDTO;
  provinceDefault = 1;

  constructor(private accountService: AccountService, private fb: FormBuilder
    ,         private router: Router , private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    /* get list provinces */
    this.accountService.getProvinces().subscribe(data => {
      this.provinces = data;
    });

    /* Set variable and validate for register form */
    this.formRegister = this.fb.group({
      fullName: ['',
        Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(50)])],
      passwordGroup: this.fb.group({
        password: ['', Validators.compose([Validators.required, Validators.minLength(4) , Validators.maxLength(50)])],
        confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(4) , Validators.maxLength(50)])]
      }, {validators: identityConfirmPassword}),
      email: ['',
        Validators.compose([Validators.required, Validators.pattern('^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$'), Validators.minLength(17)]), checkUserExisting(this.accountService)],
      phoneNumber: ['',
        Validators.compose([Validators.required, Validators.pattern(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/)])],
      province: ['']
    });

    /* Set default value for form */
    this.formRegister.get('province').setValue(this.provinceDefault, {onlySelf: true});
  }

  handleRegister() {
    /* Set password and confirm password for DTO */
    const password = this.password.value;
    const confirmPassword = this.confirmPassword.value;
    this.userSaved = this.formRegister.value;
    this.userSaved.confirmPassword = confirmPassword;
    this.userSaved.password = password;

    this.accountService.handleRegister(this.userSaved).subscribe(() => {
      this.router.navigateByUrl('/customer/login');
    });
  }

  /* Getter each instance form */
  get fullName() {
    return this.formRegister.get('fullName');
  }

  get email() {
    return this.formRegister.get('email');
  }

  get passwordGroup() {
    return this.formRegister.get('passwordGroup');
  }

  get password() {
    return this.formRegister.get(['passwordGroup', 'password']);
  }

  get confirmPassword() {
    return this.formRegister.get(['passwordGroup', 'confirmPassword']);
  }

  get phoneNumber() {
    return this.formRegister.get('phoneNumber');
  }

  get province() {
    return this.formRegister.get('province');
  }
}

function identityConfirmPassword(control: AbstractControl) {
  const formControl = control.value;
  return formControl.password === formControl.confirmPassword ? null : {identityPassword: true};
}
