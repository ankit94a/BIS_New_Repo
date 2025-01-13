import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  private excludedUrls = ['/auth/login', '/auth/signup']; // Add your excluded URLs here

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('HTTP Request intercepted:', req.url);

    // Check if the request URL matches any excluded URL
    const isExcluded = this.excludedUrls.some(url => req.url.includes(url));

    let modifiedRequest = req;

    if (!isExcluded) {
      // Clone the request to add headers if the URL is not excluded
      modifiedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.getToken()}`, // Add your token here
          'Content-Type': 'application/json',
        },
      });
    }

    // Show loader or perform some action before sending the request
    this.showLoader();

    return next.handle(modifiedRequest).pipe(
      finalize(() => {
        // Hide loader or perform some action after receiving the response
        this.hideLoader();
      })
    );
  }

  private getToken(): string {
    // Replace with the actual token fetching logic
    return 'your-token-here';
  }

  private showLoader(): void {
    console.log('Loader shown');
    // Add loader logic here
  }

  private hideLoader(): void {
    console.log('Loader hidden');
    // Add loader hiding logic here
  }
}
