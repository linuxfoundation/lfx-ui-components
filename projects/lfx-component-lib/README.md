# LfxComponentLib

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Installation with NG CLI

`ng add lfx-component-lib`

## Code scaffolding

Run `ng generate component component-name --project lfx-component-lib` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project lfx-component-lib`.

> Note: Don't forget to add `--project lfx-component-lib` or else it will be added to the default project in your `angular.json` file.

## Scaffolding with Storybook using lfx-ng-schematics (see: https://github.com/linuxfoundation/lfx-ng-schematics for details)

Before running the schematics, make sure you have the lfx-ng-schematics working in your local project. This can be done in 2 ways:

1. Install lfx-ng-schematics in your local project: `npm install @linuxfoundation/lfx-ng-schematics` (Note: this has to be deployed to the npm registry first, if not then go to step 2)
2. Clone the lfx-ng-schematics repo and install the plugins then run `yarn verdaccio` to start the local npm registry. Add the local registry to your npm client: `ng add lfx-ng-schematics --registry=http://localhost:4873` (to verify it's installed run `schematics lfx-ng-schematics: --list-schematics`)

For more information see this video: https://www.loom.com/share/6f296c0558f348c2a8de911006d2a903?sid=ae32b4e8-a02a-4e22-bd7a-c44fb823584c

After installing the schematics, run `ng g lfx-ng-schematics:lfx-c --name <name of component>`

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

This project already has the github workflows setup, simple push your branch and file a PR for it to be merged to main.
This will create a published version of the package. (Note: This will soon be changed to release tags)

## Running unit tests

Run `ng test lfx-component-lib` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Storybook

To start storybook run `npm run storybook` and navigate to `http://localhost:6006/`.
To get access to Figma designs in Design tab add `STORYBOOK_FIGMA_ACCESS_TOKEN` to your environment variables. To generate Figma personal access token follow [this guide](https://www.figma.com/developers/api#access-tokens).

```

```
