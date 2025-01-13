import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedLibraryModule } from '../../shared-library.module';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
// import { AuthHelper } from 'projects/shared/src/helpers/auth-helper';
// import { SharedModule } from 'projects/shared/src/public-api';

@Component({
  selector: 'app-header',
  standalone:true,
  imports:[SharedLibraryModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  // companyName: string;
  // userName:string;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    // this.companyName = localStorage.getItem('company');
    // this.userName = localStorage.getItem('name')
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  onLoggedout() {
    // this.helper.logout();
    this.authService.clear()
  }

}
