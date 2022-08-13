import fs from "fs";
import type { FileType } from "../../types";

/** @type {import('@sveltejs/kit').RequestHandler} */
export const GET = ({ url }) => {
    // get clients cur dir from search params
    const dir = url.searchParams.get("dir")
    return {
        body: {
            files: getFiles(dir)
        }
    }
}



function getFiles(dir: string) {
    const file_list: FileType[] = [];
    // read all files in resources/ or any child dir.
    // NOTE: If a directory above resources/ is passed, its contents will be returned. 
    // The contents will not be readable though.
    fs.readdirSync(dir).forEach(file => {
        const stats = fs.statSync(dir + file);
        let size = "";

        // appending size suffix depending on closest whole number
        if (stats.size < 1000) {
            size = stats.size + "B";
        } else if (stats.size < 1000000) {
            size = (stats.size / 1000).toFixed(2) + "KB";
        } else if (stats.size < 1000000000) {
            size = (stats.size / 1000000).toFixed(2) + "MB";
        } else {
            size = (stats.size / 1000000000).toFixed(2) + "GB";
        }
        
        // push needed info to a list of json objects
        file_list.push({
            name: file, 
            size: size, 
            date: stats.mtime.getDate() + "/" + stats.mtime.getMonth() + "/" + stats.mtime.getFullYear(), 
            path: dir + file, 
            isDir: stats.isDirectory()
        });
    });

    // send file list to client
    return file_list;
}