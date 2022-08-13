// this endpoint doesn't take any params, for now. (may filter desired tags in the future)
/** @type {import('@sveltejs/kit').RequestHandler} */
export const POST = ({ url }) => {
    return {
        body: {
            
        }
    }
}

async function postContact(email: string, subject: string, message: string) {
    console.log("nuts")
}