# React Template

This is a template repository for a React project. It provides a basic setup and configuration for building React applications with a focus on code quality, linting, formatting, testing, and code coverage.

## Features

- **Linting**: The project includes ESLint for static code analysis and enforcing code quality standards.
- **Formatting**: Prettier is integrated to ensure consistent code formatting across the project.
- **Continuous Integration**: The repository is set up with GitHub Actions for continuous integration. The CI workflow includes installing dependencies, running linters, running tests, and generating code coverage reports.
- **Testing**: The project uses Jest as the testing framework for unit testing components.
- **Snapshot Testing**: Snapshot testing is implemented to capture and compare component snapshots for visual regression testing.
- **Code Coverage**: Code coverage reports are generated and included in the CI workflow. You can view the coverage reports after running the tests.
- **Performance Optimization**: Lighthouse CI is integrated into the pipeline to measure and monitor the performance of the application.
- **Build**: The project is set up to build the React application using `react-scripts build`.
- **Development Server**: Use `react-scripts start` to run the development server for local development.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/react-template.git`
2. Install the dependencies: `npm install`
3. Run linting and formatting checks: `npm run lint` and `npm run format --check`
4. Build the project: `npm run build`
5. Run tests: `npm test`
6. Generate code coverage report: `npm run coverage`
7. Start the development server: `npm start`

## Folder Structure

The project structure is set up as follows:

- `public/`: Contains the public assets and HTML template.
- `src/`: Contains the application source code.
  - `components/`: Contains reusable React components.
  - `styles/`: Contains CSS or SCSS stylesheets.
  - `App.js`: The main component of the application.
  - `index.js`: Entry point for the application.
  - `setupTests.js`: Configuration file for setting up testing environment.

## Testing

The project includes Jest as the testing framework for unit testing components. To run the tests, use the following command:
  - npm test

Snapshot testing is also implemented to capture and compare component snapshots for visual regression testing.

## Code Coverage

Code coverage reports are generated as part of the CI workflow. After running the tests, you can generate a code coverage report locally using the following command:
  - npm run coverage


The coverage report will be generated in the `coverage/` directory.