import React from 'react'
import ReactDOM from 'react-dom'
import { Email, Button } from 'ink-react'

ReactDOM.render((
  <Email>
    <Button class="success round" href="#">Click me</Button>
  </Email>
), document.getElementById('main'))
