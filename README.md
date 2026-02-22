# PaddleOCR

Recognize text from screenshots using [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) API, optimized for Chinese text including handwritten and vertical layouts.

Text recognition is powered by PaddleOCR-VL model via [AIStudio](https://aistudio.baidu.com/paddleocr) cloud API. No local dependencies required.

## Commands

| Command | Description |
|---------|-------------|
| **Quick OCR** | Take a screenshot and copy recognized text to clipboard |
| **Preview OCR** | Take a screenshot and preview recognized text in a detail view |

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

### Optional Settings

| Setting | Description |
|---------|-------------|
| Document Orientation Classify | Auto-detect and correct document orientation |
| Document Unwarping | Correct perspective distortion |
| Chart Recognition | Recognize text from charts and tables |

## Why PaddleOCR?

Compared to macOS built-in Vision OCR (used by ScreenOCR), PaddleOCR provides:

- Better accuracy for **Chinese handwritten text**
- Better support for **vertical Chinese text** layouts
- Superior **document layout parsing** (tables, formulas, charts)
- **Markdown-formatted** output preserving document structure

The trade-off is that it requires an internet connection and API credentials.
