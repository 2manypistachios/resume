import React, { Component } from "react";
import "./Watson.less";

import {
  Comment,
  Input,
  Form,
} from 'semantic-ui-react';

class Watson extends Component {
  render() {
    console.log("PANEL: ",this.props);
    return (
      <Comment.Group size='large'>
        <Comment>
          <Comment.Avatar src='https://api.adorable.io/avatars/155/maxsum' />
          <Comment.Content>
            <Comment.Author as='a'>Maxum</Comment.Author>
            <Comment.Text>{this.props.data.node.Body}</Comment.Text>
          </Comment.Content>
        </Comment>
        <Comment>
          <Comment.Avatar src='https://api.adorable.io/avatars/155/user' />
          <Comment.Content>
            <Comment.Author as='a'>You</Comment.Author>
            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
          </Comment.Content>
        </Comment>

        <Comment>
          <Comment.Avatar src='https://api.adorable.io/avatars/155/maxsum' />
          <Comment.Content>
            <Comment.Author as='a'>Maxum</Comment.Author>
            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
          </Comment.Content>
        </Comment>

        <Form reply>
          <Input action='Reply' placeholder='Reply...' />
        </Form>
      </Comment.Group>
    );
  }
}

export default Watson;
