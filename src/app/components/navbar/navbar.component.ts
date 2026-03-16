import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() brandName = 'LiveStreamPro';
  @Input() brandAccent = '.ai';
  @Input() links: NavLink[] = [];
  @Input() ctaLabel = 'Start Free Trial';
  @Input() ctaHref = '#';

  mobileOpen = false;

  toggleMobile(): void {
    this.mobileOpen = !this.mobileOpen;
  }
}
