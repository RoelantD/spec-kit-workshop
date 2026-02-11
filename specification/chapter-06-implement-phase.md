# Chapter 6: The Implementation Phase

## Goals
- Learn how to implement tasks with AI coding agents
- Understand the developer's role during implementation
- Practice reviewing AI-generated code
- Validate task completion against acceptance criteria
- Iterate and refine implementations

## Background Information

### What is the Implementation Phase?
- **Fourth and final phase** of spec-driven development
- **Focus**: Executing tasks one by one with AI assistance
- **Output**: Working, tested code that fulfills the specification
- **Your role**: Steering, reviewing, and validating

### How Implementation Works with AI Agents
- **AI as implementer**: The agent writes the actual code
- **You as reviewer**: You verify correctness and quality
- **Task-by-task approach**: Implement one task at a time
- **Continuous validation**: Test after each task completion
- **Iterative refinement**: Fix issues before moving forward

### Implementation Workflow
1. **Select next task**: Choose from task list (follow dependencies)
2. **Provide task to agent**: Share task description and acceptance criteria
3. **Agent implements**: AI writes code to fulfill task
4. **Review changes**: Check code quality, correctness, style
5. **Validate completion**: Verify acceptance criteria are met
6. **Test functionality**: Run tests, manual checks
7. **Iterate if needed**: Request fixes or improvements
8. **Move to next task**: Repeat the process

### Prompting for Implementation
- **Be specific**: Reference the exact task ID and description
- **Provide context**: Link to spec and plan sections
- **Mention constraints**: Remind agent of technical requirements
- **Request tests**: Ask for tests alongside implementation
- **Example prompt**:
  ```
  Implement TASK-001: Create User Model as described in the tasks document.
  Follow the data structure from section 3.2 of the technical plan.
  Include unit tests for validation logic.
  ```

### The Developer's Role During Implementation
- **Strategic guidance**: Ensure agent stays aligned with spec and plan
- **Code review**: Check quality, readability, maintainability
- **Testing validation**: Verify tests are comprehensive and pass
- **Edge case identification**: Spot cases the AI might have missed
- **Refactoring decisions**: Improve code structure when needed
- **Integration verification**: Ensure new code works with existing code
- **Documentation review**: Check that code is well-documented

### Reviewing AI-Generated Code
**What to look for:**
- **Correctness**: Does it solve the stated problem?
- **Completeness**: Are all acceptance criteria met?
- **Quality**: Is the code clean and maintainable?
- **Testing**: Are tests present and comprehensive?
- **Edge cases**: Are error conditions handled?
- **Performance**: Are there obvious inefficiencies?
- **Security**: Are there vulnerabilities?
- **Style**: Does it match project conventions?
- **Documentation**: Are complex parts explained?

### Common Issues with AI Code
- **Over-engineering**: More complex than necessary
- **Under-engineering**: Missing error handling or validation
- **Copy-paste patterns**: Generic solutions not tailored to your needs
- **Incomplete tests**: Tests that don't cover edge cases
- **Security gaps**: Missing input validation or authorization checks
- **Hardcoded values**: Constants that should be configurable
- **Missing logging**: No visibility into what's happening

### Validating Task Completion
- **Run tests**: All tests must pass
- **Check acceptance criteria**: Every criterion must be met
- **Manual testing**: Try it yourself
- **Review dependencies**: Does it work with dependent code?
- **Check integration**: Does it fit with the broader system?
- **Verify documentation**: Is it properly documented?
- **Look for regressions**: Did it break existing functionality?

### When Tasks Don't Go as Planned
- **Task too large**: Break it into smaller sub-tasks
- **Requirements unclear**: Go back to spec or plan, clarify
- **Technical blocker**: Research, ask for alternatives
- **AI struggles**: Provide more context, examples, or constraints
- **Tests fail**: Debug with AI, identify root cause
- **Performance issues**: Profile, optimize, or redesign

### Iteration and Refinement
- **First implementation rarely perfect**: Expect to iterate
- **Incremental improvements**: Small refinements add up
- **Refactoring**: Improve structure after initial implementation
- **Test improvements**: Add more test coverage
- **Documentation updates**: Keep docs in sync with code
- **Performance optimization**: Measure, then optimize

### Parallel vs. Sequential Implementation
- **Sequential (default)**: Complete one task before starting next
- **Parallel (advanced)**: Multiple independent tasks simultaneously
- **When to parallelize**: Tasks with no dependencies, different components
- **When to stay sequential**: Learning phase, complex dependencies
- **Team collaboration**: Assign parallel tasks to team members

### Using Helper Scripts
- **check-task-prerequisites.ps1**: Verify dependencies are completed
- **create-new-feature.ps1**: Set up branch and structure for feature
- **setup-plan.ps1**: Prepare implementation environment
- **update-agent-context.ps1**: Refresh agent with latest project state
- **Purpose**: Automate SDD workflow consistency

### Git Workflow During Implementation
- **Feature branches**: Create branch per feature or task group
- **Commit granularity**: Commit after each completed task
- **Meaningful messages**: Reference task IDs in commit messages
- **Pull requests**: Review before merging to main
- **Keep main stable**: Only merge fully tested, working code

### Testing Strategy During Implementation
- **Test-Driven approach**: Write or generate tests first when possible
- **Unit tests**: Test individual functions and methods
- **Integration tests**: Test component interactions
- **E2E tests**: Test full user workflows
- **Run tests frequently**: After every task, before every commit
- **Fix tests immediately**: Don't accumulate failing tests

### Documentation During Implementation
- **Code comments**: Explain "why", not "what"
- **Function docstrings**: Describe purpose, parameters, returns
- **API documentation**: Keep API docs in sync with implementation
- **README updates**: Update setup instructions as needed
- **Architecture decisions**: Document significant choices

### Progress Tracking
- **Update task status**: Mark tasks as in-progress, completed
- **Track blockers**: Document obstacles and resolutions
- **Maintain changelog**: Note significant changes
- **Demo increments**: Show progress regularly
- **Celebrate milestones**: Acknowledge completed features

### When Implementation is Complete
- **All tasks done**: Every task marked complete
- **All tests pass**: Full test suite green
- **Spec fulfilled**: All requirements met
- **Plan followed**: Architecture as designed
- **Code reviewed**: Quality standards met
- **Documentation complete**: Everything documented
- **Ready to deploy**: System is production-ready

### Checkpoint Questions
Throughout implementation, ask:
- [ ] Does this code fulfill the task acceptance criteria?
- [ ] Are the tests comprehensive and passing?
- [ ] Is the code quality acceptable?
- [ ] Are edge cases handled?
- [ ] Is it properly documented?
- [ ] Does it integrate with existing code?
- [ ] Are there any security concerns?
- [ ] Is performance acceptable?
- [ ] Would this pass code review?
