import React from 'react';
import Layout from '../../components/Layout';
import Details from './Details';

const title = 'swag';

function action() {
  return {
    chunks: ['welcome'],
    title: 'Welcome',
    component: (
      <Layout>
        <Details title={title} />
      </Layout>
    ),
  };
}

export default action;
