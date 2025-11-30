import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, RouterModule]
})
export class App {
  protected readonly title = signal('inventario-frontend');
}
