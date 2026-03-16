import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss'],
})
export class FeatureCardComponent {
  @Input() icon = '';
  @Input() title = '';
  @Input() description = '';
  @Input() accentColor:
    | 'violet'
    | 'fuchsia'
    | 'cyan'
    | 'amber'
    | 'emerald'
    | 'rose' = 'violet';

  get iconBgClass(): string {
    const map: Record<string, string> = {
      violet: 'bg-violet-500/10 text-violet-400 ring-violet-500/20',
      fuchsia: 'bg-fuchsia-500/10 text-fuchsia-400 ring-fuchsia-500/20',
      cyan: 'bg-cyan-500/10 text-cyan-400 ring-cyan-500/20',
      amber: 'bg-amber-500/10 text-amber-400 ring-amber-500/20',
      emerald: 'bg-emerald-500/10 text-emerald-400 ring-emerald-500/20',
      rose: 'bg-rose-500/10 text-rose-400 ring-rose-500/20',
    };
    return map[this.accentColor] ?? map['violet'];
  }
}
