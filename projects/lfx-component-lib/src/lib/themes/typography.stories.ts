import { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'LFX Components/Themes/Typography',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const BodyText: Story = {
  render: () => ({
    template: `
      <p>This is a paragraph of body text. It uses Open Sans, sans-serif font with a size of 0.875rem (14px) and line height of 1rem (16px).</p>
    `,
  }),
};

export const SmallText: Story = {
  render: () => ({
    template: `
      <small>This is small text, also known as body2 in Figma. It uses Open Sans, sans-serif font with a size of 0.875rem (14px).</small>
    `,
  }),
};

export const Heading1: Story = {
  render: () => ({
    template: `
      <h1>This is a Heading 1</h1>
      <p>It uses Roboto Slab, sans-serif font with a size of 1.375rem (22px) and line height of 1.625rem (26px).</p>
    `,
  }),
};

export const Heading2: Story = {
  render: () => ({
    template: `
      <h2>This is a Heading 2</h2>
      <p>It uses Roboto Slab, sans-serif font with a size of 1.125rem (18px) and line height of 1.375rem (22px).</p>
    `,
  }),
};

export const Heading3: Story = {
  render: () => ({
    template: `
      <h3>This is a Heading 3</h3>
      <p>It uses Open Sans, sans-serif font with a size of 1rem (16px) and line height of 1.125rem (18px).</p>
    `,
  }),
};

export const Heading4: Story = {
  render: () => ({
    template: `
      <h4>This is a Heading 4</h4>
      <p>It uses Open Sans, sans-serif font with a size of 0.875rem (14px) and line height of 1rem (16px).</p>
    `,
  }),
};

export const Heading5: Story = {
  render: () => ({
    template: `
      <h5>This is a Heading 5</h5>
      <p>It uses Open Sans, sans-serif font with a size of 0.75rem (12px) and line height of 0.875rem (14px).</p>
    `,
  }),
};

export const AllTypography: Story = {
  render: () => ({
    template: `
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <p>This is a paragraph of body text.</p>
      <small>This is small text (body2).</small>
    `,
  }),
};
