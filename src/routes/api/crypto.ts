import * as dotenv from "dotenv";

dotenv.config({ path: "../../.env"});

/** @type {import('@sveltejs/kit').RequestHandler} */
export const GET = () => {
    console.log(process.env.BTC_ADDRESS);
    console.log(process.env.ETH_ADDRESS);
    return {
        body: {
            BTC: process.env.BTC_ADDRESS,
            ETH: process.env.ETH_ADDRESS,
        }
    }
}