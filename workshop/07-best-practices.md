---
title: Best Practices & Advanced Topics
description: Master best practices for each SDD phase, avoid common pitfalls, and explore advanced patterns for team collaboration and scaling.
---

# Chapter 7: Best Practices & Advanced Topics

You've learned the core workflow of spec-driven development. Now let's explore best practices, common pitfalls to avoid, and advanced techniques that will make you more effective.

## What You'll Learn

By the end of this chapter, you will:
- ✅ Learn best practices for each phase of SDD
- ✅ Understand common pitfalls and how to avoid them
- ✅ Explore advanced SDD patterns
- ✅ Discover tips for team collaboration
- ✅ Learn how to scale SDD to larger projects

---

## The Constitutional Foundation

At the heart of SDD lies a constitution — a set of immutable principles that govern how specifications become code. The constitution defines nine articles that shape every aspect of development:

- **Article I: Library-First** — Every feature begins as a standalone library
- **Article II: CLI Interface** — Every library exposes CLI interfaces
- **Article III: Test-First** — No implementation code before tests are written, validated, and confirmed to fail (Red phase)
- **Articles VII & VIII: Simplicity & Anti-Abstraction** — Maximum 3 projects for initial implementation; use framework features directly
- **Article IX: Integration-First** — Prefer real databases over mocks, actual service instances over stubs

Your constitution is stored in `.specify/memory/constitution.md` and is referenced by every subsequent command.

Run `/speckit.constitution` before `/speckit.specify` to establish your project's principles. Every subsequent planning and implementation step reads and enforces the constitution automatically.

---

## Optional Commands for Quality Assurance

Spec Kit includes optional commands that improve quality and reduce rework. They slot into the workflow between the core phases:

### `/speckit.clarify`

Run before `/speckit.plan` to resolve ambiguities through structured questioning. The command surfaces unclear requirements and asks targeted questions so that the plan accurately reflects your intent. Reduces rework caused by misunderstood specs. Formerly known as `/quizme`.

### `/speckit.analyze`

Run after `/speckit.tasks`, before `/speckit.implement`. Performs cross-artifact consistency and coverage analysis — catching contradictions and gaps between your spec, plan, tasks, and contracts before any code is written.

### `/speckit.checklist`

Generates custom quality checklists that validate requirements completeness, clarity, and consistency. Think of it as "unit tests for English" — a structured way to verify your written artifacts before committing to implementation.

---

## Best Practices by Phase

### Phase 1: Specification Best Practices

#### 🎯 Focus on User Outcomes

**Do:**
```markdown
Success Metric: Users complete 20% more tasks per week
User Experience: App feels instant (< 100ms response time)
```

**Don't:**
```markdown
Technical Goal: Achieve 99.9% uptime
Implementation Detail: Use Redis for caching
```

#### 📝 Capture the "Why"

Always document motivation:

```markdown
## Feature: Offline Support

WHY: Developers often work in places with spotty internet (trains,
planes, coffee shops). They need to capture tasks even offline.
Without offline support, they'll lose thoughts or switch to paper/notes.
```

#### 🧪 Use Concrete Examples

Abstract requirements are confusing. Use examples:

**Vague:**
```markdown
Users can manage task priorities.
```

**Concrete:**
```markdown
Users can manage favorite cities:
- Example: Click "Add to Favorites" saves current city
- Example: Favorites list shows max 10 cities
- Example: Click any favorite loads that city's weather immediately
- Example: Remove button deletes a city from favorites
```

#### 🚫 Stay Technology-Agnostic

**Wrong:**
```markdown
The React app will show tasks in a Material-UI table.
```

**Right:**
```markdown
Users see tasks in a scannable, sortable list format with:
- Task description
- Priority indicator
- Time since creation
```

---

### Phase 2: Planning Best Practices

#### 💡 Right-Size Your Architecture

::: warning Beware Over-Engineering
A CLI tool doesn't need microservices.  
A prototype doesn't need a CDN.  
Start simple, scale when needed.
:::

**Scale-appropriate architecture:**
- **Small tool**: Single file or simple modules
- **Small app**: 3-tier architecture (UI, Logic, Data)
- **Medium app**: Layered architecture with clear boundaries
- **Large app**: Microservices, event-driven, etc.

#### 📋 Document Decisions

Use **Architecture Decision Records (ADRs)**:

```markdown
# ADR-001: Use localStorage for Client Data

## Context
Need to persist user preferences and favorite cities. Options: localStorage, 
IndexedDB, server-side database.

## Decision
Use browser localStorage for client-side data persistence

## Rationale
- Simple: No backend/database setup required
- Persistent: Data survives page refreshes
- Synchronous: Easy to work with in vanilla JS
- Sufficient: Expected < 100 KB of data
- Cross-browser: Widely supported

## Consequences
- Limited to ~5-10 MB storage
- Data is per-browser (not synced across devices)
- No query capabilities
- If we need more, can migrate to IndexedDB or add backend

## Status
Accepted - 2026-02-11
```

#### 🔒 Security from Day One

Don't add security as an afterthought:

```markdown
## Security Plan (Include in Every Plan)

### Input Validation
- Validate all user input
- Sanitize for script injection
- Limit input lengths

### Data Protection
- File permissions (user-only read/write)
- No plaintext secrets
- Secure temporary files

### Dependencies
- Pin versions
- Regular security updates
- Scan with safety/snyk
```

#### ✅ Plan for Testing Early

```markdown
## Testing Strategy

### Unit Tests (70% of effort if applicable)
- Core business logic functions
- Target: 80% coverage
- Framework: Vitest (for Vite projects)

### Integration Tests (20% of effort)
- Full user workflows
- API integration
- localStorage interactions

### Manual Tests (10% of effort)
- User experience
- Visual testing
- Cross-browser compatibility

---

### Phase 3: Tasks Best Practices

#### 🔨 Keep Tasks Atomic

**One task, one job:**

❌ **Too broad:**
```markdown
TASK-010: Implement Weather Features
- Fetch weather data
- Display current weather
- Show forecast
- Handle favorites
```

✅ **Properly scoped:**
```markdown
TASK-010: Implement Current Weather Display
TASK-011: Implement 5-Day Forecast Display
TASK-012: Implement Favorite Cities List
TASK-013: Implement Add to Favorites Feature
```

#### 📏 Use Consistent Sizing

All tasks should be similar size:
- **Small**: 30min - 1 hour
- **Medium**: 1-2 hours
- **Large**: 2-3 hours

If a task is > 3 hours, break it down.

#### ✓ Write Testable Acceptance Criteria

**Vague:**
```markdown
- [ ] Code works
- [ ] No bugs
```

**Specific:**
```markdown
- [ ] `fetchWeather()` returns weather object with required fields
- [ ] Invalid city name throws appropriate error
- [ ] API key is read from environment variables
- [ ] Response includes temperature, humidity, wind speed
- [ ] Function handles network errors gracefully
```

#### 🔗 Identify Dependencies Explicitly

```markdown
TASK-015: Implement Forecast Display Component

Dependencies:
- TASK-002: Weather API Service (needs API integration)
- TASK-010: Current Weather Display (similar UI patterns)

Blocked by: TASK-002
Blocks: TASK-020 (integration tests need this component)
```

---

### Phase 4: Implementation Best Practices

#### 🧹 Maintain Code Quality

**Use automated tools:**

```powershell
# Format code
npm run format

# Linting
npm run lint

# Type checking (if using TypeScript)
npm run type-check

# Run all quality checks
npm run lint && npm run format && npm run build
```

#### 🎯 Implement One Task at a Time

**Sequential workflow:**
```
TASK-001 [complete ✓] → TASK-002 [complete ✓] → TASK-003 [active 🔄]
```

**Why:**
- Clear focus
- Immediate validation
- Easier debugging
- Predictable progress

#### 🤖 Trust but Verify

AI-generated code needs review:

```python
# AI generates this - looks good?
def divide(a, b):
    return a / b

# YOU catch the issue:
def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b
```

**Always:**
- Run the code
- Read the code
- Test edge cases
- Check security

#### 💾 Commit Frequently

```powershell
# After each task completion
git add .
git commit -m "feat: implement TASK-XXX"

# Small logical chunks
git add src/components/weatherDisplay.js
git commit -m "feat: add weather display component"

git add src/services/weatherApi.js
git commit -m "feat: add weather API service"
```

---

## Common Pitfalls and Solutions

### Pitfall 1: Skipping the Spec

**Problem:**
```
You: "I know what I want, let's just start coding!"
[2 weeks later]
You: "Wait, why did I build it this way?"
```

**Solution:**
Always write a spec first, even for "simple" features. It takes 15 minutes and saves hours.

---

### Pitfall 2: Specs Too Technical

**Problem:**
```markdown
# Specification (WRONG)

The system will use a PostgreSQL database with a tasks table
containing columns id, description, priority_id...
```

**Solution:**
```markdown
# Specification (RIGHT)

Users need to track tasks with:
- Description of what to do
- Priority level (high/medium/low)
- Status (active or completed)

Tasks must persist between sessions.
```

Save the database choice for the plan!

---

### Pitfall 3: Plans Without Justification

**Problem:**
```markdown
Technology Stack: Go with Gin framework
```
Why Go? Why Gin? No explanation.

**Solution:**
```markdown
Technology Stack: Go with Gin framework

Rationale:
- Go: Team has Go expertise; excellent CLI support; fast startup
- Gin: Most popular Go web framework; good documentation; active community
- Alternatives considered: Python (slower startup), Rust (steeper learning curve)
```

---

### Pitfall 4: Tasks Too Large

**Problem:**
```markdown
TASK-005: Build the entire API layer (Estimated: 3 days)
```

**Solution:**
Break into smaller tasks:
```markdown
TASK-005: Create API router structure (1 hour)
TASK-006: Implement POST /tasks endpoint (1.5 hours)
TASK-007: Implement GET /tasks endpoint (1.5 hours)
TASK-008: Implement DELETE /tasks/:id endpoint (1 hour)
...
```

---

### Pitfall 5: Not Validating at Each Phase

**Problem:**
- Rush through /speckit.specify → /speckit.plan → /speckit.tasks
- Start implementation
- Realize spec was wrong
- Rework everything

**Solution:**
STOP and validate after each phase:
- After /speckit.specify: Review spec thoroughly, get feedback
- After /speckit.plan: Verify architecture makes sense
- After /speckit.tasks: Check all plan aspects are covered

---

### Pitfall 6: Ignoring the Constitution

**Problem:**
Constitution says "All code must have tests"
→ You skip tests to move faster
→ Bugs accumulate
→ Refactoring becomes scary

**Solution:**
Treat constitution as non-negotiable. If you can't follow it, update it—but be intentional.

Use `/speckit.constitution` to establish and update your project principles. The command stores them in `.specify/memory/constitution.md`, where every subsequent `/speckit.plan` run will read and enforce them automatically. This means your constitution isn't just a document—it's a gate that the planning command checks on every run.

---

### Pitfall 7: Skipping `/speckit.constitution`

**Problem:**
You jump straight to `/speckit.specify` without establishing your project principles first.

```
No constitution → spec runs without governance
→ Plan may conflict with your standards
→ Tasks lack quality gates
```

**Solution:**
Always run `/speckit.constitution` before `/speckit.specify`. The constitution is the foundation every subsequent command builds on. Without it, spec-kit cannot enforce your architectural principles, testing requirements, or quality standards automatically.

---

### Pitfall 8: Not Running `/speckit.clarify`

**Problem:**
You go from `/speckit.specify` directly to `/speckit.plan` without checking for ambiguities.

```
Ambiguous spec → Plan based on AI's best guess
→ Tasks don't match your intent
→ Implementation requires significant rework
```

**Solution:**
Run `/speckit.clarify` after specification to surface and resolve unclear requirements before the plan is written. It takes a few minutes and pays back multiples in avoided rework.

---

### Pitfall 9: AI Over-Reliance

**Problem:**
You accept every AI suggestion without thinking.

**Solution:**
AI is a tool, not an oracle. You must:
- Review all code
- Understand what it does
- Verify it's correct
- Ensure it's maintainable

**Remember:** You're signing off on this code!

---

### Pitfall 10: Premature Optimization

**Problem:**
```
Spec: "Commands should feel fast"
Plan: "Implement Redis caching, CDN, worker queues..."
```

**Solution:**
Build the simplest thing first:
```
v1: Simple in-memory cache
→ Measure performance
→ Is it fast enough? Done!
→ Still slow? Now optimize with data.
```

---

## Advanced Topics

### Multi-Variant Implementations

Create multiple implementations from one spec:

```
/speckit.plan

Create TWO technical plans for the Weather Dashboard spec:

PLAN A: Vanilla JavaScript + Vite (primary implementation)
- Quick to build
- No framework overhead
- Easy to maintain
- Fast development

PLAN B: React + TypeScript (alternative)
- Component reusability
- Attractive terminal UI
- Learning opportunity

Compare trade-offs.
```

**Use cases:**
- Evaluate technology choices
- Performance comparison
- Learning new technologies
- Risk mitigation

---

### Legacy System Modernization

Use SDD to modernize old code:

**Step 1: Document Existing Behavior**
```
/speckit.specify

Document what the existing [legacy system] does:
[describe current behavior, warts and all]

Include:
- Current user workflows
- Known issues and limitations
- Features users actually use vs. ignore
```

**Step 2: Plan Modern Replacement**
```
/speckit.plan

Create a modern technical plan that:
- Preserves essential functionality
- Fixes known issues
- Uses modern technologies
- Improves user experience
```

**Step 3: Incremental Migration**
```
/speckit.tasks

Create a migration task list that:
- Starts with standalone features
- Preserves data compatibility
- Allows gradual rollout
- Provides rollback options
```

---

### Spec-Driven Refactoring

Apply SDD to existing projects:

```
/speckit.specify

Document the current state of [component]:
- What it does now
- What problems exist
- What the ideal behavior would be

Create a specification for the refactored version.
```

Then plan and implement the refactoring systematically.

---

### Team Collaboration

#### Shared Specifications

**One spec = one source of truth**

```markdown
specs/
├── user-auth-spec.md          ← Alice owns
├── task-management-spec.md    ← Bob owns
├── api-integration-spec.md    ← Charlie owns
└── README.md                  ← Links between specs
```

#### Distributed Implementation

**Different team members, same process:**

- **Alice**: Implements tasks 1-5 (auth layer)
- **Bob**: Implements tasks 6-10 (business logic)
- **Charlie**: Implements tasks 11-15 (API layer)

All following the same spec and plan!

#### Code Review Against Spec

**In pull requests:**

```markdown
## PR: Implement User Authentication

**Implements**: TASK-003 through TASK-007

**Specification**: specs/user-auth-spec.md

**Acceptance Criteria Checklist**:
- [x] Users can register with email/password
- [x] Passwords hashed with bcrypt
- [x] Registration validates email format
- [x] Tests achieve 85% coverage
- [x] All security requirements met
```

Reviewers check against spec, not just code style.

---

### Scaling to Large Projects

#### Modular Specifications

Large projects need multiple specs:

```
specs/
├── 00-system-overview.md          ← High-level
├── 01-user-management/
│   ├── spec.md
│   ├── plan.md
│   └── tasks.md
├── 02-task-management/
│   ├── spec.md
│   ├── plan.md
│   └── tasks.md
└── 03-reporting/
    ├── spec.md
    ├── plan.md
    └── tasks.md
```

#### Cross-References

Link related specs:

```markdown
## Dependencies

This specification depends on:
- [User Management Spec](../01-user-management/spec.md) 
  for authentication
- [API Gateway Plan](../00-infrastructure/api-plan.md)
  for request routing
```

#### Version Control

Specs evolve—track changes:

```powershell
git log specs/user-auth-spec.md

# View spec at specific time
git show v1.0.0:specs/user-auth-spec.md
```

---

## Measuring Success

### Quality Metrics

**Test Coverage (if using Vitest):**
```powershell
npm test -- --coverage

Coverage: 87%
```

**Code Quality:**
```powershell
# Linting
npm run lint
All checks passed ✓

# Type checking (if using TypeScript)
npm run type-check
No errors found

# Build verification
npm run build
Build completed successfully
```

**Defect Rate:**
- Bugs per feature
- Regressions per release
- Issues opened vs. closed

### Productivity Metrics

**Time to Implement:**
- Specification to working code
- Compare before/after SDD

**Rework Rate:**
- How often do you re-implement?
- With good specs: < 10% rework
- Without specs: 30-50% rework

**Review Efficiency:**
- Time spent in code review
- Spec-driven code reviewed faster

### Developer Experience

**Onboarding Time:**
- New team member to first contribution
- With specs: Days instead of weeks

**Context Switching:**
- Time to remember what you were doing
- Specs provide quick context refresh

**Confidence:**
- How confident are you the code is right?
- Specs + tests = high confidence

---

## Tips for Success

### For Individuals

✅ **Start Small**
Practice SDD on personal projects before work projects.

✅ **Build Habits**
Make the four-phase process automatic.

✅ **Keep a Template Library**
Save good specs/plans as templates.

✅ **Iterate**
Your first specs will be rough—that's OK!

✅ **Reflect**
After each project: What worked? What didn't?

---

### For Teams

✅ **Agree on Process**
Team consensus on SDD workflow.

✅ **Shared Constitution**
Team-wide standards and principles.

✅ **Review Together**
Collaborative review of specs/plans.

✅ **Share Learnings**
Internal wiki of SDD patterns.

✅ **Celebrate Wins**
Recognize when SDD prevented problems.

---

### For Organizations

✅ **Standard Constitution**
Organization-wide principles.

✅ **Template Library**
Reusable specs/plans for common patterns.

✅ **Center of Excellence**
Team supporting SDD adoption.

✅ **Metrics Tracking**
Measure quality improvements.

✅ **Training Program**
Workshops for new teams.

---

## Tools and Extensions

### VS Code Extensions

- **Gitlens**: Better Git integration
- **Todo Tree**: Find TODOs in code
- **Better Comments**: Colorize comment types
- **Code Spell Checker**: Catch typos
- **Error Lens**: Inline error messages

### CI/CD Integration

```yaml
# .github/workflows/test.yml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install dependencies
        run: npm ci
      - name: Run linter
        run: npm run lint
      - name: Build project
        run: npm run build
      - name: Run tests (if configured)
        run: npm test
```

### Project Management Integration

Export tasks to:
- **GitHub Issues**
- **Jira**
- **Azure DevOps**
- **Linear**

Convert task list to issues programmatically.

---

## Continuous Improvement

### Retrospectives

After completing a spec-driven project:

**What worked well?**
- List 3 things that went smoothly

**What could improve?**
- List 3 pain points

**Actions:**
- Update templates
- Refine process
- Share learnings

### Updating Your Process

Your SDD workflow should evolve:

```markdown
# SDD Process v1.0 → v1.1

Changes:
- Added: Security checklist to plan template
- Updated: Task acceptance criteria template
- Removed: Overly detailed task time estimates
- Improved: Specification example library

Rationale: [why these changes]
```

---

## What You've Learned

Congratulations! You now understand:

- ✅ Best practices for every SDD phase
- ✅ Common pitfalls and how to avoid them
- ✅ Advanced patterns (multi-variant, legacy modernization)
- ✅ Team collaboration approaches
- ✅ Scaling strategies for large projects
- ✅ How to measure success

### You're Ready!

You have all the knowledge needed to:
- Apply SDD to your projects
- Avoid common mistakes
- Scale your practice over time
- Help others learn SDD

::: tip Final Chapter
Continue to [Chapter 8: Workshop Wrap-up](./08-wrapup) 
:::

---

**Next**: [Chapter 8: Workshop Wrap-up & Next Steps →](./08-wrapup)

**Previous**: [← Chapter 6: The Implementation Phase](./06-implement-phase)
