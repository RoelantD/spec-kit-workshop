---
title: The Implementation Phase
description: Implement tasks with AI assistance, review generated code, validate against acceptance criteria, and maintain quality throughout.
---

# Chapter 6: The Implementation Phase

This is it—the moment where your carefully crafted specifications, plans, and tasks transform into working code! In this chapter, you'll learn how to effectively implement tasks with your AI coding agent, review generated code, and validate your work.

## What You'll Learn

By the end of this chapter, you will:
- ✅ Execute tasks systematically with AI assistance
- ✅ Provide effective prompts for implementation
- ✅ Review and validate AI-generated code
- ✅ Test implementations against acceptance criteria
- ✅ Iterate and refine until tasks are complete

---

## Understanding Implementation with AI

### Your Role vs. AI's Role

Let's be clear about the division of labor:

| You (Human) | AI Agent |
|-------------|----------|
| **Strategic decisions** | **Tactical execution** |
| Choose which task to implement | Write the actual code |
| Review code quality | Generate tests |
| Validate acceptance criteria | Implement patterns |
| Spot edge cases | Handle boilerplate |
| Make architectural calls | Follow your guidance |
| Ensure correctness | Suggest implementations |

::: tip Remember
You're the **architect and reviewer**.  
AI is your **implementation partner**.
:::

---

## The Implementation Workflow

Here's the process you'll follow for each task:

### Step 1: Select Next Task

Choose from your task list, respecting dependencies:

```markdown
✓ TASK-001: Project Setup (DONE)
✓ TASK-002: Weather API Service (DONE)
→ TASK-003: Local Storage Manager (NEXT - no blockers)
  TASK-004: Weather Display Component (blocked by TASK-002, TASK-003)
```

### Step 2: Provide Context to AI

Open Copilot Chat and give clear instructions:

```
Implement TASK-003: Create Local Storage Manager

Requirements from tasks.md:
- Storage manager created in src/utils/storage.js
- Functions to save/load favorite cities
- Functions to save/load last searched city
- Functions to save/load temperature unit preference
- Proper JSON serialization and error handling

Please implement this following the technical plan's utility module approach.
```

### Step 3: AI Generates Code

Wait while AI creates the implementation. Review what it produces.

### Step 4: Review the Code

Check:
- Does it meet acceptance criteria?
- Is the code quality good?
- Are there edge cases handled?
- Does it follow project standards?

### Step 5: Run Tests

Execute tests to verify functionality:

```powershell
# Run dev server and test manually
npm run dev

# Or run unit tests if configured
npm test
```

### Step 6: Validate Acceptance Criteria

Go through each criterion:

- [ ] Storage manager created in src/utils/storage.js ✓
- [ ] Functions to save/load favorite cities ✓
- [ ] Functions to save/load last searched city ✓
- [ ] Functions to save/load temperature unit preference ✓
- [ ] Proper error handling implemented ✓

### Step 7: Iterate if Needed

If something's wrong:

```
The tests are failing because the enum doesn't have a __str__ method.
Please add that so we can print human-readable status values.
```

### Stepsrc/utils/storage.js
git commit -m "feat: implement TASK-003 - Local Storage Manager
Once acceptance criteria are met:

```powershell
git add core/task.py tests/test_core/test_task.py
git commit -m "feat: implement TASK-003 - Task Status Enum"
```

---

## Effective Implementation Prompts

The quality of your implementation depends on your prompts. Let's craft great ones!

### Prompt Template

```
Implement TASK-XXX: [Task Title]

REQUIREMENTS:
[Copy acceptance criteria from task]

CONTEXT:
- Follow the architecture in specs/technical-plan.md
- This is part of [Component Name]
- It will be used by [Other Components]

CONSTRAINTS:
[Any specific requirements: style, patterns, libraries]

INCLUDE:
- Implementation code
- Unit tests (if applicable)
- JSDoc comments
- Error handling
```

### Example: Weather Display Component

```
Implement TASK-004: Create Weather Display Component

REQUIREMENTS:
- Component renders current weather with temperature, description, humidity, wind speed
- Accepts weather data object as parameter
- Displays location name and country
- Shows appropriate weather icon based on condition code
- Temperature displays in user's preferred unit (C/F)
- Includes "feels like" temperature
- All elements have appropriate CSS classes for styling
- Component is reusable and stateless

CONTEXT:
- This is the main UI component for displaying weather data
- It will be used by the app's main controller
- Data comes from the Weather API Service (TASK-002)
- Follows the technical plan in specs/technical-plan.md

CONSTRAINTS:
- Use vanilla JavaScript (no frameworks)
- Create DOM elements programmatically
- Use ES6 modules
- Follow BEM naming convention for CSS classes
- Handle missing data gracefully

INCLUDE:
- Complete component in src/components/weatherDisplay.js
- Proper error handling for missing data
- JSDoc comments explaining the API
```

::: tip Pro Tip
Reference your spec and plan files explicitly. This gives AI the full context it needs to make aligned decisions.
:::

---

## Reviewing AI-Generated Code

AI produces code fast—but you must review carefully. Here's what to look for:

### Code Quality Checklist

#### 1. Correctness
- [ ] Does it implement all acceptance criteria?
- [ ] Does it handle the happy path correctly?
- [ ] Are edge cases handled?
- [ ] Does it match the technical plan?

#### 2. Code Quality
- [ ] Is the code readable and well-structured?
- [ ] Are variable/function names clear?
- [ ] Is it appropriately commented?
- [ ] Does it follow project style (Prettier, ESLint)?

#### 3. Error Handling
- [ ] Are exceptions raised for invalid input?
- [ ] Are error messages helpful?
- [ ] Are all error paths tested?

#### 4. Testing
- [ ] Are tests comprehensive?
- [ ] Do tests cover edge cases?
- [ ] Are tests readable (good test names)?
- [ ] Do all tests pass?

#### 5. Performance
- [ ] Are there obvious inefficiencies?
- [ ] Does it meet performance requirements?
- [ ] Are expensive operations necessary?

#### 6. Security
- [ ] Is input validated?
- [ ] Are there injection vulnerabilities?
- [ ] Is sensitive data handled properly?

---

## Common AI Code Issues

Let's look at typical problems and how to fix them.

### Issue 1: Over-Engineering

**AI generates:**
```javascript
class WeatherDataTransformer {
    constructor() {
        this._transformers = new Map();
    }
    
    registerTransformer(type, transformer) {
        this._transformers.set(type, transformer);
    }
    
    transform(data, type) {
        const transformer = this._transformers.get(type);
        if (!transformer) {
            throw new Error(`Unknown transformer: ${type}`);
        }
        return transformer(data);
    }
}
```

**Your response:**
```
This is over-engineered for our use case. We only have one API response format.
Please simplify to a single function that transforms OpenWeather API responses.
```

### Issue 2: Missing Edge Cases

**AI generates:**
```javascript
export function saveFavoriteCity(city) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push(city);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
```

**Your response:**
```
This doesn't handle several edge cases:
- localStorage might be full (quota exceeded)
- City might already be in favorites (duplicates)
- City name should be validated (not empty)
Please add validation and error handling.
```

###Issue 3: Incomplete Tests

**AI generates:**
```javascript
describe('Weather API Service', () => {
    test('fetches weather data', async () => {
        const data = await fetchWeather('London');
        expect(data.city).toBe('London');
    });
});
```

**Your response:**
```
This test only covers the happy path. Please add tests for:
- Invalid city name (should handle 404 error)
- Network failure (should handle fetch errors)
- Missing API key (should throw appropriate error)
- Response data transformation is correct
```

### Issue 4: Hardcoded Values

**AI generates:**
```javascript
function getConfigPath() {
    return 'C:\\Users\\John\\AppData\\weather-dashboard\\config.json';
}
```

**Your response:**
```
This path is hardcoded and won't work cross-platform. For a web app, use:
- localStorage for client-side storage (not file system)
- Or use relative paths for any config files
- Avoid hardcoded user-specific paths
```

### Interpreting Test Results

#### ✅ All Pass
```
✓ Weather API service tests passed
✓ Storage manager tests passed  
✓ All 12 tests passing

Build completed successfully
```

**Action**: Move to next step!

#### ❌ Test Failures
```
✗ Storage manager test failed
Expected favorites to not contain duplicates
```

**Action**: Ask AI to fix:
```
The test is failing because saveFavoriteCity doesn't check for duplicates.
Please update the function to prevent adding duplicate cities.
```

#### ⚠️ Missing Coverage
```
✓ 8 tests passing
Warning: Missing error handling tests for API failures
```

**Action**: Add tests:
```
We need tests for error cases. Please add tests for:
- Network failure handling
- Invalid API key response
- Invalid city name (404) response
```

---

## Validating Acceptance Criteria

For each task, systematically check criteria.

### Example: TASK-004 Validation

```markdown
## TASK-004: Create Weather Display Component

**Acceptance Criteria**:
- [✓] Component renders current weather with all required fields
     ✓ Verified: Temperature, description, humidity, wind speed all display

- [✓] Displays location name and country
     ✓ Verified: City name and country code shown in header

- [✓] Shows appropriate weather icon
     ✓ Verified: Icon changes based on weather condition code

- [✓] Temperature displays in user's preferred unit
     ✓ Verified: Accepts 'C' or 'F' parameter
     ✓ Verified: Conversion logic is correct

- [✓] Includes "feels like" temperature
     ✓ Verified: Apparent temperature displayed

- [✓] All elements have CSS classes
     ✓ Verified: BEM naming convention followed

- [✓] Component handles missing data
     ✓ Verified: Shows placeholder for missing fields
     ✓ Verified: No errors when data is incomplete

- [✓] JSDoc comments present
     ✓ Verified: Function and parameter documentation complete

**Result**: ALL CRITERIA MET ✓
```

Only mark a task complete when **every criterion** is checked.

---

## Hands-On: Implement Your First Three Tasks

Let's put this into practice!

### Task 1: Project Setup (TASK-001)

This one you might do partially manually:

```powershell
# Create Vite project
npm create vite@latest weather-dashboard -- --template vanilla

# Navigate to project
cd weather-dashboard

# Install dependencies
npm install

# Create directory structure
mkdir -p src/{services,components,utils}
mkdir -p public/icons
```

Ask AI to help with configuration:

```
Help me configure the weather dashboard project:
- Add environment variable support for API keys
- Set up localStorage utilities
- Create a basic CSS structure with variables for theming
- Add error handling utilities

Include appropriate ESLint and Prettier configurations.
```

### Task 2 & 3: Core Modules (TASK-002, TASK-003)

These are simple—perfect for practicing:

```
Implement TASK-002: Create Weather API Service

Create a weather API service in src/services/weatherApi.js with:
- Function to fetch current weather by city name
- Function to fetch 5-day forecast
- Proper error handling for API failures
- Response data transformation to app format
- API key management via environment variables

Use fetch API and OpenWeather API endpoints.
```

```
Implement TASK-003: Create Local Storage Manager

Create a storage manager in src/utils/storage.js with:
- Functions to save/load favorite cities
- Functions to save/load last searched city
- Functions to save/load temperature unit preference
- Proper JSON serialization/deserialization
- Error handling for quota exceeded
```

### Verify and Commit

After each task:

```powershell
# Run dev server to test
npm run dev

# Check for linting errors
npm run lint

# Build to verify no errors
npm run build

# Commit
git add .
git commit -m "feat: implement TASK-002 and TASK-003 - Weather API service and storage manager"
```

---

## Git Workflow During Implementation

Maintaining good Git hygiene is crucial.

### Commit Strategy

**Option 1: One Commit Per Task (Recommended)**
```powershell
git commit -m "feat: implement TASK-004 - Weather Display Component"
```

**Option 2: Multiple Commits Per Task**
```powershell
git commit -m "feat(components): add weather display component"
git commit -m "feat(components): add temperature formatting"
git commit -m "style(components): add weather card styles"
```

### Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <description>

Types:
- feat: New feature
- fix: Bug fix
- test: Adding tests
- docs: Documentation
- refactor: Code restructuring
- chore: Maintenance tasks
```

Examples:
```
feat: implement TASK-004 - Task Data Model
test: add comprehensive tests for Task validation
fix: handle empty description in Task creation
docs: add docstrings to Task class
refactor: simplify Task validation logic
```

### Branching (Optional for Workshop)

For real projects:

```powershell
# Create feature branch
git checkout -b feature/task-model

# Implement task

# Commit
git commit -m "feat: implement TASK-004"

# Merge back
git checkout main
git merge feature/task-model
```

---

## Iterating and Refining

Implementation is rarely perfect on the first try. Iterate!

### Iteration Loop

```
1. AI generates code
2. You review and find issues
3. Request specific improvements
4. AI updates code
5. You review again
6. Repeat until acceptance criteria met
```

### Example Iteration

**Round 1:**
```
Implement TASK-008: Add Task Operation
[AI generates initial code]
```

**Your Review:**
```
Good start, but I see issues:
1. Missing input validation for description
2. No database persistence (should call repository.save())
3. Tests don't verify task is saved

Please fix these issues.
```

**Round 2:**
```
[AI fixes issues]
```

**Your Review:**
```
Better! Now tests are passing. One more thing:
The error message for empty description should be:
"Description must be non-empty"
Currently it says: "Invalid description"
Please update.
```

**Round 3:**
```
[AI updates error message]
```

**Your Review:**
```
Perfect! All acceptance criteria met ✓
```

---

## Parallel vs. Sequential Implementation

### Sequential (Recommended for Workshop)

Implement one task at a time:

```
TASK-001 → [complete] → TASK-002 → [complete] → TASK-003 → ...
```

**Advantages:**
- Clear focus
- Immediate validation
- Easier debugging
- Good for learning

### Parallel (Advanced)

Multiple tasks simultaneously:

```
TASK-004 (Weather Display)     ← You
TASK-005 (Forecast Component)  ← AI independently
```

**When to use:**
- Tasks have no dependencies
- Different components
- Team collaboration

**How to parallelize:**
```
Implement both TASK-004 and TASK-005. These are independent
display components that don't depend on each other. Create both 
in a single response.
```

---

## Progress Tracking

Keep track of what's done.

### Update Tasks Document

In `specs/tasks.md`:

```markdown
### TASK-001: Project Structure Setup
**Status**: ✅ COMPLETE
**Completed**: 2026-02-11
**Notes**: Vite project created, all dependencies installed

### TASK-002: Weather API Service
**Status**: ✅ COMPLETE
**Completed**: 2026-02-11

### TASK-003: Local Storage Manager
**Status**: ✅ COMPLETE
**Completed**: 2026-02-11

### TASK-003: Local Storage Manager
**Status**: ✅ COMPLETE
**Completed**: 2026-02-11

### TASK-004: Weather Display Component

---
``` 

When you complete a phase:

🎉 Phase 1 Complete: Foundation (6/6 tasks)  
🎉 Phase 2 Complete: Business Logic (5/5 tasks)  
🚧 Phase 3 In Progress: CLI Interface (2/6 tasks)  

## Troubleshooting Common Issues

### AI Doesn't Follow Instructions

**Solution**: Be more specific:
```
You didn't follow the requirement to use ES6 modules. Please reorganize
the code into proper module exports/imports as specified in the technical plan.
```

### Tests Keep Failing

**Solution**: Debug systematically:
```powershell
# Run dev server and check browser console
npm run dev

# Check for build errors
npm run build

# If you have tests configured:
npm test -- --verbose
```

Ask AI:
```
This test is failing: [paste test output]
Here's the code: [paste relevant code]
What's wrong and how do I fix it?
```

### AI Generates Code That Doesn't Run

**Solution**: Check for:
- Missing imports
- Syntax errors
- Undefined variables

```
The code has a ReferenceError: fetchWeather is not defined.
Please add the missing import: import { fetchWeather } from './services/weatherApi.js'
```

### Stuck on a Task

**Solution**: Break it down:
```
TASK-014 is too big. Let's split it:
- First, implement basic `task list` with no filtering
- Then, add --all and --completed flags
- Finally, add formatting and colors

Implement just the first part.
```

---

## What You've Accomplished

By following this implementation process, you're systematically building your project:

- ✅ Executing tasks with AI assistance
- ✅ Reviewing and validating code quality
- ✅ Writing and running tests
- ✅ Maintaining Git history
- ✅ Making steady progress toward your goal

### The Power of Process

Notice how the structure helps:
- **Specifications** gave AI the context of user needs
- **Technical plan** gave AI the architectural guidance
- **Tasks** gave AI focused, specific work items
- **You** provide strategic oversight and validation

This is spec-driven development in action!

---

## Workshop Exercise: Implement MVP

For the remaining workshop time, work through your tasks:

**Goal**: Complete enough tasks to have a working MVP.

For the Weather Dashboard example, MVP = Tasks 1-15:
- Foundation (Tasks 1-5)
- API Integration (Tasks 6-10)
- UI Components (Tasks 11-15)

**Time allocation** (if you have 20 minutes left):
- 5 min: Tasks 1-3 (setup, enums)
- 10 min: Tasks 4-8 (data model, repository, basic operations)
- 5 min: Tasks 12-13 (CLI setup, `add` command)

**It's OK if you don't finish!** The goal is to practice the workflow.

---

## Before You Continue

Take stock of your progress:

1. **How many tasks completed?**
2. **Are tests passing?**
3. **Is code committed to Git?**
4. **What challenges did you face?**

::: tip Keep Going!
After the workshop, continue implementing tasks at your own pace. You have all the tools and knowledge you need!

Continue to [Chapter 7: Best Practices](./07-best-practices.md) →
:::

---

**Next**: [Chapter 7: Best Practices & Advanced Topics](./07-best-practices.md) →

**Previous**: [← Chapter 5: The Tasks Phase](./05-tasks-phase.md)
