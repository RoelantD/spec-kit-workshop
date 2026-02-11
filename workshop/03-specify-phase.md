---
title: The Specify Phase
description: Create your first specification defining WHAT to build and WHY, using the /speckit.specify command with effective prompt engineering.
---

# Chapter 3: The Specify Phase

Welcome to the heart of spec-driven development! In this chapter, you'll create your first specification—the document that will guide your entire project. This is where we define **WHAT** to build and **WHY**, without getting bogged down in the **HOW**.

## What You'll Learn

By the end of this chapter, you will:
- ✅ Understand what belongs (and doesn't belong) in a specification
- ✅ Use the `/speckit.specify` command to generate your first spec
- ✅ Craft effective prompts that produce quality specifications
- ✅ Review and refine AI-generated specifications using `/speckit.clarify`
- ✅ Validate your spec is ready for the planning phase

::: info Advanced: About Prompt Files
The `/speckit.specify` command is defined in `.github/prompts/speckit.specify.prompt.md`. 

**For this workshop**, you'll use the default prompt files as-is and focus on crafting great user prompts.

**Advanced users** can customize these files to add industry-specific sections, company standards, or mandatory requirements. However, this is optional and not required for successful spec-driven development.
:::

---

## Understanding the Specification Phase

### What is a Specification?

A **specification** is your project's source of truth. It describes:
- 👥 **Who** will use the system
- 🎯 **What** problem it solves
- 🚀 **Why** it matters
- 💡 **How users will interact** with it
- ✨ **What success looks like**

Think of it as a contract between you and your AI agent about what you're building.

### The Golden Rule of Specifications

::: tip The Golden Rule
Specifications define **WHAT** and **WHY**.  
Plans define **HOW**.

Never mix the two!
:::

---

## What Belongs in a Specification?

Let's be crystal clear about what to include and exclude.

### ✅ DO Include

| Category | Examples |
|----------|----------|
| **Users** | "Developers who work on multiple projects" |
| **Problems** | "Losing track of daily tasks and priorities" |
| **User Journeys** | "User opens app, sees today's tasks sorted by priority" |
| **Features** | "Ability to mark tasks as complete" |
| **Success Criteria** | "Users complete 20% more tasks per week" |
| **Experiences** | "App feels responsive and quick to use" |
| **Constraints** | "Must work offline" |
| **User Stories** | "As a developer, I want to quickly capture ideas..." |

### ❌ DON'T Include

| Category | Why Not | Goes Where |
|----------|---------|------------|
| "Use React" | Technology choice | Plan phase |
| "REST API with JWT" | Implementation detail | Plan phase |
| "PostgreSQL database" | Stack decision | Plan phase |
| "Singleton pattern" | Code architecture | Plan phase |
| "Use Express middleware" | Library choice | Plan phase |

::: warning Common Mistake
Many developers jump straight to technical solutions in their specs. Resist this urge! The best specs are technology-agnostic and focus purely on user needs.
:::

---

## The Specification Template Structure

When you use `/speckit.specify`, your AI agent follows this template:

### 1. **Overview**
High-level project description in 2-3 sentences.

### 2. **Target Users**
Who will use this? Be specific about user types.

### 3. **Problem Statement**
What pain point or need does this address?

### 4. **User Journeys**
Step-by-step scenarios showing how users interact with the system.

### 5. **Core Features**
What capabilities must the system provide?

### 6. **Success Metrics**
How will we measure if this succeeds?

### 7. **Constraints**
What limitations exist? (budget, time, platform, etc.)

### 8. **Assumptions**
What are we taking as given?

### 9. **Out of Scope**
What are we explicitly NOT building?

---

## Creating Your First Specification

Let's walk through the specification phase step by step.

### Step 1: Open Your Project and AI Agent

Make sure you're in your project directory and launch your AI agent:

```powershell
cd my-first-sdd-project
code .
```

In VS Code:
- Press `Ctrl+Shift+I` to open GitHub Copilot Chat
- Or click the chat icon in the sidebar

### Step 2: Verify Slash Commands Are Available

Type `/speckit.` in Copilot Chat and you should see the available commands appear, including:
- `/speckit.constitution`
- `/speckit.specify`
- `/speckit.clarify`
- `/speckit.plan`
- `/speckit.tasks`
- `/speckit.implement`

If you don't see these commands, ensure you ran `specify init` correctly in Chapter 2.

### Step 3: Use `/speckit.specify` to Create Your Spec

Now you'll use the `/speckit.specify` command to describe **what** you want to build and **why**. 

::: warning Critical Rule
**Focus on the WHAT and WHY, NOT the tech stack.**

✅ DO describe: user needs, features, experiences, problems being solved  
❌ DON'T include: technology choices, implementation details, architecture decisions

The tech stack comes later in the `/speckit.plan` phase!
:::

---

## Crafting Your Specification Prompt

The quality of your specification depends on providing a detailed, clear prompt to `/speckit.specify`.

### The Anatomy of a Great Specification Prompt

When you invoke `/speckit.specify`, provide a comprehensive prompt that covers:

1. **What you're building**: High-level description
2. **Target users**: Who will use this?
3. **Problem being solved**: What pain point does this address?
4. **Key features**: What capabilities must it have?
5. **User experiences**: How should users interact with it?
6. **Success criteria**: What does success look like?
7. **Out of scope**: What are you explicitly NOT building?

### Example: Weather Dashboard

Here's a well-structured prompt:

::: tip Prompt Quality = Spec Quality
The more detail you provide upfront, the less editing you'll need to do later. Invest 5 minutes in a good prompt to save 30 minutes of revision!
:::

```
/speckit.specify

I want to build a simple weather dashboard web application that 
shows current weather and forecasts for multiple cities.

TARGET USERS:
- People who travel frequently or have family in different cities
- Weather enthusiasts who like checking conditions
- Anyone who wants a quick weather overview

PROBLEM:
Checking weather for multiple locations means visiting the weather 
site repeatedly or switching between multiple apps. Users want a 
single dashboard that shows everything at once.

KEY FEATURES:
- Display current weather for saved cities
- Show 5-day forecast
- Add and remove cities from watchlist
- Display temperature, conditions, humidity, wind
- Visual weather icons
- Search for cities to add

CRITICAL EXPERIENCES:
- Dashboard should load quickly (under 2 seconds)
- Information should be scannable at a glance
- Visual design should be clean and modern
- Works on both desktop and mobile browsers

SUCCESS LOOKS LIKE:
- Users glance at the dashboard daily
- Users prefer it over other weather sites
- Information is accurate and up-to-date

CONSTRAINTS:
- Must use a free weather API
- Should work in modern browsers (Chrome, Firefox, Edge)
- Should be a standalone web page (no server required beyond API)

OUT OF SCOPE:
- Weather alerts or notifications
- Historical weather data
- Detailed hourly forecasts
- Weather maps
- Social features
```

---

## Hands-On: Create Your Specification

Now it's your turn! Let's put everything together to create the specification for your chosen project.

### Before You Begin

Ensure you have:
1. ✅ Your project initialized with `specify init`
2. ✅ VS Code open in your project directory
3. ✅ Copilot Chat open (`Ctrl+Shift+I`)
4. ✅ Verified `/speckit.` commands are available

### Step 1: Draft Your Specification Prompt

Using the examples above as a guide, write your detailed prompt covering **what** you want to build and **why** (not **how** or what tech stack). Include all the key sections:

::: details Click to see the prompt template
```
/speckit.specify

I want to build a [PROJECT TYPE] that [MAIN PURPOSE].

TARGET USERS:
- [User type 1]
- [User type 2]
- [User type 3]

PROBLEM:
[Describe the pain point or need in 2-3 sentences]

KEY FEATURES:
- [Feature 1]
- [Feature 2]
- [Feature 3]
- [Feature 4]
- [Feature 5]

CRITICAL EXPERIENCES:
- [Experience 1]
- [Experience 2]
- [Experience 3]

SUCCESS LOOKS LIKE:
- [Success metric 1]
- [Success metric 2]
- [Success metric 3]

CONSTRAINTS (if any):
- [Constraint 1]
- [Constraint 2]

OUT OF SCOPE:
- [What you're NOT building 1]
- [What you're NOT building 2]
- [What you're NOT building 3]
```
:::

### Step 2: Invoke `/speckit.specify` with Your Prompt

Now submit your prompt to the AI agent:

1. **In Copilot Chat**, type `/speckit.specify` followed by your detailed prompt
2. **Press Enter** to submit
3. **Wait 15-30 seconds** for the AI to generate your specification
4. **Watch as the AI creates** your spec following the SDD template

::: tip How It Works
When you invoke `/speckit.specify`, the AI:
1. Reads the instructions from `.github/prompts/speckit.specify.prompt.md` (installed during `specify init`)
2. Combines those instructions with your detailed prompt
3. Generates a complete specification following the SDD methodology
4. Creates a new branch (e.g., `001-your-feature`) and saves `specs/001-your-feature/spec.md`

The `/speckit.specify` prompt file defines the structure and format; your prompt provides the specific content about users, features, and requirements.
:::

### Step 3: Review the Generated Specification

The AI will create a comprehensive document. Let's review it systematically.

---

## Reviewing Your Specification

Once your specification is generated, it's time for the most important step: **human review**.

### The Review Checklist

Go through each section and ask:

#### 1. Overview & Problem Statement
- [ ] Is the problem clearly articulated?
- [ ] Would a stranger understand what we're building?
- [ ] Is it free of technical jargon?

#### 2. Target Users
- [ ] Are user personas specific and realistic?
- [ ] Can we name actual people who fit these descriptions?
- [ ] Are their needs clearly defined?

#### 3. User Journeys
- [ ] Do the journeys flow logically?
- [ ] Are all major use cases covered?
- [ ] Can we visualize a real person doing these steps?
- [ ] Are edge cases mentioned?

#### 4. Core Features
- [ ] Is each feature described clearly?
- [ ] Are features focused on user value, not implementation?
- [ ] Are critical features present?
- [ ] Are there features that shouldn't be there?

#### 5. Success Metrics
- [ ] Are metrics measurable?
- [ ] Are they realistic?
- [ ] Do they align with user needs?

#### 6. Constraints & Assumptions
- [ ] Are constraints realistic and necessary?
- [ ] Are assumptions documented and valid?
- [ ] Are there hidden assumptions we should make explicit?

#### 7. Out of Scope
- [ ] Is the scope boundary clear?
- [ ] Have we explicitly excluded potentially confusing features?

### Common Issues to Watch For

::: warning Red Flags in Specifications

**🚩 Too Technical**
```
❌ "System will use JWT tokens for authentication"
✅ "Users remain logged in across sessions"
```

**🚩 Too Vague**
```
❌ "App should be fast"
✅ "Commands execute in under 100ms; UI updates feel instant"
```

**🚩 Implementation-Focused**
```
❌ "Use React hooks for state management"
✅ "Application remembers user preferences between sessions"
```

**🚩 Missing User Context**
```
❌ "Add CRUD operations"
✅ "Users can create, view, update, and delete their tasks"
```
:::

---

## Clarifying and Refining Your Specification

After reviewing your specification, you'll likely find areas that need clarification or refinement. Spec-Driven Development provides structured ways to improve your spec.

### Use `/speckit.clarify` for Structured Clarification

The **recommended approach** is to use `/speckit.clarify` to systematically identify and resolve underspecified areas:

```
/speckit.clarify
```

This command will:
- Ask sequential, coverage-based questions about unclear aspects
- Help you think through edge cases you might have missed
- Record answers in a **Clarifications** section of your spec
- Ensure comprehensive requirements before you move to planning

::: tip When to Use `/speckit.clarify`
Use `/speckit.clarify` **before creating your technical plan** (`/speckit.plan`). This reduces rework downstream by catching ambiguities early.

If you're doing a quick spike or exploratory prototype, you can skip this step - just make that intention explicit.
:::

**Example clarification session:**

```
/speckit.clarify

[AI asks]: How should the application handle multiple tasks with the same name?
[You respond]: Task names don't need to be unique. Users can have multiple "Fix bug" tasks.

[AI asks]: What's the maximum number of tasks we expect users to manage?
[You respond]: Expect 50-100 active tasks at a time. Archive completed tasks after 30 days.

[AI asks]: Should users be able to reopen completed tasks?
[You respond]: Yes, there should be an "Undo Complete" action available for 24 hours after completion.
```

### Ad-Hoc Free-Form Refinement

After `/speckit.clarify`, if something still feels vague, you can also refine using free-form prompts:

```
Please update the specification to:
1. Make the success metrics more specific and measurable
2. Add edge cases to the user journeys
3. Clarify the constraint about offline operation
```

Or be specific about what needs more detail:

```
For each sample project that you create, there should be a variable number 
of tasks between 5 and 15 tasks for each one, randomly distributed into 
different states of completion. Make sure that there's at least one task 
in each stage of completion.
```

### Validate the Review Checklist

Ask your AI agent to validate the **Review & Acceptance Checklist** in your specification:

```
Read the review and acceptance checklist, and check off each item in the 
checklist if the feature spec meets the criteria. Leave it empty if it does not.
```

This helps identify gaps systematically.

### Editing Manually

If you prefer direct editing, your specification is saved in:

```
specs/001-your-feature/spec.md
```

You can:
1. Open the file in VS Code
2. Make your edits directly
3. Save the changes
4. Continue with the SDD process

::: warning Important
**Do not treat the AI's first attempt as final.** The interaction with your AI agent is an opportunity to clarify and ask questions around the specification. Iterate until you have a clear, comprehensive spec.
:::

---

## Example: Completed Specification

Let's look at what a good final specification looks like.

::: details Weather Dashboard - Final Specification (Click to expand)

# Weather Dashboard - Project Specification

## Overview
A web-based weather dashboard that displays current weather conditions and forecasts for multiple cities. Designed for users who need to monitor weather across several locations at a glance.

## Target Users

### Primary User: Frequent Traveler
- Checks weather for multiple destinations regularly
- Plans travel around weather conditions
- Has family or clients in different cities
- Wants quick access without app-hopping
- Age 25-55, tech-comfortable

### Secondary User: Weather Enthusiast
- Enjoys tracking weather patterns
- Monitors conditions for outdoor activities
- Checks multiple locations for comparison
- Appreciates clean, visual data presentation

### Anti-User: Casual User
This tool is NOT for people who:
- Only check one location occasionally
- Need detailed meteorological data
- Require weather alerts or notifications

## Problem Statement

People who monitor weather across multiple cities face a fragmented experience. Current solutions fall short:

- **Default weather apps**: Show only one location at a time
- **Weather websites**: Require searching/navigating for each city
- **Multiple bookmarks**: Cluttered, no unified view
- **Weather apps**: Too cluttered with ads and unnecessary features

**The core problem**: Checking weather for multiple locations requires too many clicks and too much time. Users want a single glanceable dashboard.

## User Journeys

### Journey 1: Morning Weather Check
1. User opens browser and navigates to dashboard
2. Dashboard loads instantly (< 2 seconds)
3. Sees current conditions for all saved cities at a glance
4. Identifies warmest/coldest locations immediately
5. Decides what to pack for the day

### Journey 2: Planning Travel
1. User planning a trip next week
2. Opens dashboard, adds destination city
3. Views 5-day forecast for new location
4. Compares weather with home city
5. Makes informed decisions about travel timing

### Journey 3: Managing Locations
1. User has moved cities
2. Opens dashboard, searches for new city
3. Adds new city to watchlist
4. Removes old city with one click
5. Dashboard updates to show current locations

### Journey 4: Quick Glance
1. User opens dashboard multiple times per day
2. Quickly scans weather icons and temperatures
3. No need to click or navigate
4. Gets information in under 5 seconds
5. Closes browser, informed about conditions

### Edge Case Journeys

**Empty State**: New user visits dashboard → sees prompt to add first city

**API Failure**: Weather service is down → shows cached data with "Last updated" timestamp

**Mobile View**: User opens on phone → responsive design adapts to smaller screen

## Core Features

### Feature 1: Current Weather Display
- Shows current temperature, conditions, humidity, wind speed
- Visual weather icons (sunny, cloudy, rainy, etc.)
- Real-time data from weather API
- Updates automatically on page load
- Clean card-based layout for each city

### Feature 2: Multi-City Dashboard
- Display multiple cities simultaneously
- Grid layout for easy scanning
- Each city shows as a distinct card
- Cities persist across sessions
- Responsive design for various screen sizes

### Feature 3: 5-Day Forecast
- Show forecast for each saved city
- Displays high/low temperatures
- Weather condition icons for each day
- Day of week labels
- Expandable/collapsible view per city

### Feature 4: City Management
- Search bar to find cities by name
- Add city to dashboard with one click
- Remove city from dashboard easily
- Saved cities persist in browser localStorage
- Support for international cities

### Feature 5: Visual Design
- Clean, modern interface
- Color-coded temperature ranges (blue for cold, red for hot)
- Smooth animations and transitions
- High-contrast, readable fonts
- Weather-appropriate color themes

### Feature 6: Data Integration
- Connects to free weather API (OpenWeather, etc.)
- Handles API errors gracefully
- Shows loading states during data fetch
- Caches recent data for offline viewing
- Rate limiting consideration

### Feature 7: Responsive Experience
- Works on desktop browsers (Chrome, Firefox, Edge)
- Adapts to tablet and mobile screens
- Touch-friendly interactions
- Fast loading (< 2 seconds)
- No page reloads needed

## Success Metrics

### Usage Metrics
- Users visit dashboard at least once daily
- Users have 2-5 cities in their watchlist on average
- Dashboard becomes default weather checking tool

### Satisfaction Metrics
- Users prefer dashboard over default weather apps
- Users save as browser bookmark or homepage
- Users recommend to friends/family
- Users report saving time checking weather

### Performance Metrics
- Dashboard loads in < 2 seconds
- Weather data updates successfully 99% of the time
- Interface remains responsive under poor network conditions
- Works across all major browsers without issues

## User Experience Principles

### Glanceable Information
All key weather data visible without scrolling or clicking.

### Visual Clarity
Icons, colors, and typography make information instantly understandable.

### Fast Loading
Dashboard appears quickly, with progressive enhancement.

### Minimal Interaction
Most information visible immediately; add/remove cities with minimal clicks.

### Consistent Design
All weather cards follow the same layout pattern for easy scanning.

## Constraints

### Technical Constraints
- Must use free weather API (OpenWeather or similar)
- Works in modern browsers (Chrome, Firefox, Edge)
- No server backend required (client-side only)
- API calls must respect rate limiting

### User Constraints
- Users must have internet connection
- Users must have modern browser (ES6 support)
- Users must allow localStorage

### Scope Constraints
- Single-user dashboard (no multi-user accounts)
- Web-only (no native mobile app)
- English language only (v1)

## Assumptions

- Users have reliable internet connection
- Users are comfortable with web browsers
- Users want personal weather dashboard, not sharing features
- Users prefer simplicity over feature overload
- Users check weather from desktop or mobile browser

## Out of Scope

### Explicitly NOT Building
- ❌ Weather alerts or push notifications
- ❌ Historical weather data or charts
- ❌ Detailed hourly forecasts (beyond 5-day)
- ❌ Weather maps or radar
- ❌ Social features or sharing
- ❌ User accounts or cloud sync
- ❌ Weather-based recommendations
- ❌ Air quality index
- ❌ Severe weather warnings
- ❌ Precipitation probability graphs
- ❌ UV index or pollen count

### Future Considerations (Not v1)
- Customizable dashboard layouts
- Temperature unit conversion (°C/°F)
- Weather comparison charts
- Export weather data
- Dark/light theme toggle
- Favorite location pinning

## Version 1 Definition

The minimum viable product includes:
- Display current weather for multiple cities
- Show 5-day forecast
- Add and remove cities
- Persistent city list
- Responsive web design

**Version 1 is complete when**: Users can check weather for all their locations in under 10 seconds, and prefer this dashboard over their previous weather solution.

---

**Specification Version**: 1.0  
**Last Updated**: February 11, 2026  
**Status**: Approved for Planning Phase
:::

---

## Validating Your Specification

Before moving to the Plan phase, validate your spec using this checklist:

### The Specification Validation Checklist

::: tip Checkpoint
Don't proceed until you can check ALL of these boxes:
:::

- [ ] **Problem is clear**: A stranger could understand what problem we're solving
- [ ] **Users are specific**: We can name real people who match our user personas
- [ ] **Journeys are complete**: Major use cases and edge cases are covered
- [ ] **Features are user-focused**: Features describe what users can do, not how it's built
- [ ] **Success is measurable**: We can objectively determine if we succeeded
- [ ] **Scope is bounded**: Clear "in scope" and "out of scope" sections
- [ ] **No technical decisions**: No mention of specific technologies, frameworks, or patterns
- [ ] **Assumptions documented**: What we're taking as given is explicit
- [ ] **Constraints listed**: Limitations and boundaries are identified
- [ ] **You're excited**: You actually want to build this!

### Getting Feedback (Optional but Recommended)

If you have time, show your specification to someone:

- **A potential user**: Do they recognize the problem? Would they use this?
- **A fellow developer**: Is anything confusing or missing?
- **Your rubber duck**: Read it out loud—does it make sense?

---

## Understanding Where Your Specification Is Saved

When you use `/speckit.specify`, Spec Kit automatically handles file organization and version control for you.

### Automatic File Structure

Your specification is saved in:

```
specs/
└── 001-your-feature-name/
    └── spec.md
```

**What Spec Kit does automatically:**
- ✅ Creates a new Git branch (e.g., `001-your-feature-name`)
- ✅ Creates the `specs` directory structure
- ✅ Saves your specification as `spec.md`
- ✅ Numbers your features sequentially (`001`, `002`, `003`, etc.)

### Viewing Your Specification

To see or edit your specification:

```powershell
# Navigate to your spec
code specs/001-your-feature-name/spec.md

# Or check your current branch
git branch
# You should see: * 001-your-feature-name
```

### Version Control

Your specification is automatically tracked in Git. As you refine it:

```powershell
# Check what changed
git status

# Commit your refinements
git add specs/001-your-feature-name/spec.md
git commit -m "Refine user journeys and clarify edge cases"
```

::: tip Version Control for Specs
Specifications are living documents! Git tracks the evolution of your thinking and decisions over time. Every clarification and refinement becomes part of your project's history.
:::

---

## Common Questions

### "How detailed should my spec be?"

**Detailed enough** that someone could build something similar without asking clarifying questions. But not so detailed that you're writing a technical manual.

**Good rule of thumb**: If you find yourself talking about specific code patterns or libraries, you've gone too far.

### "What if I don't know all the requirements yet?"

That's OK! Start with what you know. Mark uncertain areas with:

```markdown
## Open Questions
- [ ] Should we support task attachments?
- [ ] Do we need recurring tasks?
- [ ] What's the maximum number of tasks we expect?
```

You can refine the spec as you learn more.

### "Can I change the spec later?"

Absolutely! Specifications are **living documents**. As you build and learn, update the spec. Just:
1. Update the spec file
2. Commit the change with a clear message
3. Regenerate affected plans/tasks if needed

### "My AI generated a huge spec. Is that OK?"

Length isn't the goal—**clarity** is. A 2-page spec that's crystal clear is better than a 10-page spec that's vague. If your spec is very long, consider:
- Are we trying to do too much?
- Can we break this into phases?
- Is information repeated?

---

## What You've Accomplished

Congratulations! You've completed the Specify phase. You now have:

- ✅ A clear specification document (`specs/001-your-feature/spec.md`)
- ✅ A dedicated feature branch for your work
- ✅ Defined target users and their needs
- ✅ Documented user journeys and experiences
- ✅ Listed core features with user-focused descriptions
- ✅ Established success metrics
- ✅ Set clear scope boundaries
- ✅ A technology-agnostic requirements document
- ✅ Experience using `/speckit.specify` and `/speckit.clarify`

### The Foundation is Set

Your specification is now the **source of truth** for your feature. Everything that follows—the technical plan (next!), task breakdown, and implementation—will reference this document.

::: info Next Up: Getting Technical
In Chapter 4, we'll use `/speckit.plan` to translate this user-focused specification into a **technical implementation plan**. That's where we'll make decisions about technologies, architecture, and implementation strategy.
:::

---

## Before You Continue

Take a moment to:

1. **Review your specification** at `specs/001-your-feature/spec.md`
2. **Check your feature branch** with `git branch` (you should see `* 001-your-feature`)
3. **Feel proud**—you've created a solid foundation!
4. **Take a 5-minute break**

When you return, we'll use `/speckit.plan` to add technical details.

::: tip Ready for Technical Planning?
Continue to [Chapter 4: The Plan Phase](./04-plan-phase.md) →
:::

---

## Quick Wins to Try

If you want to practice more before moving on:

1. **Try another project**: Use `/speckit.specify` for a different idea in a new project
2. **Refine your spec**: Use `/speckit.clarify` to explore edge cases more thoroughly
3. **Get feedback**: Share `specs/001-your-feature/spec.md` with a colleague
4. **Compare approaches**: Try writing the same spec with different levels of detail in your prompts

::: tip Practice Makes Perfect
The more you practice writing detailed prompts for `/speckit.specify`, the better your specifications will become. Each project teaches you what level of detail works best.
:::

---

**Next**: [Chapter 4: The Plan Phase →](./04-plan-phase.md)

**Previous**: [← Chapter 2: Setup & Prerequisites](./02-setup-prerequisites.md)
