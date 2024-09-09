// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatTableModule } from '@angular/material/table';  // Import Angular Material's MatTableModule
// import { HttpClientModule } from '@angular/common/http';
// import { UserService } from '../user.service';
// import { User } from '../user.model';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-user-list',
//   standalone: false,
//   // imports: [CommonModule, MatTableModule, HttpClientModule],  // Import MatTableModule here
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.css'],
// })
// export class UserListComponent implements OnInit {
//   users: User[] = [];
//   displayedColumns: string[] = ['id', 'user_name', 'email','actions'];

//   constructor(private userService: UserService) {}

//   ngOnInit(): void {
//     this.userService.getUsers().subscribe(
//       (data: User[]) => {
//         this.users = data;
//       },
//       (error) => {
//         console.error('Error fetching users:', error);
//       }
//     );
//   }

//   onDelete(userId: number): void {
//     if (confirm('Are you sure you want to delete this user?')) {
//       this.userService.deleteUser(userId).subscribe(() => {
//         this.users = this.users.filter(user => user.id !== userId);
//       });
//     }
//   }
//   onEdit(userId: number): void {
//     this.router.navigate(['/update-user', userId]);
//   }
// }
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['id', 'user_name', 'email', 'actions']; // Include 'actions'

  // Ensure Router is injected in the constructor
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  // onEdit(userId: number): void {
  //   this.router.navigate(['/update-user', userId]);
  // }
  @Output() editUser = new EventEmitter<number>();
  onEdit(userId: number): void {
    this.editUser.emit(userId);
  }

  // onEdit(userId: number): void {
  //   this.router.navigate(['/update-user', userId]);
  // }

  onDelete(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe(() => {
        this.users = this.users.filter(user => user.id !== userId);
      });
    }
  }
}
