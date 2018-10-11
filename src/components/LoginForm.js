import React, { Component } from 'react';
import { Button, Card, CardSection, Field } from './common';

class LoginForm extends Component {
  state = { text: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Field
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
            style={{ height: 20, width: 100 }}
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
