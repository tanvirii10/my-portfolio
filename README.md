# Personal Portfolio Website

A clean, modern, and responsive personal portfolio website designed to showcase academic achievements, skills, projects, and contact information. The project features a fully integrated contact form connected directly to Google Sheets and includes browser-based unit testing via QUnit.

---

## 📑 Table of Contents
- [Features](#-features)
- [Design & Prototype](#-design--prototype)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Step-by-Step Installation Guide (Local Setup)](#-step-by-step-installation-guide-local-setup)
- [How to Run Unit Tests](#-how-to-run-unit-tests)
- [How the Contact Form Works](#-how-the-contact-form-works)
- [Technologies Used](#-technologies-used)

---

## ✨ Features

- **Responsive Layout:** Optimized for desktop, tablet, and mobile viewing with CSS Flexbox and Grid.
- **Google Sheets Contact Integration:** Form submissions are dispatched via JavaScript `fetch()` API directly to a Google Sheet using Google Apps Script.
- **Unit Testing Suite:** Includes isolated unit test cases implemented with QUnit to test form logic without external npm dependencies.
- **Smooth Navigation:** Smooth scrolling behavior integrated across all internal anchor section links.
- **Interactive UI Elements:** Hover effects, structured skill cards, education timelines, and project displays.

---

## 🎨 Design & Prototype

Figma Design Prototype: https://www.figma.com/design/06dEFZqghSfO4zH13CDSDU/Untitled?node-id=0-1&t=lrKlYdygmsRwpCtj-1  
---

## 📁 Project Structure

```text
├── index.html        # Main HTML layout for the portfolio website
├── style.css         # Main stylesheet containing responsive rules and layout styling
├── script.js        # Main JavaScript file handling navigation and form submitting logic
├── test.html         # QUnit unit testing runner and test suite execution
└── README.md         # Comprehensive project documentation
   git clone [