// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import { SpinnerContainer, Spinner } from '../base/example';

/// ///////////////////////////////////////////
// Partials
/// ///////////////////////////////////////////

let Demo = props => (
  <div className="demo-only" style={{ height: '9rem' }}>
    {props.children}
  </div>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export let states = [
  {
    id: 'xx-small',
    label: 'Xx-small',
    description:
      'The extra extra small spinner can be applied to tabs in global navigation to indicate loading.',
    element: (
      <Demo>
        <SpinnerContainer>
          <Spinner className="nds-spinner_xx-small" />
        </SpinnerContainer>
      </Demo>
    )
  },
  {
    id: 'x-small',
    label: 'X-small',
    description:
      'The extra small spinner can be positioned over the end of an input to indicate loading.',
    element: (
      <Demo>
        <SpinnerContainer>
          <Spinner className="nds-spinner_x-small" />
        </SpinnerContainer>
      </Demo>
    )
  },
  {
    id: 'small',
    label: 'Small',
    element: (
      <Demo>
        <SpinnerContainer>
          <Spinner className="nds-spinner_small" />
        </SpinnerContainer>
      </Demo>
    )
  },
  {
    id: 'medium',
    label: 'Medium',
    element: (
      <Demo>
        <SpinnerContainer>
          <Spinner className="nds-spinner_medium" />
        </SpinnerContainer>
      </Demo>
    )
  },
  {
    id: 'large',
    label: 'Large',
    element: (
      <Demo>
        <SpinnerContainer>
          <Spinner className="nds-spinner_large" />
        </SpinnerContainer>
      </Demo>
    )
  }
];
