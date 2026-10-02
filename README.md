# Ayurtech Average API

A simple REST API built with Node.js and Express that calculates the running average of all numbers submitted to the API during the current server session.

## Assignment

- **Assignment ID:** R280926724P
- **Deal Name:** AYU0926PEND01

## Features

- REST API using Node.js and Express
- `POST /average` endpoint
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
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Aathibagawan/ayurtech-average-api-nodejs.git
```

Navigate to the project directory:

```bash
cd ayurtech-average-api-nodejs
```

Install the dependencies:

```bash
npm install
```

## Run the Server

Start the server using:

```bash
npm start
```

The server will start at:

```text
http://localhost:3000
```

Expected output:

```text
Server running on http://localhost:3000
```

## API

### POST `/average`

Adds a number to the running collection and returns the average of all numbers received so far during the current server session.

### Request

```http
POST /average
Content-Type: application/json
```

Request body:

```json
{
  "number": 10
}
```

### Response

```json
{
  "average": 10
}
```

If another request is sent:

```json
{
  "number": 20
}
```

The response will be:

```json
{
  "average": 15
}
```

Another request:

```json
{
  "number": 30
}
```

Response:

```json
{
  "average": 20
}
```

The calculation is:

```text
(10 + 20 + 30) / 3 = 20
```

## Client Usage

The API can be called using PowerShell, cURL, or Postman.

### PowerShell

Start the server:

```powershell
npm start
```

Keep the server running and open another terminal.

Send the first request:

```powershell
Invoke-RestMethod `
    -Uri "http://localhost:3000/average" `
    -Method POST `
    -ContentType "application/json" `
    -Body '{"number":10}'
```

Example response:

```text
average
-------
10
```

Send another number:

```powershell
Invoke-RestMethod `
    -Uri "http://localhost:3000/average" `
    -Method POST `
    -ContentType "application/json" `
    -Body '{"number":20}'
```

Example response:

```text
average
-------
15
```

### cURL

```bash
curl -X POST http://localhost:3000/average \
  -H "Content-Type: application/json" \
  -d "{\"number\":10}"
```

Example JSON response:

```json
{
  "average": 10
}
```

### Postman

1. Start the server using `npm start`.
2. Create a new `POST` request.
3. Enter:

```text
http://localhost:3000/average
```

4. Select **Body → raw → JSON**.
5. Enter:

```json
{
  "number": 10
}
```

6. Send the request.

## Validation

The API accepts finite numbers only.

Invalid examples include:

### String

```json
{
  "number": "hello"
}
```

### Missing number

```json
{}
```

### Null

```json
{
  "number": null
}
```

For invalid input, the API returns HTTP `400`:

```json
{
  "error": "number must be a valid number"
}
```

## Testing

Run all tests using:

```bash
npm test
```

The project contains:

- Unit tests for the average calculation
- API tests for `POST /average`
- Input validation tests
- Decimal number tests
- Negative number tests
- Reset functionality tests

Current test result:

```text
Test Suites: 2 passed, 2 total
Tests:       8 passed, 8 total
```

## Git Hooks

This project uses **Husky** for Git hooks.

The `pre-commit` hook runs the test suite before a commit.

The `commit-msg` hook uses **Commitlint** to enforce Conventional Commits.

### Valid commit examples

```text
feat: add average API
fix: validate request body
test: add API tests
docs: update README
chore: configure git hooks
```

Invalid commit messages are automatically rejected.

## Conventional Commits

This project follows the Conventional Commits format:

```text
<type>: <description>
```

Example:

```text
feat: add average API
```

The format is enforced automatically using Git hooks and Commitlint.

## Important Note

The running average is maintained **in memory**.

If the server is restarted, the stored numbers and average are reset.

A database is not required because the assignment only requires maintaining the numbers during the current server session.

## Repository

GitHub:

https://github.com/Aathibagawan/ayurtech-average-api-nodejs

## License

ISC