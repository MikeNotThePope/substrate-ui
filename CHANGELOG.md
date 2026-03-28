# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2026-03-28

### Added

- **Core components**: Card, Badge, Button, Avatar, Drawer, Menu, Tabs, Alert, Dialog, Divider, IconButton, Link, Loader
- **Form primitives**: Input, Textarea, Checkbox, RadioGroup, Select, Switch, Slider, FormLayout
- **Layout components**: Page, SimplePage, TwoColumnLayout, CardGrid, SectionNav, Text
- **Landing page components**: Full SaaS landing page demo with individual demo pages
- **Auth demo pages**: Complete sign-in/sign-up workflow
- **30 components** from neobrutalism-components with stories and demos
- **ThemeToggle** component with hydration-safe light/dark switching
- **Custom theme API** for consumer theming
- **Design tokens**: CSS custom properties for colors, spacing, typography, motion, and responsive grid
- **Semantic status tokens** and full color scales
- **Design system foundations**: design principles, a11y audit, contribution guide
- **Autodocs**, component status matrix, and contribution guidelines
- **Unit tests** for 28+ components with coverage thresholds
- **Visual regression tests** with Playwright
- **Accessibility testing** suite
- **Storybook 10** with co-located stories
- **Library build** via tsup for npm publishing as `@mikenotthepope/substrateui`
- **Demo site** with Next.js App Router
- **Vercel Analytics** integration
- **Pre-commit hooks** (opt-in) with lint, typecheck, and coverage enforcement
- **MIT license**

### Fixed

- Horizontal overflow in Size Scale section on tokens page
- Mobile overflow in quickstart code blocks
- Low-contrast colors and hardcoded color tokens
- CI coverage scoping to ui components

### Changed

- Rebranded color scheme to blue primary with pale-blue/navy page backgrounds
- Renamed project from substrate-ui to substrateui
- Moved source files from `src/` to project root
- Switched docs to use Bun instead of npm
