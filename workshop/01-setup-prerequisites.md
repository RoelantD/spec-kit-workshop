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

The command to run depends on whether you are using **Codespaces** or a **local setup**.

### Codespaces path

You are already in the root of your forked repository. Initialize Spec Kit in the current directory:

```bash
# You are already in the right place — run from the repo root:
specify init . --ai claude
specify init . --ai copilot
specify init . --ai gemini

# Alternative flag syntax:
specify init --here --ai claude
```

### Local setup path

Navigate to the directory where you want to create your project, then run `specify init`:

```bash
# Navigate to your workspace
cd ~/workspace   # or wherever you want to create your project

# Create a new named project folder:
specify init my-project --ai claude
specify init my-project --ai copilot
specify init my-project --ai gemini

# Or initialize in the current directory instead:
specify init . --ai claude
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

### Bring Your Own Use Case (Strongly Encouraged!)

::: tip Use something real
The best way to learn spec-driven development is to apply it to a problem you actually care about. Think of something you've been wanting to build — a side project, a tool you keep meaning to write, something that would make your own work easier.

Your own idea will keep you more engaged and give the exercises more meaning. The SDD workflow works the same regardless of what you're building.
:::

**A good workshop project:**
- ✅ Solves a problem you actually have (or find interesting)
- ✅ Has 3–5 core features — not too simple, not too complex
- ✅ Can be scoped to 60–90 minutes
- ✅ Has clear users and clear goals

**Ideas to spark your thinking:**
- A CLI tool you wish existed for your daily workflow
- A small web app or dashboard you keep opening other tabs for
- A script or automation that you currently do manually
- A personal tracker (habits, reading, expenses, workouts…)
- Something you've started before but never finished

If you have an idea, go with it. You can fill in the planning box below and move on.

---

### No Idea? Use the Fallback: Weather Dashboard

If you'd rather skip the decision and just follow along with a known example, use the **Weather Dashboard** throughout the workshop. All the example prompts, outputs, and walkthroughs in chapters 2–6 use this project, so you'll always have a concrete reference to follow.

**Weather Dashboard**
- **What**: A simple web app that shows current weather and forecasts for multiple cities
- **Users**: Travelers, remote teams, weather enthusiasts — anyone who checks weather for more than one location
- **Problem**: Checking weather for multiple cities means switching between tabs or apps. One dashboard shows everything at once.
- **Features**: Current weather per city, 5-day forecast, add/remove cities, weather icons, temperature in °C/°F, persistent city list
- **Great for**: API integration, frontend basics, data visualization, responsive design

::: info The workshop uses this example throughout
Chapters 2–6 all walk through the Weather Dashboard as the example project. Even if you bring your own idea, it's worth skimming these examples — the patterns apply to any project.
:::

::: warning Action Required
Before continuing, decide on your project and write it down:

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
# Codespaces — run from the repo root:
specify init . --ai claude

# Local — persistent install + init into a new folder:
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
specify init my-project --ai claude

# Local — one-time (no install):
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
