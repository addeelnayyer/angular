import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.scss'],
})
export class CtaSectionComponent {
  @Input() headline = 'Ready to Level Up Your Stream?';
  @Input() description =
    'Join 50,000+ creators already using LiveStreamPro.ai. Start your free trial today — no credit card required.';
  @Input() primaryCtaLabel = 'Start Free Trial';
  @Input() primaryCtaHref = '#';
  @Input() secondaryCtaLabel = 'Talk to Sales';
  @Input() secondaryCtaHref = '#';
}
