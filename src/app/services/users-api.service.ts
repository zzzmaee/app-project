import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  constructor(private _http: HttpClient) { }
  public getUsers(): Observable<User[]> {
    return this._http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
