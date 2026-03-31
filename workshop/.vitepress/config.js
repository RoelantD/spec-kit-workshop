import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-lists'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Spec-Driven Development Workshop",
  description: "A hands-on workshop for building your first spec-driven project with GitHub's Spec Kit toolkit",
  base: '/spec-kit-workshop/',
  cleanUrls: true,
  
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Spec-Driven Development Workshop' }],
    ['meta', { property: 'og:site_name', content: 'SDD Workshop' }],
    ['meta', { property: 'og:image', content: 'https://roelantd.github.io/spec-kit-workshop/og-image.png' }],
    ['meta', { property: 'og:url', content: 'https://roelantd.github.io/spec-kit-workshop/' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    logo: '/logo.svg',
    siteTitle: 'SDD Workshop',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Workshop', link: '/00-introduction' },
      { 
        text: 'Resources',
        items: [
          { text: 'GitHub Spec Kit', link: 'https://github.com/github/spec-kit' },
          { text: 'Microsoft Blog', link: 'https://developer.microsoft.com/blog/spec-driven-development-spec-kit' },
          { text: 'GitHub Blog', link: 'https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/' }
        ]
      }
    ],

    sidebar: [
      {
        text: '📚 Workshop Chapters',
        collapsed: false,
        items: [
          {
            text: '0️⃣ Introduction to SDD',
            link: '/00-introduction',
            collapsed: false,
            items: [
              { text: 'The Power Inversion', link: '/00-introduction#the-power-inversion' },
              { text: 'What is SDD?', link: '/00-introduction#what-is-spec-driven-development' },
              { text: 'The SDD Workflow', link: '/00-introduction#the-sdd-workflow-five-phases' },
              { text: 'Why AI Needs Specs', link: '/00-introduction#why-specs-matter-with-ai-agents' }
            ]
          },
          {
            text: '1️⃣ Setup & Prerequisites',
            link: '/01-setup-prerequisites',
            collapsed: true,
            items: [
              { text: 'Supported AI Agents', link: '/01-setup-prerequisites#supported-ai-agents-choose-one' },
              { text: 'Option A: GitHub Codespaces', link: '/01-setup-prerequisites#option-a-use-github-codespaces-recommended-for-beginners' },
              { text: 'Install Python & uv', link: '/01-setup-prerequisites#step-1-install-python-and-uv' },
              { text: 'Install Spec Kit CLI', link: '/01-setup-prerequisites#step-2-install-spec-kit-cli' },
              { text: 'Initialize Your Project', link: '/01-setup-prerequisites#step-4-initialize-your-first-project' },
              { text: 'Choose Your Project', link: '/01-setup-prerequisites#step-5-choose-your-workshop-project' }
            ]
          },
          {
            text: '2️⃣ The Constitution Phase',
            link: '/02-constitution-phase',
            collapsed: true,
            items: [
              { text: 'What is a Constitution?', link: '/02-constitution-phase#what-is-a-project-constitution' },
              { text: 'Creating Your Constitution', link: '/02-constitution-phase#creating-your-constitution' },
              { text: 'Hands-On Exercise', link: '/02-constitution-phase#hands-on-exercise' }
            ]
          },
          {
            text: '3️⃣ The Specify Phase',
            link: '/03-specify-phase',
            collapsed: true,
            items: [
              { text: 'What Belongs in a Spec', link: '/03-specify-phase#what-belongs-in-a-specification' },
              { text: 'Using /speckit.specify', link: '/03-specify-phase#using-the-speckit-specify-command' },
              { text: 'Clarify with /speckit.clarify', link: '/03-specify-phase#clarifying-your-specification' },
              { text: 'Hands-On Exercise', link: '/03-specify-phase#hands-on-creating-your-specification' }
            ]
          },
          {
            text: '4️⃣ The Plan Phase',
            link: '/04-plan-phase',
            collapsed: true,
            items: [
              { text: 'What is a Plan?', link: '/04-plan-phase#understanding-the-plan-phase' },
              { text: 'Using /speckit.plan', link: '/04-plan-phase#using-the-speckit-plan-command' },
              { text: 'Validate Your Plan', link: '/04-plan-phase#step-5-validate-your-plan' },
              { text: 'Hands-On Exercise', link: '/04-plan-phase#hands-on-creating-your-technical-plan' }
            ]
          },
          {
            text: '5️⃣ The Tasks Phase',
            link: '/05-tasks-phase',
            collapsed: true,
            items: [
              { text: 'Breaking Down Work', link: '/05-tasks-phase#understanding-the-tasks-phase' },
              { text: 'Using /speckit.tasks', link: '/05-tasks-phase#using-the-speckit-tasks-command' },
              { text: 'Analyze with /speckit.analyze', link: '/05-tasks-phase#optional-cross-artifact-analysis-with-speckit-analyze' },
              { text: 'Hands-On Exercise', link: '/05-tasks-phase#hands-on-creating-your-task-list' }
            ]
          },
          {
            text: '6️⃣ The Implementation Phase',
            link: '/06-implement-phase',
            collapsed: true,
            items: [
              { text: 'Using /speckit.implement', link: '/06-implement-phase#using-speckit-implement' },
              { text: 'Implementation Workflow', link: '/06-implement-phase#the-implementation-workflow' },
              { text: 'Code Review', link: '/06-implement-phase#reviewing-ai-generated-code' },
              { text: 'Hands-On Exercise', link: '/06-implement-phase#hands-on-implement-your-first-tasks' }
            ]
          },
          {
            text: '7️⃣ Best Practices',
            link: '/07-best-practices',
            collapsed: true,
            items: [
              { text: 'Best Practices by Phase', link: '/07-best-practices#best-practices-by-phase' },
              { text: 'Common Pitfalls', link: '/07-best-practices#common-pitfalls-and-solutions' },
              { text: 'Advanced Topics', link: '/07-best-practices#advanced-topics' },
              { text: 'Team Collaboration', link: '/07-best-practices#team-collaboration' }
            ]
          },
          {
            text: '8️⃣ Wrap-up & Next Steps',
            link: '/08-wrapup',
            collapsed: true,
            items: [
              { text: 'Workshop Recap', link: '/08-wrapup#what-youve-accomplished' },
              { text: 'Key Takeaways', link: '/08-wrapup#key-takeaways' },
              { text: 'Your Next Steps', link: '/08-wrapup#your-next-steps' },
              { text: 'Resources', link: '/08-wrapup#resources-for-continued-learning' }
            ]
          }
        ]
      }
    ],

    outline: {
      level: [2, 3],
      label: 'On This Page'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/github/spec-kit' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 GitHub'
    },

    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },

    editLink: {
      pattern: 'https://github.com/RoelantD/spec-kit-workshop/edit/main/workshop/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },

    docFooter: {
      prev: 'Previous Chapter',
      next: 'Next Chapter'
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true,
    config: (md) => {
      md.use(taskLists, { enabled: true })
    }
  }
})
