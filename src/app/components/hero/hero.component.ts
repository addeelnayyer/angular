import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Input() badge = '🚀 Now in Public Beta';
  @Input() headlineStart = 'Stream Smarter with';
  @Input() headlineAccent = 'AI-Powered';
  @Input() headlineEnd = 'Production Tools';
  @Input() description =
    'LiveStreamPro.ai gives creators studio-grade production, real-time AI overlays, and audience analytics — all from a single browser tab.';
  @Input() primaryCtaLabel = 'Start Streaming Free';
  @Input() primaryCtaHref = '#';
  @Input() secondaryCtaLabel = 'Watch Demo';
  @Input() secondaryCtaHref = '#';
  @Input() heroImageUrl = '';
  @Input() heroImageAlt = 'LiveStreamPro dashboard preview';
}
