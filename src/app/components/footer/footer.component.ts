import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'twitter' | 'github' | 'youtube' | 'discord';
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() brandName = 'LiveStreamPro';
  @Input() brandAccent = '.ai';
  @Input() tagline =
    'AI-powered live streaming for the next generation of creators.';
  @Input() linkGroups: FooterLinkGroup[] = [];
  @Input() socialLinks: SocialLink[] = [];
  @Input() copyrightText = '';

  get copyright(): string {
    return (
      this.copyrightText ||
      `© ${new Date().getFullYear()} LiveStreamPro.ai. All rights reserved.`
    );
  }
}
