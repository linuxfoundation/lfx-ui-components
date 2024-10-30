import { Component, input, output } from '@angular/core';

export type IButtonType = 'primary' | 'secondary' | 'tertiary';

@Component({
  selector: 'lfx-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
})
export class ButtonsComponent {
  type = input<IButtonType>('primary');
  disabled = input<boolean>(false);

  click = output<void>();

  onClick() {
    this.click.emit();
  }
}
