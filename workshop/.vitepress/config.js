import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-lists'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Spec-Driven Development Workshop",
  description: "A hands-on workshop for building your first spec-driven project with GitHub's Spec Kit toolkit",
  base: '/spec-kit-workshop/',
  
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Spec-Driven Development Workshop' }],
    ['meta', { property: 'og:site_name', content: 'SDD Workshop' }],
    ['meta', { property: 'og:image', content: 'https://spec-kit-workshop.github.io/og-image.png' }],
    ['meta', { property: 'og:url', content: 'https://spec-kit-workshop.github.io/' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    logo: '/logo.svg',
    siteTitle: 'SDD Workshop',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Workshop', link: '/01-introduction' },
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
            text: '1️⃣ Introduction to SDD', 
            link: '/01-introduction',
            collapsed: false,
            items: [
              { text: 'What is SDD?', link: '/01-introduction#what-is-spec-driven-development' },
              { text: 'The Problem with Vibe-Coding', link: '/01-introduction#the-problem-with-vibe-coding' },
              { text: 'Four Phases', link: '/01-introduction#the-four-phases-of-spec-driven-development' }
            ]
          },
          { 
            text: '2️⃣ Setup & Prerequisites', 
            link: '/02-setup-prerequisites',
            collapsed: true,
            items: [
              { text: 'Install VS Code', link: '/02-setup-prerequisites#step-1-install-visual-studio-code' },
              { text: 'Install Python & uvx', link: '/02-setup-prerequisites#step-2-install-python-and-uvx' },
              { text: 'Setup GitHub Copilot', link: '/02-setup-prerequisites#step-3-set-up-github-copilot' },
              { text: 'Install Spec Kit', link: '/02-setup-prerequisites#step-4-install-github-spec-kit' },
              { text: 'Initialize Project', link: '/02-setup-prerequisites#step-5-initialize-your-first-project' }
            ]
          },
          { 
            text: '3️⃣ The Specify Phase', 
            link: '/03-specify-phase',
            collapsed: true,
            items: [
              { text: 'What Belongs in a Spec', link: '/03-specify-phase#what-belongs-in-a-specification' },
              { text: 'Using /specify', link: '/03-specify-phase#using-the-specify-command' },
              { text: 'Hands-On Exercise', link: '/03-specify-phase#hands-on-creating-your-specification' }
            ]
          },
          { 
            text: '4️⃣ The Plan Phase', 
            link: '/04-plan-phase',
            collapsed: true,
            items: [
              { text: 'What is a Plan?', link: '/04-plan-phase#understanding-technical-planning' },
              { text: 'Using /plan', link: '/04-plan-phase#using-the-plan-command' },
              { text: 'Hands-On Exercise', link: '/04-plan-phase#hands-on-creating-your-technical-plan' }
            ]
          },
          { 
            text: '5️⃣ The Tasks Phase', 
            link: '/05-tasks-phase',
            collapsed: true,
            items: [
              { text: 'Breaking Down Work', link: '/05-tasks-phase#understanding-task-breakdown' },
              { text: 'Using /tasks', link: '/05-tasks-phase#using-the-tasks-command' },
              { text: 'Hands-On Exercise', link: '/05-tasks-phase#hands-on-creating-your-task-list' }
            ]
          },
          { 
            text: '6️⃣ The Implementation Phase', 
            link: '/06-implement-phase',
            collapsed: true,
            items: [
              { text: 'Implementation Workflow', link: '/06-implement-phase#the-implementation-workflow' },
              { text: 'Working with AI', link: '/06-implement-phase#understanding-implementation-with-ai' },
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
      },
      {
        text: '🔧 Additional Resources',
        collapsed: true,
        items: [
          { text: 'Improvement Suggestions', link: '/tweak' },
          { text: 'Specifications', link: '/specification/' }
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
      pattern: 'https://github.com/your-username/spec-kit-workshop/edit/main/workshop/:path',
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
