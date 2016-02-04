
import React from 'react'
import ReactDOM from 'react-dom'
import {
  Email,
  Button,
  Row, Col,
  Container,
  Image
} from 'ink-react'

ReactDOM.render((
  <Email>
    <Container>
      <Row>
        <Col width="six">
          <Button class="success round" href="#">Click me</Button>
        </Col>
        <Col center panel width="three">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Col>
        <Col width="three">
          <Button class="alert" href="#">Click me</Button>
        </Col>
      </Row>
      <Row>
        <Col center width="six">
          <Image src="http://placehold.it/125x125&text=Centered%20Image"/>
        </Col>
        <Col width="six">
          <Col width="three">
            <Button className="hello" href="#">Hello</Button>
          </Col>
          <Col width="three">
            <Button className="hello" href="#">World</Button>
          </Col>
        </Col>
      </Row>
    </Container>
  </Email>
), document.getElementById('main'))
