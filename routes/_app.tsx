import { PageProps } from "fresh";
import NavBar from "../components/NavBar.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html data-theme="">
      <head>
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
