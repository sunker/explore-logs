import React from 'react';
import { AppRootProps } from '@grafana/data';
import { Routes } from 'Components/Routes';

export class App extends React.PureComponent<AppRootProps> {
  render() {
    return <Routes />;
  }
}
