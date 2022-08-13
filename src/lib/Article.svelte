<script lang="ts">
    import type { ArticleType } from "src/types";
    import SvelteMarkdown from "svelte-markdown";

    export let article: ArticleType;
</script>

<div class="article">
    <div class="article-metadata">
        <a href="/" class="hover:text-cyan-400" target="_self" style="font-size: 24px; width: 24px;">&#8617;</a>
        <span class="article-meta">{article.author} <br> {article.date}</span>
    </div>
    <div class="article-content">
        <SvelteMarkdown source={article.content}/>
    </div>
</div>

<style>
    .article {
        padding: 10px;
        margin: 20px;
        background-color: #ffffff;
        border: 2px solid #000000;
        width: 75%;
        font-size: 18px;
        height: auto !important;
        display: block;
        flex-direction: column;
    }

    .article-content{
        margin: 0px 30px 30px 30px;
    }

    .article-meta {
        float: right;
        text-align: right;
    }
</style>