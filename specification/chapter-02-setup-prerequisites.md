# Chapter 2: Setup & Prerequisites

## Goals
- Install and configure all necessary tools for spec-driven development
- Set up Visual Studio Code for an optimal workflow
- Install the GitHub Spec Kit toolkit
- Verify the development environment is ready
- Initialize your first spec-driven project

## Background Information

### Required Tools
- **Visual Studio Code**: Primary IDE for the workshop
  - Latest stable version recommended
  - Install from https://code.visualstudio.com/
- **GitHub Copilot (or alternative AI coding agent)**: For AI-assisted development
  - GitHub Copilot, Claude Code, or Gemini CLI supported
  - GitHub Copilot requires an active subscription
- **Python**: Required for the Specify CLI tool
  - Python 3.8 or higher recommended
- **uvx**: Package execution tool for Python
  - Part of the uv toolchain by Astral
  - Used to run Specify CLI without installation

### Git Requirements
- **Git**: Version control system
  - Must be installed and configured
  - Basic Git knowledge assumed
- **GitHub Account**: For storing your project (optional but recommended)
  - Create at https://github.com/signup

### VS Code Extensions
- **GitHub Copilot Extension**: If using GitHub Copilot as your agent
  - Install from VS Code marketplace
  - Sign in with your GitHub account
- **Recommended Extensions**:
  - Markdown All in One
  - GitLens (for Git integration)
  - Prettier (for code formatting)

### Installing GitHub Spec Kit
- **Installation Command**:
  ```bash
  uvx --from git+https://github.com/github/spec-kit.git specify init <PROJECT_NAME>
  ```
- **What it does**:
  - Downloads official templates from GitHub repo
  - Sets up SDD scaffolding
  - Creates `.specify` and `.github` folders
  - Configures helper scripts for your platform

### Project Structure Created by Spec Kit
- **`.github/prompts/`**: Agent-specific prompt definitions
  - `specify.prompt.md`: For creating specifications
  - `plan.prompt.md`: For creating technical plans
  - `tasks.prompt.md`: For breaking down tasks
- **`.specify/memory/`**: Project constitution and guidelines
  - `constitution.md`: Non-negotiable project principles
  - `constitution_update_checklist.md`: Guidelines for updates
- **`.specify/scripts/`**: Platform-specific helper scripts
  - PowerShell scripts for Windows
  - Bash scripts for macOS/Linux
- **`.specify/templates/`**: Document templates
  - `spec-template.md`: Specification template
  - `plan-template.md`: Technical plan template
  - `tasks-template.md`: Task breakdown template
  - `agent-file-template.md`: Agent context template

### Slash Commands Overview
- **`/specify`**: Create or update the project specification
- **`/plan`**: Generate the technical implementation plan
- **`/tasks`**: Break down work into implementable tasks
- Sequential usage required (specify → plan → tasks)

### Choosing Your Project Topic
- **Pick a simple, well-defined project**: Start small for learning
- **Suggested topics**:
  - Task management CLI tool
  - Markdown blog generator
  - Simple REST API for note-taking
  - Weather dashboard application
  - Personal finance tracker
- **Or choose your own**: Any project idea works if scope is reasonable

### Environment Verification Checklist
- [ ] VS Code installed and running
- [ ] AI coding agent configured (Copilot/Claude/Gemini)
- [ ] Python environment available
- [ ] uvx/uv toolchain installed
- [ ] Git installed and configured
- [ ] Successfully ran `specify init` command
- [ ] Project folders created (`.specify`, `.github`)
- [ ] Slash commands available in your coding agent
