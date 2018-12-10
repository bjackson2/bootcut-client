import React from 'react';
import {Container, Image, Menu} from 'semantic-ui-react';

export default ({children}) => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Image size="mini" src="/om.png" style={{marginRight: '1.5em'}} />
          Bootcut
        </Menu.Item>
        <Menu.Item as="a">Lobby</Menu.Item>
      </Container>
    </Menu>
    <Container style={{marginTop: '7em'}}>{children}</Container>
  </div>
);
