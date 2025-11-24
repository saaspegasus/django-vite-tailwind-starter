Django + Vite + Tailwind CSS Starter
====================================

A Django starter project with a full-featured Vite (JavaScript / CSS) pipeline integrated.

Technologies:

- **[Django](https://www.djangoproject.com/)** - The Python web framework
- **[Vite](https://vite.dev/)** - Front end build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - CSS framework
- **[django-vite](https://github.com/MrBin99/django-vite)** - Integrates Django and Vite, with hot module replacement (HMR) support
- **[React](https://react.dev/)** (Optional) - Demonstrating how you can add a UI library and JSX support

This project is the working companion piece to **[Modern JavaScript for Django Developers (Part 3): Adding Vite to Django, so you can use Modern JavaScript, React, and Tailwind CSS](https://www.saaspegasus.com/guides/modern-javascript-for-django-developers/integrating-javascript-pipeline-vite/)** - a detailed guide on how to set up a modern front-end pipeline in Django.
There is also a [video walkthrough](https://youtu.be/GztJ1h6ZXA0).

This repo is intentionally *bare*, combining the ouput of `django-admin startproject` with a minimal,
functional Vite setup to use Tailwind and (optionally) React with no other clutter.
You can use it for learning or as a foundation to build off of.

**If you're looking for a full-featured SaaS Starter Kit for Django, check out [SaaS Pegasus](https://www.saaspegasus.com/?via=vite-readme).**

## Features

- ✅ Vite environment ready to be integrated with Django templates
- ✅ Tailwind CSS with automatic class pruning
- ✅ Hot Module Replacement (HMR) for instant updates during development
- ✅ Example demonstrating a React + Tailwind + Django integration (in a [hybrid architecture](https://www.saaspegasus.com/guides/modern-javascript-for-django-developers/client-server-architectures/#enter-the-hybrid-architecture))
- ✅ Vibe-coded landing page showcasing Tailwind usage.

## Prerequisites

- **Python 3.12+**
- **Node.js 18+** and npm
- **uv** (recommended) or pip for Python package management

## Installation

### 1. Clone and set up Python environment

```bash
# Install Python dependencies
uv sync
# or with pip:
# pip install .
```

### 2. Install JavaScript dependencies

```bash
npm install
```

### 3. Run Django migrations

```bash
uv run python manage.py migrate
# or: python manage.py migrate
```

## Development

For development, you'll need to run both Django and Vite simultaneously.
You can use the `./scripts.dev.sh` file to do this in a single command:

```bash
./scripts/dev.sh
```

Alternatively, run the processes separately as follows:


### Terminal 1: Django development server

```bash
uv run python manage.py runserver
# or: python manage.py runserver
```

This starts Django at `http://localhost:8000`

### Terminal 2: Vite development server

```bash
npm run dev
```

This starts Vite's dev server, which serves your JavaScript and CSS (in dev)
and watch for changes.

### View the demo

Once both servers are running, visit:

- **http://localhost:8000/** - Basic landing page showing Tailwind usage
- **http://localhost:8000/hello-vite/** - Demo page with minimal React + Tailwind app.

You can edit files in `./assets/` and see changes reflected instantly in your browser!

## Production Build

To build static assets for production:

```bash
npm run build
```

This will:
- Bundle and minify your JavaScript
- Process and optimize your CSS with Tailwind
- Output production-ready files to `./static/js/` and `./static/css/`

For production deployment, set `DJANGO_VITE["default"]["dev_mode"] = False` in your Django settings or environment
to use the built static files instead of the Vite dev server.

## Project Structure

```
.
├── assets/                  # Front-end source files
│   ├── hello.jsx            # React component example
│   ├── index.js             # Vanilla JS example
│   └── style.css            # Tailwind CSS entry point
├── static/                  # Built front-end assets (generated)
│   ├── css/
│   ├── js/
│   └── manifest.json
├── templates/               # Django templates
│   └── hello_vite.html      # Example template using Vite assets
├── project/                 # Django project settings
│   ├── settings.py
│   └── urls.py
├── vite.config.js           # Vite configuration
├── package.json             # Node.js dependencies
└── pyproject.toml           # Python dependencies
```

## Learn More

For a detailed walkthrough of how this all works, including step-by-step setup instructions, read the companion guide:

**[Modern JavaScript for Django Developers - Part 3: Adding Vite to Django, so you can use Modern JavaScript, React, and Tailwind CSS](https://www.saaspegasus.com/guides/modern-javascript-for-django-developers/integrating-javascript-pipeline-vite/)**

## License

MIT
