# Contributing to Log Triage Sandbox

First off, thank you for considering contributing to Log Triage Sandbox! It's people like you that make this tool better for everyone.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if relevant**
- **Note your environment** (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the proposed feature
- **Explain why this enhancement would be useful**
- **List any alternative solutions** you've considered

### Pull Requests

1. **Fork the repo** and create your branch from `main`
2. **Install dependencies**: `npm install`
3. **Make your changes**
4. **Add tests** if applicable
5. **Ensure the test suite passes**: `npm test`
6. **Format your code**: `npm run format`
7. **Lint your code**: `npm run lint`
8. **Commit with clear messages**
9. **Push to your fork** and submit a pull request

## Development Process

### Setting Up Development Environment
```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/log-triage-sandbox.git

# Add upstream remote
git remote add upstream https://github.com/original/log-triage-sandbox.git

# Install dependencies
npm install

# Start development server
npm run dev
```

### Code Style

- Use 2 spaces for indentation
- Use meaningful variable names
- Write comments for complex logic
- Follow React best practices
- Use functional components and hooks

### Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
```
feat: add advanced search functionality
fix: resolve date range filter bug
docs: update installation instructions
style: format code with prettier
refactor: optimize log filtering algorithm
test: add unit tests for log parser
chore: update dependencies
```

### Testing

- Write unit tests for new functionality
- Ensure all tests pass before submitting
- Aim for >80% code coverage
- Test edge cases
```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm run test:coverage
```

### Documentation

- Update README.md for user-facing changes
- Add JSDoc comments for functions
- Update API documentation if needed
- Include inline comments for complex code

## Project Structure
```
src/
├── components/        # React components
├── utils/            # Utility functions
├── hooks/            # Custom React hooks
├── constants/        # Constants and configurations
└── __tests__/        # Test files
```

## Review Process

1. Maintainers will review your PR
2. Feedback will be provided via comments
3. Make requested changes
4. Once approved, your PR will be merged

## Questions?

Feel free to:
- Open an issue for questions
- Join our Discord server
- Email us at dev@logtriage.dev

## Recognition

Contributors are recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing! 🎉
