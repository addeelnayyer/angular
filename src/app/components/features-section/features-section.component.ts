import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FeatureCardComponent,
  Feature,
} from '../feature-card/feature-card.component';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule, FeatureCardComponent],
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss'],
})
export class FeaturesSectionComponent {
  @Input() sectionLabel = 'Features';
  @Input() headline = 'Everything You Need to Go Live';
  @Input() subheadline =
    'From AI-powered scene switching to real-time analytics, we handle the production so you can focus on your content.';
  @Input() features: (Feature & { accentColor?: string })[] = [];

  accentColors: (
    | 'violet'
    | 'fuchsia'
    | 'cyan'
    | 'amber'
    | 'emerald'
    | 'rose'
  )[] = ['violet', 'fuchsia', 'cyan', 'amber', 'emerald', 'rose'];
}
