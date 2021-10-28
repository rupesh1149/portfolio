import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function ProjectsPage() {
  return (
    <Layout>
      <h1>Hello from Projects Page</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  );
}
