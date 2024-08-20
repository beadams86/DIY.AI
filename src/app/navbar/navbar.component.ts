import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { Button } from 'primeng/button';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TabMenuModule, Button, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  items = [
    { label: 'Home', route: './'},
    { label: 'Diagnostics', route: '/diagnostics' },
    { label: 'DIY Tutorials', route: '/tutorials' },
    { label: 'Contact', route: '/contact' }, 
  ]
  styleClass = 'justify-content-end align-items-end'
  activeItem = this.items[0]
}
