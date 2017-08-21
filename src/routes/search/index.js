import React from 'react';
import Layout from '../../components/Layout';
import Search from './Search';

const title = 'swag';

function action() {
  return {
    chunks: ['welcome'],
    title: 'Welcome',
    component: (
      <Layout>
        <Search title={title} />
      </Layout>
    ),
  };
}

export default action;
