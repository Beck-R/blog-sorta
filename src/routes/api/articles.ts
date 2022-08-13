import fs from "fs";
import type { ArticleType } from "../../types";

// this endpoint doesn't take any params, for now. (may filter desired tags in the future)
/** @type {import('@sveltejs/kit').RequestHandler} */
export const GET = () => {
    return {
        body: {
            articles: getArticles()
        }
    }
}

function getArticles() {
    const article_list: ArticleType[] = [];
    fs.readdirSync("articles/").forEach(file => {
        // get all lines that startwith metadata tag and split into array
        const metadata = fs.readFileSync("articles/" + file, "utf8").split("\n").filter(line => line.startsWith("[_metadata_:"));
        
        // initialize empty article data, also kinda hacky
        let title = "";
        let author = "";
        let date = "";
        let tags: string[] = [];

        // this is kinda hacky, for all the lines of metadata find what line corresponds to that
        // data and set that to the previosuly empty data variables.
        for (let i = 0; i < metadata.length; i++) {
            const line = metadata[i];
            if (line.indexOf("title") >= 0) {
                title = line.
                split("-")[1].slice(2, -1);
            } else if (line.indexOf("author") >= 0) {
                author = line.split("-")[1].slice(2, -1);
            } else if (line.indexOf("date") >= 0) {
                date = line.split("-")[1].slice(2, -1);
            } else if (line.indexOf("tags") >= 0) {
                tags = line.split("-")[1].slice(2, -1).split(",");
            } else {
                console.log("Unknown metadata line: " + line);
            }   
        }
        console.log({
            title,
            author,
            date,
            tags
        });
        article_list.push({
            title: title,
            author: author,
            date: date,
            tags: tags,
            content: fs.readFileSync("articles/" + file, "utf8").split("\n").filter(line => !line.startsWith("[_metadata_:")).join("\n"),
            path: "articles/" + file
        })
    });

    return(article_list);
}