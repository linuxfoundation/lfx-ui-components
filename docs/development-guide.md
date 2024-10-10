# LfxComponentLib Development Guide

LfxComponentLib is an Angular component library generated with Angular CLI version 18.1.0. This guide will help you set up, develop, and contribute to the library.

## Installation

To add LfxComponentLib to your Angular project, use the Angular CLI:

```bash
ng add lfx-component-lib
```

## File Structure

The LfxComponentLib project follows a specific structure. Here's an overview of the main directories and their contents:

```
lfx-component-lib/
├── docs/
│   ├── development-guide.md
│   └── README.md
└── projects/
    └── lfx-component-lib/
        ├── .storybook/
        │   ├── main.ts
        │   ├── preview.ts
        │   ├── tsconfig.json
        │   └── typings.d.ts
        ├── schematics/
        │   ├── collection.json
        │   └── ng-add/
        │       └── index.ts
        ├── src/
        │   ├── lib/
        │   │   ├── configs/
        │   │       └── color-palette.json
        │   │   ├── containers/
        │   │   ├── styles/
        │   │       └── colors.scss
        │   │       └── constants.scss
        │   │       └── typography.scss
        │   │   ├── themes/
        │   │       └── typography.stories.ts
        │   │   ├── lfx-component-lib.service.ts
        │   └── public-api.ts
        ├── ng-package.json
        ├── package.json
        ├── tsconfig.lib.json
        ├── tsconfig.lib.prod.json
        ├── tsconfig.schematics.json
        ├── tsconfig.spec.json
```

### Key Directories and Files

- `docs/`: Contains project documentation, including this development guide and the main README.md.
- `projects/lfx-component-lib/`: The main library project folder.
  - `.storybook/`: Storybook configuration files.
    - `main.ts`: Main Storybook configuration.
    - `preview.ts`: Preview configuration for Storybook.
    - `tsconfig.json`: TypeScript configuration for Storybook.
    - `typings.d.ts`: TypeScript type definitions for Storybook.
  - `schematics/`: Angular schematics for the library.
    - `collection.json`: Defines available schematics.
    - `ng-add/`: Contains the ng-add schematic for easy installation.
  - `src/`: The source code for the library.
    - `lib/`: Contains components, directives, pipes, services, and configuration files.
      - `configs/`: Configuration files, including color-palette.json.
      - `containers/`: Container components.
      - `styles/`: SCSS files for global styles.
        - `colors.scss`: Color definitions.
        - `constants.scss`: Constant values used across the library.
        - `typography.scss`: Typography styles.
      - `themes/`: Theme-related files, including typography.stories.ts for Storybook.
      - `lfx-component-lib.service.ts`: Main service file for the library.
    - `public-api.ts`: Defines what parts of the library are publicly accessible.
  - `ng-package.json`: Configuration for ng-packagr, used to build the library.
  - `package.json`: NPM package configuration for the library.
  - `tsconfig.lib.json`: TypeScript configuration for the library.
  - `tsconfig.lib.prod.json`: Production TypeScript configuration.
  - `tsconfig.schematics.json`: TypeScript configuration for schematics.
  - `tsconfig.spec.json`: TypeScript configuration for unit tests.
- `scripts/`: Contains build scripts for generating color palettes, constants, and other build-related tasks.
- `design-tokens/`: Stores JSON files with design tokens, including color primitives and theme configurations.
- `.github/workflows/`: Contains GitHub Actions workflow files for CI/CD processes, including publishing to GitHub Packages and deploying Storybook to GitHub Pages.

This structure allows for clear separation of the library code, documentation, build configuration, and development tools. The use of Storybook and custom schematics enhances the development and documentation process for the component library.

## Generating New Components

### Using Angular CLI

To generate a new component within the library:

```bash
ng generate component component-name --project lfx-component-lib
```

You can also generate other types of files like directives, pipes, services, guards, interfaces, enums, and modules.

```bash
ng generate directive|pipe|service|class|guard|interface|enum|module --project lfx-component-lib
```

> Note: Don't forget to add `--project lfx-component-lib` or else it will be added to the default project in your `angular.json` file.

### Using lfx-ng-schematics

To generate a new component with Storybook documentation:

```bash
ng g lfx-ng-schematics:lfx-c --name <name of component>
```

This command generates a component with associated Storybook files. For more details, visit the [lfx-ng-schematics repository](https://github.com/linuxfoundation/lfx-ng-schematics).

## Development Workflow

1. **Create a New Branch**: Always create a new branch for your changes.

2. **Implement Your Changes**: Develop your component or make necessary modifications.

3. **Write Tests**: Add unit tests for your new or modified code in the `*.spec.ts` files.

4. **Update Documentation**: If you've added new features or components, update the relevant documentation and create or update the corresponding Storybook stories.

5. **Build the Library**:
   ```bash
   yarn build
   ```
   This will create build artifacts in the `dist/` directory.

6. **Run Tests**:
   ```bash
   ng test lfx-component-lib
   ```

7. **Use Storybook for Development**:
   ```bash
   npm run storybook
   ```
   Navigate to `http://localhost:6006/` to view your components in Storybook.

   To access Figma designs in the Design tab, add `STORYBOOK_FIGMA_ACCESS_TOKEN` to your environment variables. [Generate a Figma personal access token](https://www.figma.com/developers/api#access-tokens) if needed.

8. **Create a Pull Request**: Once your changes are ready, create a pull request for review.

## Publishing

The project uses GitHub Actions for automated publishing. When your pull request is merged to the main branch, it will trigger the publishing process.

> Note: The publishing process will be updated to use release tags in the future.

## Additional Resources

- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [Karma Test Runner](https://karma-runner.github.io)
- [Storybook for Angular](https://storybook.js.org/docs/angular/get-started/introduction)

For any further assistance, use `ng help` or consult the Angular documentation.
