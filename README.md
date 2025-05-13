# 📝 Developer Profile Submission Portal

This project provides interface to collect developer profile data for Sara's team:  
1. A **web-based form**
---

## 📌 Submission Options

### 1. 🌐 Web Form  
- **URL:** `https://yourdomain.com/`  
- **Method:** `POST` (handled by internal frontend script)

### 2. 📦 JSON Upload API  
- **URL:** `https://yourdomain.com/api/profiles`  
- **Method:** `POST`  
- **Content-Type:** `application/json`  
- **Headers:**  
  ```
  x-api-key: your-secret-key
  ```

---

## 🧾 Field Definitions

| Field                   | Type        | Required | Description                                                                 |
|------------------------|-------------|----------|-----------------------------------------------------------------------------|
| `fullName`             | `string`    | ✅ Yes   | Full name of the developer                                                  |
| `email`                | `string`    | ✅ Yes   | Must be a valid email format                                                |
| `spokenLanguages`      | `string[]`  | ✅ Yes   | One or more spoken languages (e.g., `["English", "Hindi"]`)                 |
| `codingLanguages`      | `object`    | ✅ Yes   | Key-value pairs of language and proficiency (`"Python": "intermediate"`)    |
| `yearsExperience`      | `integer`   | ✅ Yes   | Number of years of total development experience                             |
| `blockchainExperience` | `string`    | ✅ Yes   | One of: `none`, `beginner`, `intermediate`, `advanced`                      |

---

## ✅ Allowed Values / Formats

### `email`
- Must be valid email (e.g. `name@example.com`)

### `spokenLanguages`
- Must be a non-empty array
- Example: `["English", "French"]`

### `codingLanguages`
- Object with keys as language names, values as proficiency level
- Valid proficiency values:
  - `"beginner"`
  - `"intermediate"`
  - `"advanced"`

### `yearsExperience`
- Must be an integer ≥ 0

### `blockchainExperience`
- Must be one of the following:
  - `"none"`
  - `"beginner"`
  - `"intermediate"`
  - `"advanced"`

---

## 📁 Sample JSON File

```json
{
  "fullName": "Aditi Sharma",
  "email": "aditi.sharma@example.com",
  "spokenLanguages": ["English", "Hindi"],
  "codingLanguages": {
    "JavaScript": "advanced",
    "Python": "intermediate",
    "Solidity": "beginner"
  },
  "yearsExperience": 4,
  "blockchainExperience": "intermediate"
}
```

---

## 🔐 Authentication

All `POST` requests to `/api/profiles` must include:

```http
Header:
x-api-key: your-secret-key
```

Replace `your-secret-key` with your actual API key provided to team members.

---

## ⚙️ Tech Stack

- **Frontend:** HTML5, Vanilla JS (form validation and dynamic fields)
- **Backend:** Node.js (Express), Prisma ORM, PostgreSQL (or MySQL)
- **Security:** Basic API Key authentication

---

## 📂 Project Structure

```
project-root/
├── public/
│   ├── index.html         # Web form UI
│   ├── style.css          # Form styling
│   └── script.js          # Client-side JS for validation & submit
├── prisma/
│   └── schema.prisma      # Prisma DB schema
├── src/
│   └── server.js          # Express backend
├── README.md
└── .env                   # Environment variables (DB, API Key)
```