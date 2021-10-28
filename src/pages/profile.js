import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function ProfilePage() {
  return (
    <Layout>
      <h1>Hello from Profile Page</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  );
}
