import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../../../model/User";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {AuthService} from "../../../home-module/chat-app/service/auth.service";

const API_URL = "http://localhost:8080/account";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<User>;

  /*Set user to get after login */
  public user: Observable<User>;

  constructor(private router: Router, private httpClient: HttpClient
  ,private authService: AuthService) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  /* Handle login */
  handleLogin(user: User): Observable<User> {
    return this.httpClient.post<User>(`${API_URL}/authenticate`, user)
      .pipe(map(user => {
        /* Set token for user */
        localStorage.setItem('user', JSON.stringify(user));

        /* Set status online for user */
        this.authService.setStatusForUser(true , user.id);

        this.userSubject.next(user);
        return user;
      }));
  }

  /* Logout */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
}
