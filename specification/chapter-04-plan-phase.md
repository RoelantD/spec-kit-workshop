# Chapter 4: The Plan Phase

## Goals
- Understand the purpose of the technical planning phase
- Learn to translate specifications into technical plans
- Use the `/plan` command to generate implementation plans
- Define architecture, stack, and technical constraints
- Review and validate technical decisions

## Background Information

### What is the Plan Phase?
- **Second phase** of spec-driven development
- **Focus**: HOW to build what was specified
- **Output**: A comprehensive technical implementation plan
- **Bridge**: Connects user requirements to executable tasks

### What Belongs in a Technical Plan?
- **Technology stack**: Languages, frameworks, libraries
- **Architecture**: System design and component structure
- **Data models**: How data is structured and stored
- **APIs and interfaces**: How components communicate
- **Security considerations**: Authentication, authorization, data protection
- **Performance requirements**: Speed, scalability, resource usage
- **Testing strategy**: Unit tests, integration tests, E2E tests
- **Deployment approach**: How the system will be deployed
- **Dependencies**: External services and libraries required
- **Development workflow**: Branching strategy, CI/CD setup

### Using the `/plan` Command
- **Prerequisite**: Must have a completed specification
- **Invocation**: Type `/plan` in your AI coding agent
- **What to include in your prompt**:
  - Preferred technology stack
  - Organizational constraints (e.g., "we use PostgreSQL")
  - Performance requirements
  - Security requirements
  - Integration needs with existing systems
  - Compliance requirements (e.g., GDPR, HIPAA)

### Example Plan Prompt Structure
```
Based on the specification, create a technical plan with these constraints:

Technology Stack:
- Backend: [LANGUAGE/FRAMEWORK]
- Frontend: [FRAMEWORK]
- Database: [DATABASE]
- Deployment: [PLATFORM]

Requirements:
- Must support [PERFORMANCE REQUIREMENT]
- Must integrate with [EXISTING SYSTEM]
- Must comply with [COMPLIANCE STANDARD]

Preferences:
- Prefer [ARCHITECTURE STYLE]
- Use [SPECIFIC LIBRARIES] where appropriate
```

### Technical Plan Template Structure
- **Architecture Overview**: High-level system design
- **Technology Stack**: Detailed technology choices with justifications
- **Component Breakdown**: Individual components and their responsibilities
- **Data Architecture**: Database schema, data flow, storage strategy
- **API Design**: Endpoints, request/response formats, authentication
- **Security Plan**: Authentication, authorization, encryption, validation
- **Testing Strategy**: Test types, coverage goals, testing tools
- **Deployment Strategy**: Hosting, CI/CD pipeline, monitoring
- **Performance Considerations**: Caching, optimization, scalability
- **Dependencies**: External libraries, services, APIs

### Incorporating Organizational Standards
- **Constitution document**: Reference `.specify/memory/constitution.md`
- **Coding standards**: Apply your team's conventions
- **Architectural patterns**: Use established patterns in your organization
- **Security policies**: Enforce organizational security requirements
- **Compliance requirements**: Build in regulatory needs from the start
- **Technology preferences**: Respect approved technology lists

### Multi-Variant Planning
- **Explore alternatives**: Request multiple plan variations
- **Compare approaches**: Different architectures or stacks
- **Pros and cons**: Evaluate trade-offs between options
- **Example**: Compare microservices vs. monolithic architecture
- **Use cases**: When decision isn't obvious, explore options

### Architecture Considerations
- **Monolithic vs. Microservices**: Single codebase or distributed services?
- **Frontend architecture**: SPA, SSR, static site, mobile app?
- **Data persistence**: SQL, NoSQL, file-based, hybrid?
- **API style**: REST, GraphQL, gRPC, WebSockets?
- **State management**: How is application state handled?
- **Caching strategy**: Where and what to cache?

### Security Planning
- **Authentication**: How users prove identity (OAuth, JWT, sessions)
- **Authorization**: How permissions are enforced (RBAC, ABAC)
- **Data protection**: Encryption at rest and in transit
- **Input validation**: Protect against injection attacks
- **Security headers**: CORS, CSP, HSTS
- **Secrets management**: How API keys and credentials are stored

### Testing Strategy
- **Unit tests**: Test individual functions and components
- **Integration tests**: Test component interactions
- **End-to-end tests**: Test complete user workflows
- **Coverage goals**: What percentage of code should be tested?
- **Testing tools**: Jest, Pytest, Cypress, Playwright, etc.
- **CI integration**: Tests run automatically on commits

### Reviewing the Technical Plan
- **Validate against spec**: Does it address all requirements?
- **Check for over-engineering**: Is it unnecessarily complex?
- **Assess feasibility**: Can this be built in reasonable time?
- **Review technology choices**: Are they appropriate and justified?
- **Evaluate scalability**: Will it handle expected load?
- **Consider maintainability**: Will it be easy to update and debug?

### Common Planning Pitfalls
- **Technology hype**: Choosing trendy tech without good reason
- **Over-architecture**: Building for scale you don't need yet
- **Under-specification**: Leaving critical details undefined
- **Ignoring constraints**: Not respecting organizational requirements
- **Missing security**: Treating security as an afterthought
- **No testing plan**: Hoping to "add tests later"

### Checkpoint Questions
Before moving to the Tasks phase, ask:
- [ ] Does the plan address all requirements from the spec?
- [ ] Are technology choices justified and appropriate?
- [ ] Is the architecture clear and well-defined?
- [ ] Are security considerations adequately addressed?
- [ ] Is the testing strategy comprehensive?
- [ ] Are dependencies and integrations identified?
- [ ] Is the deployment approach practical?
- [ ] Can this plan be broken into implement able tasks?
