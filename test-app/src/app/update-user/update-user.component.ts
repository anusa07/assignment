import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  // ngOnInit(): void {
  //   console.log('UpdateUserComponent loaded');
  // }
  
  @Input() userId: number | null = null;
  updateForm: FormGroup;
  user: User | null = null;



  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.updateForm = this.fb.group({
      user_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    console.log('UpdateUserComponent loaded');
    if (this.userId !== null) {
      this.loadUser();
    }
  }

  loadUser(): void {
    if (this.userId !== null) {
      this.userService.getUser(this.userId).subscribe((user: User) => { // Explicitly specify the type
        this.user = user;
        this.updateForm.patchValue(user);
      });
    }
  }

  onSubmit(): void {
    if (this.updateForm.valid && this.userId !== null) {
      this.userService.updateUser(this.userId, this.updateForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
  getErrorMessage(controlName: string): string {
    const control = this.updateForm.get(controlName);
    if (!control) {
      return '';
    }
    if (control.hasError('required')) {
      return 'You must enter a value';
    }
    if (control.hasError('email')) {
      return 'Not a valid email';
    }
    return '';
  }
  
}
