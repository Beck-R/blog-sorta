import fs from "fs";
import { dirty_components } from "svelte/internal";
import type { FileType } from "../../types";
import type { RequestHandler } from "./__types";

/** @type {import('@sveltejs/kit').RequestHandler} */
export const GET: RequestHandler = ({ url }) => {
    const dir = url.searchParams.get("dir")
    console.log(dir);
    return {
        body: {
            files: getFiles(dir)
        }
    }
}



function getFiles(dir: string) {
    const file_list: FileType[] = [];
    fs.readdirSync(dir).forEach(file => {
        const stats = fs.statSync(dir + file);
        let size = "";

        if (stats.size < 1000) {
            size = stats.size + "B";
        } else if (stats.size < 1000000) {
            size = (stats.size / 1000).toFixed(2) + "KB";
        } else if (stats.size < 1000000000) {
            size = (stats.size / 1000000).toFixed(2) + "MB";
        } else {
            size = (stats.size / 1000000000).toFixed(2) + "GB";
        }
        
        file_list.push({
            name: file, 
            size: size, 
            date: stats.mtime.getDate() + "/" + stats.mtime.getMonth() + "/" + stats.mtime.getFullYear(), 
            path: dir + file, 
            isDir: stats.isDirectory()
        });
    });

    return file_list;
}