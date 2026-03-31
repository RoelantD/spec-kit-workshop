---
title: The Constitution Phase
description: Establish your project's governing principles with /speckit.constitution before writing a single line of specification.
---

# Chapter 2: The Constitution Phase

Every project needs a foundation. Before you specify a single feature, plan an architecture, or write any code, you need to answer the question: **What are the rules of the road for this project?**

That answer lives in your project constitution.

## What You'll Learn

By the end of this chapter, you will:
- ✅ Understand what a project constitution is and why it comes first
- ✅ Know how the constitution guides all AI decisions throughout your project
- ✅ Run `/speckit.constitution` and understand what it produces
- ✅ Recognize what makes a good constitution

---

## What is a Project Constitution?

A project constitution is a set of governing principles stored in `.specify/memory/constitution.md`. It is the **first thing you do** in every new project — before specifying, before planning, before writing any code.

Every subsequent Spec Kit command reads the constitution automatically:

| Command | Reads constitution? |
|---------|-------------------|
| `/speckit.specify` | Yes |
| `/speckit.plan` | Yes |
| `/speckit.tasks` | Yes |
| `/speckit.implement` | Yes |

This means every decision the AI makes — what patterns to use, how to handle errors, whether to add authentication, how to structure tests — is shaped by the principles you define once, up front.

### What the Constitution Defines

A well-written constitution captures:

- **Code quality standards** — test coverage requirements, linting rules, code review policies
- **Technology preferences and constraints** — approved libraries, banned dependencies, language versions
- **Security requirements** — authentication rules, input validation, secrets handling
- **Architectural principles** — simplicity over cleverness, no over-engineering, preferred patterns
- **Documentation standards** — what needs to be documented and how
- **Organizational or team standards** — anything your team consistently cares about

::: tip Think of it as a standing brief
The constitution is like a standing brief you give every new developer joining your project — except the "developer" here is an AI agent, and it reads the brief before every single task.
:::

---

## Why Constitution Comes First

Without a constitution, AI agents make their own assumptions. These assumptions are usually reasonable — but they may not match your intentions:

- What testing framework to use
- How complex to make the architecture
- Whether to add authentication to every endpoint
- Which patterns and coding styles to follow
- How much abstraction is appropriate

With a constitution, every decision is guided by your principles — automatically, consistently, across every feature and every session.

### A Concrete Example

Consider two projects that both ask for a "user authentication system":

**Without a constitution**, the AI might:
- Choose JWT tokens (reasonable default)
- Skip refresh token logic (simpler to implement)
- Add basic password hashing (common practice)
- Generate minimal tests (faster to produce)

**With a constitution** that specifies "all endpoints require authentication, secrets never committed, >80% test coverage, prefer bcrypt for password hashing", the AI will:
- Apply authentication middleware to every endpoint by default
- Implement proper refresh token rotation
- Use bcrypt with a suitable work factor
- Generate comprehensive test suites automatically

Same feature request. Very different outcomes.

---

## The Nine Articles

Spec Kit's underlying philosophy is built around nine governing articles that inform how AI should approach software projects. Your constitution is where you express these in plain language for your specific project.

The most important articles to consider when writing your constitution:

- **Library-First (Article I)** — prefer well-maintained libraries over custom implementations
- **Test-First (Article III)** — tests are written before or alongside implementation, not after
- **Simplicity (Article VII)** — the simplest solution that meets the requirements wins
- **Anti-Abstraction (Article VIII)** — avoid premature abstraction; write concrete code first
- **Integration-First (Article IX)** — end-to-end integration matters more than theoretical correctness

You do not need to reference these articles by name. Just express the same principles in plain language that fits your project.

---

## Creating Your Constitution

Open your AI agent in the project directory you initialized in Chapter 1, then run `/speckit.constitution` with a prompt describing your project and standards.

### Basic Example

```
/speckit.constitution Create principles focused on code quality, testing standards, user experience consistency, and performance requirements
```

### Detailed Example

```
/speckit.constitution Create a constitution for a TypeScript web application.
Standards: all code must have unit tests with >80% coverage, all APIs must be
documented with OpenAPI, secrets must never be committed, all endpoints require
authentication. Use simple architectures — no unnecessary abstractions.
```

::: info Be specific — it pays off
The more context you provide, the more targeted your constitution will be. Vague constitutions produce vague guidance. Specific constitutions produce consistent, on-brand code across every feature.
:::

You can include anything that matters to your project:

- Language and runtime versions (`Node.js 20+, TypeScript strict mode`)
- Preferred testing frameworks (`Vitest for unit tests, Playwright for E2E`)
- Database rules (`no raw SQL — use the ORM`)
- Dependency policies (`no dependencies with known CVEs`)
- Style preferences (`functional over class-based where practical`)

---

## What the Output Looks Like

After running `/speckit.constitution`, the AI creates `.specify/memory/constitution.md` in your project. Here is an example of what that file might contain:

::: details Example constitution.md (click to expand)

```markdown
# Project Constitution

## Non-Negotiable Principles

### Code Quality
- All code must have accompanying unit tests
- Test coverage must be > 80%
- Code must pass linting with no errors
- No commented-out code in committed files

### Technology Standards
- Backend: Node.js with TypeScript (strict mode)
- Database: PostgreSQL via Prisma ORM — no raw SQL
- All APIs must follow REST principles
- Use Vitest for unit tests, Playwright for E2E

### Security
- All endpoints must require authentication
- Input validation on all user inputs using Zod
- Secrets must never be committed to Git
- Use environment variables for all configuration

### Documentation
- All public APIs must be documented with JSDoc
- Complex logic must have explanatory comments
- README must be kept up to date with setup instructions

### Architecture
- Prefer simple solutions — no unnecessary abstractions
- Write concrete code before generalizing
- No premature optimization
- Each module should do one thing well
```

This constitution ensures your AI agent applies your standards consistently across every feature and every session.
:::

---

## Reviewing and Refining

After the constitution is generated, take two minutes to read it:

1. Open `.specify/memory/constitution.md`
2. Read each principle — does it match your actual intentions?
3. Edit any principles that are wrong or missing
4. Add any standards that matter to you but weren't captured

The constitution is a plain markdown file. You can edit it directly at any time.

### Updating with Your Agent

You can also refine the constitution through your AI agent:

```
/speckit.constitution Add a principle: all database queries must use parameterized statements. Also update the test coverage requirement to >90%.
```

Or regenerate a section from scratch:

```
/speckit.constitution Rewrite the Security section to require OWASP Top 10 mitigations for all new endpoints.
```

### Evolving the Constitution

The constitution can grow with your project. Common reasons to update it mid-project:

- You've adopted a new library and want to standardize its use
- You've discovered a pattern that works well and want to enforce it
- Security requirements have changed
- You're onboarding new team members and want to tighten standards

::: warning Changing core principles mid-project
Updating the constitution doesn't automatically regenerate existing specs, plans, or tasks. If you change a fundamental principle (like switching from REST to GraphQL), you may need to revisit earlier artifacts. Incremental refinements — adding rules, tightening standards — are low risk.
:::

---

## Hands-On Exercise

Work through these steps now, with your project from Chapter 1:

1. Open your AI agent in the project directory you initialized in Chapter 1
2. Run `/speckit.constitution` with a prompt that describes your project type and the standards that matter to you
3. Open `.specify/memory/constitution.md` and read what was generated
4. Find any principle that doesn't match your intentions and ask your agent to refine it
5. Save the file — the constitution is now active and will be applied automatically from this point forward

### Using Your Own Project

Describe your project type and the standards that matter to you. For example:

```
/speckit.constitution Create a constitution for a Python CLI tool.
Standards: all code must have unit tests with >80% coverage, type hints 
on all public functions, no raw file I/O outside the storage module, 
prefer simple solutions over clever abstractions.
```

### Using the Weather Dashboard (Fallback Example)

If you're following the workshop example, use this prompt:

```
/speckit.constitution Create a constitution for a client-side web application 
(Vanilla JavaScript, no framework). 

Standards: 
- All JavaScript modules must have JSDoc comments on exported functions
- API keys must never be hardcoded — use environment variables
- No external JavaScript frameworks (vanilla JS only)
- Input validation on all user-facing inputs
- Error handling for all API calls and localStorage operations
- Prefer readable code over clever one-liners
- Mobile-first responsive design
- Accessibility: all interactive elements must be keyboard-navigable
```

::: info Keep it simple for the workshop
For this workshop, a constitution focused on your project type and a few core standards is enough. Don't spend more than 5 minutes on it — you can always refine it later. The goal is to have *something* concrete before you start specifying.
:::

### Verification Checkpoint

Before continuing, confirm:

- [ ] `.specify/memory/constitution.md` exists in your project
- [ ] You've read the generated principles and they reflect your intentions
- [ ] At least one principle covers testing or code quality

---

## What's Next?

Your project now has a foundation. Every AI decision from here on will be shaped by the principles you just defined.

In Chapter 3, you'll use `/speckit.specify` to create your first feature specification — defining **what** to build and **why**, without yet getting into the details of **how**.

::: tip Ready to specify?
Continue to [Chapter 3: The Specify Phase →](./03-specify-phase)
:::

---

**Next**: [Chapter 3: The Specify Phase →](./03-specify-phase)

**Previous**: [← Chapter 1: Setup & Prerequisites](./01-setup-prerequisites)
