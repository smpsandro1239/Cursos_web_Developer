# Vercel GitHub Actions Skill for Claude Code

A Claude Code skill providing patterns for deploying to Vercel with GitHub Actions CI/CD pipelines.

## Installation

```bash
# Clone to your Claude Code skills directory
git clone https://github.com/wrsmith108/vercel-github-actions-skill.git ~/.claude/skills/vercel-github-actions
```

## What's Included

| Pattern | Description |
|---------|-------------|
| **Three-Environment Model** | Preview, Staging, Production branch workflows |
| **Vercel CLI Commands** | Deploy, alias, rollback, domain management |
| **Staging Alias Management** | Persistent staging URLs with automation |
| **GitHub Actions Workflows** | Ready-to-use workflow templates |
| **E2E Testing Integration** | Playwright testing against deployments |
| **Security Best Practices** | Secret management, headers, CSP |

## Usage

Once installed, Claude Code will automatically reference this skill when you:
- Ask about Vercel deployments
- Need to set up CI/CD pipelines
- Want to create staging environments
- Configure GitHub Actions workflows

## Key Commands

```bash
# Create staging alias
vercel alias <deployment-url> <project>-staging.vercel.app

# Deploy to production
vercel deploy --prebuilt --prod

# Update staging after deploy
vercel alias <new-url> <project>-staging.vercel.app
```

## License

MIT - See [LICENSE](LICENSE)

---

*Part of the Claude Code Skills ecosystem*
