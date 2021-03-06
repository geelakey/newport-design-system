// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

const Crumb = props => (
  <li className="nds-breadcrumb__item nds-text-title_caps">
    <a href={props.href}>{props.children}</a>
  </li>
);

Crumb.propTypes = { href: React.PropTypes.string };

const BreadCrumbs = props => (
  <nav {...props} role="navigation" aria-label="Breadcrumbs">
    <ol className="nds-breadcrumb nds-list_horizontal nds-wrap">
      {props.children}
    </ol>
  </nav>
);

BreadCrumbs.Crumb = Crumb;

export default BreadCrumbs;
