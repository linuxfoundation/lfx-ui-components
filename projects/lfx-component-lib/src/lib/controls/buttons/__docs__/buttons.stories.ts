// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

import { Meta, StoryObj } from '@storybook/angular';
import { expect, within } from '@storybook/test';
import { ButtonsComponent, IButtonType } from '../buttons.component';

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
      <lfx-buttons type="${args.type}" [disabled]="${args.disabled}" [isDrillDown]="${args.isDrillDown}">
        <i class="fa-sharp fa-light fa-file-chart-column"></i>
        <span>Button Text</span>
        <i class="fa-sharp fa-light fa-arrow-right"></i>
      </lfx-buttons>
    `,
  }),
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'] as IButtonType[],
    },
    disabled: {
      control: 'boolean',
    },
    isDrillDown: {
      control: 'boolean',
    },
  },
  args: {
    type: 'primary' as IButtonType,
  },
};

export default meta;

export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    type: 'secondary' as IButtonType,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
  render: (args) => ({
    template: `
      <lfx-buttons type="secondary"  [disabled]="${args.disabled}">
        <i class="fa-sharp fa-light fa-file-chart-column"></i>
        <span>Button Text</span>
        <i class="fa-sharp fa-light fa-arrow-right"></i>
      </lfx-buttons>
    `,
  }),
  play: async ({ canvasElement }) => {
    const element = getElement(canvasElement);
    await expect(
      element
        .querySelector('button')
        ?.classList.contains('lfx-button--secondary'),
    ).toBeTruthy();
  },
};

export const Tertiary: Story = {
  args: {
    type: 'tertiary' as IButtonType,
  },
  render: (args) => ({
    template: `
      <lfx-buttons type="tertiary"  [disabled]="${args.disabled}">
        <i class="fa-sharp fa-light fa-file-chart-column"></i>
        <span>Button Text</span>
        <i class="fa-sharp fa-light fa-arrow-right"></i>
      </lfx-buttons>
    `,
  }),
  play: async ({ canvasElement }) => {
    const element = getElement(canvasElement);
    await expect(
      element
        .querySelector('button')
        ?.classList.contains('lfx-button--tertiary'),
    ).toBeTruthy();
  },
};
