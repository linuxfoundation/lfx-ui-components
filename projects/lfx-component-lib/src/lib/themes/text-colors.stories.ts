import { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'LFX Components/Themes/Text Colors',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const DefaultText: Story = {
  render: () => ({
    template: `
      <p class="text-default">This is a paragraph of body text.</p>
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

export const LinkText: Story = {
  render: () => ({
    template: `
      <a>This is a link text</a> <br />
      <span class="link-text">This is a span with link text</span>
    `,
  }),
};

export const MessageNotice: Story = {
  render: () => ({
    template: `
      <p class="message notice">This is a message notice</p>
    `,
  }),
};

export const MessageWarning: Story = {
  render: () => ({
    template: `
      <p class="message warning">This is a message warning</p>
    `,
  }),
};

export const MessageSuccess: Story = {
  render: () => ({
    template: `
      <p class="message success">This is a message success</p>
    `,
  }),
};

export const MessageError: Story = {
  render: () => ({
    template: `
      <p class="message error">This is a message error</p>
    `,
  }),
};

export const AllColors: Story = {
  render: () => ({
    template: `
      <p>This is a paragraph of body text.</p>
      <p class="text-secondary">This is a paragraph of body text.</p>
      <a>This is a link text</a><br />
      <span class="link-text">This is a span with link text</span>
      <p class="message notice">This is a message notice</p>
      <p class="message warning">This is a message warning</p>
      <p class="message success">This is a message success</p>
      <p class="message error">This is a message error</p>
    `,
  }),
};
