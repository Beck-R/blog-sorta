import fs from "fs";
import type { ArticleType } from "../../types";
import type { RequestHandler } from "./__types";

// this endpoint doesn't take any params, for now. (may filter desired tags in the future)
/** @type {import('@sveltejs/kit').RequestHandler} */
export const GET: RequestHandler = () => {
    return {
        body: {
            articles: "nuts"
        }
    }
}

function getArticles() {
    const article_list: ArticleType[] = [];
    fs.readdirSync("articles/").forEach(file => {
        console.log("nuts");
    });
    return(article_list);
}