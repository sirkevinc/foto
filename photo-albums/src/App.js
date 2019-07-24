import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

import { withAuthenticator } from 'aws-amplify-react';

import { Header } from 'semantic-ui-react';

Amplify.configure(aws_exports);


class App extends Component { 
  render() { 
    return (
      <div>
        <Header as='h1'>Hello World!</Header> /
      </div>
    );
  }
}

const signUpConfig = {
  header: 'Welcome To My App!',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'string'
    },
    {
      label: 'First Name',
      key: 'first_name',
      required: true,
      displayOrder: 3,
      type: 'string',
      custom: true
    },
    {
      label: 'Last Name',
      key: 'last_name',
      required: true,
      displayOrder: 4,
      type: 'string',
      custom: true
    },
  ]
}

export default withAuthenticator (App, { signUpConfig, usernameAttributes: 'email', includeGreetings: true });