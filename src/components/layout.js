import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Seo } from './seo';

import Navbar from './navbar';
import '../styles/global.css';

export default function Layout({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const meta = data?.site?.siteMetadata ?? {};
  return (
    <>
      <div>
        <Seo
          title={title}
          description={description}
          image={image}
          path={path}
        />
        <header>
          <Navbar title={meta.title} />
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}
