---
title: The Tasks Phase
description: Break down your technical plan into small, implementable tasks with clear acceptance criteria using the /speckit.tasks command.
---

# Chapter 5: The Tasks Phase

You have a specification (the **WHAT**) and a technical plan (the **HOW**). Now it's time to break everything down into bite-sized, implementable tasks. This is where the rubber meets the road!

## What You'll Learn

By the end of this chapter, you will:
- ✅ Understand how to break plans into actionable tasks
- ✅ Use the `/speckit.tasks` command to generate task breakdowns
- ✅ Create tasks with clear acceptance criteria
- ✅ Organize tasks with proper dependencies
- ✅ Prepare for efficient implementation

---

## Understanding the Tasks Phase

### What is a Task?

A **task** is a small, focused piece of work that:
- Can be completed independently (or with minimal dependencies)
- Has clear, objective acceptance criteria
- Can be tested and validated
- Takes hours, not days
- Delivers a specific, measurable outcome

Think of tasks as the **atoms** of your project—the smallest units of work that make sense on their own.

### Why Task Breakdown Matters

::: tip The Power of Small Tasks
Breaking work into small tasks isn't just organization—it's the secret to working effectively with AI agents.

Small tasks = Clear context = Better AI output
:::

**Benefits:**
- 🎯 **Focus**: One thing at a time
- ✅ **Validation**: Easy to verify completion
- 🤖 **AI-friendly**: AI agents excel with focused, discrete work
- 📊 **Progress tracking**: See how far you've come
- 🔄 **Parallelization**: Independent tasks can run concurrently
- 🐛 **Easier debugging**: Isolate problems quickly

---

## Anatomy of a Good Task

Let's understand what makes a task effective.

### The INVEST Criteria

Good tasks are:

- **I**ndependent: Can be completed without waiting for others
- **N**egotiable: Details can be adjusted if needed
- **V**aluable: Delivers something meaningful
- **E**stimable: You can estimate effort required
- **S**mall: Completable in hours, not days
- **T**estable: Has objective success criteria

### Task Template Structure

```markdown
## TASK-001: [Short, Descriptive Title]

**Description**: Brief explanation of what needs to be built

**Dependencies**: 
- TASK-000 (or "None")

**Acceptance Criteria**:
- [ ] Criterion 1 (testable condition)
- [ ] Criterion 2 (testable condition)
- [ ] Criterion 3 (testable condition)

**Component**: Which part of the system (CLI, Core Logic, Storage, etc.)

**Complexity**: Small / Medium / Large

**Estimated Time**: 30min / 1h / 2h / 4h

**Related Specification**: Section reference
```

---

## Good Task vs. Bad Task

Let's see the difference:

### ❌ Bad Task Example

```markdown
## TASK-001: Build the Weather Dashboard

**Description**: Implement the entire weather dashboard application

**Acceptance Criteria**:
- [ ] It works
- [ ] Shows weather data

**Complexity**: Large
```

**Problems:**
- Way too large
- No specific scope
- Vague acceptance criteria
- Cannot validate objectively
- Unclear what "done" means

### ✅ Good Task Example

```markdown
## TASK-002: Create Weather API Service

**Description**: Implement weather API service module to fetch current 
weather data from OpenWeather API.

**Dependencies**: TASK-001 (Project setup)

**Acceptance Criteria**:
- [ ] Weather service created in src/services/weatherApi.js
- [ ] Function fetchWeatherByCity(cityName) implemented
- [ ] API key loaded from environment variables
- [ ] Returns transformed weather data object
- [ ] Handles 404 errors (city not found)
- [ ] Handles network errors gracefully
- [ ] JSDoc comments document the API

**Component**: Services (src/services/weatherApi.js)

**Complexity**: Medium

**Estimated Time**: 1 hour

**Related Specification**: Section 3.2 (Data Model)
```

**Why it's good:**
- Specific scope (just the data model)
- Clear, testable acceptance criteria
- Reasonable size (1 hour)
- No dependencies
- Objective success criteria

---

## Using the `/tasks` Command

Let's generate your task list!

### Step 1: Ensure Prerequisites

Make sure you have:
- ✅ Completed specification (`specs/project-spec.md`)
- ✅ Completed technical plan (`specs/technical-plan.md`)
- ✅ Both files saved and committed

### Step 2: Craft Your Tasks Prompt

The `/tasks` command reads your spec and plan to generate tasks. Your prompt should guide the granularity and focus.

#### Basic Tasks Prompt

```
/speckit.tasks

Based on the specification (specs/project-spec.md) and technical 
plan (specs/technical-plan.md), create a detailed task breakdown.

TASK GUIDELINES:
- Each task should be completable in 1-3 hours
- Include clear acceptance criteria for each task
- Identify dependencies between tasks
- Start with foundational components (data models, core logic)
- Then build interface layer (CLI commands)
- Finally,  add tests and documentation

PRIORITY: Focus on the MINIMUM VIABLE PRODUCT as defined in the spec.
Leave nice-to-have features for future versions.
```

### Example: Weather Dashboard Tasks Prompt

```
/speckit.tasks

Based on the specification and technical plan, create a detailed 
task breakdown for implementing the Weather Dashboard web application.

TASK GUIDELINES:
- Each task should take 1-3 hours maximum
- Start with API integration, then UI components, then state management
- Include clear, testable acceptance criteria
- Identify blockers and dependencies
- Separate implementation tasks from styling/polish tasks

FOCUS ON MVP:
Based on the spec, the MVP includes:
- Display current weather for multiple cities
- Show 5-day forecast
- Add and remove cities from watchlist
- Persistent city list (localStorage)
- Responsive design

EXPLICITLY EXCLUDE FROM v1:
- Weather alerts or notifications
- Historical weather data
- Detailed hourly forecasts
- Dark/light theme toggle

Please organize tasks into logical phases:
1. Foundation (API setup, data models)
2. Business Logic (task operations)
3. CLI Interface (commands, formatting)
4. Testing & Polish (tests, docs, error handling)
```

::: tip Task Granularity
If the AI generates tasks that are too large, ask it to break them down further:

"Task 5 seems too large. Can you break it into 3 smaller sub-tasks?"
:::

### Step 3: Generate Tasks

1. Open Copilot Chat
2. Paste your tasks prompt
3. Press Enter
4. Wait for generation (30-60 seconds)

---

## Reviewing Your Task List

Once generated, carefully review the entire task list.

### The Task Review Checklist

#### Overall Structure
- [ ] Are there 15-30 tasks? (Too few = too large; too many = too granular)
- [ ] Are tasks organized logically?
- [ ] Is there a clear implementation path?
- [ ] Do early tasks enable later tasks?

#### Individual Task Quality
For each task, check:

- [ ] **Specific**: Clear what needs to be built
- [ ] **Scoped**: Not too large or too small
- [ ] **Testable**: Has objective acceptance criteria
- [ ] **Complete**: All details provided
- [ ] **Dependencies identified**: Blockers are clear

#### Coverage
- [ ] Do tasks cover all spec requirements?
- [ ] Are security requirements included?
- [ ] Is testing addressed?
- [ ] Is documentation included?
- [ ] Are integration points handled?

---

## Example: Task List for Weather Dashboard

Let's see what a good task breakdown looks like.

::: details Weather Dashboard - Complete Task List (Click to expand)

# Weather Dashboard - Implementation Tasks

## Phase 1: Foundation (Tasks 1-6)

### TASK-001: Project Structure Setup

**Description**: Initialize Vite project with Vanilla JavaScript, set up directory structure, configure development tools (ESLint, Prettier).

**Dependencies**: None

**Acceptance Criteria**:
- [ ] Vite project initialized with vanilla template
- [ ] Directory structure created (src/services, src/components, src/utils)
- [ ] package.json includes all dependencies
- [ ] ESLint and Prettier configurations added
- [ ] Environment variable support configured (.env.example)
- [ ] .gitignore includes node_modules and .env
- [ ] README.md created with project overview and setup instructions

**Component**: Project Setup  
**Complexity**: Small  
**Estimated Time**: 1 hour

---

### TASK-002: Create Weather API Service

**Description**: Implement weather API service module to fetch data from OpenWeather API.

**Dependencies**: TASK-001

**Acceptance Criteria**:
- [ ] Weather service created in src/services/weatherApi.js
- [ ] Function to fetch current weather by city name
- [ ] Function to fetch 5-day forecast
- [ ] API key management via environment variables
- [ ] Response data transformation to app format
- [ ] Error handling for network failures and invalid responses
- [ ] JSDoc comments documenting API

**Component**: Services (src/services/weatherApi.js)  
**Complexity**: Medium  
**Estimated Time**: 2 hours

---

### TASK-003: Create Local Storage Manager

**Description**: Implement utilities for managing localStorage persistence.

**Dependencies**: TASK-001

**Acceptance Criteria**:
- [ ] Storage manager created in src/utils/storage.js
- [ ] Functions to save/load favorite cities array
- [ ] Functions to save/load last searched city
- [ ] Functions to save/load temperature unit preference (C/F)
- [ ] Proper JSON serialization/deserialization
- [ ] Error handling for quota exceeded
- [ ] JSDoc comments present

**Component**: Utilities (src/utils/storage.js)  
**Complexity**: Small  
**Estimated Time**: 1 hour

---

### TASK-004: Create Weather Display Component

**Description**: Create reusable component to display current weather data.

**Dependencies**: TASK-002, TASK-003

**Acceptance Criteria**:
- [ ] Weather display component in src/components/weatherDisplay.js
- [ ] Renders temperature, description, humidity, wind speed
- [ ] Displays location name and country
- [ ] Shows weather icon based on condition code
- [ ] Temperature displays in user-preferred unit (C/F)
- [ ] Includes "feels like" temperature
- [ ] Uses BEM naming convention for CSS classes
- [ ] Handles missing data gracefully (shows placeholders)
- [ ] Component is stateless and reusable
- [ ] JSDoc comments document API

**Component**: Components (src/components/weatherDisplay.js)  
**Complexity**: Medium  
**Estimated Time**: 2 hours

---

### TASK-005: Create Forecast Display Component

**Description**: Create component to display 5-day weather forecast.

**Dependencies**: TASK-002

**Acceptance Criteria**:
- [ ] Forecast component in src/components/forecastDisplay.js
- [ ] Displays 5-day forecast
- [ ] Shows date, high/low temps, weather icon for each day
- [ ] Temperature displays in user-preferred unit (C/F)
- [ ] Uses BEM naming convention for CSS classes
- [ ] Component is stateless and reusable
- [ ] JSDoc comments present

**Component**: Components (src/components/forecastDisplay.js)  
**Complexity**: Medium  
**Estimated Time**: 1.5 hours

---

### TASK-006: Create Favorites Manager Component

**Description**: Implement UI component for managing favorite cities.

**Dependencies**: TASK-003

**Acceptance Criteria**:
- [ ] Favorites component in src/components/favoritesManager.js
- [ ] Displays list of favorite cities
- [ ] Add button to save current city to favorites
- [ ] Remove button for each favorite city
- [ ] Click city to load its weather
- [ ] Prevents duplicate cities
- [ ] Maximum 10 favorites
- [ ] Uses localStorage via storage utility
- [ ] BEM naming convention for CSS
- [ ] JSDoc comments present

**Component**: Components (src/components/favoritesManager.js)  
**Complexity**: Medium  
**Estimated Time**: 2 hours

---

## Phase 2: Integration & UI (Tasks 7-12)

### TASK-007: Create Search Functionality

**Description**: Implement search bar component for city weather lookup.

**Dependencies**: TASK-002

**Acceptance Criteria**:
- [ ] Search component in src/components/searchBar.js
- [ ] Input field for city name
- [ ] Search button triggers weather fetch
- [ ] Enter key also triggers search
- [ ] Shows loading indicator during fetch
- [ ] Displays error message for invalid city
- [ ] Clears error on new search
- [ ] Saves last search to localStorage
- [ ] JSDoc comments present

**Component**: Components (src/components/searchBar.js)  
**Complexity**: Medium  
**Estimated Time**: 1.5 hours

---

### TASK-008: Create Main App Controller

**Description**: Implement main application controller coordinating all components.

**Dependencies**: TASK-002, TASK-003, TASK-004, TASK-005, TASK-006, TASK-007

**Acceptance Criteria**:
- [ ] Main controller in src/main.js
- [ ] Initializes all components on page load
- [ ] Loads user preferences from localStorage
- [ ] Loads last searched city on startup
- [ ] Coordinates data flow between components
- [ ] Handles global error states
- [ ] Sets up event listeners
- [ ] Manages application state
- [ ] JSDoc comments present

**Component**: Main Application (src/main.js)  
**Complexity**: Medium  
**Estimated Time**: 1.5 hours

---

### TASK-009: Implement Temperature Unit Toggle

**Description**: Add UI control to switch between Celsius and Fahrenheit.

**Dependencies**: TASK-003, TASK-004, TASK-005

**Acceptance Criteria**:
- [ ] Toggle button/switch in UI
- [ ] Click toggles between C and F
- [ ] Updates all displayed temperatures
- [ ] Saves preference to localStorage
- [ ] Loads preference on startup
- [ ] Smooth transition (no flicker)
- [ ] JSDoc comments present

**Component**: Components (src/components/unitToggle.js)  
**Complexity**: Small  
**Estimated Time**: 1 hour

---

### TASK-010: Implement Error Handling UI

**Description**: Create consistent error display and handling across the app.

**Dependencies**: TASK-002, TASK-007

**Acceptance Criteria**:
- [ ] Error display component in src/components/errorDisplay.js
- [ ] Shows user-friendly error messages
- [ ] Different styles for warning vs error
- [ ] Auto-dismiss after timeout (configurable)
- [ ] Manual dismiss button
- [ ] Handles API errors gracefully
- [ ] Handles network errors gracefully
- [ ] JSDoc comments present

**Component**: Components (src/components/errorDisplay.js)  
**Complexity**: Small  
**Estimated Time**: 1 hour

---

### TASK-011: Implement Loading States

**Description**: Add loading indicators for asynchronous operations.

**Dependencies**: TASK-002, TASK-007

**Acceptance Criteria**:
- [ ] Loading indicator component in src/components/loadingIndicator.js
- [ ] Displays during API calls
- [ ] Disables search during loading
- [ ] Spinner or skeleton screen design
- [ ] Accessible (ARIA labels)
- [ ] Smooth transitions
- [ ] JSDoc comments present

**Component**: Components (src/components/loadingIndicator.js)  
**Complexity**: Small  
**Estimated Time**: 1 hour

---

## Phase 3: Polish & Responsive Design (Tasks 12-15)

### TASK-012: Implement Base Styles

**Description**: Create base CSS with variables, reset, and typography.

**Dependencies**: TASK-001

**Acceptance Criteria**:
- [ ] Base styles in src/styles/base.css
- [ ] CSS variables for colors, spacing, fonts
- [ ] CSS reset/normalize
- [ ] Typography styles (headings, body text)
- [ ] Consistent spacing system
- [ ] Accessible color contrast (WCAG AA)
- [ ] Dark/light theme support (optional)

**Component**: Styles (src/styles/base.css)  
**Complexity**: Small  
**Estimated Time**: 1 hour

---

### TASK-013: Implement Component Styles

**Description**: Style all weather dashboard components.

**Dependencies**: TASK-004, TASK-005, TASK-006, TASK-007, TASK-012

**Acceptance Criteria**:
- [ ] Styles for weather display component
- [ ] Styles for forecast display component
- [ ] Styles for favorites manager
- [ ] Styles for search bar
- [ ] Consistent spacing and layout
- [ ] Weather icons properly sized
- [ ] Card-based design for weather displays
- [ ] Hover states for interactive elements

**Component**: Styles (src/styles/components.css)  
**Complexity**: Medium  
**Estimated Time**: 2 hours

---

### TASK-014: Implement Responsive Layout

**Description**: Make dashboard responsive for mobile, tablet, and desktop.

**Dependencies**: TASK-012, TASK-013

**Acceptance Criteria**:
- [ ] Mobile-first approach
- [ ] Breakpoints for tablet (768px) and desktop (1024px)
- [ ] Stacked layout on mobile
- [ ] Grid layout on desktop
- [ ] Touch-friendly buttons (min 44x44px)
- [ ] Readable text sizes on all devices
- [ ] Tested on Chrome, Firefox, Safari
- [ ] No horizontal scroll on mobile

**Component**: Styles (src/styles/layout.css)  
**Complexity**: Medium  
**Estimated Time**: 2 hours

---

### TASK-015: Add Weather Icons

**Description**: Integrate weather icon set and mapping logic.

**Dependencies**: TASK-004, TASK-005

**Acceptance Criteria**:
- [ ] Weather icon assets in public/icons/
- [ ] Mapping from OpenWeather condition codes to icons
- [ ] Helper function to get icon path by code
- [ ] Icons display correctly in weather components
- [ ] Fallback icon for unknown conditions
- [ ] Icons are accessible (alt text)
- [ ] SVG or optimized PNG format

**Component**: Assets & Utilities (public/icons/, src/utils/iconMapper.js)  
**Complexity**: Small  
**Estimated Time**: 1 hour

---

## Phase 4: Testing & Documentation (Tasks 16-18)

### TASK-016: Add Manual Testing Checklist

**Description**: Create comprehensive manual testing checklist.

**Dependencies**: TASK-008
**Acceptance Criteria**:
- [ ] Test document in TESTING.md
- [ ] Checklist for all user flows
- [ ] Test search functionality
- [ ] Test favorites management
- [ ] Test temperature unit switching
- [ ] Test error handling
- [ ] Test responsive design on multiple devices
- [ ] Test localStorage persistence
- [ ] Test with invalid API key
- [ ] Cross-browser testing steps

**Component**: Documentation (TESTING.md)  
**Complexity**: Small  
**Estimated Time**: 1 hour

---

### TASK-017: Update README with Usage Guide

**Description**: Complete README with setup, usage, and API key instructions.

**Dependencies**: TASK-008

**Acceptance Criteria**:
- [ ] Project description and features
- [ ] Prerequisites listed
- [ ] Installation steps
- [ ] How to get OpenWeather API key
- [ ] How to configure .env file
- [ ] How to run dev server
- [ ] How to build for production
- [ ] Screenshots of the app
- [ ] Troubleshooting section

**Component**: Documentation (README.md)  
**Complexity**: Small  
**Estimated Time**: 1 hour

---

### TASK-018: Add Code Documentation

**Description**: Ensure all modules have comprehensive JSDoc comments.

**Dependencies**: All previous tasks

**Acceptance Criteria**:
- [ ] JSDoc comments on all public functions
- [ ] Parameter types and descriptions
- [ ] Return value documentation
- [ ] Usage examples where helpful
- [ ] Module-level documentation
- [ ] Complex logic explained with inline comments
- [ ] Generate HTML docs with JSDoc (optional)

**Component**: All source files  
**Complexity**: Medium  
**Estimated Time**: 2 hours

---

:::

**Total Tasks**: 18  
**Estimated Time**: 25-30 hours  
**Phases**: 4 distinct phases with clear dependencies

---

## Organizing Your Tasks

**Acceptance Criteria**:
- [ ] README includes: installation, quick start, all commands
- [ ] Each command has usage examples
- [ ] Troubleshooting section
- [ ] Contributing guidelines
- [ ] License file (MIT)
- [ ] All public functions have docstrings
- [ ] Architecture overview in docs/

**Component**: Documentation  
**Complexity**: Medium  
**Estimated Time**: 2 hours

---

## Organizing Your Tasks

Once you have your task list, organize it for efficient execution.

## Summary

**Total Tasks**: 23  
**Estimated Total Time**: 30-35 hours  
**MVP Complete After**: Task 18  
**Polish Complete After**: Task 23  

**Critical Path**: TASK-001 → TASK-004 → TASK-006 → TASK-008 → TASK-013 → TASK-014

:::

---

## Organizing Your Tasks

Once you have your task list, organize it for efficient execution.

### Task Dependencies

Map out dependencies visually:

```
TASK-001 (Project Setup)
    ├─→ TASK-002 (Weather API Service)
    ├─→ TASK-003 (Storage Manager)
    │
    ├─→ TASK-004 (Weather Display)
    │       └─→ TASK-008 (Main Controller)
    │
    ├─→ TASK-005 (Forecast Display)
    │       └─→ TASK-008 (Main Controller)
    │
    ├─→ TASK-006 (Favorites Manager)
    │       └─→ TASK-008 (Main Controller)
    │
    └─→ TASK-007 (Search Component)
            └─→ TASK-008 (Main Controller)
                    ├─→ TASK-009 (Unit Toggle)
                    ├─→ TASK-010 (Error Handling)
                    ├─→ TASK-011 (Loading States)
                    └─→ TASK-012-015 (Styles & Polish)
```

### Implementation Order Strategies

**1. Dependency-First (Recommended)**
- Complete foundational tasks first
- Build from bottom up
- Ensures prerequisites are ready

**2. Value-First**
- Complete user-visible features early
- Build vertical slices
- See progress quickly

**3. Risk-First**
- Tackle uncertain tasks early
- Validate assumptions
- Reduce project risk

For your workshop, use **Dependency-First** for predictable progress.

---

## Refining Your Task List

Found issues? Let's improve them.

### Common Refinements

**Task Too Large:**
```
TASK-014 seems too large (2.5 hours). Can you break it into:
- TASK-014A: Basic list command
- TASK-014B: Add filtering flags
- TASK-014C: Format output as table
```

**Missing Acceptance Criteria:**
```
TASK-008 needs more specific acceptance criteria. Add:
- Input validation requirements
- Error handling scenarios
- Performance requirements
```

**Unclear Dependencies:**
```
TASK-015 depends on TASK-010, but it also needs TASK-012 (CLI setup).
Please update dependencies.
```

**Missing Tests:**
```
I don't see a task for testing the storage layer. Can you add:
TASK-020: Add unit tests for JSONRepository
```

---

## Saving Your Task List

```powershell
# Save the tasks
code specs/tasks.md

# Commit to Git
git add specs/tasks.md
git commit -m "Add task breakdown"
```

---

## Validation Checklist

Before implementation:

::: tip Checkpoint
Validate your task list:
:::

- [ ] **Complete coverage**: All plan sections have corresponding tasks
- [ ] **Right size**: Tasks are 1-3 hours each
- [ ] **Clear criteria**: Every task has objective acceptance criteria
- [ ] **Dependencies identified**: Blockers are explicit
- [ ] **Logical order**: Earlier tasks enable later tasks
- [ ] **Testable**: Tasks include how to verify completion
- [ ] **No gaps**: No missing pieces between spec and plan
- [ ] **MVP scoped**: Know which tasks comprise the minimum viable product
- [ ] **Saved and committed**: Task list is in Git

---

## What You've Accomplished

Congratulations! You've completed the Tasks phase. You now have:

- ✅ A complete task breakdown with 15-30 focused tasks
- ✅ Clear acceptance criteria for each task
- ✅ Identified dependencies and order
- ✅ An implementation roadmap
- ✅ The foundation for execution

### Ready to Build

You now have everything needed to start implementation:
- **Specification** tells you WHAT and WHY
- **Technical Plan** tells you HOW
- **Task List** tells you the specific STEPS

All that's left is to execute!

::: info Next Up: Implementation
In Chapter 6, we'll start implementing tasks with your AI coding agent. This is where your project comes to life!
:::

---

## Before You Continue

1. **Review your complete task list**
2. **Identify the first 3 tasks** you'll implement
3. **Save and commit everything**
4. **Take a 5-minute break** and celebrate—you've done the hard work of planning!

When ready, let's start building!

::: tip Ready to Code?
Continue to [Chapter 6: The Implementation Phase](./06-implement-phase.md) →
:::

---

**Next**: [Chapter 6: The Implementation Phase →](./06-implement-phase.md)

**Previous**: [← Chapter 4: The Plan Phase](./04-plan-phase.md)
