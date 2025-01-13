import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('BIS_TOKEN');
    return token ? true : false;
  }
  setToken(token:string){
    localStorage.setItem("BIS_TOKEN",token);
  }

  getToken(){
    return localStorage.getItem("BIS_TOKEN");
  }
  setUserName(name:string){
    localStorage.setItem("BIS_UserName",name);
  }
  setUserRole(name:string){
    localStorage.setItem("BIS_UserRole",name);
  }
  getUserName(){
    return localStorage.getItem("BIS_UserName");
  }
  getUserRole(){
    return localStorage.getItem("BIS_UserRole");
  }
  clear() {
    localStorage.removeItem('BIS_TOKEN');
    localStorage.removeItem('BIS_UserRole');
    this.navigateToLogin(this.router.routerState.snapshot.url);
    
  }
  public navigateToLogin(stateUrl) {

    //   this._injector.get(ValidatepermissionService).set();

       this.router.navigate(['/login'], { queryParams: { queryParams: { returnUrl: stateUrl } } });

   }
}
