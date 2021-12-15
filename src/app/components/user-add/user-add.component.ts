import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/users.model';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  formValue !: FormGroup;
  userObj : Users = new Users();
  constructor(private formbuilder: FormBuilder,
    private api : UsersService) { }

  ngOnInit(): void {
      this.formValue = this.formbuilder.group({
          firstname : [''],
          lastname : [''],
      })
  }

  addOneUser() {
      this.userObj.firstname = this.formValue.value.firstname;
      this.userObj.lastname = this.formValue.value.lastname;

      this.api.addUser(this.userObj)
      .subscribe(res=>{
          console.log(res);
          alert("Utilisateur créé avec succès");
          this.formValue.reset();
      },
      error=>{
          alert("Erreur");
          console.log(error);
      })
  }

}
