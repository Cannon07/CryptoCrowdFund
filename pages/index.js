import { useEffect } from "react";
import factory from "../ethereum/factory";

export default function Index() {
    useEffect(async () => {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        console.log(campaigns);
    }, [])

    return (
        <h1>Hello... !</h1>
    );
}