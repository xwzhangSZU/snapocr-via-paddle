/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Access Token - AIStudio Access Token. Get it from https://aistudio.baidu.com/paddleocr → click API → copy TOKEN value */
  "accessToken": string,
  /** API URL - PaddleOCR API URL (without path). Get it from https://aistudio.baidu.com/paddleocr → click API → copy the base URL from API_URL */
  "apiUrl": string,
  /** Document Orientation Classify - Automatically detect and correct document orientation */
  "useDocOrientationClassify": boolean,
  /** Document Unwarping - Correct perspective distortion in document images */
  "useDocUnwarping": boolean,
  /** Chart Recognition - Recognize and extract text from charts and tables */
  "useChartRecognition": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `quick-ocr` command */
  export type QuickOcr = ExtensionPreferences & {}
  /** Preferences accessible in the `preview-ocr` command */
  export type PreviewOcr = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `quick-ocr` command */
  export type QuickOcr = {}
  /** Arguments passed to the `preview-ocr` command */
  export type PreviewOcr = {}
}

