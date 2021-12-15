import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  users?: Users[];

  userObj : Users = new Users();
  constructor(private usersService : UsersService,
    private api : UsersService,) { }

  ngOnInit(): void {
     this.getAllUsers();
  }

  getAllUsers(): void {
    this.usersService.getAll()
    .subscribe(
        data => {
            this.users = data;
            console.log(data);
        },
        error => {
            console.log(error);
        }
    )
  }

  deleteOneUser(user : any) {
      this.api.deleteUser(user.id)
      .subscribe(res=>{
          alert('Utilisateur supprimé');
          this.getAllUsers();
      })
  }

}
