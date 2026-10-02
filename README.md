# Ayurtech Average API

A simple REST API built with Node.js and Express that calculates the running average of all numbers submitted to the API during the current server session.

## Assignment

- Assignment ID: R280926724P
- Deal Name: AYU0926PEND01

## Features

- REST API using Node.js and Express
- POST `/average` endpoint
- Calculates the running average of all valid numbers received
- Input validation
- Automated unit tests
- API tests using Supertest
- JSDoc comments
- Git hooks using Husky
- Conventional Commit enforcement using Commitlint

## Technologies Used

- Node.js
- Express.js
- Jest
- Supertest
- Husky
- Commitlint

## Project Structure

```text
ayurtech-average-api/
│
├── src/
│   ├── app.js
│   ├── average.js
│   └── server.js
│
├── test/
│   ├── app.test.js
│   └── average.test.js
│
├── .husky/
│   ├── commit-msg
│   └── pre-commit
│
├── .gitignore
├── commitlint.config.js
├── package.json
├── package-lock.json
└── README.md