import React from 'react';
import Layout from '../../components/Layout';
import Welcome from './Welcome';

const title = 'swag';

function action() {
  return {
    chunks: ['welcome'],
    title: 'Welcome',
    component: (
      <Layout>
        <Welcome title={title} />
      </Layout>
    ),
  };
}

export default action;
