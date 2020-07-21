import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  firstName = '';
  lastName = '';
  name = '';
  selected = 0;
  users : any[] = []; //Array
  submitted = false;
  test = true;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  inputYourName(event: any): void {
    this.firstName = event.target.value;
  }

  inputLastname(input: string): void {
    this.lastName = input;
}

  get f() {
  return this.loginForm.controls;
}

saveData(): void {
  this.submitted = true;
  if (this.loginForm.invalid) {
    return;
  }
  const fullName = `${this.f.firstName.value} ${this.f.lastName.value}`;
  this.users.push({ name: fullName, status: false });
}

  check(index: number): void {
    this.users[index].status = !this.users[index].status;
    this.selected = this.users.filter((u) => u.status).length;
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }
}
