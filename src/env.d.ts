/// <reference path="../.astro/types.d.ts" />
// <reference types="astro/client" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_KEY: string;
  readonly CAPTCHA_SECRET: string;
}

interface ImportaMeta {
  readonly env: ImportMetaEnv;
}
