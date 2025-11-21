# 📦 Server-Side Application Example — TypeScript + DDD + Functional Programming

This repository provides an example of how to build a **server-side application** using **TypeScript**, following **Domain-Driven Design (DDD)** principles combined with a **functional programming** approach.

The project follows a **package-by-feature architecture**, where each feature encapsulates its own domain, DTOs, controllers, and handlers. Currently, the repository includes the **Users module** as a reference implementation.

---

## 🚀 Technologies & Concepts Used

* **TypeScript** — static typing for safer, predictable development
* **Domain-Driven Design (DDD)** — clear domain boundaries and domain-focused code organization
* **Functional Programming** — pure functions, immutability, and explicit data transformations
* **Package-by-Feature Architecture** — features grouped by domain instead of technical layers

---

## 🧱 Project Structure

The project structure is organized by domain feature.
Here is the current structure based on the **Users module**:

```
src/
└── Modules/
    ├── SeedWork/
    │   └── ...shared domain utilities, base types
    │
    └── Users/
        ├── Controllers/
        │   └── ...HTTP controllers for user routes
        │
        ├── Domain/
        │   └── ...entities, value objects, Derivers, Invariants
        │
        ├── DTOs/
        │   └── ...data transfer objects used across use cases and controllers
        │
        └── Handlers/
            └── ...application handlers
```

This layout isolates each module’s responsibilities while keeping domain logic separate from HTTP and application-level code.

---

## 📥 Installation

```bash
npm install
# or
yarn install
```

---

## ▶️ Running the Application

Development:

```bash
npm run dev
```


## 🧪 Testing

```bash
npm test
```

---

## 🎯 Purpose of This Example

This repository aims to demonstrate:

* Practical application of DDD in TypeScript
* How functional programming helps reduce side effects and increase predictability
* How to structure server-side applications using **package-by-feature**
* A complete reference of a feature module (Users)
