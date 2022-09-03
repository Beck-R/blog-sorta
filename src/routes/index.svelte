<script lang="ts">
	import Header from "$lib/Header.svelte";
	import Content from "$lib/Content.svelte";
	import Article from "$lib/Article.svelte";
	import type { ArticleType } from "src/types";
	import { onMount } from "svelte";

	export let article_list: ArticleType[] = [];
	let articleShown: boolean = false;
	let articleToShow: ArticleType;

	let BTC_address: string;
	let ETH_address: string;

	onMount(async () => {
		const data = await fetch('/api/articles').then(res => res.json());
        article_list = data.articles;
        console.log(article_list);

		const crypto = await fetch('/api/crypto').then(res => res.json());
		BTC_address = crypto.BTC;
		ETH_address = crypto.ETH;
	});

	function showArticle(article: ArticleType) {
		articleShown = true;
		articleToShow = article;
	}
</script>

<svelte:head>
  	<link rel="stylesheet" href="../app.css">
	{#if articleShown}
		<title>{articleToShow.title}</title>
	{:else}
		<title>Articles</title>
	{/if}
</svelte:head>
	
<body>
	<div class="box">
		<div class="row header">
			<Header />
		</div>
		<div class="row content">
			<Content>
				{#if articleShown}
					<Article article={articleToShow} />
				{:else}
					<div class="container">
						{#if article_list}
							{#each article_list as article}
								<button class="article-button" on:click={() => showArticle(article)}>
									[ {article.tags[0].toUpperCase()} ] {article.title.toUpperCase()}
								</button>
							{/each}
						{/if}
					</div>
					<div class="crypto">
						<span style="text-decoration: overline;">
							CONSIDER DONATING CRYPTO:
						</span>
						<br>
						<div style="margin: 10px;">BTC: bc1qplgdux0seh8c5eqj0xjt38472nvgdzrzln736k<br>ETH: 0x9B0211645B7c59aA13483b238dCAa733B841D592</div>
					</div>
				{/if}
			</Content>
		</div>
	</div>
</body>

<style>
	.container {
		padding: 10px;
		margin: 20px;
		background-color: #ffffff;
		border: 2px solid #000000;
		width: 50%;
		font-size: 18px;
		height: auto !important;
		display: flex;
		flex-direction: column;
	}

	.article-button:hover {
		color: #23d3ee;
	}

	.crypto {
		text-align: center;
		justify-self: flex-end;
		align-self: center;
		font-size: 15px;
	}

	button {
		margin: 10px;
	}
</style>