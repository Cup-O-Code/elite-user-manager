import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser != null;
  }

  public authenticate(user: User){
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  public getUserInfo(): User{
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  public logout(){
    localStorage.removeItem('currentUser');
  }

}
