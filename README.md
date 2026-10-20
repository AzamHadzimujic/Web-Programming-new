# Web-Programming-new

Project for the course IT 2001 - Web Programming (2026/2027).

## Description

A Library Management System. Members can log in, browse the catalog and borrow available books. Each book must be returned within 7 days. Admins add and manage books, authors, categories and members, and track loans and due dates.

## Roles

- **Member:** registers, logs in, borrows books, views their loans and history.
- **Admin:** manages books, authors, categories and members, issues loans and marks books as returned.

## Technology

- Frontend: HTML, CSS, JavaScript, jQuery (SPApp), Bootstrap 5 (Lumen theme)
- Backend: PHP with FlightPHP, PDO, MySQL
- Local server: XAMPP

## Project structure

- `frontend/`: `css/`, `js/`, `views/`, `assets/`
- `backend/`: `routes/`, `services/`, `dao/`, `middleware/`, `config/`, `logs/`
- `docs/`: `ERD.md`, `AI_LOG.md`

## Running locally

1. Place the project in the XAMPP `htdocs` folder and start Apache.
2. Open `http://localhost/<project-folder>/frontend/index.html`.

## Documentation

- Database design (ERD): [docs/ERD.md](docs/ERD.md)
- AI usage log: [docs/AI_LOG.md](docs/AI_LOG.md)
- Rules for AI assistants: [docs/AGENTS.md](docs/AGENTS.md)

## Status

Milestone 1: project structure, static SPA frontend and draft ERD.