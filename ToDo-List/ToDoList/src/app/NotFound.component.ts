import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <a routerLink="/home">Go to Home</a>
    </div>
  `,
  styles: [`
    .not-found-container {
      text-align: center;
      padding: 50px;
    }
    a {
      color: #d64f58;
      text-decoration: none;
    }
  `]
})
export class NotFoundComponent {}
