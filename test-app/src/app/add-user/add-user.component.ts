import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-add-user',
  // imports: [
  //   CommonModule,
  //   ReactiveFormsModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatButtonModule
  // ],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  // ngOnInit(): void {
  //   console.log('AddUserComponent loaded');
  // }
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      user_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      this.userService.addUser(newUser).subscribe(
        (response) => {
          console.log('User added successfully', response);
          this.router.navigate(['/']); // Redirect after success
        },
        (error) => {
          console.error('Error adding user', error);
        }
      );
    }
  }
}
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserService } from '../user.service';
// import { User } from '../user.model';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';


// @Component({
//   selector: 'app-add-user',
//   standalone: true,
//   templateUrl: './add-user.component.html',
//   imports: [
//     ReactiveFormsModule,
//     MatFormFieldModule,  // Include MatFormFieldModule
//     MatInputModule,      // Include MatInputModule
//     MatButtonModule
//   ],
// })
// export class AddUserComponent implements OnInit {
//   userForm!: FormGroup;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     console.log('AddUserComponent loaded');
//     this.userForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//     });
//   }

//   onSubmit() {
//     if (this.userForm.valid) {
//       console.log('User data:', this.userForm.value);
//     }
//   }
// }
