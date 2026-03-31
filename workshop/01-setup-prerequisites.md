---
title: Setup & Prerequisites
description: Install Python 3.11+, uv, Spec Kit CLI, and your AI coding agent, then initialize your first spec-driven project and choose what to build.
---

# Chapter 1: Setup & Prerequisites

Before we dive into building with spec-driven development, let's get your environment ready. This chapter will guide you through installing the necessary tools and initializing your first spec-driven project.

## What You'll Learn

By the end of this chapter, you will:
- ✅ Install Python 3.11+ and uv
- ✅ Install Spec Kit CLI (persistent or one-time)
- ✅ Set up a supported AI coding agent
- ✅ Initialize your first spec-driven project
- ✅ (Optional) Use GitHub Codespaces to skip local setup entirely

---

## Required Tools

You need the following to run Spec Kit locally:

- **Python 3.11+** — Spec Kit requires Python 3.11 or higher
- **uv** — Fast Python package manager (used to install and run Spec Kit)
- **Git** — For version control; Spec Kit creates branches automatically
- **A supported AI coding agent** — Choose one from the list below

---

## Supported AI Agents (choose one)

Spec Kit works with a wide range of AI coding agents. Pick the one you already use, or install one below.

| Agent | How to install | `--ai` flag |
|---|---|---|
| GitHub Copilot | Via VS Code extension | `copilot` |
| Claude Code | `npm install -g @anthropic-ai/claude-code` | `claude` |
| Gemini CLI | `npm install -g @google/gemini-cli` | `gemini` |
| Cursor | Via [cursor.sh](https://cursor.sh) | `cursor-agent` |
| Windsurf | Via [windsurf.com](https://windsurf.com) | `windsurf` |
| GitHub Copilot (Codex) | Via VS Code | `codex` |

::: info More Agents Available
Spec Kit supports 20+ AI agents. Run `specify init --help` after installation to see the full list of supported `--ai` values.
:::

---

## Option A: Use GitHub Codespaces (Recommended for Beginners)

::: warning Fork first before creating a Codespace
Codespaces created directly on someone else's repository are read-only — you won't be able to commit or push your work. Always fork the repository first so your progress is saved to your own copy.
:::

::: tip Optional - Use Codespaces to skip local setup
If you prefer not to install anything locally, GitHub Codespaces gives you a fully configured cloud environment with Python 3.11+, uv, specify-cli, and Node.js already set up.

1. **Fork the repository** — Go to [https://github.com/RoelantD/spec-kit-workshop](https://github.com/RoelantD/spec-kit-workshop) and click **Fork** (top-right). This creates your own copy to work in.
2. Open **your forked repository** on GitHub
3. Click the green **"Code"** button → **"Codespaces"** tab → **"Create codespace on main"**
4. Wait approximately 2 minutes for the environment to initialize
5. You are ready to go — skip directly to [Step 4: Initialize Your First Project](#step-4-initialize-your-first-project)

Note: You will still need to install your AI agent of choice inside the codespace (for example, run `npm install -g @anthropic-ai/claude-code` for Claude Code).
:::

---

## Option B: Local Setup

If you prefer to work on your own machine, follow the steps below to install the required tools.

---

## Step 1: Install Python and uv

> Skip this step if you are using Codespaces.

### Install uv

**Windows (PowerShell):**

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

**macOS/Linux:**

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Restart your terminal after installation, then verify:

```bash
uv --version
python --version   # Should show 3.11 or higher
```

::: warning Python 3.11+ Required
Spec Kit requires Python 3.11 or higher. If `python --version` shows an older version, uv will automatically download the correct version when you install Spec Kit. You do not need to install Python separately if you use uv.
:::

::: details Why uv?
**uv** is a fast Python package installer and resolver by Astral (the makers of Ruff). It handles Python version management, isolated environments, and global tool installation — all much faster than pip or pipx.

- Extremely fast installs
- Isolated environments (no global pollution)
- Built-in Python version management
- `uv tool install` for persistent CLI tools
- `uvx` for one-off tool execution without installing
:::

### Install Git (if needed)

```bash
git --version
```

If Git is not installed, download it from [https://git-scm.com/](https://git-scm.com/) and follow the installer defaults. After installing, configure your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## Step 2: Install Spec Kit CLI

You have two options: a persistent installation (recommended) or a one-time run.

### Persistent Install (Recommended)

Installs `specify` as a global command you can use in any project:

```bash
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

Verify the installation:

```bash
specify check
```

This command checks that all required tools and dependencies are in place.

### One-Time Run (No Install)

Run Spec Kit without installing it globally. Useful for trying it out:

```bash
uvx --from git+https://github.com/github/spec-kit.git specify init <PROJECT> --ai <agent>
```

::: info Upgrading Spec Kit
To upgrade an existing persistent installation to the latest version:

```bash
uv tool install specify-cli --force --from git+https://github.com/github/spec-kit.git
```
:::

---

## Step 3: Set Up Your AI Agent

Install and configure your chosen AI agent using its official documentation.

### Quick Setup References

- **Claude Code**: `npm install -g @anthropic-ai/claude-code` — see [docs.anthropic.com](https://docs.anthropic.com/en/docs/claude-code)
- **GitHub Copilot**: Install the GitHub Copilot and GitHub Copilot Chat extensions in VS Code, then sign in with your GitHub account
- **Gemini CLI**: `npm install -g @google/gemini-cli` — see Google's documentation
- **Cursor**: Download from [cursor.sh](https://cursor.sh) and follow the setup wizard
- **Windsurf**: Download from [windsurf.com](https://windsurf.com)

::: tip GitHub Copilot Free Trial
If you do not have GitHub Copilot yet, a free trial is available at [https://github.com/github-copilot/signup](https://github.com/github-copilot/signup).
:::

### Optional VS Code Extensions

If you use Visual Studio Code, these extensions are helpful for editing specs and plans:

- **Markdown All in One** (`yzhang.markdown-all-in-one`) — editing specifications and task files
- **GitLens** (`eamodio.gitlens`) — enhanced Git integration
- **Prettier** (`esbenp.prettier-vscode`) — code formatting

---

## Step 4: Initialize Your First Project

Navigate to the directory where you want to create your project, then run `specify init`:

```bash
# Navigate to your workspace
cd ~/workspace   # or wherever you want to create your project

# Initialize with your chosen AI agent:
specify init my-project --ai claude
specify init my-project --ai copilot
specify init my-project --ai gemini

# Or initialize in the current directory:
specify init . --ai claude

# Alternative flag syntax:
specify init --here --ai claude
```

::: warning Project Name Guidelines
Use lowercase with hyphens (kebab-case):
- ✅ `task-manager`
- ✅ `weather-dashboard`
- ✅ `my-blog-generator`
- ❌ `Task Manager` (no spaces)
- ❌ `MyBlogGenerator` (no camelCase)
:::

### What Gets Created

After `specify init`, your project will contain:

```
my-project/
├── .specify/
│   ├── memory/
│   │   └── constitution.md        (created in Chapter 2)
│   ├── scripts/
│   │   ├── check-prerequisites.sh
│   │   ├── create-new-feature.sh
│   │   └── setup-plan.sh
│   ├── specs/                     (your feature specs go here)
│   └── templates/
│       ├── plan-template.md
│       ├── spec-template.md
│       └── tasks-template.md
└── CLAUDE.md                      (or .github/copilot-instructions.md,
                                    depending on your chosen agent)
```

The agent-specific slash command files are placed in the appropriate location for your agent:

- **GitHub Copilot**: `.github/prompts/speckit.*.prompt.md`
- **Claude Code**: `.claude/commands/*.md`
- **Cursor**: `.cursor/prompts/*.md`
- **Windsurf**: `.windsurf/prompts/*.md`

::: tip What Spec Kit Creates
`specify init` sets up:
- A new Git repository (or uses the existing one)
- Agent-specific slash command files for the full SDD workflow
- The `.specify` folder structure with templates and scripts
- Helper scripts for your platform (bash and/or PowerShell)
:::

### Slash Commands Available After Init

| Command | Purpose | Phase |
|---------|---------|-------|
| `/speckit.constitution` | Define project principles | Chapter 2 (do this first) |
| `/speckit.specify` | Create/update specification | Phase 1: Specify |
| `/speckit.clarify` | Resolve ambiguities | Between specify and plan |
| `/speckit.plan` | Generate technical plan | Phase 2: Plan |
| `/speckit.analyze` | Validate consistency | Before implementation |
| `/speckit.tasks` | Break down into tasks | Phase 3: Tasks |
| `/speckit.checklist` | Generate quality checklists | Throughout development |
| `/speckit.implement` | Execute implementation | Phase 4: Implement |

---

## Step 5: Choose Your Workshop Project

Now for the fun part — deciding what to build!

### Project Requirements

For this workshop, choose something that:
- ✅ Can be completed in 60-90 minutes
- ✅ Has clear user needs
- ✅ Has 3-5 core features (not too simple, not too complex)
- ✅ Interests you personally

### Suggested Projects

#### 1. Weather Dashboard
**What**: Simple web app showing weather for multiple cities
**Features**: Display current weather, 5-day forecast, add/remove cities, visual icons
**Great for**: API integration, frontend basics, data visualization, responsive design

#### 2. Task Management CLI Tool
**What**: Command-line tool to manage your daily tasks
**Features**: Add tasks, list tasks, mark complete, set priorities
**Great for**: Learning CRUD operations, file I/O, CLI design

#### 3. Markdown Blog Generator
**What**: Static site generator for markdown blog posts
**Features**: Parse markdown, generate HTML, create index, styling
**Great for**: File processing, templates, static site generation

#### 4. Personal Finance Tracker
**What**: Track income and expenses
**Features**: Add transactions, categorize, view totals, simple reports
**Great for**: Data modeling, calculations, basic reporting

#### 5. Reading List Manager
**What**: Track books you want to read and have read
**Features**: Add books, mark as read, rate/review, search/filter
**Great for**: Data management, search functionality, user preferences

#### 6. Habit Tracker
**What**: Track daily habits and streaks
**Features**: Define habits, mark daily completion, view streaks, stats
**Great for**: Date handling, streak calculations, visualization

### Or Bring Your Own!

Have another idea? Great! Just make sure it:
- Solves a problem you actually have
- Has 3-5 core features
- Can be scoped to a workshop timeframe

::: warning Action Required
Before continuing, decide on your project and write down:

**Project Name**: ________________________

**One-sentence description**:
_____________________________________________

**Top 3 features**:
1. _____________________________________________
2. _____________________________________________
3. _____________________________________________
:::

---

## Verification Checklist

Before moving on to Chapter 2, confirm everything is in place:

- [ ] **uv and Python 3.11+ installed** — run `uv --version` and `python --version` (or using Codespaces)
- [ ] **specify-cli installed** — run `specify check` to verify
- [ ] **AI agent configured** — you can open its chat interface and get a response
- [ ] **Project initialized** — `specify init` completed successfully
- [ ] **Project topic selected** — you know what you want to build

::: tip Troubleshooting
Common issues:

- **`uv` not found after install**: Restart your terminal — the PATH update requires a new shell session
- **`specify check` fails**: Make sure the install completed without errors; try the `--force` upgrade command
- **Slash commands not appearing**: Confirm you ran `specify init --ai <agent>` and that the agent-specific folder was created
- **Git errors on init**: Make sure `git config --global user.name` and `user.email` are set
:::

---

## Quick Reference Card

### Initialize a New Project
```bash
# Persistent install + init
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
specify init my-project --ai claude

# One-time (no install)
uvx --from git+https://github.com/github/spec-kit.git specify init my-project --ai claude
```

### Verify Installation
```bash
specify check
```

### Upgrade
```bash
uv tool install specify-cli --force --from git+https://github.com/github/spec-kit.git
```

### The Full Workflow (in your AI agent's chat)
```
# See Chapter 2 for /speckit.constitution
/speckit.constitution  →  /speckit.specify  →  /speckit.clarify
  →  /speckit.plan  →  validate  →  /speckit.tasks  →  /speckit.implement
```

---

### What's Next?

In Chapter 2, you'll establish your project constitution with `/speckit.constitution` before creating any specifications.

::: tip Ready to Build?
Take a 2-minute break, grab some water, and then continue to [Chapter 2: Project Constitution](./02-constitution-phase) →
:::

---

**Next**: [Chapter 2: Project Constitution →](./02-constitution-phase)

**Previous**: [← Chapter 0: Introduction](./00-introduction)
