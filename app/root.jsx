import { Outlet, LiveReload, Link, Links, Meta } from 'remix';

import globalStylesUrl from '~/styles/global.css';

export const links = () => [{ rel: 'stylesheet', href: globalStylesUrl }];
export const meta = () => {
  const description = 'A cool blog built with Remix';
  const keywords = 'remix, blog, react, javascript';

  return {
    description,
    keywords,
  };
};
export default function App() {
  return (
    <Document title="Blog App">
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <Links />
        <Meta />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Remix
        </Link>
        <ul className="nav">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <div className="container">{children}</div>
    </>
  );
}
