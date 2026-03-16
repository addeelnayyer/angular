import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-section.component.html',
  styleUrls: ['./stats-section.component.scss'],
})
export class StatsSectionComponent {
  @Input() stats: Stat[] = [];
}
