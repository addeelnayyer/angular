import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo-cloud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-cloud.component.html',
  styleUrls: ['./logo-cloud.component.scss'],
})
export class LogoCloudComponent {
  @Input() headline = 'Trusted by teams at';
  @Input() logos: string[] = [];
}
