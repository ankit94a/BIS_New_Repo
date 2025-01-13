import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { authInterceptor } from 'projects/sharedlibrary/src/services/auth-interceptor.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useValue: authInterceptor,
        multi: true
      }
    ],
})
export class AppComponent {
  title = 'clerk';
}
