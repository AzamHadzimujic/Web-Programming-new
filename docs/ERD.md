# Entity Relationship Diagram

## Entities

| Entity | Fields |
|---|---|
| users | id (PK), first_name, last_name, email (unique), password_hash, role, created_at |
| authors | id (PK), name, bio |
| categories | id (PK), name |
| books | id (PK), title, isbn (unique), publication_year, description, cover_url, total_copies, available_copies, author_id (FK), category_id (FK) |
| loans | id (PK), user_id (FK), book_id (FK), loan_date, due_date, return_date |

## Relationships

- authors 1 - N books
- categories 1 - N books
- users 1 - N loans
- books 1 - N loans

## Diagram

```mermaid
erDiagram
    AUTHORS ||--o{ BOOKS : writes
    CATEGORIES ||--o{ BOOKS : groups
    USERS ||--o{ LOANS : borrows
    BOOKS ||--o{ LOANS : "is borrowed in"
    USERS {
        int id PK
        string first_name
        string last_name
        string email UK
        string password_hash
        string role
        timestamp created_at
    }
    AUTHORS {
        int id PK
        string name
        text bio
    }
    CATEGORIES {
        int id PK
        string name
    }
    BOOKS {
        int id PK
        string title
        string isbn UK
        int publication_year
        text description
        string cover_url
        int total_copies
        int available_copies
        int author_id FK
        int category_id FK
    }
    LOANS {
        int id PK
        int user_id FK
        int book_id FK
        date loan_date
        date due_date
        date return_date
    }
```