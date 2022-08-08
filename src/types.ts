export type ArticleType = {
    title: string;
    author: string;
    date: string;
    tags: string[];
    path: string;
};

export type FileType = {
    name: string;
    size: string;
    date: string;
    path: string;
    isDir: boolean;
}