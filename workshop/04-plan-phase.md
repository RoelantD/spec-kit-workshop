---
title: The Plan Phase
description: Transform your specification into a comprehensive technical plan defining HOW to build with architecture, tech stack, and implementation strategy.
---

# Chapter 4: The Plan Phase

Now that you have a clear specification defining **WHAT** to build, it's time to figure out **HOW** to build it. In this chapter, we'll transform your user-focused specification into a comprehensive technical implementation plan.

## What You'll Learn

By the end of this chapter, you will:
- ✅ Understand the purpose and scope of technical planning
- ✅ Use the `/speckit.plan` command to generate implementation plans
- ✅ Make informed decisions about technology stacks and architecture
- ✅ Define security, testing, and deployment strategies
- ✅ Review and validate technical plans before implementation

---

## Understanding the Plan Phase

### What is a Technical Plan?

A **technical plan** is the bridge between user requirements and executable code. It translates the "what" of your specification into the "how" of implementation.

Think of it as:
- 🏗️ **Architecture blueprint**: How components fit together
- 🛠️ **Technology decisions**: What tools and frameworks to use
- 🔒 **Security strategy**: How to protect data and users
- ✅ **Testing approach**: How to verify everything works
- 🚀 **Deployment plan**: How to ship and run the application

### The Golden Rule of Plans

::: tip The Golden Rule
Plans are **technical and opinionated**.  
Specifications are **user-focused and technology-agnostic**.

Now is the time to get technical!
:::

---

## What Belongs in a Technical Plan?

Let's be clear about what goes in your plan.

### ✅ DO Include

| Category | Examples |
|----------|----------|
| **Tech Stack** | "Node.js with TypeScript, PostgreSQL database" |
| **Architecture** | "Three-tier architecture: CLI, business logic, data layer" |
| **Data Models** | "User table with id, email, password_hash, created_at" |
| **APIs/Interfaces** | "Command parser interface, data access layer" |
| **Security** | "Password hashing with bcrypt, input validation" |
| **Testing** | "Unit tests with Jest, integration tests, 80% coverage" |
| **Performance** | "Commands execute in < 100ms, cache frequently accessed data" |
| **Deployment** | "Distribute as npm package, runs locally" |

### ❌ DON'T Include

| Category | Why Not | It's In |
|----------|---------|---------|
| "Users want quick task capture" | User need | Specification |
| "Morning task review journey" | User journey | Specification |
| "Success = 5 tasks per week" | Success metric | Specification |
| Implementation code | Too early | Tasks/Implementation |

::: warning Remember
The spec says "what success looks like to users."  
The plan says "how we'll technically achieve it."
:::

---

## The Technical Plan Template Structure

When you use `/speckit.plan`, your AI agent creates:

### 1. **Architecture Overview**
High-level system design and component relationships

### 2. **Technology Stack**
Specific languages, frameworks, libraries, and tools

### 3. **Component Breakdown**
Individual components and their responsibilities

### 4. **Data Architecture**
Database schema, file structures, data flow

### 5. **API Design**
Interfaces, commands, or endpoints

### 6. **Security Plan**
Authentication, authorization, data protection

### 7. **Testing Strategy**
Test types, tools, coverage goals

### 8. **Performance Considerations**
Optimization strategies, caching, efficiency

### 9. **Deployment Strategy**
How users will install and run the application

### 10. **Development Workflow**
Git branching, CI/CD, development environment

---

## Using the `/speckit.plan` Command

Let's create your technical plan!

### Step 1: Prepare Your Context

Make sure you have:
- ✅ Completed specification saved in `specs/project-spec.md`
- ✅ VS Code open to your project
- ✅ Copilot Chat ready

### Step 2: Craft Your Planning Prompt

Unlike the specification, your planning prompt should include **technical preferences and constraints**.

#### Basic Planning Prompt Template

```
/speckit.plan

Based on the specification in specs/project-spec.md, create a 
technical implementation plan.

TECHNICAL PREFERENCES:
[List your technology preferences]

ORGANIZATIONAL CONSTRAINTS:
[List any requirements from your team/organization]

PERFORMANCE REQUIREMENTS:
[List specific performance needs]

INTEGRATION REQUIREMENTS:
[List systems you need to integrate with]
```

---

## Example: Weather Dashboard Plan Prompt

Here's a complete planning prompt for the weather dashboard:

```
/speckit.plan

Based on the specification in specs/001-weather-dashboard/spec.md, create a 
technical implementation plan for the Weather Dashboard web application.

TECHNICAL PREFERENCES:
- Frontend: Vanilla JavaScript (no frameworks for simplicity)
- Build Tool: Vite for fast development and bundling
- Styling: Modern CSS with CSS Grid/Flexbox
- Weather API: OpenWeather API (free tier)
- Data Storage: Browser localStorage for saved cities

ARCHITECTURE PREFERENCES:
- Modular JavaScript with ES6 modules
- Separation of concerns (API layer, UI layer, state management)
- Progressive enhancement approach
- No backend server needed (client-side only)

PERFORMANCE REQUIREMENTS:
- Dashboard loads in < 2 seconds on 3G connection
- API calls should be cached (avoid redundant requests)
- Responsive images and optimized assets
- Minimal bundle size (< 100KB)

DEVELOPMENT REQUIREMENTS:
- ESLint for code quality
- Prettier for formatting
- Responsive design (mobile-first approach)
- Cross-browser testing (Chrome, Firefox, Safari, Edge)

SECURITY REQUIREMENTS:
- API key stored securely (not in client code)
- Input validation for city searches
- HTTPS only for API calls
- Content Security Policy headers

PLATFORM REQUIREMENTS:
- Works in all modern browsers (ES6+ support)
- Responsive design for mobile, tablet, desktop
- Accessible (WCAG AA compliance)
- No plugins or extensions required
```

::: tip Prompt Quality Matters
Be specific about your preferences. Don't just say "use JavaScript"—explain **why** and what kind of architecture you want. This helps the AI make aligned decisions.
:::

---

## Hands-On: Create Your Technical Plan

Now let's generate your plan!

### Step 1: Write Your Planning Prompt

Using the template above, create your prompt. Consider:

**For CLI Tools:**
- Which language? (Python, JavaScript/Node, Go, Rust)
- CLI framework? (Click, Commander, Cobra, Clap)
- Data storage? (JSON, SQLite, files)

**For Web Applications:**
- Backend? (Node.js, Python/Flask, Ruby/Rails)
- Frontend? (React, Vue, vanilla JS, htmx)
- Database? (PostgreSQL, MySQL, MongoDB)
- API style? (REST, GraphQL, tRPC)

**For Any Project:**
- Testing approach?
- Deployment strategy?
- Development tools?
- Performance targets?

### Step 2: Submit Your Prompt

1. Open Copilot Chat
2. Paste your planning prompt
3. Press Enter
4. Wait for the AI to generate your plan (30-60 seconds)

### Step 3: Review the Generated Plan

The AI will create a comprehensive technical plan. Let's review it systematically.

---

## Reviewing Your Technical Plan

Once generated, carefully review each section.

### The Review Checklist

#### 1. Architecture Overview
- [ ] Does the architecture make sense?
- [ ] Are components properly separated?
- [ ] Is it appropriate for the project size?
- [ ] Are we over-engineering? Under-engineering?

#### 2. Technology Stack
- [ ] Are technologies justified?
- [ ] Do we have the required expertise?
- [ ] Are licenses compatible?
- [ ] Are dependencies maintained?

#### 3. Component Breakdown
- [ ] Is each component's responsibility clear?
- [ ] Are there overlaps or gaps?
- [ ] Can components be tested independently?

#### 4. Data Architecture
- [ ] Is the data model complete?
- [ ] Are relationships clear?
- [ ] Is data persistence handled?
- [ ] Are we storing the right information?

#### 5. Security Plan
- [ ] Are authentication/authorization addressed?
- [ ] Is input validation planned?
- [ ] Are secrets properly handled?
- [ ] Are security best practices followed?

#### 6. Testing Strategy
- [ ] Are all test types covered?
- [ ] Is coverage goal reasonable?
- [ ] Are testing tools chosen?
- [ ] Can we actually write these tests?

#### 7. Performance Plan
- [ ] Do targets match specification?
- [ ] Are optimization strategies reasonable?
- [ ] Is performance measurable?

#### 8. Deployment Strategy
- [ ] Is deployment clearly defined?
- [ ] Is it feasible for our skills?
- [ ] Does it match user needs?

---

## Example: Completed Technical Plan

Let's see what a good technical plan looks like for the weather dashboard.

::: details Weather Dashboard - Technical Plan (Click to expand)

# Weather Dashboard - Technical Implementation Plan

## 1. Architecture Overview

### High-Level Architecture
```
┌─────────────────────────────────────────┐
│         User Interface Layer            │
│    (HTML, CSS, DOM manipulation)        │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│        Application Logic Layer          │
│   (State management, event handling)    │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│       Services & Storage Layer          │
│  (API calls, localStorage persistence)  │
└─────────────────────────────────────────┘
```

### Architecture Principles
- **Separation of Concerns**: Each module has a single responsibility
- **Component-Based**: Reusable UI components
- **Client-Side Only**: No backend server required
- **Simplicity**: Vanilla JavaScript - no framework complexity

## 2. Technology Stack

### Core Technologies

**Language: JavaScript (ES6+)**
- Rationale: Modern features, native browser support, widely known
- Features: Modules, async/await, arrow functions, destructuring

**Build Tool: Vite**
- Rationale: Fast development server, optimized production builds
- Features: Hot module replacement, automatic bundling

**Weather API: OpenWeather API**
- Rationale: Free tier available, comprehensive weather data
- Endpoints: Current weather, 5-day forecast
- Authentication: API key via environment variables

**Data Storage: localStorage**
- Rationale: Client-side persistence, no backend needed
- Storage: User preferences, favorite cities, last search
- Limit: ~5-10MB (sufficient for use case)

### Development Tools

**Code Quality:**
- **ESLint**: Code linting and style checking
- **Prettier**: Code formatting
- **Vite Dev Server**: Hot reload during development

**Testing (Optional):**
- **Vitest**: Unit testing framework (Vite-native)
- Manual browser testing for UI/UX

### Deployment

**Static Hosting Options:**
- Vercel, Netlify, GitHub Pages
- Build command: `npm run build`
- Deploy `dist/` folder

## 3. Component Breakdown

### 3.1 Services Layer (`src/services/`)

**Purpose**: Handle external API calls and data transformation

**Components:**
- `weatherApi.js`: OpenWeather API integration
  - `fetchWeatherByCity(cityName)`: Get current weather
  - `fetchForecast(cityName)`: Get 5-day forecast
  - `transformWeatherData(apiResponse)`: Format API response

**Responsibilities:**
- Make HTTP requests to OpenWeather API
- Handle API errors (404, network failures, invalid key)
- Transform API responses to app format
- Manage API key from environment

### 3.2 Components Layer (`src/components/`)

**Purpose**: Reusable UI components for weather display

**Components:**
- `weatherDisplay.js`: Current weather card
  - Displays temperature, conditions, humidity, wind
  - Shows location name
  - Handles missing data gracefully

- `forecastDisplay.js`: 5-day forecast grid
  - Displays daily forecast cards
  - Shows high/low temps, conditions

- `searchBar.js`: City search interface
  - Input field and search button
  - Loading state during API calls
  - Error message display

- `favoritesManager.js`: Favorite cities list
  - Add/remove favorites
  - Click to load city weather
  - localStorage integration

- `unitToggle.js`: Temperature unit switcher (C/F)
  - Toggle button
  - Updates all displayed temperatures

- `loadingIndicator.js`: Loading spinner
- `errorDisplay.js`: Error notifications

**Responsibilities:**
- Create and manage DOM elements
- Handle user interactions
- Emit custom events for communication
- No direct API calls (use services)

### 3.3 Utilities Layer (`src/utils/`)

**Purpose**: Helper functions and shared utilities

**Components:**
- `storage.js`: localStorage wrapper
  - `saveFavorites(cities)`: Persist favorite cities
  - `loadFavorites()`: Retrieve favorites
  - `savePreferences(prefs)`: Save unit preference
  - `loadPreferences()`: Load user preferences

- `formatters.js`: Data formatting
  - `formatTemperature(temp, unit)`: Convert C/F
  - `formatDate(date)`: Human-readable dates
  - `formatWindSpeed(speed)`: Format wind data

- `iconMapper.js`: Weather icon mapping
  - `getIconPath(weatherCode)`: Map condition to icon
  - Handle icon fallbacks

**Responsibilities:**
- Provide reusable utility functions
- Handle data transformations
- Abstract localStorage operations

### 3.4 Main Application (`src/main.js`)

**Purpose**: Initialize app and coordinate components

**Responsibilities:**
- Initialize all components on page load
- Load saved preferences and favorites
- Set up global event listeners
- Manage application state
- Handle routing (if multi-page)

## 4. Data Architecture

### Weather Data Model

```javascript
// Current Weather Object
{
  city: "London",
  country: "GB",
  temperature: 15,
  feelsLike: 13,
  conditions: "Cloudy",
  conditionCode: "04d",
  humidity: 65,
  windSpeed: 4.5,
  timestamp: "2026-02-11T14:30:00Z"
}

// Forecast Object
{
  city: "London",
  forecasts: [
    {
      date: "2026-02-12",
      tempHigh: 18,
      tempLow: 12,
      conditions: "Rain",
      conditionCode: "10d"
    },
    // ... 4 more days
  ]
}
```

### localStorage Structure

```javascript
// Key: 'weatherDashboard_preferences'
{
  temperatureUnit: "C",  // or "F"
  lastSearchedCity: "London"
}

// Key: 'weatherDashboard_favorites'
{
  cities: [
    "London, GB",
    "New York, US",
    "Tokyo, JP"
  ],
  maxFavorites: 10
}
```

## 5. API Integration

### OpenWeather API Endpoints

**Current Weather:**
```
GET https://api.openweathermap.org/data/2.5/weather
Parameters:
  q: city name
  appid: API key
  units: metric
```

**5-Day Forecast:**
```
GET https://api.openweathermap.org/data/2.5/forecast
Parameters:
  q: city name
  appid: API key
  units: metric
```

### Error Handling

**Network Errors:**
- Display user-friendly message
- Offer retry option
- Don't expose technical details

**API Errors:**
- 404: City not found → "City not found. Check spelling."
- 401: Invalid API key → "Configuration error. Check API key."
- 429: Rate limit → "Too many requests. Try again later."

### Environment Variables

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

Access in code:
```javascript
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
```

## 6. Security Plan

### API Key Protection

**Client-Side Limitations:**
- API key is visible in client code (inherent to client-side apps)
- Use OpenWeather free tier to limit abuse impact
- Consider key rotation if abused

**Best Practices:**
- Don't commit `.env` to Git
- Provide `.env.example` for developers
- Document key setup in README

### Input Validation

**User Input:**
- Sanitize city names (no special characters except spaces, hyphens)
- Limit input length (max 100 characters)
- Validate before API calls

**localStorage:**
- Validate data structure before parsing
- Handle corrupted data gracefully
- Catch quota exceeded errors

### XSS Prevention

**DOM Manipulation:**
- Use `textContent` instead of `innerHTML` for user data
- Sanitize any dynamic HTML content
- Escape special characters

## 7. Performance Considerations

### Performance Targets

| Operation | Target | Measurement |
|-----------|--------|-------------|
| Initial page load | < 2s | Lighthouse |
| Weather search | < 1s | API response time |
| Temperature unit toggle | Instant | No API call |
| Favorites list | < 100ms | localStorage read |

### Optimization Strategies

**1. Efficient API Usage**
- Cache API responses (5-minute TTL)
- Don't refetch same city repeatedly
- Batch forecast with current weather if possible

**2. Lazy Loading**
- Load favorites weather on demand (not all at once)
- Defer non-critical features

**3. Code Splitting**
- Vite automatically splits code
- Dynamic imports for heavy features

**4. Asset Optimization**
- Use SVG icons (small file size)
- Compress images
- Minify JS/CSS in production

### Caching Strategy

```javascript
const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function getCachedWeather(city) {
  const cached = cache.get(city);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }
  return null;
}
```

## 8. User Experience Design

### Responsive Design

**Breakpoints:**
- Mobile: < 768px (stacked layout)
- Tablet: 768px - 1024px (2-column grid)
- Desktop: > 1024px (3-column grid)

**Mobile Considerations:**
- Touch-friendly buttons (min 44x44px)
- Larger text for readability
- Simplified navigation

### Loading States

**Search Loading:**
- Show spinner in search button
- Disable input during search
- Clear previous error messages

**Background Loading:**
- Subtle loading indicator for favorites
- Don't block UI unnecessarily

### Error States

**User-Friendly Messages:**
- ❌ "API Error 404" → ✅ "City not found. Please check spelling."
- ❌ "Network failure" → ✅ "Unable to connect. Check your internet."
- ❌ "undefined" → ✅ "Something went wrong. Please try again."

### Accessibility

**ARIA Labels:**
- Screen reader support for all interactive elements
- Alt text for weather icons
- Proper heading hierarchy

**Keyboard Navigation:**
- Tab order makes sense
- Enter key submits search
- Focus indicators visible

## 9. File Structure

```
weather-dashboard/
├── public/
│   ├── icons/              # Weather condition icons
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── weatherDisplay.js
│   │   ├── forecastDisplay.js
│   │   ├── searchBar.js
│   │   ├── favoritesManager.js
│   │   ├── unitToggle.js
│   │   ├── loadingIndicator.js
│   │   └── errorDisplay.js
│   ├── services/
│   │   └── weatherApi.js
│   ├── utils/
│   │   ├── storage.js
│   │   ├── formatters.js
│   │   └── iconMapper.js
│   ├── styles/
│   │   ├── base.css
│   │   ├── components.css
│   │   └── layout.css
│   ├── main.js
│   └── index.html
├── .env.example
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 10. Development Workflow

### Setup Instructions

```bash
# Clone repository
git clone https://github.com/user/weather-dashboard
cd weather-dashboard

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Edit .env and add your OpenWeather API key

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Git Workflow

**Branch Strategy:**
- `main`: Production-ready code
- `feature/*`: New features
- `fix/*`: Bug fixes

**Commit Messages:**
```
feat: add temperature unit toggle
fix: handle missing weather data
docs: update README with API setup
style: improve responsive layout for mobile
```

### Code Quality

**Linting:**
```bash
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
```

**Formatting:**
```bash
npm run format      # Format all files
```

### Deployment

**Build Process:**
1. Run linter: `npm run lint`
2. Build: `npm run build`
3. Test build: `npm run preview`
4. Deploy `dist/` folder to hosting

**Continuous Deployment:**
- Connect GitHub to Vercel/Netlify
- Auto-deploy on push to `main`
- Preview deployments for PRs

---

**Technical Plan Version**: 1.0  
**Last Updated**: February 11, 2026  
**Status**: Approved for Task Breakdown Phase

:::

---

## Refining Your Technical Plan

Found issues during review? Let's fix them!

### Common Refinements

**1. Technology Choices**
```
The plan suggests PostgreSQL, but the spec says it must work 
offline with no setup. Can we use SQLite instead? It's 
serverless and requires no installation.
```

**2. Over-Engineering**
```
The architecture has 5 microservices, but the spec describes 
a simple CLI tool. Can we simplify to a single application 
with clear internal layers instead?
```

**3. Missing Details**
```
The security section doesn't mention input validation. Can you 
add details about how we'll validate user input to prevent 
command injection?
```

**4. Performance Targets**
```
The plan doesn't specify performance targets. The spec says 
commands must be instant (< 100ms). Can you add specific 
performance requirements for each operation?
```

### Iterating with the AI

Don't hesitate to refine:

```
This plan looks good overall, but I have concerns about the 
deployment strategy. I want this to be installable via pip, 
not require Docker. Can you revise the deployment section?
```

```
The testing strategy is too vague. Can you be specific about:
1. What testing framework to use
2. What percentage coverage we're targeting
3. What types of tests (unit, integration, e2e)
```

---

## Incorporating Organizational Standards

If you're working in a team or organization, now is the time to enforce standards.

### Using the Constitution

Remember the `constitution.md` file? Reference it in your planning prompt:

```
/speckit.plan

Based on the specification and the standards in 
.specify/memory/constitution.md, create a technical plan.

Key organizational standards to enforce:
- All backend code must use TypeScript
- PostgreSQL for all data storage
- All APIs must use JWT authentication
- Test coverage must be > 80%
- Code must follow our ESLint configuration
```

### Example Constitution

::: details Sample Constitution for a Web Application Project

```markdown
# Project Constitution

## Non-Negotiable Principles

### Code Quality
- All code must pass ESLint with zero warnings
- All functions should have JSDoc comments
- Code must be formatted with Prettier
- Maintain consistent naming conventions

### Technology Standards
- Modern JavaScript (ES6+) only
- Use Vite for build tooling
- Use vanilla JavaScript (no framework dependencies)
- Module-based architecture

### Security Requirements
- Never commit API keys or secrets
- Validate all user inputs
- Sanitize data before DOM insertion
- Use HTTPS for all API calls

### User Experience
- Mobile-first responsive design
- Loading states for all async operations
- User-friendly error messages
- Accessible UI (WCAG AA minimum)

### Documentation
- README.md with setup and usage instructions
- JSDoc comments for all public functions
- Architecture decision records for major choices
- .env.example for required environment variables

### Git Workflow
- Feature branches for all changes
- Meaningful commit messages (conventional commits)
- Main branch is protected
- Semantic versioning for releases
```
:::

---

## Multi-Variant Planning (Advanced)

One powerful feature of spec-driven development: you can generate **multiple plans** from the same spec!

### Why Create Variants?

- 🔬 **Explore alternatives**: Compare different technical approaches
- 📊 **Evaluate trade-offs**: See pros/cons of each choice
- 🎯 **Reduce risk**: Understand options before committing
- 📚 **Learn**: See how different technologies address same problem

### Example: Requesting Variants

```
/speckit.plan

Based on the specification, create TWO technical plans:

PLAN A: Lightweight & Simple
- Focus on minimal dependencies
- Prioritize simplicity over features
- Use standard library where possible

PLAN B: Modern & Full-Featured
- Use modern frameworks and tools
- Focus on developer experience
- Include nice-to-have tooling

For each plan, explain trade-offs.
```

You'll get two complete plans to compare!

---

## Saving Your Technical Plan

Once you're satisfied:

```powershell
# Save the plan
code specs/technical-plan.md

# Commit to Git
git add specs/technical-plan.md
git commit -m "Add technical implementation plan"
```

---

## Validation Checklist

Before moving to the Tasks phase:

::: tip Checkpoint
Don't proceed until you can check ALL of these:
:::

- [ ] **Architecture defined**: Clear component structure and relationships
- [ ] **Technologies chosen**: Specific languages, frameworks, tools selected
- [ ] **Data model complete**: All entities and relationships defined
- [ ] **Security addressed**: Authentication, validation, data protection planned
- [ ] **Testing strategy clear**: Test types, tools, coverage goals set
- [ ] **Performance targets**: Specific, measurable performance requirements
- [ ] **Deployment feasible**: Realistic deployment and distribution plan
- [ ] **Aligns with spec**: All specification requirements covered
- [ ] **Feasible to build**: You actually have the skills/time to implement this
- [ ] **Saved and committed**: Plan is in Git

---

## What You've Accomplished

Congratulations! You've completed the Plan phase. You now have:

- ✅ A comprehensive technical implementation plan
- ✅ Chosen architecture and technology stack
- ✅ Defined data models and interfaces
- ✅ Planned security, testing, and deployment
- ✅ A blueprint ready for task breakdown

### The Bridge is Built

Your technical plan connects the "what" (specification) to the "how to execute" (tasks). Everything is now in place to break this down into implementable work.

::: info Next Up: Task Breakdown
In Chapter 5, we'll use this technical plan to create a detailed task list. Each task will be small, focused, and implementable.
:::

---

## Common Questions

### "My plan is very long. Is that OK?"

Plans are typically longer than specs because they're more detailed. Length is fine as long as every section adds value. If sections feel repetitive or obvious, you can trim them.

### "How do I choose between technologies?"

Consider:
- **Your expertise**: What do you know?
- **Project requirements**: What does the spec need?
- **Ecosystem maturity**: Is it well-supported?
- **Learning goals**: Want to learn something new?

Don't overthink it—pick something and move forward. You can always refactor later.

### "What if I change my mind later?"

You can! Update the plan, commit the change, and regenerate tasks if needed. Plans evolve.

### "Do I need to follow every best practice?"

For a learning workshop? No. Pick a few key practices (testing, security basics) and nail those. You can always improve later.

---

## Before You Continue

1. **Review your complete plan**
2. **Make any necessary refinements**
3. **Save and commit your work**
4. **Take a 5-minute break**

When ready, we'll break this plan into actionable tasks!

::: tip Ready to Break It Down?
Continue to [Chapter 5: The Tasks Phase](./05-tasks-phase.md) →
:::

---

**Next**: [Chapter 5: The Tasks Phase →](./05-tasks-phase.md)

**Previous**: [← Chapter 3: The Specify Phase](./03-specify-phase.md)
