import React, { useEffect, useState } from 'react';
import factory from '../factory';
import { Card, Button, Container } from 'semantic-ui-react'
import Layout from '../components/layout';



const NewCampaign = () => {

    const [campaigns, setCampaigns] = useState([])
    useEffect(() => {
        async function fetchCampaigns() {
            const campaigns = await factory.methods.getDeployedCampaigns().call();
            setCampaigns(campaigns)
        }
        fetchCampaigns()
    }, [])

    function renderCampaigns(campaigns) {
        const items = campaigns.map(campaign => {
            return {
                header: campaign,
                description: <a>
                    View campaign
                </a>,
                fluid: true
            }
        })

        return <Card.Group items={items} />
    }


    return (
        <Layout>
            <Container>
                <link
                    async
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
                />
                <h3>Open Campaigns</h3>
                {renderCampaigns(campaigns)}
                <br />
                <Button content='Create Campaign' icon='add' labelPosition='right' primary />
            </Container>
        </Layout>

    );
};

export default NewCampaign;