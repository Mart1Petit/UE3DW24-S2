import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users.model';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

const baseUrl = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<Users[]>(baseUrl + '/users');
  }

  addUser(data : any) {
    return this.http.post<any>(baseUrl + 'createuser', data)
    .pipe(map((res:any)=>{
        return res;
    }))
  }

  updateUser(data : any, id: number) {
    return this.http.put<any>(baseUrl + 'updateuser/' + id, data)
    .pipe(map((res:any)=>{
        return res;
    }))
  }

  deleteUser(id : number) {
    return this.http.delete<any>(baseUrl + 'deleteuser/' + id)
    .pipe(map((res:any)=>{
        return res;
    }))
  }

}
