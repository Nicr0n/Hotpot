import { PageProps } from "fresh";
import NavBar from "../components/NavBar.tsx";

const themeLoaderScript = `(function() {
  try {
    const storedTheme = localStorage.getItem('hotpot_theme');
    if (storedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (storedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  } catch (e) {
    console.error('Failed to load theme:', e);
  }
})();`;

export default function App(
  { Component }: PageProps,
) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeLoaderScript }}
        />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hotpot Probes</title>
      </head>
      <body>
        <NavBar />
        <Component />
      </body>
    </html>
  );
}
