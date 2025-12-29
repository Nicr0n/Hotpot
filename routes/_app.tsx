import { PageProps } from "fresh";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&family=Noto+Sans+JP:wght@100..900&family=Noto+Sans+SC:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hotpot Probes</title>
      </head>
      <body class="font-sans">
        <NavBar />
        <Component />
        <Footer />
      </body>
    </html>
  );
}
