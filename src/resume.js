import React, { Component } from 'react';
import { Container, Header,  Content, FooterTab, Button, Text } from 'native-base';

export default class GeneralExample extends Component {
  render() {
    return (
      <Container>

          <Header>  
          <Left/>
          <Body>
            <Title>MUHAMMAD TAYYAB RANA</Title>
          </Body>
          <Right />
        </Header>


        <Footer>
          <FooterTab>
            
              <Text>Email: fa17mcsw0010@maju.edu.pk</Text>
              <Text>Phone: 0315-2019137</Text>   

           
          </FooterTab>
        </Footer>
        </Container>
    
    );
  }
}