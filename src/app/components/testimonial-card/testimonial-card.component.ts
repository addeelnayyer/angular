import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss'],
})
export class TestimonialCardComponent {
  @Input() quote = '';
  @Input() authorName = '';
  @Input() authorRole = '';
  @Input() authorAvatarUrl = '';
  @Input() rating = 5;

  get stars(): number[] {
    return Array.from({ length: this.rating }, (_, i) => i);
  }
}
