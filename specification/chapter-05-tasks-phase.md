# Chapter 5: The Tasks Phase

## Goals
- Understand how to break down plans into actionable tasks
- Learn the characteristics of good task definitions
- Use the `/tasks` command to generate task breakdowns
- Organize tasks for efficient implementation
- Establish task dependencies and order

## Background Information

### What is the Tasks Phase?
- **Third phase** of spec-driven development
- **Focus**: Breaking the plan into small, implementable chunks
- **Output**: A detailed task list with clear acceptance criteria
- **Purpose**: Give AI agents discrete, verifiable work items

### Why Task Breakdown Matters
- **Reduces cognitive load**: Smaller chunks are easier to reason about
- **Enables validation**: Each task can be tested independently
- **Improves accuracy**: AI agents perform better with focused tasks
- **Facilitates review**: Easier to review small changes
- **Tracks progress**: Clear milestones show project status
- **Enables parallelization**: Independent tasks can run concurrently

### Characteristics of Good Tasks
- **Small and focused**: One clear objective per task
- **Self-contained**: Can be completed independently
- **Testable**: Has clear pass/fail criteria
- **Specific**: No ambiguity about what to build
- **Measurable**: Success is objectively determinable
- **Time-bounded**: Can be completed in reasonable time (hours, not days)

### Task vs. Epic vs. Story
- **Epic**: Large body of work (e.g., "User authentication system")
- **Story**: User-facing functionality (e.g., "User can log in with email")
- **Task**: Specific implementation work (e.g., "Create login API endpoint")
- **In SDD**: We create implementation tasks, not user stories

### Using the `/tasks` Command
- **Prerequisites**: Completed specification and plan
- **Invocation**: Type `/tasks` in your AI coding agent
- **What it does**: AI agent reads spec and plan to generate tasks
- **Automatic breakdown**: AI determines logical task boundaries
- **Customization**: You can request specific task granularity

### Task Template Structure
Each task typically includes:
- **Task ID**: Unique identifier (e.g., TASK-001)
- **Title**: Brief, descriptive name
- **Description**: What needs to be built
- **Dependencies**: What must be completed first
- **Acceptance Criteria**: How to verify completion
- **Estimated Complexity**: Relative size (S/M/L or story points)
- **Component**: Which part of the system
- **Related Spec Section**: Links back to specification

### Example Task Format
```markdown
## TASK-001: Create User Model

**Description**: Implement the User data model with all required fields
as defined in the technical plan.

**Dependencies**: None

**Acceptance Criteria**:
- User model includes: id, email, password_hash, created_at, updated_at
- Email validation implemented
- Password hashing function integrated
- Model includes appropriate indexes
- Unit tests pass for model validation

**Component**: Backend / Data Models
**Complexity**: Small
**Related Spec**: Section 3.2 - User Data Requirements
```

### Task Ordering Strategies
- **Dependency-first**: Build foundational components first
- **Risk-first**: Tackle uncertain/complex tasks early
- **Value-first**: Deliver user-facing features quickly
- **Layer-based**: Complete full vertical slices
- **Hybrid approach**: Mix strategies based on project needs

### Common Task Categories
- **Infrastructure**: Database setup, environment configuration
- **Data models**: Entities, schemas, relationships
- **API endpoints**: Routes, controllers, middleware
- **Business logic**: Core algorithms and processing
- **UI components**: Views, templates, client-side code
- **Authentication/Authorization**: Security implementations
- **Testing**: Unit tests, integration tests, E2E tests
- **Documentation**: API docs, user guides, comments
- **Deployment**: CI/CD setup, hosting configuration

### Task Dependencies
- **Blocking dependencies**: Must be completed before next task
- **Soft dependencies**: Helpful but not required
- **Parallel tracks**: Tasks that can run simultaneously
- **Critical path**: Sequence determining minimum completion time
- **Dependency visualization**: Consider using diagrams

### Estimating Task Complexity
- **T-shirt sizes**: XS, S, M, L, XL
- **Story points**: 1, 2, 3, 5, 8, 13 (Fibonacci sequence)
- **Time-based**: Hours or days (less reliable)
- **Relative sizing**: Compare tasks to each other
- **Consider**: Complexity, uncertainty, effort, dependencies

### Reviewing the Task List
- **Coverage check**: Does it cover all aspects of the plan?
- **Granularity check**: Are tasks appropriately sized?
- **Dependency validation**: Are dependencies correctly identified?
- **Sequencing logic**: Does the order make sense?
- **Missing tasks**: Are there gaps in the breakdown?
- **Overlapping tasks**: Are any tasks redundant?

### Refining Tasks
- **Split large tasks**: Break complex tasks into smaller ones
- **Merge small tasks**: Combine trivial tasks for efficiency
- **Clarify ambiguity**: Add details to vague tasks
- **Add acceptance criteria**: Ensure every task has clear success metrics
- **Update dependencies**: Correct incorrect dependency chains
- **Prioritize**: Mark critical path and high-priority items

### Task Implementation Order
1. **Foundation layer**: Database, models, core utilities
2. **Business logic layer**: Core functionality, algorithms
3. **API layer**: Endpoints, request handling, responses
4. **Integration layer**: External services, third-party APIs
5. **UI layer**: User interface, client-side logic
6. **Testing layer**: Comprehensive test coverage
7. **Polish layer**: Error handling, logging, optimization
8. **Documentation**: Code comments, API docs, user guides

### Test-Driven Task Definition
- **Each task is like a test**: Has a clear pass/fail condition
- **Acceptance criteria = test cases**: What makes the task done?
- **Validation before moving on**: Verify task completion before next task
- **Prevents drift**: Keeps implementation aligned with plan

### Checkpoint Questions
Before moving to Implementation, ask:
- [ ] Are all tasks small enough to implement independently?
- [ ] Does each task have clear acceptance criteria?
- [ ] Are task dependencies correctly identified?
- [ ] Does the task list cover the entire technical plan?
- [ ] Is the implementation order logical?
- [ ] Are there any missing or redundant tasks?
- [ ] Can each task be validated/tested?
- [ ] Is task ownership clear (if team project)?
