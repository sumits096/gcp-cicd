# Overview

This repository contains the open source NestJs application that allows you to access the Boomtown SDK from your application.

## Table of Contents
- [Connector](#connector)
- [Docs](#docs)
- [Notes](#notes)

## Getting Started
In order to build the TypeScript compiler, ensure that you have [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/) installed.

### Clone a copy of the repo:
```bash
git clone https://github.com/goboomtown/connector-ts.git
```

### Change to the connector directory:
```bash
cd connector
```

### Install dev dependencies:
```bash
npm install
```

### What's included

Within the download you'll find the following directories and files:

```
connector-ts
├── connector
|   ├── src
|   |   ├── core
|   │   |    ├── exception
|   |   |    |   └── index.ts
|   │   |    ├── helpers
|   |   |    |   └── index.ts
|   │   |    └── services
|   |   |        └── index.ts
|   |   ├── presentation
|   │   |    ├── controllers
|   |   |    |   └── index.ts
|   │   |    ├── mapper
|   |   |    |   └── index.ts
|   │   |    └── models
|   |   |        └── index.ts
|   │   ├── app.controller.spec.ts.
|   │   ├── app.controller.ts
|   │   ├── app.module.ts
|   │   ├── app.service.ts
|   │   └── main.ts    
|   ├── test
|   │   ├── app.e2e-spec.ts
|   │   └── jest-e2e.json
|   ├── .eslintrc.js
|   ├── nest-cli.json
|   ├── package-lock.json
|   ├── package.json
|   ├── README.md
|   ├── styles.css
|   ├── test.ts
|   ├── tsconfig.build.json
|   └── tsconfig.json
├── docs
|   ├── decisions
|   |   ├── 0001-use-of-typescript.md
|   |   ├── 0002-use-nestjs-for-connector.md
|   |   ├── 0003-typescript-style-guide.md
|   |   ├── 0004-use-dashes-in-filenames.md
|   |   ├── 0005-github-commit-message-guidelines.md
|   |   └── adr-template.md
|   └── index.md
└── README.md

```

## Connector 

### Core
Core layer includes services that contains methods for each Boomtown entity API endpoints.

### Presentation
Presentation layer includes controllers for API.

## Docs

### Documentation for ADR
For new ADRs, please use [adr-template.md](docs/decisions/adr-template.md) as base template

- [ADR-0001](docs/decisions/0001-use-of-typescript.md) - Use of Typescript
- [ADR-0002](docs/decisions/0002-use-nestjs-for-connector.md) - Use NestJs for Connector
- [ADR-0003](docs/decisions/0003-typescript-style-guide.md) - Use TypeScript Code Style 
- [ADR-0004](docs/decisions/0004-use-dashes-in-filenames.md) - Use Dashes in file name 
- [ADR-0005](docs/decisions/0005-github-commit-message-guidelines.md) - Use GitHub Commit Standards
- [ADR-0006](docs/decisions/0006-use-of-internal-spec.md) - Use of Internal Spec
