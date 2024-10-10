# LFX Component Library

## Overview

The LFX Component Library is a comprehensive collection of reusable UI components designed for the LFX team to share common components across various projects. This library streamlines development, ensures consistency, and improves efficiency in building user interfaces.

## Key Features

- **Shared Components**: A set of pre-built, customizable UI components.
- **Storybook Integration**: Visual documentation and testing environment for components.
- **Design Tokens**: Centralized design variables for consistent styling.
- **Schematics**: Easy integration with Angular projects.

## Repository Structure

lfx-component-lib/
├── docs/
├── projects/
│ └── lfx-component-lib/
│ ├── src/
│ │ └── lib/
│ └── schematics/
├── scripts/
├── design-tokens/
└── .storybook/

## How It Works

1. **Component Development**: Components are developed in `projects/lfx-component-lib/src/lib/`.

2. **Documentation**: Each component is documented using Storybook, allowing developers to view and interact with components in isolation.

3. **Design Tokens**: Color palettes and other design variables are defined in `design-tokens/` and `projects/lfx-component-lib/src/lib/configs/`.

4. **Build Process**: Custom scripts in the `scripts/` directory handle tasks like generating color palettes and processing design tokens.

5. **Integration**: The `ng-add` schematic in `projects/lfx-component-lib/schematics/` facilitates easy integration of the library into Angular projects.

6. **Storybook**: The `.storybook/` directory contains configuration for Storybook, which is used to showcase and document components.

## Usage

To use this library in an Angular project:

1. Install the library using ng add:
   ```
   ng add @lfx/component-lib
   ```

2. Import and use components in your Angular application:
   ```typescript
   import { LfxButtonModule } from '@lfx/component-lib';
   ```

3. Refer to the Storybook documentation for detailed usage instructions for each component.

## Development

Follow the instructions in the [docs/development-guide.md](docs/development-guide.md) file.
