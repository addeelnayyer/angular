import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.scss'],
})
export class PricingCardComponent {
  @Input() planName = '';
  @Input() price = '';
  @Input() priceSuffix = '/month';
  @Input() description = '';
  @Input() features: string[] = [];
  @Input() ctaLabel = 'Get Started';
  @Input() ctaHref = '#';
  @Input() highlighted = false;
  @Input() badgeText = 'Most Popular';
}
