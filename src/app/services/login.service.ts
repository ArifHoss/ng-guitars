import {Injectable} from '@angular/core';
import {map, Observable, of, switchMap} from "rxjs";
import {User} from "../models/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

const {apiUsers, apiKey} = environment

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //DI(Dependency Injection)
  constructor(
    private readonly http: HttpClient

  ) {
  }

  // > Models, HttpClient Observables, and RxJS operators.

  public login(username: string): Observable<User> {
    return this.checkUsername(username)
      .pipe(
        switchMap((user: User | undefined) => {
          if (user === undefined) {
            return this.createUser(username);
          }
          return of(user);
        })
      )
  }

  // Login

  // Check if user exists
  private checkUsername(username: string): Observable<User | undefined> {
    return this.http.get<User[]>(`${apiUsers}?username=${username}`)
      .pipe(
        // Rxjs Operators
        map((response: User[]) => response.pop())
      )
  }

  // IF NOT user - Create a User
  private createUser(username: string): Observable<User> {
    const user = {
      username,
      favourites: []
    };

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": apiKey
    });

    return this.http.post<User>(apiUsers, user, {
      headers
    })
  }

  // IF User || Created User -> Store user


}
