# GiT Team Workflow Template

This is a template designed for team collaboration within the GiT workflow. 
It is built with React, Vite, Tailwind CSS, ShadCN UI, and TypeScript.

## How to Use

Each team member will be assigned their own folder within the `pages/` directory, or they can add their own new `/pages/their_pages/page.tsx`. 
The structure is organized such that each team member can work on a specific page or feature without interfering with others.

### Example Page Format

To add a page, simply create a new component following this basic format:

```tsx
const UnoPage: React.FC = () => {
  return <div>This is Uno Page</div>;
};
export default UnoPage;
```

Each new page should be placed in its respective folder within the `pages/` directory, like so:

```
src/
├── layouts/
│   └── Layout.js
├── pages/
│   ├── uno/
│   │   └── page.js
│   ├── dos/
│   │   └── page.js
│   └── tree/
│       └── page.js
├── App.jsx
└── main.jsx
```

### Monitoring and Collaboration

Team leaders can monitor their team's work directly from the root directory. This allows for easier collaboration and visibility on progress across the project.

### Resolving Git Issues

In case of any issues during the Git workflow, the structure of this project allows for easy resolution. Each team member's work is contained within their assigned pages, reducing the chances of conflicts, and enabling quick issue-solving in case something arises.

---

This template is designed to streamline team collaboration and improve workflow efficiency. Enjoy working together and building great projects!

### Key Points:
- **Team Collaboration**: Each team member works in their own directory inside `pages/`, which minimizes conflicts and makes the process smoother.
- **Easy Monitoring**: The team leader can directly check the results from the root, making it easier to review progress and contributions.
- **Issue Resolution**: With this structure, resolving Git-related issues becomes simpler, as each member's changes are isolated in their specific pages/folders.
