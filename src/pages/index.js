import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function IndexPage() {
  return (
    <Layout>
      <h1>This is the entry to my site!!!</h1>
      <Link to="/profile">Go to profile</Link>
    </Layout>
  );
}
