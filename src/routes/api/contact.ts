import fs from "fs";

/** @type {import('@sveltejs/kit').RequestHandler} */
export const POST = async ({ request }) => {
    const data = await request.json();
    try {
    let contactJson = fs.readFileSync("contacts.json", "utf-8");

    const contacts = JSON.parse(contactJson);

    contacts.push(data);

    contactJson = JSON.stringify(contacts, null, 2);

    fs.writeFileSync("contacts.json", contactJson, "utf-8")

    return {
        body: {
            status: 200
        }
    }
    
    } catch (err) {
        console.error(err)
        return {
            body: {
                status: 503
            }
        }
    }
}