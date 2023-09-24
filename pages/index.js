import React, { useEffect, useState } from 'react';
import factory from '../factory';



const NewCampaign = () => {

    const [campaigns, setCampaigns] = useState([])
    useEffect(() => {
        async function fetchCampaigns() {
            const campaigns = await factory.methods.getDeployedCampaigns().call();
            setCampaigns(campaigns)
        }
        fetchCampaigns()
    }, [])

    console.log(campaigns)

    return (
        <div>
            <h1>This is campaign page</h1>
            <h1>Total campaigns {campaigns.length}</h1>
            <h1>Campaign address : '{campaigns[0]}'</h1>
        </div>
    );
};

export default NewCampaign;