import React from "react";

export function meta() {
  return {
    title: "Firebase & Remix",
    description: "How to get started"
  };
}

export function headers() {
  return {
    "cache-control": "public, max-age=3600, s-max-age=86400",
  };
}

export default function Index() {
  return (
    <article className="container">

      <section className="hero">
        <h1>
          Firebase & Remix
        </h1>
        <h4>
          Now with extra TypeScript!
        </h4>
      </section>

      <div className="content-grid">

        <nav>
          <a className="button button-light" href="https://github.com/davideast/remix-starter-firebase" rel="noopener" target="blank">
            GitHub
          </a>
          <a className="button" href="https://firebase.google.com/docs/hosting/functions" rel="noopener" target="blank">
            Firebase Docs
          </a>
        </nav>

        <section>
          <h3>What are the build & deploy commands?</h3>
          <div className="code-block">
            <div>
              npm run dev <span className="bold"># develop</span>     
            </div>
            <div>
              npm run build <span className="bold"># build</span>
            </div>
            <div>
              npm run deploy <span className="bold"># deploy</span>
            </div>
          </div>
        </section>

        <section>
          <h3>How does it work?</h3>
          <p>
            Firebase serves your Remix app with Firebase Hosting for static assets and Cloud Functions for the Remix server. Remix’s focus on caching works perfect with this system. The <code>cache-control</code> header controls how long Firebase Hosting will cache the content in the CDN before having to run the server function again.
          </p>
          
          {/* This is so ugly but it's fast, so there's that */}
          <div className="code-block" style={{marginTop: '16px'}}>
            <div>export function headers() {'{'}</div>
            <div>&nbsp;&nbsp;return {'{'}</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;"cache-control": "public, max-age=3600, s-max-age=86400",</div>
            <div>&nbsp;&nbsp;{'}'};</div>
            <div>{'}'}</div>
          </div>
        </section>

        <section>
          <h3>What do I need to know about the config?</h3>
          <p>
            Firebase Hosting deploys the static assets located in the <code>public</code> directory. The main entry in <code>package.json</code> is set to <code>build/index.js</code> which is Cloud Functions will run when deployed. The <code>functions/index.ts</code> will compile to the <code>build/index.js</code> file.
          </p>
        </section>

      </div>

    </article>
  );
}
