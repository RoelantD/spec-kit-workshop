# Chapter 7: Best Practices & Advanced Topics

## Goals
- Learn best practices for spec-driven development
- Understand common pitfalls and how to avoid them
- Explore advanced SDD patterns and techniques
- Learn how to maintain specs in long-term projects
- Discover tips for team collaboration with SDD

## Background Information

### General Best Practices

#### Start with the Constitution
- **Define principles early**: Establish non-negotiables before starting
- **Document standards**: Coding style, technology choices, testing requirements
- **Make it accessible**: Reference constitution in every prompt
- **Keep it updated**: Evolve as you learn what works
- **Examples**:
  - All APIs must have authentication
  - Test coverage must be > 80%
  - Use TypeScript for all frontend code
  - Follow REST principles for all endpoints

#### Write Detailed First Prompts
- **Front-load information**: Provide comprehensive context upfront
- **Be specific about needs**: The more detail, the better the output
- **Include examples**: Show what good looks like
- **State preferences**: Technology, architecture, style preferences
- **Clarify non-goals**: What you explicitly don't want

#### Validate at Each Phase
- **Don't skip ahead**: Complete and validate each phase before moving forward
- **Review thoroughly**: AI can miss things; human review is critical
- **Ask questions**: Challenge assumptions and unclear sections
- **Iterate as needed**: It's okay to go back and refine
- **Get feedback**: Show specs/plans to stakeholders early

#### Keep Specs Living
- **Update regularly**: Specs should evolve with your understanding
- **Track changes**: Use Git to version your spec documents
- **Refactor specs**: Just like code, specs can accumulate debt
- **Archive obsolete sections**: Keep history but mark what's outdated
- **Link to decisions**: Connect spec changes to code changes

### Specification Best Practices

#### Focus on User Outcomes
- **Think user-first**: Always start with "what does the user need?"
- **Describe experiences**: What do users see, feel, do?
- **Avoid tech talk**: Keep specifications technology-agnostic
- **Use scenarios**: Real-world examples make specs concrete
- **Define success**: Measurable outcomes, not just features

#### Capture the "Why"
- **Explain motivations**: Why does this feature exist?
- **Document trade-offs**: Why this approach over alternatives?
- **Record decisions**: What was decided and why?
- **Preserve context**: Future you will thank you

#### Handle Ambiguity
- **Identify unclear areas**: Flag what's uncertain
- **Make assumptions explicit**: Write them down
- **Resolve before implementing**: Don't code on assumptions
- **Use examples**: Concrete examples clarify abstract requirements

### Planning Best Practices

#### Right-Size Your Architecture
- **Start simple**: Don't over-engineer for future scale
- **Evolve as needed**: Add complexity when actually needed
- **YAGNI principle**: You Aren't Gonna Need It (until you do)
- **But plan for change**: Make it easy to refactor later

#### Document Technical Decisions
- **ADRs (Architecture Decision Records)**: Document significant choices
- **Include context**: What problem were you solving?
- **List alternatives**: What else did you consider?
- **Explain choice**: Why this option?
- **Note consequences**: What does this decision enable/prevent?

#### Plan for Testing from Day One
- **Testing strategy first**: Don't add tests as afterthought
- **Define coverage goals**: Set targets before implementing
- **Choose tools early**: Select testing frameworks upfront
- **Plan test data**: How will you create test scenarios?

### Task Breakdown Best Practices

#### Keep Tasks Atomic
- **One objective per task**: Single responsibility principle
- **Clear boundaries**: Obvious start and end points
- **Independently testable**: Can verify without other tasks
- **Minimal dependencies**: Fewer dependencies = easier parallelization

#### Write Clear Acceptance Criteria
- **Specific and measurable**: No ambiguity about "done"
- **Include test scenarios**: How to verify completion
- **Cover edge cases**: Not just happy path
- **Define non-goals**: What this task explicitly doesn't do

### Implementation Best Practices

#### Implement One Task at a Time
- **Focus**: Complete one task fully before moving to next
- **Validate**: Test and verify before proceeding
- **Commit**: Save progress after each completed task
- **Review**: Check code quality before moving on

#### Trust but Verify
- **AI is powerful**: Can produce good code quickly
- **AI isn't perfect**: Will miss edge cases, make mistakes
- **Your job**: Review, validate, catch issues
- **Iterate**: Ask for improvements when needed

#### Maintain Code Quality
- **Consistent style**: Enforce coding standards
- **Meaningful names**: Variables, functions, classes
- **DRY principle**: Don't Repeat Yourself
- **SOLID principles**: Follow software engineering best practices
- **Refactor regularly**: Keep code clean as you go

### Common Pitfalls and How to Avoid Them

#### Pitfall #1: Skipping the Spec
- **Temptation**: Jump straight to coding
- **Consequence**: Unclear requirements, rework, misalignment
- **Solution**: Always start with specification, even for small features

#### Pitfall #2: Specs That Are Too Technical
- **Problem**: Mixing "what" and "how" in specifications
- **Consequence**: Spec constrains implementation unnecessarily
- **Solution**: Keep specs focused on user needs and outcomes

#### Pitfall #3: Plans That Are Too Vague
- **Problem**: Not enough technical detail in plans
- **Consequence**: AI makes bad technology choices
- **Solution**: Be specific about architecture, stack, constraints

#### Pitfall #4: Tasks That Are Too Large
- **Problem**: Tasks that take days instead of hours
- **Consequence**: Hard to review, hard to test, error-prone
- **Solution**: Break large tasks into smaller sub-tasks

#### Pitfall #5: Not Validating at Each Phase
- **Problem**: Moving forward without reviewing outputs
- **Consequence**: Errors compound, costly rework later
- **Solution**: Thorough review at each checkpoint

#### Pitfall #6: Ignoring the Constitution
- **Problem**: Not establishing or following project principles
- **Consequence**: Inconsistent code, violates standards
- **Solution**: Create constitution early, reference it always

#### Pitfall #7: Poor Task Dependencies
- **Problem**: Starting dependent tasks before prerequisites done
- **Consequence**: Rework, integration issues, blockers
- **Solution**: Use helper scripts, verify dependencies

#### Pitfall #8: Insufficient Testing
- **Problem**: Skipping tests or inadequate coverage
- **Consequence**: Bugs, regressions, fragile code
- **Solution**: Test-driven approach, validate coverage

### Advanced Topics

#### Multi-Variant Implementations
- **Explore alternatives**: Generate multiple implementations from same spec
- **Compare approaches**: Evaluate different tech stacks
- **Experiment safely**: Specs decouple from specific implementations
- **Use cases**: Performance testing, learning, risk mitigation

#### Legacy System Modernization
- **Document existing behavior**: Create spec from legacy system
- **Plan modern architecture**: Design greenfield replacement
- **Incremental migration**: Break modernization into phases
- **Preserve business logic**: Capture essential functionality

#### Spec-Driven for Existing Codebases
- **Reverse engineering**: Create spec from existing code
- **Document current state**: Establish baseline
- **Plan evolution**: Spec-driven enhancements and refactoring
- **Context engineering**: Make codebase accessible to AI

#### Team Collaboration with SDD
- **Shared specs**: Single source of truth for whole team
- **Distributed implementation**: Different team members on different tasks
- **Consistent standards**: Constitution ensures alignment
- **Code review**: Review against spec and plan
- **Knowledge sharing**: Specs onboard new team members

#### Integrating with Existing Workflows
- **Jira/Azure DevOps**: Export tasks to project management tools
- **GitHub Issues**: Create issues from task list
- **CI/CD integration**: Auto-run tests on commits
- **Documentation sites**: Generate docs from specs

#### Scaling SDD to Large Projects
- **Modular specs**: Separate specs per major component
- **Spec hierarchy**: Overview spec + detailed component specs
- **Cross-reference**: Link related specs, plans, tasks
- **Governance**: Review process for spec/plan changes
- **Tooling**: Scripts to manage multiple specs

### Tips for Success

#### For Individuals
- **Start small**: Practice SDD on small personal projects first
- **Build habits**: Make the four-phase process second nature
- **Experiment**: Try different approaches, find what works
- **Document learnings**: Keep notes on what works and what doesn't

#### For Teams
- **Agree on process**: Establish SDD workflow as a team
- **Train together**: Ensure everyone understands methodology
- **Review together**: Collaborative review of specs and plans
- **Share patterns**: Build library of successful specs/plans
- **Retrospectives**: Regularly discuss what's working

#### For Organizations
- **Standard constitution**: Organization-wide principles
- **Template library**: Reusable specs and plans for common patterns
- **Center of excellence**: Team that supports SDD adoption
- **Metrics**: Track quality improvements with SDD
- **Continuous improvement**: Evolve SDD practices based on experience

### Troubleshooting

#### When the AI Doesn't Understand
- **Provide examples**: Show what you want
- **Add context**: Link to similar code or specs
- **Break down further**: Smaller, simpler prompts
- **Different phrasing**: Try explaining differently

#### When Plans Feel Wrong
- **Trust your instincts**: You know your domain
- **Ask for alternatives**: Request different approaches
- **Consult experts**: Get technical review from specialists
- **Iterate**: It's okay to revise and regenerate

#### When Implementation Stalls
- **Review dependencies**: Are prerequisites actually complete?
- **Simplify task**: Maybe it's too complex
- **Check for blockers**: External dependencies, missing tools
- **Pair with AI**: Work through problem interactively

### Measuring Success

#### Quality Metrics
- **Spec completeness**: Are all requirements captured?
- **Test coverage**: Percentage of code tested
- **Defect rate**: Bugs per feature/component
- **Code quality**: Linting scores, complexity metrics

#### Productivity Metrics
- **Time to implement**: Feature delivery speed
- **Rework rate**: How often do you re-implement?
- **Review efficiency**: Time spent in code review
- **Onboarding time**: How fast can new people contribute?

#### Process Metrics
- **Spec-to-code alignment**: Does implementation match spec?
- **Phase completion**: How often do you iterate on each phase?
- **Agent effectiveness**: How often does AI code need revision?
