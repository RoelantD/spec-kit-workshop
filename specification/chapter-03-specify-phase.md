# Chapter 3: The Specify Phase

## Goals
- Understand the purpose and scope of the specification phase
- Learn what makes a good specification
- Create your first project specification using `/specify`
- Review and refine the generated specification
- Establish user journeys and success criteria

## Background Information

### What is the Specification Phase?
- **First phase** of spec-driven development
- **Focus**: WHAT to build and WHY, not HOW
- **Output**: A detailed specification document that becomes the source of truth
- **Living document**: Specifications evolve as understanding grows

### What Belongs in a Specification?
- **User journeys**: Who will use this and how?
- **Problem statement**: What problem does it solve?
- **User experiences**: How will users interact with it?
- **Success criteria**: What outcomes matter?
- **Scope boundaries**: What's explicitly out of scope?
- **User personas**: Different types of users and their needs
- **Key use cases**: Primary scenarios the system must handle
- **Non-functional requirements**: Performance, security, accessibility needs

### What Does NOT Belong in a Specification?
- Technical stack choices (e.g., "use React")
- Implementation details (e.g., "use a singleton pattern")
- Architecture decisions (e.g., "microservices architecture")
- Specific libraries or frameworks
- Database schema designs
- These belong in the Plan phase (Chapter 4)

### Using the `/specify` Command
- **Invocation**: Type `/specify` in your AI coding agent
- **Prompt engineering**: Provide a detailed first prompt
- **What to include in your prompt**:
  - Problem you're solving
  - Target users
  - Key features needed
  - Experiences that are critical
  - What you explicitly don't want
- **The more detail, the better**: Detailed prompts produce better specifications

### Example Prompt Structure
```
I want to build a [PROJECT TYPE] that [SOLVES PROBLEM].

Target users are [USER DESCRIPTION] who need to [USER GOALS].

Critical features include:
- [FEATURE 1]
- [FEATURE 2]
- [FEATURE 3]

Success looks like [SUCCESS CRITERIA].

Out of scope: [THINGS TO EXCLUDE]
```

### Specification Template Structure
- **Overview**: High-level description
- **Users**: Who will use this system?
- **Problem Statement**: What problem are we solving?
- **User Journeys**: Step-by-step user interactions
- **Features**: Key capabilities the system must provide
- **Success Metrics**: How do we measure success?
- **Constraints**: Limitations and boundaries
- **Assumptions**: What we're taking as given
- **Out of Scope**: What we're explicitly not building

### Reviewing Your Specification
- **Check for completeness**: Does it cover all user needs?
- **Look for ambiguity**: Are terms clearly defined?
- **Validate success criteria**: Are they measurable?
- **Verify user journeys**: Do they flow logically?
- **Question assumptions**: Are they valid?
- **Spot missing edge cases**: What could go wrong?

### Refining the Specification
- **Iterate with your AI agent**: Ask questions, request clarifications
- **Add missing details**: Fill in gaps you discover
- **Remove unnecessary items**: Keep it focused
- **Adjust scope**: Expand or contract based on feasibility
- **Get feedback**: Show it to potential users if possible

### Common Specification Patterns
- **User stories**: "As a [user], I want to [action], so that [benefit]"
- **Acceptance criteria**: "Given [context], when [action], then [outcome]"
- **Feature descriptions**: Clear, concise statements of capability
- **Constraint specifications**: Clear boundaries and limitations

### Tips for Better Specifications
- **Think user-first**: Always start with user needs
- **Be specific about experiences**: Describe what users see and feel
- **Include edge cases**: What happens when things go wrong?
- **Define success clearly**: Use measurable outcomes
- **Stay technology-agnostic**: Don't lock into implementation details
- **Capture the "why"**: Explain motivations behind requirements

### Checkpoint Questions
Before moving to the Plan phase, ask:
- [ ] Does the spec clearly define who the users are?
- [ ] Is the problem statement unambiguous?
- [ ] Are user journeys complete and logical?
- [ ] Are success criteria measurable?
- [ ] Have we captured all critical features?
- [ ] Is the scope clear and bounded?
- [ ] Are assumptions documented and validated?
