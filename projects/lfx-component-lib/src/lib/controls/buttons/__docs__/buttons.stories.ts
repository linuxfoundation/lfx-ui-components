// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

import { Meta, StoryObj } from '@storybook/angular';
import { within } from '@storybook/test';
import { ButtonsComponent } from '../buttons.component';

type Story = StoryObj<ButtonsComponent>;

function getElement(canvasElement: HTMLElement): HTMLElement {
  const canvas = within(canvasElement);
  return canvas.getByTestId('controls/buttons-container');
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonsComponent> = {
  title: 'LFX Components/Controls/Buttons',
  component: ButtonsComponent,
  tags: ['autodocs'],
  render: (args) => ({
    template: `
      <lfx-buttons type="primary">
        <span>Button Text</span>
      </lfx-buttons>
    `,
  }),
};

export default meta;

export const Default: Story = {
  args: {},
};
