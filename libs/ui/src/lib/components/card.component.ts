import { Component, Input } from '@angular/core';

@Component({
  selector: 'yofteam-card',
  standalone: true,
  template: `
    <section class="card">
      <h3>{{ title }}</h3>
      <p><ng-content></ng-content></p>
    </section>
  `,
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title = '';
}
