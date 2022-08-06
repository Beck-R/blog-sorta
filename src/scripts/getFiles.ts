import fs from "fs";

export function getFiles(cur_dir: string) {
    const file_structure = {
        name: "",
        size: "",
        date: "",
        path: "",
        isDir: false,
    }

    const file_list: typeof file_structure[] = [];

    // read all files in directory returned from getCurDir() and push them to file_list
    fs.readdirSync(cur_dir).forEach(file => {
        const stats = fs.statSync(cur_dir + file);
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
            path: cur_dir + file, 
            isDir: stats.isDirectory()
        });
    });

    return file_list;
}