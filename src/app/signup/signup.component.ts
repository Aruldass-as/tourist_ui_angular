import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;
  userList:any = [];

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
        id: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        firstName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]],
        lastName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(12)]],
        gender: ['', [Validators.required]],
        age: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.max(90), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        fromPlace: ['', Validators.required],
        numberOfDays: ['', [Validators.required, , Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
      });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }else{
      this.userSave();
    }
  }

    userSave(){
    let data = {id: '', firstName: '', lastName:'', gender:'', age: '', fromPlace: '', numberOfDays: ''}
    data['id'] = this.signupForm.controls['id'].value;
    data['firstName'] = this.signupForm.controls['firstName'].value;
    data['lastName'] = this.signupForm.controls['lastName'].value;
    data['gender'] = this.signupForm.controls['gender'].value;
    data['age'] = this.signupForm.controls['age'].value;
    data['fromPlace'] = this.signupForm.controls['fromPlace'].value;
    data['numberOfDays'] = this.signupForm.controls['numberOfDays'].value;
    if(!!data){
      sessionStorage.setItem('userData', JSON.stringify(data));
      this.router.navigate(['/']);
    }
  }
  

}
