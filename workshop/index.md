---
layout: home

hero:
  name: "Spec-Driven Development"
  text: "Workshop"
  tagline: Build your first AI-powered project with GitHub's Spec Kit toolkit
  image:
    src: /logo.svg
    alt: Spec-Driven Development
  actions:
    - theme: brand
      text: Start Workshop
      link: /00-introduction
    - theme: alt
      text: View on GitHub
      link: https://github.com/github/spec-kit

features:
  - icon: 🏛️
    title: Phase 0 - Constitution
    details: Establish your project's principles, values, and architectural guidelines before writing a single line of code.
    link: /02-constitution-phase
    linkText: Learn about Constitution →

  - icon: 📋
    title: Phase 1 - Specify
    details: Define WHAT to build and WHY. Create user-focused specifications that become your source of truth, then clarify with /speckit.clarify.
    link: /03-specify-phase
    linkText: Learn about Specify →

  - icon: 🏗️
    title: Phase 2 - Plan
    details: Establish HOW to build it. Make technical decisions about architecture, stack, and implementation strategy.
    link: /04-plan-phase
    linkText: Learn about Plan →

  - icon: ✅
    title: Phase 3 - Tasks
    details: Break down the work. Create small, implementable tasks with clear acceptance criteria.
    link: /05-tasks-phase
    linkText: Learn about Tasks →

  - icon: 🚀
    title: Phase 4 - Implement
    details: Build it with AI. Use /speckit.implement to execute tasks with your coding agent while you review and validate.
    link: /06-implement-phase
    linkText: Learn about Implement →

  - icon: 🤖
    title: AI-Powered Development
    details: Works with 20+ AI coding agents — GitHub Copilot, Claude Code, Gemini CLI, Cursor, Windsurf, Codex, and more.
    link: /00-introduction#why-specs-matter-with-ai-agents
    linkText: Why AI needs specs →

  - icon: ⚡
    title: Hands-On Workshop
    details: 60-90 minutes of practical, step-by-step guidance. Build a real project from specification to implementation.
    link: /01-setup-prerequisites
    linkText: Get Started →
---

## What You'll Learn

In this workshop, you'll master the full Spec-Driven Development workflow — from establishing your project constitution through to AI-powered implementation:

::: info Workshop Duration: 60-90 Minutes
This is a hands-on workshop where you'll build a real project using AI coding agents. Come prepared to code!
:::

### 🎯 Learning Outcomes

- **Understand** what spec-driven development is and why it matters in AI-assisted coding
- **Establish** project principles and architecture with the Constitution phase (`/speckit.constitution`)
- **Create** clear specifications that AI agents can execute effectively (`/speckit.specify`, `/speckit.clarify`)
- **Generate** technical plans and task breakdowns systematically (`/speckit.plan`, `/speckit.tasks`)
- **Implement** features with AI using `/speckit.implement` while maintaining quality through validation
- **Apply** best practices across all five phases to avoid common pitfalls

### 🛠️ What You'll Build

Choose your own project or try one of our suggestions:
- **Weather Dashboard** - Real-time weather data aggregator
- **Budget Tracker** - Personal finance tracking application
- **Note-Taking App** - Simple note management system
- **URL Shortener** - Link shortening service
- **Habit Tracker** - Daily habit monitoring tool

### 📚 Prerequisites

- Basic programming knowledge (any language)
- Familiarity with command line / terminal
- Git basics (clone, commit, push)
- Visual Studio Code installed
- Python 3.11+ (required for Spec Kit)
- A supported AI coding agent (GitHub Copilot, Claude Code, Gemini CLI, Cursor, or any other)

::: tip Not Ready Yet?
Head to [Chapter 1: Setup & Prerequisites](/01-setup-prerequisites) for detailed installation instructions.
:::

### 🚀 Getting Started

Ready to begin? Start with the introduction:

<div style="text-align: center; margin: 2rem 0;">
  <a href="/00-introduction" style="display: inline-block; padding: 0.75rem 2rem; background: #5f67ee; color: white; border-radius: 8px; text-decoration: none; font-weight: 600;">
    Begin Workshop →
  </a>
</div>

---

## Why Spec-Driven Development?

### The Power Inversion

For decades, code was king. Specifications were written to describe code, documentation lagged behind implementation, and specs were discarded the moment they became inconvenient.

SDD inverts this relationship entirely: **specifications don't serve code — code serves specifications.** Specs become the primary artifact. Code is simply their expression.

This means:
- 📐 Specs are written first and treated as the source of truth
- 🔄 Code is regenerated from specs, not the other way around
- 📏 The gap between spec and implementation is eliminated
- 🤖 AI agents become the bridge that makes specs executable

### The Traditional Approach

Without clear specifications, AI coding agents often:
- 🤔 Make assumptions about requirements
- 🔄 Generate code that needs extensive rework
- 😕 Miss edge cases and user needs
- 📉 Produce inconsistent results

### The Spec-Driven Approach

With structured specifications:
- ✅ AI knows exactly what to build
- ✅ Clear validation criteria at every step
- ✅ Minimal rework and iteration
- ✅ Consistent, predictable results
- ✅ Living documentation that stays current

::: tip Real Impact
Teams using spec-driven development report **60% less rework** and **75% faster code reviews**.
:::

---

## Workshop Chapters

<div class="chapter-grid">

### 0️⃣ [Introduction to SDD](/00-introduction)
Learn what spec-driven development is, why it matters, and how "The Power Inversion" transforms AI-assisted coding.

### 1️⃣ [Setup & Prerequisites](/01-setup-prerequisites)
Install tools, configure your environment, and initialize your project.

### 2️⃣ [The Constitution Phase](/02-constitution-phase)
Establish your project's governing principles with `/speckit.constitution` before writing a single line of specification.

### 3️⃣ [The Specify Phase](/03-specify-phase)
Create your first specification with `/speckit.specify` defining WHAT to build and WHY, then sharpen it with `/speckit.clarify`.

### 4️⃣ [The Plan Phase](/04-plan-phase)
Generate a technical plan with `/speckit.plan` defining HOW to build your project with architecture and tech stack.

### 5️⃣ [The Tasks Phase](/05-tasks-phase)
Break down your plan into small, implementable tasks with `/speckit.tasks` and clear acceptance criteria.

### 6️⃣ [The Implementation Phase](/06-implement-phase)
Execute tasks with `/speckit.implement` and AI assistance while reviewing, validating, and maintaining quality.

### 7️⃣ [Best Practices](/07-best-practices)
Learn advanced techniques, avoid common pitfalls, and discover tips for team collaboration.

### 8️⃣ [Wrap-up & Next Steps](/08-wrapup)
Review what you've learned and plan your journey to mastering spec-driven development.

</div>

---

## Additional Resources

- 📖 [GitHub Spec Kit Repository](https://github.com/github/spec-kit) - Official toolkit source code
- 📝 [Microsoft Dev Blog](https://developer.microsoft.com/blog/spec-driven-development-spec-kit) - Introduction to SDD
- 🎯 [GitHub Blog Post](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/) - Getting started guide

---

## Questions?

This workshop is part of the **GitHub Copilot Certification Program (GH-300)**. 

For questions or feedback:
- Open an issue on [GitHub Spec Kit](https://github.com/github/spec-kit/issues)
- Join the [GitHub Community Discussions](https://github.com/github/spec-kit/discussions)

---

<style>
.chapter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.chapter-grid > h3 {
  margin-top: 0;
  padding: 1.5rem;
  border: 2px solid var(--vp-c-divider);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.chapter-grid > h3:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.chapter-grid a {
  text-decoration: none;
  color: var(--vp-c-brand);
  font-weight: 600;
}
</style>
