/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Apple ID - Your Apple ID email for authentication */
  "appleId": string,
  /** Password - Your Apple ID password */
  "password": string,
  /** Download Path - Path to download app files */
  "downloadPath": string,
  /** Homebrew Path - Path to the Homebrew executable. You can enter `which brew` in terminal to find its path. */
  "homebrewPath": string,
  /** ipatool Path - Path to the ipatool executable. You can enter `which ipatool` in terminal to find its path. */
  "ipatoolPath": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search` command */
  export type Search = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search` command */
  export type Search = {}
}

