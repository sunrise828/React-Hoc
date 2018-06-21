import React from 'react';
import PageTransition from 'react-router-page-transition';

export default (props) => (
  <div>
    <PageTransition>
      {props.children}
    </PageTransition>
  </div>
);