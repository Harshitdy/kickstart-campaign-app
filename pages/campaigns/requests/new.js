import React, { Component } from "react";
import Layout from "../../../component/Layout";
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import { Link, Router } from "../../../routes";
import { Form, Message, Button, Input, Grid } from "semantic-ui-react";

class RequestNew extends Component {
  state = {
    value: "",
    description: "",
    recipient: "",
    loading: false,
    errorMessage: ""
  };

  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }
  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: ""})
    const campaign = Campaign(this.props.address);
    const { description, value, recipient } = this.state;

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({
          from: accounts[0],
        });
        Router.pushRoute(`/campaigns/${this.props.address}/requests`)
    } catch (err) {
      this.setState({
        errorMessage: err.message
      })
    }
    this.setState({ loading: false })
  };
  render() {
    return (
      <Layout>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Grid padded>
            <Grid.Column width={6}>
              <Link route={`/campaigns/${this.props.address}/requests`}>
              <a style={{ color: "teal"}}> <h3>Back</h3> </a>
              </Link>
              <h3>Create a Request</h3>
              <h4>0x50914E3E73231D7c86521a85CC18466687338d1D</h4>
              <Form.Field>
                <label>Description</label>
                <Input
                  value={this.state.description}
                  onChange={(event) =>
                    this.setState({ description: event.target.value })
                  }
                />
              </Form.Field>
              <Form.Field>
                <label>Value in Ether</label>
                <Input
                  value={this.state.value}
                  onChange={(event) =>
                    this.setState({ value: event.target.value })
                  }
                />
              </Form.Field>
              <Form.Field>
                <label>Recipient</label>
                <Input
                  value={this.state.recipient}
                  onChange={(event) =>
                    this.setState({ recipient: event.target.value })
                  }
                />
              </Form.Field>
              <Message error header="Oops!" content={this.state.errorMessage}/>
              <Button color="teal" loading={this.state.loading}>Create</Button>
            </Grid.Column>
          </Grid>
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;
