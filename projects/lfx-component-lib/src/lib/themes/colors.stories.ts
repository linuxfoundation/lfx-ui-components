import { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'LFX Components/Themes/Colors',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const DefaultText: Story = {
  render: () => ({
    template: `
      <p class="text-primary">This is a paragraph of body text.</p>
    `,
  }),
};

export const SecondaryText: Story = {
  render: () => ({
    template: `
      <p class="text-secondary">This is a paragraph of body text</p>
    `,
  }),
};

export const AllColors: Story = {
  render: () => ({
    template: `
      <p>This is a paragraph of body text.</p>
      <p class="text-secondary">This is a paragraph of body text.</p>
    `,
  }),
};
