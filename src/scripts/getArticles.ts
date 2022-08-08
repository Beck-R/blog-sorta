import * as fs from "fs";
import type { ArticleType } from "../types";

export function getArticles() {
    const article_list: ArticleType[] = [];

    fs.readdirSync("articles/").forEach(file => {
        console.log(file);
    });

    return article_list;
}