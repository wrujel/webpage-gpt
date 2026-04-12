<div align='center'>

  [![demo][demo]][demo-link]
  [![status][status]][status-link]
  [![test][tests]][tests-link]

</div>

<div align='center'>
  <a href='/'>
    <img
      src='/public/screenshot.png'
      alt='Screenshot of the app'
      width='100%'
    />
  </a>
</div>

<div align='center'>
  <h1>GPT-4o Landing Page with React</h1>
</div>

<div align='center'>

  [![React][react]][react-link]
  [![Vite][vite]][vite-link]
  [![JavaScript][javascript]][javascript-link]
  [![CSS][css]][css-link]
  [![HTML][html]][html-link]
  [![React Icons][react-icons]][react-icons-link]

</div>

<div align='center'>
  Modern landing page for GPT-4o built with React and Vite, featuring a sleek dark UI with gradient accents, responsive design, and multiple content sections including blog, features, and call-to-action.

  [Demo]({{DEMO_URL}}) · [Report issue](/issues) · [Suggest something](/issues)
</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running locally](#running-locally)
  - [Build](#build)
- [Project Structure](#project-structure)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)

## Features

- [x] Modern dark-themed UI with gradient text and backgrounds
- [x] Fully responsive design with mobile-first breakpoints
- [x] Animated hamburger navigation menu for mobile devices
- [x] Hero section with email signup call-to-action
- [x] Brand showcase section with partner logos (Google, Slack, Atlassian, Dropbox, Shopify)
- [x] GPT-4o information section with feature cards
- [x] Possibilities section highlighting AI use cases
- [x] Features section with customizable response cards
- [x] Blog section with article cards in grid layout
- [x] Call-to-action section with gradient background
- [x] Footer with navigation links and copyright
- [x] CSS animations (scale-up-center, scale-up-tr)
- [x] Component-based architecture with reusable components
- [x] ESLint configured for code quality

## Tech Stack

- [React 18](https://react.dev/)
- [Vite 5](https://vite.dev/)
- [JavaScript (ES Modules)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS3 (Custom Properties)](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [React Icons](https://react-icons.github.io/react-icons/)
- [ESLint](https://eslint.org/)

## Getting Started

### Prerequisites

- Node.js 18+ (or Bun)
- bun (lockfile detected: `bun.lockb`)

### Installation

```bash
git clone https://github.com/wrujel/webpage-gpt.git
cd webpage-gpt
bun install
```

### Running locally

```bash
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### Build

```bash
bun run build
```

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `bun install`     | Installs dependencies                        |
| `bun run dev`     | Starts local dev server at `localhost:5173`  |
| `bun run build`   | Build your production site to `./dist/`      |
| `bun run preview` | Preview your build locally, before deploying |
| `bun run lint`    | Run ESLint to check code quality             |

## Project Structure

```
/
├── public/
│   └── screenshot.png
├── src/
│   ├── assets/
│   │   ├── ai.webp
│   │   ├── blog01-05.webp
│   │   ├── logo.svg
│   │   ├── people.png
│   │   ├── possibility.webp
│   │   └── (brand logos)
│   ├── components/
│   │   ├── article/
│   │   ├── brand/
│   │   ├── cta/
│   │   ├── feature/
│   │   ├── navbar/
│   │   └── index.js
│   ├── containers/
│   │   ├── blog/
│   │   ├── features/
│   │   ├── footer/
│   │   ├── info/
│   │   ├── main/
│   │   ├── possibility/
│   │   └── index.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── bun.lockb
```

## Demo

You can check out the demo:

[![Demo][demo]][demo-link]

## Contributing

Contributions are welcome! If you have suggestions or find bugs, please open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

---

<!-- Badges -->
[demo]: https://img.shields.io/badge/🚀%20Live%20Demo-Click%20Here-FF4820?style=for-the-badge
[status]: https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fwrujel%2Fmonitor-repos%2Fmain%2Fdata%2Fwebpage-gpt.json
[tests]: https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fwrujel%2Fmonitor-tests%2Fmain%2Fdata%2Fwebpage-gpt.json
[react]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[javascript]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[css]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[html]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[react-icons]: https://img.shields.io/badge/React--Icons-20232A?style=for-the-badge&logo=react&logoColor=61DAFB

<!-- Badge links -->
[demo-link]: https://webpage-gpt-wrujels-projects.vercel.app/
[status-link]: https://github.com/wrujel/monitor-repos
[tests-link]: https://github.com/wrujel/monitor-tests
[react-link]: https://react.dev/
[vite-link]: https://vite.dev/
[javascript-link]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[css-link]: https://developer.mozilla.org/en-US/docs/Web/CSS
[html-link]: https://developer.mozilla.org/en-US/docs/Web/HTML
[react-icons-link]: https://react-icons.github.io/react-icons/
