import React, { Component } from "react";
import { Form, Button, Input, Message, Grid } from "semantic-ui-react";
import Layout from "../../component/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import {Router} from '../../routes'

class CampaignNew extends Component {
  state = {
    minimunContribution: "",
    errorMessage: "",
    loading: false,
  };
  
  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimunContribution)
        .send({
          from: accounts[0],
        });
        Router.pushRoute('/')
    } catch (err) {
      this.setState({
        errorMessage: err.message,
      });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <Grid padded >
          <Grid.Column width={5} inverted>
        <h3> Create a campaign </h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimun Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimunContribution}
              onChange={(event) =>
                this.setState({ minimunContribution: event.target.value })
              }
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} color="teal">
            Create
          </Button>
        </Form>
        </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignNew;
