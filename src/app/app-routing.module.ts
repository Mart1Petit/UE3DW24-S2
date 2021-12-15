import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './general/header/header.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';

const routes: Routes = [
    { path: 'header', component: HeaderComponent},
    { path: 'users', component: UsersListComponent},
    { path: 'user-add', component: UserAddComponent},
    { path: 'user-update', component: UserUpdateComponent},
    { path: 'user-delete', component: UserDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
