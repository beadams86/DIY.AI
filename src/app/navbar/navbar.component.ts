import { Component } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  items = [
    { label: 'Diagnostics', url: '/diagnostics' },
    { label: 'DIY Tutorials', url: '/tutorials' },
    { label: 'Contact', url: '/contact' }, 
  ]
  activeItem = this.items[0]
  styleClass = 'justify-content-end align-items-end'
}
