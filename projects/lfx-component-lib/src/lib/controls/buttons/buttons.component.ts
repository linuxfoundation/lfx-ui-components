import { Component, input } from '@angular/core';

enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

@Component({
  selector: 'lfx-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
})
export class ButtonsComponent {
  type = input<ButtonType>(ButtonType.PRIMARY);
}
