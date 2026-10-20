import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topbar } from '../components/topbar/topbar';
import { Sidebar } from '../components/sidebar/sidebar';
import { Menubutton } from '../components/menubutton/menubutton';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Topbar, Sidebar, Menubutton],
  templateUrl: './layout.html',
})
export class Layout {}
