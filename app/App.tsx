import React from "react";
import { Meta, Scripts, Styles, Routes } from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,100&family=Roboto:wght@300;400&family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
        <Meta />
        <Styles />
      </head>
      <body>
        <div className="corner">
          <img src="/corner.svg" alt="Corner icon" />
        </div>
        <Routes />
        <Scripts />
        <footer>
          <p>Every site needs a footer</p>
          <p>//2020</p>
        </footer>
      </body>
    </html>
  );
}
