---
title: Setup & Prerequisites
description: Install and configure all necessary tools for spec-driven development, including VS Code, GitHub Copilot, and Spec Kit.
---

# Chapter 2: Setup & Prerequisites

Before we dive into building with spec-driven development, let's get your environment ready. This chapter will guide you through installing all the necessary tools and initializing your first spec-driven project.

## What You'll Learn

By the end of this chapter, you will:  
✅ Install and configure Visual Studio Code with the right extensions  
✅ Set up your AI coding agent (GitHub Copilot or alternative)  
✅ Install GitHub Spec Kit toolkit  
✅ Initialize your first spec-driven project  
✅ Understand the project structure Spec Kit creates  
✅ Choose a project topic to work on throughout the workshop  

---

## Prerequisites Checklist

Before we begin, let's make sure you have the basics:

### Required Tools

::: warning Check These First
Make sure you have these installed before proceeding:
:::

- [ ] **Internet connection** (for downloading tools and packages)  
- [ ] **Administrator access** (for installing software)
- [ ] **Basic Git knowledge** (clone, commit, push)
- [ ] **Basic command line familiarity** (navigating directories, running commands)

---

## Step 1: Install Visual Studio Code

If you don't have VS Code installed yet, let's get it set up.

### Download and Install

1. Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Download the installer for your operating system
3. Run the installer with these recommended options:
   - ✅ Add "Open with Code" to context menu
   - ✅ Add to PATH
   - ✅ Register Code as editor for supported file types

### Verify Installation

Open a terminal (PowerShell) and run:

```powershell
code --version
```

You should see output like:
```
1.96.2
e609b79c38d7c471dcc31d30e84ca23dde2227d2
x64
```

::: tip VS Code Basics
If you're new to VS Code, take 5 minutes to explore:
- **Integrated Terminal**: View → Terminal (or Ctrl+`)
- **Command Palette**: Ctrl+Shift+P (your best friend!)
- **File Explorer**: Ctrl+Shift+E
:::

---

## Step 2: Install Python and uvx

GitHub Spec Kit uses Python for its CLI tool. Let's get Python set up.

### Option A: Install uv (Recommended)

The modern, fast way to manage Python tools:

```powershell
# Install uv (includes uvx)
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

### Option B: Install Python Directly

If you prefer traditional Python:

1. Go to [https://www.python.org/downloads/](https://www.python.org/downloads/)
2. Download Python 3.8 or higher
3. During installation, **check "Add Python to PATH"**
4. Install pip: `python -m ensurepip --upgrade`

### Verify Installation

```powershell
# If using uv/uvx
uvx --version

# If using Python directly
python --version
pip --version
```

::: details Why uv/uvx? (Click to learn more)
**uv** is a fast Python package installer and resolver by Astral (the makers of Ruff). **uvx** lets you run Python tools without installing them globally—perfect for tools like Spec Kit that you want to run occasionally but not permanently install.

Benefits:
- ⚡ Extremely fast
- 🔒 Isolated environments
- 🧹 No global pollution
- 🎯 Perfect for CLI tools
:::

---

## Step 3: Install Git

Git is essential for version control and Spec Kit uses it to manage your project structure.

### Check if Git is Already Installed

```powershell
git --version
```

### Install Git (if needed)

1. Download from [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Run installer with these settings:
   - Default editor: **Visual Studio Code**
   - PATH environment: **Git from the command line and also from 3rd-party software**
   - Line endings: **Checkout Windows-style, commit Unix-style**
   - Terminal emulator: **Use Windows' default console window**

### Configure Git

Set up your identity (if you haven't already):

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## Step 4: Choose Your AI Coding Agent

Spec Kit works with multiple AI coding agents. Choose the one you prefer:

### Option A: GitHub Copilot (Recommended for this workshop)

**Requirements:**
- GitHub account
- GitHub Copilot subscription (Individual, Business, or Enterprise)

**Setup:**

1. **Install the extension** in VS Code:
   - Open Extensions view (Ctrl+Shift+X)
   - Search for "GitHub Copilot"
   - Click Install
   - Also install "GitHub Copilot Chat"

2. **Sign in:**
   - Click the GitHub Copilot icon in the status bar
   - Click "Sign in to GitHub"
   - Authorize in your browser
   - Return to VS Code

3. **Verify it's working:**
   - Open the Command Palette (Ctrl+Shift+P)
   - Type "Copilot"
   - You should see various Copilot commands

::: tip GitHub Copilot Free Trial
If you don't have Copilot yet, GitHub offers a free trial! Visit [https://github.com/github-copilot/signup](https://github.com/github-copilot/signup)
:::

### Option B: Claude Code (Anthropic)

**Setup:**
1. Install Cursor IDE or use Claude via API
2. Follow setup instructions at [https://claude.ai/](https://claude.ai/)

### Option C: Gemini CLI (Google)

**Setup:**
1. Install Gemini CLI following Google's documentation
2. Authenticate with your Google account

::: info Workshop Compatibility
This workshop uses GitHub Copilot in examples, but all commands work with other agents. Just use your agent's equivalent chat interface.
:::

---

## Step 5: Install VS Code Extensions

Let's add some helpful extensions for the best workshop experience.

### Required Extensions

Open VS Code and install these:

1. **GitHub Copilot** (if using Copilot)
   - Extension ID: `GitHub.copilot`
   
2. **GitHub Copilot Chat**
   - Extension ID: `GitHub.copilot-chat`

### Recommended Extensions

These will make your life easier:

3. **Markdown All in One**
   - Extension ID: `yzhang.markdown-all-in-one`
   - Great for editing specs, plans, and tasks

4. **GitLens**
   - Extension ID: `eamodio.gitlens`
   - Supercharges Git integration

5. **Prettier**
   - Extension ID: `esbenp.prettier-vscode`
   - Code formatting

### Quick Install via Command Palette

Press Ctrl+Shift+P and run:

```
ext install GitHub.copilot GitHub.copilot-chat yzhang.markdown-all-in-one eamodio.gitlens esbenp.prettier-vscode
```

---

## Step 6: Install GitHub Spec Kit

Now for the star of the show—let's install Spec Kit!

### Understanding Spec Kit

GitHub Spec Kit is a toolkit that provides:
- 📋 **Templates** for specs, plans, and tasks
- 🤖 **Prompts** that work with AI agents
- 📜 **Scripts** to automate SDD workflows
- 🏗️ **Project structure** for organized development

### Create a Project Directory

First, decide where your workshop project will live:

```powershell
# Navigate to your development folder
cd D:\Development\repos

# Or create a new workspace
mkdir workshop-projects
cd workshop-projects
```

### Initialize Your First Project

Now, let's use Spec Kit to create your project. Replace `<PROJECT_NAME>` with your chosen project name (e.g., `weather-dashboard`, `blog-generator`, etc.):

```powershell
# Using uvx (recommended)
uvx --from git+https://github.com/github/spec-kit.git specify init my-first-sdd-project

# Or if using pip
pip install git+https://github.com/github/spec-kit.git
specify init my-first-sdd-project
```

::: warning Project Name Guidelines
Use lowercase with hyphens (kebab-case):
- ✅ `task-manager`
- ✅ `weather-dashboard`
- ✅ `my-blog-generator`
- ❌ `Task Manager` (no spaces)
- ❌ `MyBlogGenerator` (no camelCase)
:::

### Choose Your Agent

During initialization, Spec Kit will prompt you:

```
Select your coding agent:
1. GitHub Copilot
2. Claude Code
3. Gemini CLI
4. Other

Enter your choice (1-4):
```

Select your agent (press `1` for GitHub Copilot).

### Choose Your Platform

Next, it asks about your platform:

```
Select your platform:
1. Windows (PowerShell)
2. macOS/Linux (Bash)

Enter your choice (1-2):
```

Select `1` for Windows.

::: tip What Just Happened?
Spec Kit just:
- ✅ Created a new Git repository
- ✅ Downloaded agent-specific templates
- ✅ Set up the `.specify` folder structure
- ✅ Created helper scripts for your platform
- ✅ Initialized slash commands for your agent
:::

---

## Step 7: Explore the Project Structure

Let's see what Spec Kit created. Open your project in VS Code:

```powershell
cd my-first-sdd-project
code .
```

### The Agent Prompt Folder (`.github/`, `.claude/`, etc.)

This contains your **slash commands** specific to your AI agent. These files are the core of the SDD workflow—they define what happens when you type commands like `/speckit.specify` or `/speckit.plan`.

For **GitHub Copilot**, you'll see:

```
.github/
└── prompts/
    ├── speckit.constitution.prompt.md    # /speckit.constitution - Define principles
    ├── speckit.specify.prompt.md         # /speckit.specify - Create spec
    ├── speckit.clarify.prompt.md         # /speckit.clarify - Clarify ambiguities
    ├── speckit.plan.prompt.md            # /speckit.plan - Create plan
    ├── speckit.analyze.prompt.md         # /speckit.analyze - Validate consistency
    ├── speckit.tasks.prompt.md           # /speckit.tasks - Break into tasks
    ├── speckit.checklist.prompt.md       # /speckit.checklist - Generate checklists
    └── speckit.implement.prompt.md       # /speckit.implement - Execute implementation
```

::: info Other AI Agents
- **Claude Code**: Commands in `.claude/commands/*.md`
- **Cursor**: Commands in `.cursor/prompts/*.md`
- **Windsurf**: Commands in `.windsurf/prompts/*.md`
- Check your agent's documentation for the specific location
:::

**What these files do:**
- **Define slash command behavior**: Each `.prompt.md` file contains the instructions and templates that guide your AI agent when you invoke a slash command
- **Structure the SDD process**: They ensure consistency by following the same specification, plan, and task formats across projects
- **Reference helper scripts**: They integrate with scripts in `.specify/scripts/` to maintain project state and file organization
- **Can be customized**: You can modify these files to fit your organization's specific requirements, terminology, or workflows

::: tip Pro Tip
Think of these prompt files as the "code" behind your slash commands. When you type `/speckit.specify`, your AI agent reads `speckit.specify.prompt.md` to know how to generate a specification. You're not just customizing—you're seeing the actual instructions that drive the AI's behavior.
:::

### The `.specify` Folder

This is the heart of your SDD setup:

```
.specify/
├── memory/
│   └── constitution.md                    # Project principles & governance
├── scripts/
│   ├── bash/                              # POSIX shell scripts (Linux/macOS)
│   │   ├── check-prerequisites.sh         # Verify dependencies
│   │   ├── common.sh                      # Shared utilities
│   │   ├── create-new-feature.sh          # Feature workflow
│   │   ├── setup-plan.sh                  # Plan initialization
│   │   └── update-agent-context.sh        # Context refresh
│   └── powershell/                        # PowerShell scripts (Windows/cross-platform)
│       ├── check-prerequisites.ps1        # Verify dependencies
│       ├── common.ps1                     # Shared utilities
│       ├── create-new-feature.ps1         # Feature workflow
│       ├── setup-plan.ps1                 # Plan initialization
│       └── update-agent-context.ps1       # Context refresh
└── templates/
    ├── agent-file-template.md             # Agent context file template
    ├── checklist-template.md              # Quality checklist template
    ├── constitution-template.md           # Constitution template
    ├── plan-template.md                   # Implementation plan template
    ├── spec-template.md                   # Specification template
    └── tasks-template.md                  # Task breakdown template
```

::: tip Where are the slash commands?
The slash commands (like `/speckit.specify`, `/speckit.plan`) are stored in **agent-specific folders** at the root of your project:
- **GitHub Copilot**: `.github/prompts/`
- **Claude Code**: `.claude/commands/`
- **Cursor**: `.cursor/prompts/`
- **Windsurf**: `.windsurf/prompts/`
- Other agents have their own locations

These are automatically created when you run `specify init --ai <agent-name>`.
:::

### Understanding the Components

**Memory Folder:**
- `constitution.md`: Your project's non-negotiable principles and governance rules. This file defines the architectural DNA that guides all development decisions.

**Scripts Folder:**
- Cross-platform automation scripts (bash for Linux/macOS, PowerShell for Windows/cross-platform) that handle feature creation, prerequisite checking, and agent context management.

**Templates Folder:**
- Markdown templates that define the structure of your specs, plans, tasks, checklists, and project constitution. These are used by the slash commands to generate consistent artifacts.

::: details Click to see what a constitution looks like

```markdown
# Project Constitution

## Non-Negotiable Principles

### Code Quality
- All code must have accompanying unit tests
- Test coverage must be > 80%
- Code must pass linting with no errors

### Technology Standards
- Backend: Node.js with TypeScript
- Database: PostgreSQL
- All APIs must follow REST principles

### Security
- All endpoints must require authentication
- Input validation on all user inputs
- Secrets must never be committed to Git

### Documentation
- All public APIs must be documented
- Complex logic must have explanatory comments
- README must be kept up to date
```

This constitution ensures AI agents (and developers) follow your standards consistently.
:::

---

## Step 8: Understand Slash Commands

Spec Kit introduces powerful slash commands for the SDD workflow. Let's see how they work.

### Core Workflow Commands

| Command | Purpose | Phase |
|---------|---------|-------|
| `/speckit.specify` | Create/update specification | Phase 1: Specify |
| `/speckit.plan` | Generate technical plan | Phase 2: Plan |
| `/speckit.tasks` | Break down into tasks | Phase 3: Tasks |
| `/speckit.implement` | Execute implementation | Phase 4: Implement |

### Additional Commands

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `/speckit.constitution` | Define project principles | Before starting features |
| `/speckit.clarify` | Identify ambiguities | Before planning |
| `/speckit.analyze` | Validate consistency | Before implementation |
| `/speckit.checklist` | Generate quality checklists | Throughout development |

### How to Use Slash Commands

In GitHub Copilot Chat (or your agent's chat interface):

1. **Open the chat** (Ctrl+Shift+I or click the chat icon)
2. **Type the slash command**: `/speckit.specify`
3. **Press Enter** to see the command description
4. **Provide your prompt** after the command
5. **AI generates the artifact** following the template

### Example Usage

```
/speckit.specify I want to build a weather dashboard web application
that displays current weather and 5-day forecasts for multiple cities.
Users should be able to add cities to their watchlist, see current
conditions at a glance, and view forecasts. The dashboard should be
fast and work in all modern browsers.
```

::: tip Slash Command Tips
- Use `/speckit.constitution` FIRST—establish project principles
- Use `/speckit.specify` to create the specification
- Use `/speckit.plan` only after spec is complete
- Use `/speckit.tasks` only after plan is complete
- Use `/speckit.implement` to build the feature
- Don't skip steps—each phase builds on the previous
:::

---

## Step 9: Choose Your Workshop Project

Now comes the fun part—deciding what to build! 

### Project Requirements

For this workshop, choose something that:
- ✅ Can be completed in 60-90 minutes
- ✅ Has clear user needs
- ✅ Isn't too complex (3-5 core features)
- ✅ Interests you personally

### Suggested Projects

#### 1. 🌤️ Weather Dashboard
**What**: Simple web app showing weather for multiple cities  
**Features**: Display current weather, 5-day forecast, add/remove cities, visual icons  
**Great for**: API integration, frontend basics, data visualization, responsive design

#### 2. 📝 Task Management CLI Tool
**What**: Command-line tool to manage your daily tasks  
**Features**: Add tasks, list tasks, mark complete, set priorities  
**Great for**: Learning CRUD operations, file I/O, CLI design

#### 3. 📰 Markdown Blog Generator
**What**: Static site generator for markdown blog posts  
**Features**: Parse markdown, generate HTML, create index, styling  
**Great for**: File processing, templates, static site generation

#### 4. 💰 Personal Finance Tracker
**What**: Track income and expenses  
**Features**: Add transactions, categorize, view totals, simple reports  
**Great for**: Data modeling, calculations, basic reporting

#### 5. 📚 Reading List Manager
**What**: Track books you want to read and have read  
**Features**: Add books, mark as read, rate/review, search/filter  
**Great for**: Data management, search functionality, user preferences

#### 6. 🎯 Habit Tracker
**What**: Track daily habits and streaks  
**Features**: Define habits, mark daily completion, view streaks, stats  
**Great for**: Date handling, streak calculations, visualization

### Or Bring Your Own!

Have another idea? Great! Just make sure it:
- Solves a problem you actually have
- Has 3-5 core features (not too simple, not too complex)
- Can be scoped for a workshop timeframe

### Write Down Your Choice

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

## Step 10: Environment Verification

Let's make sure everything is working before we proceed.

### Verification Checklist

Run through this checklist to confirm your setup:

```powershell
# 1. Check VS Code
code --version

# 2. Check Python/uvx
uvx --version
# OR
python --version

# 3. Check Git
git --version

# 4. Verify Git config
git config --global user.name
git config --global user.email

# 5. Check you're in your project
pwd
# Should show: D:\Development\repos\my-first-sdd-project

# 6. Verify folder structure
ls .specify
ls .github
```

### Test Your AI Agent

Open GitHub Copilot Chat and try:

```
Hello! Can you help me test if you're working correctly?
```

You should get a response from your AI agent.

### Test Slash Commands

In Copilot Chat, type:

```
/speckit.specify
```

You should see the command description appear. Don't run it yet—we'll do that in the next chapter!

::: tip Troubleshooting
If something isn't working:
- **VS Code not found**: Make sure it's in PATH (reinstall with correct options)
- **uvx not found**: Restart your terminal after installing uv
- **Git not configured**: Run the `git config` commands again
- **Copilot not responding**: Sign out and sign back in
- **Slash commands not showing**: Reinstall Copilot Chat extension
:::

---

## Your Setup is Complete! 🎉

Congratulations! You've successfully:

- ✅ Installed Visual Studio Code
- ✅ Set up Python/uvx for running Spec Kit
- ✅ Configured Git for version control
- ✅ Installed and configured your AI coding agent
- ✅ Installed useful VS Code extensions
- ✅ Initialized your first spec-driven project
- ✅ Explored the project structure
- ✅ Learned about slash commands
- ✅ Chosen your workshop project
- ✅ Verified everything is working

### What's Next?

In Chapter 3, we'll use the `/speckit.specify` command to create your first specification. This is where the magic begins!

You'll learn:
- How to craft effective prompts for specifications
- What to include (and exclude) from specs
- How to review and refine AI-generated specs
- How to think about user journeys and outcomes

::: tip Ready to Build?
Take a 2-minute break, grab some water, and then continue to [Chapter 3: The Specify Phase](./03-specify-phase.md) →
:::

---

## Quick Reference Card

Save these commands for later:

### Initialize New Project
```powershell
uvx --from git+https://github.com/github/spec-kit.git specify init <project-name>
```

### Open Project in VS Code
```powershell
code .
```

### Slash Commands (in AI agent chat)
- `/speckit.specify` - Create specification
- `/speckit.plan` - Generate technical plan  
- `/speckit.tasks` - Break down into tasks

### Useful VS Code Shortcuts
- `Ctrl+Shift+P` - Command Palette
- `Ctrl+`` - Toggle Terminal
- `Ctrl+Shift+I` - Open Copilot Chat
- `Ctrl+Shift+E` - File Explorer

---

## Reflection Questions

Before moving on:

- Is your development environment fully set up and verified?
- Do you have a clear project idea with 3-5 features?
- Are you comfortable using the terminal and VS Code?
- Do you understand the purpose of `.specify` and `.github` folders?

If you answered yes to all of these, you're ready for Chapter 3! 

---

**Next**: [Chapter 3: The Specify Phase →](./03-specify-phase.md)

**Previous**: [← Chapter 1: Introduction](./01-introduction.md)
