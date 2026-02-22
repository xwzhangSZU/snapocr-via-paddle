# PaddleOCR

Recognize text from screenshots using [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) API, optimized for Chinese text including handwritten and vertical layouts.

Text recognition is powered by PaddleOCR-VL model via [AIStudio](https://aistudio.baidu.com/paddleocr) cloud API. No local dependencies required.

## Commands

| Command | Description |
|---------|-------------|
| **Quick OCR** | Take a screenshot and copy recognized text to clipboard |
| **Preview OCR** | Take a screenshot and preview recognized text in a detail view |

## Features

### Advanced OCR Capabilities

PaddleOCR-VL goes beyond simple text extraction. Enable optional features in extension preferences to handle complex documents:

- **Document Orientation Classify** — Automatically detects and corrects documents rotated at 0°/90°/180°/270°. Perfect for photos of documents taken at odd angles.
- **Document Unwarping** — Corrects perspective distortion from curved or tilted documents. Great for book pages, receipts, and whiteboard photos.
- **Chart Recognition** — Extracts structured data from charts, tables, and diagrams, converting them into readable text and Markdown tables.

### Markdown-Formatted Output

Unlike plain-text OCR, PaddleOCR preserves document structure in the output:
- Headings, lists, and paragraphs maintain their hierarchy
- Tables are converted to Markdown table format
- Mathematical formulas are preserved
- Copy as plain text or Markdown from the Preview OCR view

## Why PaddleOCR over Local OCR?

| Feature | PaddleOCR (this extension) | macOS Vision (ScreenOCR) |
|---------|---------------------------|--------------------------|
| Chinese handwritten text | Excellent | Limited |
| Vertical Chinese text | Excellent | Limited |
| Document layout parsing | Tables, formulas, charts | Text only |
| Output format | Structured Markdown | Plain text |
| Orientation correction | Built-in | Manual |
| Perspective unwarping | Built-in | Not available |
| Privacy | Cloud API | Local processing |
| Internet required | Yes | No |

## Setup

You need a free AIStudio account to get the API credentials.

### 1. Get API URL and Access Token

1. Visit [https://aistudio.baidu.com/paddleocr](https://aistudio.baidu.com/paddleocr)
2. Log in with your Baidu account (sign up if needed)
3. Click the **"API"** button on the page
4. In the example code, find:
   - `API_URL` — copy the base URL part (e.g. `https://xxx.aistudio-app.com`, without `/layout-parsing`)
   - `TOKEN` — copy the token string

### 2. Configure the Extension

Open Raycast → search "Quick OCR" or "Preview OCR" → you'll be prompted to enter:

| Setting | Value |
|---------|-------|
| **Access Token** | The `TOKEN` value from step 1 |
| **API URL** | The base URL from `API_URL` (e.g. `https://xxx.aistudio-app.com`) |
