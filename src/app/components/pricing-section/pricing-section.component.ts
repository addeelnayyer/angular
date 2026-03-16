import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingCardComponent } from '../pricing-card/pricing-card.component';

export interface PricingPlan {
  planName: string;
  price: string;
  priceSuffix?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref?: string;
  highlighted?: boolean;
  badgeText?: string;
}

@Component({
  selector: 'app-pricing-section',
  standalone: true,
  imports: [CommonModule, PricingCardComponent],
  templateUrl: './pricing-section.component.html',
  styleUrls: ['./pricing-section.component.scss'],
})
export class PricingSectionComponent {
  @Input() sectionLabel = 'Pricing';
  @Input() headline = 'Simple, Transparent Pricing';
  @Input() subheadline =
    'Start free. Upgrade when you need more power. No hidden fees, cancel anytime.';
  @Input() plans: PricingPlan[] = [];
}
