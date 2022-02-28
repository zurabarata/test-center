import {
  Links, LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";

import bootstrapMinStylesUrl from "./css/styles.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: bootstrapMinStylesUrl
    },
  ];
};

export const meta: MetaFunction = () => {
  return { title: "Corona TestZentrum" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
