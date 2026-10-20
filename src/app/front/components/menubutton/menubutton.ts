import { Component, signal } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  imports: [Sidebar],
  selector: 'app-menubutton',
  templateUrl: './menubutton.html',
})
export class Menubutton {
  active = signal(false);

  toggleActive() {
    this.active.set(!this.active());
  }

  onClick() {
    this.toggleActive();
  }
}
