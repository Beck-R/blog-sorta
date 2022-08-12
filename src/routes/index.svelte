<script lang="ts">
	import Header from "../lib/Header.svelte";
	import Content from "../lib/Content.svelte";
	import type { ArticleType } from "src/types";
	import SvelteMarkdown from "svelte-markdown";
</script>

<svelte:head>
  	<link rel="stylesheet" href="../app.css">
	  <title>Placeholder</title>
</svelte:head>
	
<body>
	<div class="box">
		<div class="row header">
			<Header />
		</div>
		<div class="row content">
			<Content>
				<div class="container">
					<button on:click={() => (alert("Hello World"))}>Click Me</button>
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