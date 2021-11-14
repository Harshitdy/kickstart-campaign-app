import React, { Component } from "react";
import { Card, Button, Grid } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../component/Layout";
import { Link } from "../routes";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeplyedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a> View Campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <Grid divided padded>
          <Grid.Column width={12} style={{ marginRight: "50px"}}>
            <h3>Open Campaigns</h3>
            {this.renderCampaigns()}
          </Grid.Column>
          <Grid.Column floated='left' width={3}>
            <Link route="/campaigns/new">
              <a>
                <Button
                  floated="right"
                  content="create campaign"
                  icon="add circle"
                  color="teal"
                  style={{ marginTop: "38px" }}
                />
              </a>
            </Link>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignIndex;
