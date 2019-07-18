import React from 'react';
import {
    Page,
    BlockTitle,
    List,
    ListItem
} from 'framework7-react';

export default () => (
  <Page>
    <BlockTitle>Navigation</BlockTitle>
    <List>
      <ListItem link="/home/" title="Home"></ListItem>
      <ListItem link="/swip/" title="Swip"></ListItem>
    </List>
  </Page>
);
