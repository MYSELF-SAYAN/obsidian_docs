# Contributing to Obsidian SDK

Thank you for your interest in contributing to Obsidian SDK! We welcome contributions from developers of all skill levels. Whether you're fixing a typo, improving documentation, or adding new features, your help is appreciated.

## Table of Contents

- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Reporting Issues](#reporting-issues)
- [Bug Reports](#bug-reports)
- [Feature Requests](#feature-requests)
- [Pull Requests](#pull-requests)
- [Code Style](#code-style)
- [Documentation](#documentation)
- [Questions](#questions)

## Getting Started

1. **Fork the repository** - Click the "Fork" button on GitHub to create your own copy
2. **Clone your fork** - `git clone https://github.com/MYSELF-SAYAN/obsidian_cli_sdk.git`
3. **Add upstream** - `git remote add upstream https://github.com/MYSELF-SAYAN/obsidian_cli_sdk.git`
4. **Create a branch** - `git checkout -b feature/your-feature-name`

## How to Contribute

### Types of Contributions

We welcome many types of contributions:

- **Bug fixes** - Find and fix issues in the codebase
- **New features** - Add new functionality to the SDK or API
- **Documentation** - Improve docs, examples, and guides
- **Code review** - Help review pull requests
- **Testing** - Add or improve test coverage
- **Examples** - Create example projects and code snippets
- **Community support** - Help answer questions in issues

### Contribution Areas

#### Documentation
- Improve existing documentation
- Add examples and tutorials
- Fix typos and improve clarity
- Translate documentation

#### Code
- Implement new API endpoints
- Improve existing services
- Write unit and integration tests
- Optimize performance

#### Community
- Report bugs with clear reproduction steps
- Suggest new features
- Help other community members
- Share your projects built with Obsidian SDK

## Reporting Issues

### Before Creating an Issue

- Search existing issues to avoid duplicates
- Check if the issue exists in the API or SDK repository
- Verify you're using the latest version

### Creating a Good Issue

Include as much of the following information as possible:

1. **Clear title** - Describe the issue concisely
2. **Description** - Explain what happened
3. **Steps to reproduce** - Numbered list of steps
4. **Expected behavior** - What you expected to happen
5. **Actual behavior** - What actually happened
6. **Environment** - OS, Node.js version, Obsidian version
7. **Logs/Error messages** - Include any relevant output

### Issue Templates

We provide templates for common issue types:
- Bug Report
- Feature Request
- Documentation Issue

## Bug Reports

A good bug report includes:

```
**Description**
A clear description of the bug.

**Steps to Reproduce**
1. First step
2. Second step
3. Additional steps

**Expected Behavior**
What should happen.

**Actual Behavior**
What actually happens.

**Environment**
- OS: [e.g., Windows 11, macOS 14]
- Node.js: [e.g., v20.0.0]
- Obsidian SDK: [e.g., v1.0.0]

**Logs**
Any relevant log output or error messages.
```

## Feature Requests

When requesting a feature, explain:

1. **Problem** - What problem does this solve?
2. **Solution** - How should it work?
3. **Alternatives** - What other solutions have you considered?
4. **Use cases** - Where would this be useful?

## Pull Requests

### Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the code style guidelines
   - Add tests for new functionality
   - Update documentation

3. **Test your changes**
   ```bash
   npm test
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: brief description of changes"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Fill out the PR template
   - Link any related issues
   - Request review from maintainers

### PR Title Format

Use clear, descriptive titles:
- `Add: new search endpoint`
- `Fix: vault list not returning results`
- `Docs: update quickstart guide`
- `Refactor: simplify file operations`

### PR Description

Include in your PR description:
- What the change does
- Why it's needed
- How to test it
- Any breaking changes

## Code Style

### General Guidelines

- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Follow existing patterns in the codebase

### TypeScript

- Use explicit types over `any`
- Export types when they're part of public API
- Use interfaces for object shapes

### Documentation

- Document all public API functions
- Include JSDoc comments
- Provide usage examples

## Documentation

We love documentation contributions! You can:

- Fix typos and improve clarity
- Add code examples
- Expand existing guides
- Create new tutorials
- Translate documentation

### Documentation Files

- `content/docs/` - Main documentation
- `content/docs/api/` - API reference
- `content/docs/core/` - Core concepts
- `README.md` - Project readme
- `CONTRIBUTING.md` - This file

## Questions

Got a question? You're welcome to:

- Open a discussion issue
- Check existing issues and discussions
- Ask in the community

We respond to questions as quickly as possible.

## Recognition

Contributors will be:
- Listed in our README
- Mentioned in release notes
- Credited in relevant documentation

## Code of Conduct

By participating, you agree to:
- Be respectful and considerate
- Collaborate with empathy
- Accept constructive criticism
- Focus on what's best for the community

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Obsidian SDK!**
