# Contributing

Thank you for wanting to contribute! Whether you're reporting a bug, proposing a feature, improving documentation, or sending code changes — your help is appreciated.

This document explains how to get started, what we expect from contributions, and the processes we follow for issues, branches, pull requests, and reviews. If anything is unclear, please open an issue and we'll help.

---

## Table of contents

- [Code of conduct](#code-of-conduct)
- [How to contribute](#how-to-contribute)
  - [Reporting bugs](#reporting-bugs)
  - [Requesting features or enhancements](#requesting-features-or-enhancements)
  - [Submitting a pull request](#submitting-a-pull-request)
- [Getting the code and local setup](#getting-the-code-and-local-setup)
- [Branching and commit guidelines](#branching-and-commit-guidelines)
- [Coding style and linters](#coding-style-and-linters)
- [Pull request checklist](#pull-request-checklist)
- [Reviews and merging](#reviews-and-merging)
- [Security and responsible disclosure](#security-and-responsible-disclosure)
- [Where to get help](#where-to-get-help)
- [Acknowledgements](#acknowledgements)

---

## Code of conduct

We expect all contributors to follow a code of conduct. Be respectful, constructive, and inclusive. If you would like a copy or want to suggest changes, create an issue.

(If this repository has a CODE_OF_CONDUCT.md file, follow that. If not, please propose one in an issue and we'll add it.)

---

## How to contribute

There are several ways to contribute:

- Report bugs or problems.
- Suggest new features or improvements.
- Improve or write documentation.
- Fix a bug or implement a feature via a Pull Request (PR).
- Add or improve tests.
- Improve project workflows (CI, release, etc.).

### Reporting bugs

When filing an issue, please include:

- A clear and descriptive title.
- A short description of what you expected to happen and what actually happened.
- Steps to reproduce the problem (minimum reproducible example).
- Versions (OS, language/runtime version, library versions) if relevant.
- Any logs, error messages, or stack traces.
- If possible, a small snippet of code or a repository that reproduces the issue.

Example issue template content:

- Title: "Unexpected crash when doing X"
- Body:
  - Steps to reproduce
  - Expected result
  - Actual result
  - Environment (OS, versions)
  - Additional notes / attachments

### Requesting features or enhancements

Please open an issue with:

- A clear description of the feature.
- Why it is useful.
- Potential alternatives and trade-offs.
- Optionally a sketch, pseudo-code, or example usage.

This helps maintainers prioritize and discuss the idea before work starts.

### Submitting a pull request

1. Fork the repository.
2. Create a feature branch from main:
   - git checkout -b feat/<short-description>
3. Make changes, keeping commits small and focused.
4. Run tests and linters locally (see the Testing and Linters sections).
5. Rebase or squash locally to keep history clear if appropriate.
6. Push your branch to your fork and open a Pull Request against the `main` branch.
7. Fill the PR description with motivation, what changed, and how to test.

See "Pull request checklist" below for details.

---

## Getting the code and local setup

1. Fork the repository and clone your fork:
   - git clone https://github.com/<your-username>/<repo>.git
   - cd <repo>
2. Add the upstream remote:
   - git remote add upstream https://github.com/<owner>/<repo>.git
3. Create a new branch for your change:
   - git checkout -b feat/my-change
4. Install dependencies and run the project per this repository's README.

(Adjust the above steps to match this project's language and tooling — e.g. npm/yarn/pip/go/mvn commands.)

---

## Branching and commit guidelines

- Branch naming:
  - feat/<short-description> for new features
  - fix/<short-description> for bug fixes
  - docs/<short-description> for documentation updates
  - chore/<short-description> for maintenance
- Keep branches small and scoped to a single task.
- Use clear, descriptive commit messages. We recommend following the Conventional Commits format:
  - type(scope?): subject
  - Example: feat(auth): add JWT refresh endpoint
- Where appropriate, link issues in commits/PRs: "Fixes #123" or "Closes #123" to auto-close issues when merged.

---

## Coding style and linters

Follow the project's established coding style. If the repository has formatting/linting tools configured (Prettier, ESLint, Black, gofmt, golangci-lint, rustfmt, etc.), run them before opening a PR.

Typical commands:
- npm: npm run lint; npm run format
- Python: black .; flake8
- Go: gofmt -w .; go vet ./...

If no linters are present, aim for consistent, clear code and document style decisions in an issue or PR.

---

## Pull request checklist

Before requesting a review, ensure:

- [ ] The PR has a clear title and description (what, why, how to test).
- [ ] Commits are focused and meaningful.
- [ ] All tests pass locally and in CI.
- [ ] Code is formatted and linted.
- [ ] Documentation updated if necessary (README, inline comments).
- [ ] Any sensitive information (API keys, credentials) is not included.
- [ ] If the change is large, describe migration steps for users.

---

## Reviews and merging

- Maintainability and readability are prioritized during review.
- Be responsive to reviewer feedback; address comments and update the PR.
- If you're unable to address feedback in a reasonable time, add a note in the PR so maintainers know the status.
- Merging will be done by maintainers once checks pass and reviewers approve. We may rebase or squash commits as necessary.

---

## Security and responsible disclosure

If you discover a security vulnerability, do NOT open a public issue. Instead, contact the maintainers privately. If no private channel is available, send an email to the address in the repository (or create an issue labeled "security" but mark it private if supported). Provide enough information to reproduce and mitigate the issue.

We will acknowledge individuals who responsibly disclose security issues unless they ask to remain anonymous.

---

## Where to get help

- Open an issue describing the problem or question.
- If urgent, reach out to repository maintainers (see the repo README for contact info).
- For general guidance, refer to the README and documentation in the repo.

---

## Acknowledgements

Thanks for contributing and helping improve this project. By contributing, you agree that your contributions will be licensed under the same license as this repository.

If you'd like this CONTRIBUTING.md tailored to the project's language and tooling (Node, Python, Go, etc.), or to include templates for issues/PRs, tell me which stack is used and I will customize it.
