import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';

export interface Testimonial {
  quote: string;
  authorName: string;
  authorRole: string;
  authorAvatarUrl?: string;
  rating?: number;
}

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule, TestimonialCardComponent],
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss'],
})
export class TestimonialsSectionComponent {
  @Input() sectionLabel = 'Testimonials';
  @Input() headline = 'Loved by Creators Worldwide';
  @Input() subheadline =
    'Join thousands of streamers who switched to LiveStreamPro.ai and never looked back.';
  @Input() testimonials: Testimonial[] = [];
}
