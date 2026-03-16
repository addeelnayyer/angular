import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Step {
  stepNumber: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works-section.component.html',
  styleUrls: ['./how-it-works-section.component.scss'],
})
export class HowItWorksSectionComponent {
  @Input() sectionLabel = 'How It Works';
  @Input() headline = 'Go Live in Three Simple Steps';
  @Input() subheadline =
    'No complex setup. No downloads. Just connect and stream.';
  @Input() steps: Step[] = [];
}
