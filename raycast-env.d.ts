/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Apple ID Email - Your Apple ID email for authentication */
  "appleId"?: string,
  /** Apple ID Password - Your Apple ID password for authentication */
  "password"?: string,
  /** App Downloads - Enable ipatool integration to download .ipa files. */
  "enableAppDownloads": boolean,
  /** Download location - Path to save downloaded app files and screenshots */
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

