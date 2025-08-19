## Project Structure

```
quizapp/
├── readme.md                  # Project overview and documentation
├── apps/                      # Main application code (mobile and web)
│   ├── mobile/                # React Native mobile app
│   │   ├── app.json           # Expo app configuration
│   │   ├── App.tsx            # Main entry point for the mobile app
│   │   ├── eas.json           # Expo Application Services config
│   │   ├── fontawesome.css    # FontAwesome icon styles
│   │   ├── global.css         # Global CSS for mobile app
│   │   ├── global.d.ts        # TypeScript global type definitions
│   │   ├── index.tsx          # App bootstrap file
│   │   ├── index.web.tsx      # Web entry point for mobile app
│   │   ├── metro.config.js    # Metro bundler configuration
│   │   ├── package-lock.json  # NPM package lock file
│   │   ├── package.json       # NPM dependencies and scripts
│   │   ├── tsconfig.json      # TypeScript configuration
│   │   ├── README.md          # Mobile app documentation
│   │   ├── assets/            # Static assets (images, icons)
│   │   │   └── images/        # App icons and splash images
│   │   ├── caches/            # Metro cache files (build cache)
│   │   ├── patches/           # Patch files for dependencies
│   │   ├── polyfills/         # Polyfills for platform-specific features
│   │   │   ├── native/        # Native polyfills (e.g., TextInput)
│   │   │   ├── shared/        # Shared polyfills (e.g., image handling)
│   │   │   └── web/           # Web polyfills (browser APIs)
│   │   ├── public/            # Public static files (e.g., WASM)
│   │   ├── src/               # Source code for mobile app
│   │   │   ├── app/           # App screens and navigation
│   │   │   │   ├── +not-found.tsx   # 404 page for app
│   │   │   │   ├── index.jsx        # Main app screen
│   │   │   │   ├── _layout.jsx      # Layout component
│   │   │   │   └── (tabs)/          # Tab navigation screens
│   │   │   │       ├── categories.jsx   # Categories tab
│   │   │   │       ├── home.jsx         # Home tab
│   │   │   │       ├── profile.jsx      # User profile tab
│   │   │   │       ├── progress.jsx     # Progress tracking tab
│   │   │   │       ├── _layout.jsx      # Tab layout
│   │   │   │       ├── quiz/            # Quiz screens (contents not found)
│   │   │   │       └── results/         # Results screens (contents not found)
│   │   │   ├── components/         # Reusable UI components
│   │   │   │   └── KeyboardAvoidingAnimatedView.jsx # Keyboard handling component
│   │   │   ├── utils/              # Utility functions and hooks
│   │   │   │   ├── useHandleStreamResponse.js # Stream response handler
│   │   │   │   ├── usePreventBack.js         # Prevent back navigation
│   │   │   │   └── useUpload.js              # File upload hook
│   │   │   └── __create/            # Internal utilities and polyfills
│   │   │       ├── fetch.ts         # Fetch API wrapper
│   │   │       ├── placeholder.svg  # Placeholder SVG asset
│   │   │       └── polyfills.ts     # Polyfills for missing features
│   │   └── __create/                # Error boundaries and reporting
│   │       ├── consoleToParent.ts           # Console output to parent
│   │       ├── DeviceErrorBoundary.tsx      # Device error boundary
│   │       ├── handle-resolve-request-error.js # Error handler
│   │       ├── report-error-to-remote.js    # Remote error reporting
│   │       ├── reset.css                   # CSS reset
│   │       └── SharedErrorBoundary.tsx     # Shared error boundary
│   └── web/                    # Web app (React, Vite)
│       ├── bun.lock            # Bun package lock file
│       ├── package.json        # Web app dependencies and scripts
│       ├── postcss.config.js   # PostCSS configuration
│       ├── react-router.config.ts # React Router config
│       ├── tailwind.config.js  # Tailwind CSS config
│       ├── tsconfig.json       # TypeScript config
│       ├── vite.config.ts      # Vite build config
│       ├── vitest.config.ts    # Vitest test config
│       ├── plugins/            # Vite/React plugins
│       │   ├── addRenderIds.ts         # Add render IDs to components
│       │   ├── aliases.ts              # Path aliases
│       │   ├── console-to-parent.ts    # Console output plugin
│       │   ├── layouts.ts              # Layout plugin
│       │   ├── loadFontsFromTailwindSource.ts # Load fonts from Tailwind
│       │   ├── nextPublicProcessEnv.ts # Next.js public env plugin
│       │   ├── restart.ts              # Restart plugin
│       │   └── restartEnvFileChange.ts # Restart on env file change
│       ├── src/                # Web app source code
│       │   ├── auth.js                 # Auth logic
│       │   ├── client.d.ts             # Client type definitions
│       │   ├── global.d.ts             # Global type definitions
│       │   ├── index.css               # Global styles
│       │   ├── app/                    # App screens (details not listed)
│       │   ├── client-integrations/    # Client integration utilities
│       │   │   ├── create.js           # Create integration
│       │   │   ├── useAuth.js          # Auth hook
│       │   │   ├── useHandleStreamResponse.js # Stream response handler
│       │   │   ├── useUpload.js        # Upload hook
│       │   │   └── useUser.js          # User hook
│       │   ├── utils/                  # Utility functions
│       │   │   ├── chakra-ui.jsx       # Chakra UI integration
│       │   │   ├── pdfjs.js            # PDF.js integration
│       │   │   ├── react-google-maps.jsx # Google Maps integration
│       │   │   ├── react-markdown.jsx  # Markdown rendering
│       │   │   ├── recharts.jsx        # Charting library
│       │   │   └── shadcn-ui.jsx       # Shadcn UI integration
│       │   └── __create/               # Internal utilities
│       │       ├── fetch.ts            # Fetch API wrapper
│       │       ├── placeholder.svg     # Placeholder SVG asset
│       │       └── polyfills.ts        # Polyfills for missing features
│       ├── test/               # Test setup and files
│       │   └── setupTests.ts   # Test environment setup
│       └── __create/           # Internal utilities and adapters
│           ├── adapter.ts              # Adapter utility
│           ├── get-html-for-error-page.ts # Error page HTML generator
│           ├── index.ts                # Entry point
│           ├── is-auth-action.ts       # Auth action checker
│           ├── route-builder.ts        # Route builder utility
│           └── @auth/                  # Auth-related utilities
│               └── create.js           # Auth creation logic
```
