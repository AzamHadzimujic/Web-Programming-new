# AGENTS.md

## Project
Library Management System: a web application for managing a book collection, where members browse the catalog, borrow and reserve books, and admins manage books, members and loans.
Roles: admin, member. Entities: users, books, authors, loans, categories.

## Technology stack
- Frontend: HTML, CSS, JavaScript, jQuery, Bootstrap 5 (Lumen theme from CDN), Bootstrap Icons, single-page application (SPA) using jQuery SPApp
- Backend: PHP with FlightPHP (REST API), PDO, MySQL
- Local server: XAMPP

## Folder structure
- frontend/: css/, js/, views/ (one HTML file per view), assets/
- backend/: routes/, services/, dao/, middleware/, config/, logs/
- docs/: AI_LOG.md for logging and ERD.md for the Database Schema

## Frontend rules
- Each view is in its own file in frontend/views/.
- Use Bootstrap 5 classes; avoid inline styles.
- frontend/index.html is the only full HTML document: navbar, <main id="spapp">, footer and all CDN links.
- Each page is a <section id="..." data-load="views/....html"> in index.html. Navbar links are hash links (#catalog) matching the section id.
- Views are HTML fragments: no <html>, <head> or <body>, and no inline <script> tags.
- Routing is configured in frontend/js/app.js ($.spapp with defaultView "home" and templateDir "./"). Add app.route() only when a view needs onCreate/onReady code.
- Page-specific JavaScript goes in frontend/js/. Custom CSS goes in frontend/css/style.css; do not edit frontend/css/spapp.css.
- Use only Bootstrap classes and Bootstrap Icons. Do not add the default Bootstrap CSS next to the Lumen theme.

## Backend rules
- Requests go: route -> service -> DAO -> database.
- Only services call DAO classes. Routes never call DAO classes directly.
- All SQL uses PDO prepared statements.
- Routes return JSON with correct HTTP status codes.

## Conventions
- PHP classes: PascalCase (UserService, UserDao). Files are named after the class.
- JavaScript and PHP variables: camelCase. Database tables and columns: snake_case.

## Rules for AI assistants
- Do not add new libraries or frameworks without asking me first.
- Do not change the database schema without asking me first. The entities and relationships are defined in docs/ERD.md.
- Never put passwords, keys or secrets in code; they belong in backend/config/config.php,
  which is not committed.
- Do not edit files in backend/logs/.
- Make small changes and explain what you changed and why.
- After every task, append an entry to docs/AI_LOG.md: date, my request, files changed, and anything left unfinished.