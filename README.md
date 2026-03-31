# Spec-Driven Development Workshop

A hands-on workshop (60–90 min) exploring **spec-driven development** with [GitHub's Spec Kit](https://github.com/github/spec-kit) and AI coding agents. You'll learn how to write precise, structured specifications and use them to guide AI agents — like GitHub Copilot or Claude Code — through a complete feature implementation.

[![Open Workshop Site](https://img.shields.io/badge/Workshop%20Site-Live-blue?style=for-the-badge)](https://roelantd.github.io/spec-kit-workshop/)

---

## Prerequisites

Before starting the workshop, make sure you have:

- **Python 3.11+**
- **[uv](https://docs.astral.sh/uv/)** — fast Python package manager
- **Git**
- A supported AI coding agent:
  - [GitHub Copilot](https://github.com/features/copilot) (with agent mode)
  - [Claude Code](https://claude.ai/code)

---

## Getting Started

### Option 1: GitHub Codespaces (Recommended)

One-click setup — no local installation required.

1. Click **"Use this template"** → **"Open in a codespace"**
2. Wait for the Codespace to finish building (all dependencies are pre-installed)
3. Navigate to the workshop site at `http://localhost:5173/spec-kit-workshop/`

### Option 2: Run Locally

```bash
cd workshop
npm install
npm run dev
```

Then open [http://localhost:5173/spec-kit-workshop/](http://localhost:5173/spec-kit-workshop/) in your browser.

You'll also need `specify-cli` installed:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

---

## Workshop Overview

The workshop guides you through five phases of spec-driven development:

| Phase | Description |
|-------|-------------|
| **Constitution** | Define project-level standards and conventions |
| **Specify** | Write a structured specification for a feature |
| **Clarify** | Resolve ambiguities and open questions |
| **Plan** | Generate an implementation plan from the spec |
| **Tasks** | Break the plan into discrete, trackable tasks |
| **Implement** | Execute tasks with AI agent assistance |

---

## Key Slash Commands

Use these commands in your AI agent during the workshop:

| Command | Purpose |
|---------|---------|
| `/speckit.constitution` | Initialize project standards |
| `/speckit.specify` | Draft a feature specification |
| `/speckit.clarify` | Clarify ambiguities in a spec |
| `/speckit.plan` | Generate an implementation plan |
| `/speckit.tasks` | Break plan into tasks |
| `/speckit.implement` | Implement a task |

---

## Links

- [Live Workshop Site](https://roelantd.github.io/spec-kit-workshop/)
- [GitHub Spec Kit](https://github.com/github/spec-kit)
- [Spec-Driven Development Guide](https://github.com/github/spec-kit/blob/main/spec-driven.md)

---

## Contributing & Feedback

Found an issue or have a suggestion? Please [open a GitHub issue](../../issues).

---

## License

MIT
