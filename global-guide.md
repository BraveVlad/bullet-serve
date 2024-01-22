# Style guide

This is a global style guide. You are to follow these rules.

## Commits

### messages

Use the `conventional commits` method with a couple tweaks

"type" refers to `feat`, `impr`, `fix`, etc

When the scope is the whole project, either don't specify a scope, or put an asterisk (\*) inside the scope brackets. For example:<br>
type: message here<br>
type!: message here<br>
type(\*): message here<br>
type(\*)!: message here<br>

### types

feat: A new feature<br>
impr: An improvement to an existing feature<br>
fix: A bug fix<br>
docs: Documentation only changes<br>
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)<br>
refactor: A code change that neither fixes a bug nor adds a new feature<br>
perf: A code change that improves performance<br>
test: Adding missing tests<br>
chore: Changes to the build process or auxiliary tools and libraries such as documentation generation.<br>
build: `package.json` file change(s) only<br>
type!: Signifies a breaking change with no scope<br>
type(scope)!: Signifies a breaking change with a scope<br>

### Priority

1. **feat:** High priority, as it introduces new functionality.
2. **impr:** High priority, especially for improvements directly impacting end-users.
3. **fix:** High priority, addressing bugs and ensuring code reliability.
4. **docs:** Medium priority, important for maintaining comprehensive documentation.
5. **style:** Low priority, unless it significantly impacts code readability or consistency.
6. **refactor:** Low priority, unless it helps in code maintainability without introducing new features or fixing bugs.
7. **perf:** Medium priority, as it enhances the overall performance.
8. **test:** Medium priority, ensuring comprehensive test coverage.
9. **chore:** Low priority, typically backend tasks that don't directly affect user experience.
10. **build:** Low priority, unless it involves critical changes.

### Format

Commit message with no scope and no breaking changes:

- `type: message`

Commit message with a scope and no breaking changes:

- `type(scope): message`

Commit message with breaking changes:

- `type!: message` (Signifies a breaking change with no scope)
- `type(scope)!: message` (Signifies a breaking change with a scope)

Multiple types in a single commit message:

- `docs(fix README): fixed spelling`

## Code

1. No semi colons (unless needed by the language)
1. No comments (unless they are relation comments)
1. Use `prettier`

## branches

### Types

feature: adding, refactoring, or removing a feature<br>
bugfix: fixing a bug<br>
hotfix: changing code with a temporary solution and/or without following the usual process (usually because of an emergency)<br>
test: is for experimenting outside of an issue/ticket<br>

### Format

Branch names should follow this format:

- <category/reference/description-in-kebab-case>

### Examples

feature/issue-20/create-new-button-component
