declare module 'cookieControl' {
  export interface OptionalCookie {
    name: string;
    label: string;
    description: string;
    cookies: string[];
    onAccept: () => void;
    onRevoke: () => void;
  }

  export interface CookieControlConfig {
    apiKey: string;
    product: string;
    optionalCookies: OptionalCookie[];
    position: string;
    theme: string;
  }

  export interface CookieControlStatic {
    load(config: CookieControlConfig): void;
  }

  const CookieControl: CookieControlStatic;

  export default CookieControl;
}
