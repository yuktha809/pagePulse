PagePulse

 PagePulse is a lightweight web application that analyzes a webpage and generates a basic SEO and accessibility report.

 It accepts a website URL, fetches the webpage, extracts useful information, and displays the results in a clean interface.

This project was built as part of the **Digital Heroes Internship Qualification Task**.
---

 ## Features:

- Analyze any valid website URL
- Display HTTP Status Code
- Measure Response Time
- Extract Page Title
- Extract Meta Description
- Count H1 Tags
- Count Images Missing Alt Text
- Estimate Word Count
- User-friendly error handling
- Loading indicator while analyzing




## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js

### Libraries

- Axios
- Cheerio
- CORS
---

##  Project Structure

```text
pagePulse/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
├── frontend/
│   ├── index.html
│   └── style.css
│
└── README.md
```
---

#  Installation

## Clone the repository

```bash
git clone <your-github-repository-url>
```

## Open the project

```bash
cd pagePulse
```

## Install backend packages

```bash
cd backend
npm install
```

## Run the server

```bash
node server.js
```

The backend starts at:

```
http://localhost:5000
```

## Run the frontend

Open the **frontend** folder using **Live Server** in VS Code.
---

#  API Documentation

## Endpoint

```
POST /audit
```

### Request

```json
{
    "url": "https://example.com"
}
```

### Success Response

```json
{
    "status": 200,
    "responseTime": "561 ms",
    "title": "Example Domain",
    "metaDescription": "Not Found",
    "h1Count": 1,
    "imagesWithoutAlt": 0,
    "wordCount": 17
}
```

### Error Response

```json
{
    "error": "Invalid URL"
}
```
---

#  Test Cases

| Input | Expected Result | Status |
|-------|-----------------|--------|
| https://example.com | Audit Report | ✅ Pass |
| hello | Invalid URL Error | ✅ Pass |
| Empty Input | Validation Error | ✅ Pass |
| https://developer.mozilla.org | Audit Report | ✅ Pass |
---

#  Design Decisions

### 1. Express.js

Used Express because it is lightweight and suitable for REST APIs.

### 2. Axios

Used Axios because it provides timeout support and better error handling.

### 3. Cheerio

Used Cheerio because it allows easy extraction of HTML elements using jQuery-like syntax.

---

#  AI Usage

I used ChatGPT to learn Node.js, Express.js, Axios, and Cheerio, understand implementation concepts, and assist with debugging. I implemented, tested, and customized the application myself.
---

#  Author

**Yuktha B**

Information Science and Engineering

Nitte Meenakshi Institute of Technology