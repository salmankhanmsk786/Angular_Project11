import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginRespond } from './login-respond';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authstatus = new BehaviorSubject<boolean>(false);
  public auhtStatus = this._authstatus.asObservable();
  private isauthenticated() : boolean {
    return localStorage.getItem('mytoken') != null;
    
  }

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<LoginRespond> {
    return this.http.post<LoginRespond>(`${environment.baseUrl}api/Admin/login`, loginRequest)
    .pipe(tap(LoginResult => {
      if (LoginResult.success) {
        localStorage.setItem('mytoken', LoginResult.token);
        this.setAuthStatus(true);
      }

    }));
  
  }
  onLogout() {
    localStorage.removeItem('mytoken');
    this.setAuthStatus(false);
  }

  getToken(): string | null {
    return localStorage.getItem('mytoken');
  }

  private setAuthStatus(isAuthenticated: boolean): void {
    this._authstatus.next(isAuthenticated); 
  }
}