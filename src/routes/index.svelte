<script lang="ts">
	import Header from "../components/Header.svelte";
	import Content from "../components/Content.svelte";
	import { getFiles } from "../scripts/getFiles";
	import { getArticles } from "../scripts/getArticles";
	import type { FileType, ArticleType } from "src/types";
	import SvelteMarkdown from "svelte-markdown";

	let cur_dir = "resources/";
	let file_list: FileType[] = getFiles(cur_dir);
	let article_list: ArticleType[] = getArticles();	
</script>

<head>
  	<link rel="stylesheet" href="../app.css">
</head>
<body>
	<div class="box">
		<div class="row header">
			<Header />
		</div>
		<div class="row content">
			<Content>
				<div class="container">

				</div>
			</Content>
		</div>
	</div>
</body>

<style>
	.container {
		padding: 20px;
		margin: 20px;
		background-color: #ffffff;
		border: 2px solid #000000;
		width: 50%;
		font-size: 18px;
		height: auto !important;
		display: flex;
		flex-direction: column;
	}
</style>