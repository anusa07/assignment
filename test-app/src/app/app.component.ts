// // // // // // // // import { Component } from '@angular/core';
// // // // // // // // import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
// // // // // // // // import { UserListComponent } from './user-list/user-list.component';
// // // // // // // // import { AddUserComponent } from './add-user/add-user.component';

// // // // // // // // @Component({
// // // // // // // //   selector: 'app-root',
// // // // // // // //   standalone: true,   // Ensure this is standalone
// // // // // // // //   imports: [UserListComponent, AddUserComponent,HttpClientModule],  // Import HttpClientModule here
// // // // // // // //   // template: `<app-user-list></app-user-list>`,
// // // // // // // //   // template: `<app-add-user></app-add-user>`,
// // // // // // // //   template: `
// // // // // // // //     <button (click)="showAddUser = false">Show User List</button>
// // // // // // // //     <button (click)="showAddUser = true">Add User</button>
// // // // // // // //     <app-user-list *ngIf="!showAddUser"></app-user-list>
// // // // // // // //     <app-add-user *ngIf="showAddUser"></app-add-user>
// // // // // // // //   `,
// // // // // // // //   styleUrls: ['./app.component.css'],
// // // // // // // // })
// // // // // // // // export class AppComponent {
// // // // // // // //   title = 'user-list-app';
// // // // // // // //   showAddUser = false;
// // // // // // // // }

// // // // // // import { Component } from '@angular/core';
// // // // // // import { CommonModule } from '@angular/common';
// // // // // // import { UserListComponent } from './user-list/user-list.component';
// // // // // // import { AddUserComponent } from './add-user/add-user.component';
// // // // // // import { HttpClientModule } from '@angular/common/http';

// // // // // // @Component({
// // // // // //   selector: 'app-root',
// // // // // //   standalone: false,
// // // // // //   // imports: [CommonModule, UserListComponent, AddUserComponent, HttpClientModule],
// // // // // //   template: `
// // // // // //     <button (click)="showAddUser = false">Show User List</button>
// // // // // //     <button (click)="showAddUser = true">Add User</button>
// // // // // //     <app-user-list *ngIf="!showAddUser"></app-user-list>
// // // // // //     <app-add-user *ngIf="showAddUser"></app-add-user>
// // // // // //   `,
// // // // // //   styleUrls: ['./app.component.css'],
// // // // // // })
// // // // // // export class AppComponent {
// // // // // //   title = 'user-list-app';
// // // // // //   showAddUser = false; // Ensure this property is declared
// // // // // // }
// // // // // // // import { Component } from '@angular/core';
// // // // // // // import { CommonModule } from '@angular/common'; // For common directives like *ngIf
// // // // // // // import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // For animations
// // // // // // // import { UserListComponent } from './user-list/user-list.component';
// // // // // // // import { AddUserComponent } from './add-user/add-user.component';
// // // // // // // import { HttpClientModule } from '@angular/common/http';

// // // // // // // @Component({
// // // // // // //   selector: 'app-root',
// // // // // // //   standalone: true,
// // // // // // //   imports: [CommonModule, BrowserAnimationsModule, UserListComponent, AddUserComponent, HttpClientModule],
// // // // // // //   template: `
// // // // // // //     <button (click)="showAddUser = false">Show User List</button>
// // // // // // //     <button (click)="showAddUser = true">Add User</button>
// // // // // // //     <app-user-list *ngIf="!showAddUser"></app-user-list>
// // // // // // //     <app-add-user *ngIf="showAddUser"></app-add-user>
// // // // // // //   `,
// // // // // // //   styleUrls: ['./app.component.css'],
// // // // // // // })
// // // // // // // export class AppComponent {
// // // // // // //   title = 'user-list-app';
// // // // // // //   showAddUser = false;
// // // // // // // }
// // // // // import { Component } from '@angular/core';
// // // // // import { CommonModule } from '@angular/common';
// // // // // import { UserListComponent } from './user-list/user-list.component';
// // // // // import { AddUserComponent } from './add-user/add-user.component';

// // // // // @Component({
// // // // //   selector: 'app-root',
// // // // //   template: `
// // // // //     <button (click)="showAddUser = false">Show User List</button>
// // // // //     <button (click)="showAddUser = true">Add User</button>
// // // // //     <app-user-list *ngIf="!showAddUser"></app-user-list>
// // // // //     <app-add-user *ngIf="showAddUser"></app-add-user>
// // // // //   `,
// // // // //   // template:`<app-user-list></app-user-list>`,
// // // // //   styleUrls: ['./app.component.css']
// // // // // })
// // // // // export class AppComponent {
// // // // //   title = 'user-list-app';
// // // // //   showAddUser = false;
// // // // // }
// // // // import { CommonModule } from '@angular/common';
// // // // import { Component } from '@angular/core';
// // // // import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// // // // import { MatButtonModule } from '@angular/material/button';
// // // // import { MatFormFieldModule } from '@angular/material/form-field';
// // // // import { MatInputModule } from '@angular/material/input';
// // // // import { UserListComponent } from './user-list/user-list.component';
// // // // import { AddUserComponent } from './add-user/add-user.component';
// // // // import { UpdateUserComponent } from './update-user/update-user.component';

// // // // @Component({
// // // //   selector: 'app-root',
// // // //   templateUrl: './app.component.html',
// // // //   styleUrls: ['./app.component.css'],
// // // //   // imports: [
// // // //   //   CommonModule,
// // // //   //   FormsModule,
// // // //   //   ReactiveFormsModule,
// // // //   //   MatFormFieldModule,
// // // //   //   MatInputModule,
// // // //   //   MatButtonModule,
// // // //   //   UserListComponent,
// // // //   //   AddUserComponent,
// // // //   //   UpdateUserComponent
// // // //   // ]
// // // // })
// // // // export class AppComponent {
// // // //   title = 'user-list-app';
// // // //   showAddUser = false;
// // // //   showUpdateUser = false;
// // // //   userIdToUpdate: number | null = null;

// // // //   // Method to set user ID for updating
// // // //   startUpdate(userId: number): void {
// // // //     this.userIdToUpdate = userId;
// // // //     this.showAddUser = false;
// // // //     this.showUpdateUser = true;
// // // //   }

// // // //   // Method to reset flags
// // // //   resetView(): void {
// // // //     this.showAddUser = false;
// // // //     this.showUpdateUser = false;
// // // //     this.userIdToUpdate = null;
// // // //   }
// // // // }
// // // import { Component } from '@angular/core';

// // // @Component({
// // //   selector: 'app-root',
// // //   templateUrl: './app.component.html',
// // //   styleUrls: ['./app.component.css']
// // // })
// // // export class AppComponent {
// // //   title = 'user-list-app';
// // //   showAddUser = false;
// // //   showUpdateUser = false;
// // //   userIdToUpdate: number | null = null;

// // //   startUpdate(userId: number): void {
// // //     this.userIdToUpdate = userId;
// // //     this.showAddUser = false;
// // //     this.showUpdateUser = true;
// // //   }

// // //   resetView(): void {
// // //     this.showAddUser = false;
// // //     this.showUpdateUser = false;
// // //     this.userIdToUpdate = null;
// // //   }
// // // }
// // import { Component } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { UserListComponent } from './user-list/user-list.component';
// // import { AddUserComponent } from './add-user/add-user.component';
// // import { UpdateUserComponent } from './update-user/update-user.component';

// // @Component({
// //   selector: 'app-root',
// //   template: `
// //     <button (click)="showAddUser = false; showUpdateUser = false">Show User List</button>
// //     <button (click)="showAddUser = true; showUpdateUser = false">Add User</button>

// //     <!-- Only show the update button if there's a user to update -->
// //     <button *ngIf="userIdToUpdate !== null" (click)="showUpdateUser = true; showAddUser = false">Update User</button>

// //     <!-- User List, Add User, and Update User Components -->
// //     <app-user-list *ngIf="!showAddUser && !showUpdateUser" (editUser)="onEdit($event)"></app-user-list>
// //     <app-add-user *ngIf="showAddUser"></app-add-user>
// //     <app-update-user *ngIf="showUpdateUser && userIdToUpdate !== null" [userId]="userIdToUpdate"></app-update-user>
// //   `,
// //   styleUrls: ['./app.component.css']
// // })
// // export class AppComponent {
// //   showAddUser = false;
// //   showUpdateUser = false;
// //   userIdToUpdate: number | null = null;

// //   // This method is called when the edit button is clicked in the UserListComponent
// //   onEdit(userId: number): void {
// //     this.userIdToUpdate = userId;
// //     this.showUpdateUser = true;
// //     this.showAddUser = false;
// //   }
// // }
// import { Component } from '@angular/core';
// import { UserListComponent } from './user-list/user-list.component';
// import { AddUserComponent } from './add-user/add-user.component';
// import { UpdateUserComponent } from './update-user/update-user.component';

// @Component({
//   selector: 'app-root',
//   template: `
//     <button (click)="showAddUser = false; showUpdateUser = false">Show User List</button>
//     <button (click)="showAddUser = true; showUpdateUser = false">Add User</button>

//     <!-- Only show the update button if there's a user to update -->
//     <button *ngIf="userIdToUpdate !== null" (click)="showUpdateUser = true; showAddUser = false">Update User</button>

//     <!-- User List, Add User, and Update User Components -->
//     <app-user-list *ngIf="!showAddUser && !showUpdateUser" (editUser)="onEdit($event)"></app-user-list>
//     <app-add-user *ngIf="showAddUser"></app-add-user>
//     <app-update-user *ngIf="showUpdateUser && userIdToUpdate !== null" [userId]="userIdToUpdate"></app-update-user>
//   `,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   showAddUser = false;
//   showUpdateUser = false;
//   userIdToUpdate: number | null = null;

//   // This method is called when the edit button is clicked in the UserListComponent
//   onEdit(userId: number): void {
//     this.userIdToUpdate = userId;
//     this.showUpdateUser = true;
//     this.showAddUser = false;
//   }
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-root',
  template: `
    <button (click)="showUserList()">Show User List</button>
    <button (click)="showAddUser()">Add User</button>
    <button *ngIf="userIdToUpdate !== null" (click)="showUpdateUser()">Update User</button>

    <!-- User List, Add User, and Update User Components -->
    <app-user-list *ngIf="!showAddUserbool && !showUpdateUserbool" (editUser)="onEdit($event)"></app-user-list>
    <app-add-user *ngIf="showAddUserbool"></app-add-user>
    <app-update-user *ngIf="showUpdateUserbool && userIdToUpdate !== null" [userId]="userIdToUpdate"></app-update-user>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showAddUserbool = false;
  showUpdateUserbool = false;
  userIdToUpdate: number | null = null;

  constructor(private router: Router) {}

  // Show User List
  showUserList(): void {
    this.userIdToUpdate = null; // Reset user ID
    this.showAddUserbool = false;
    this.showUpdateUserbool = false;
    // Optionally redirect to user list route
    this.router.navigate(['/user-list']);
  }

  // Show Add User
  showAddUser(): void {
    this.userIdToUpdate = null; // Reset user ID
    this.showAddUserbool = true;
    this.showUpdateUserbool = false;
    // Optionally redirect to add user route
    this.router.navigate(['/add-user']);
  }

  // Show Update User
  showUpdateUser(): void {
    if (this.userIdToUpdate !== null) {
      this.showAddUserbool = false;
      this.showUpdateUserbool = true;
      // Optionally redirect to update user route
      this.router.navigate(['/update-user', this.userIdToUpdate]);
    }
  }

  // This method is called when the edit button is clicked in the UserListComponent
  onEdit(userId: number): void {
    this.userIdToUpdate = userId;
    this.showUpdateUserbool = true;
    this.showAddUserbool = false;
    // Optionally redirect to update user route
    this.router.navigate(['/update-user', userId]);
  }
}
