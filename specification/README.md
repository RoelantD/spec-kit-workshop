# Spec-Driven Development Workshop - Chapter Overview

This folder contains the specifications for an 8-chapter workshop on GitHub's Spec Kit toolkit and spec-driven development methodology. The workshop is designed to be 60-90 minutes long and guides participants through building their first spec-driven project.

## Workshop Structure

### [Chapter 1: Introduction to Spec-Driven Development](chapter-01-introduction.md)
**Duration:** ~5-10 minutes  
**Goals:**
- Understand what spec-driven development is and why it matters
- Learn the difference between traditional "vibe-coding" and spec-driven approaches
- Get an overview of the four-phase workflow
- Understand the workshop structure

**Key Topics:** SDD definition, the problem with vibe-coding, benefits of specifications with AI, overview of the four phases

---

### [Chapter 2: Setup & Prerequisites](chapter-02-setup-prerequisites.md)
**Duration:** ~10-15 minutes  
**Goals:**
- Install and configure all necessary tools
- Set up Visual Studio Code with appropriate extensions
- Install GitHub Spec Kit toolkit
- Initialize your first spec-driven project
- Choose a project topic

**Key Topics:** Tool installation (VS Code, AI agent, Python, uvx), Spec Kit installation, project structure, choosing a project idea

---

### [Chapter 3: The Specify Phase](chapter-03-specify-phase.md)
**Duration:** ~10-15 minutes  
**Goals:**
- Create your first project specification using `/specify`
- Learn what belongs in a specification (user journeys, outcomes)
- Understand what to exclude from specs (technical details)
- Review and refine the generated specification

**Key Topics:** What is a specification, using the `/specify` command, prompt engineering, specification structure, reviewing and refining

---

### [Chapter 4: The Plan Phase](chapter-04-plan-phase.md)
**Duration:** ~10-15 minutes  
**Goals:**
- Generate a technical implementation plan using `/plan`
- Define architecture, technology stack, and constraints
- Incorporate organizational standards and requirements
- Review and validate technical decisions

**Key Topics:** Technical planning, using the `/plan` command, architecture considerations, security planning, testing strategy, reviewing plans

---

### [Chapter 5: The Tasks Phase](chapter-05-tasks-phase.md)
**Duration:** ~10-15 minutes  
**Goals:**
- Break down the plan into actionable tasks using `/tasks`
- Learn characteristics of good task definitions
- Organize tasks with proper dependencies
- Establish task ordering for efficient implementation

**Key Topics:** Task breakdown, using the `/tasks` command, task characteristics, dependencies, acceptance criteria, task ordering strategies

---

### [Chapter 6: The Implementation Phase](chapter-06-implement-phase.md)
**Duration:** ~15-20 minutes  
**Goals:**
- Implement tasks with AI coding agent assistance
- Learn the developer's role during implementation
- Practice reviewing AI-generated code
- Validate task completion against acceptance criteria

**Key Topics:** Implementation workflow, prompting for implementation, code review, testing validation, iteration and refinement, Git workflow

---

### [Chapter 7: Best Practices & Advanced Topics](chapter-07-best-practices.md)
**Duration:** ~5-10 minutes  
**Goals:**
- Learn best practices for each phase of SDD
- Understand common pitfalls and how to avoid them
- Explore advanced topics (multi-variant implementations, team collaboration)
- Get tips for scaling SDD

**Key Topics:** Best practices by phase, common pitfalls, advanced patterns, team collaboration, scaling to organizations, measuring success

---

### [Chapter 8: Workshop Wrap-up & Next Steps](chapter-08-wrapup.md)
**Duration:** ~5-10 minutes  
**Goals:**
- Recap key concepts and learnings
- Understand next steps for continued learning
- Get resources for further exploration
- Learn how to contribute back to the community

**Key Topics:** Workshop recap, workflow review, practical applications, resources, community involvement, next steps

---

## Total Workshop Duration
- **Minimum:** 60 minutes (faster pace, covering essentials)
- **Target:** 75 minutes (recommended pace with good depth)
- **Maximum:** 90 minutes (includes extra exploration and Q&A)

## Workshop Philosophy

This workshop follows a **hands-on, step-by-step approach** where participants:
1. Learn the concept
2. Apply it immediately to their chosen project
3. Validate their work before moving forward
4. Build confidence through practice

## For Workshop Facilitators

### Preparation
- Review all chapter materials thoroughly
- Set up a sample project to demonstrate
- Test all installation steps on target platform
- Prepare backup solutions for common setup issues

### Delivery Tips
- **Interactive approach:** Have participants follow along with their own projects
- **Checkpoint validations:** Pause after each phase to ensure everyone is aligned
- **Flexible pacing:** Adjust timing based on group needs
- **Encourage questions:** Create safe space for learning
- **Share experiences:** Discuss real-world applications

### Suggested Project Ideas for Participants
- Task management CLI tool
- Markdown blog generator
- Simple REST API for note-taking
- Weather dashboard application
- Personal finance tracker
- Recipe organizer
- Habit tracker
- Reading list manager

## Technical Requirements

### Required
- Visual Studio Code (latest version)
- AI coding agent (GitHub Copilot, Claude Code, or Gemini CLI)
- Python 3.8+ with uvx/uv
- Git

### Recommended
- GitHub account (for version control)
- VS Code extensions: GitHub Copilot, Markdown All in One, GitLens

## Learning Outcomes

By the end of this workshop, participants will be able to:
- ✅ Explain what spec-driven development is and its benefits
- ✅ Set up a project with GitHub Spec Kit
- ✅ Create specifications that focus on user outcomes
- ✅ Generate technical plans with appropriate architecture
- ✅ Break down plans into implementable tasks
- ✅ Work with AI agents to implement features
- ✅ Review and validate AI-generated code
- ✅ Apply SDD methodology to their own projects

## Next Steps After the Workshop

1. **Practice:** Build a small personal project using SDD
2. **Customize:** Adapt templates to your needs
3. **Share:** Teach others what you learned
4. **Contribute:** Share your experiences with the community
5. **Explore:** Dive deeper into advanced topics

## Resources

- **GitHub Spec Kit:** https://github.com/github/spec-kit
- **Microsoft Blog:** https://developer.microsoft.com/blog/spec-driven-development-spec-kit
- **GitHub Blog:** https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/

---

**Workshop Version:** 1.0  
**Last Updated:** February 2026  
**Target Audience:** Developers learning to work with AI coding agents  
**Prerequisites:** Basic programming knowledge, familiarity with Git and VS Code
