<script lang="ts">
    import Header from "../lib/Header.svelte";
    import Content from "../lib/Content.svelte";
    import type { FileType } from "src/types";
    import { onMount } from "svelte";

    let dir = "resources/";
    let file_list: FileType[] = [];

    onMount(async () => {
        const data = await fetch(`/api/resources?dir=${dir}`).then(res => res.json());
        file_list = data.files;
        console.log(file_list);
    });
    
    async function traverse(file: string) {
            if (file == "..") {
                dir = dir.split("/").slice(0, -1).join("/")
                dir = dir.substring(0, dir.lastIndexOf('/')) + "/";

                const data = await fetch(`/api/resources?dir=${dir}`).then(res => res.json());
                file_list = data.files;
                console.log(file_list);
            } else {
                dir += `${file}/`;

                const data = await fetch(`/api/resources?dir=${dir}`).then(res => res.json());
                file_list = data.files;
                console.log(file_list);
            }
    }
</script>
  
<svelte:head>
    <link rel="stylesheet" href="../app.css">
</svelte:head>
<body>
    <div class="box">
        <div class="row header">
            <Header />
        </div>
        <div class="row content">
            <Content>
                <div class="container">
                    <span class="dir">{dir}</span>
                    <table>
                        <tr>
                            <th>FILE NAME:</th> 
                            <th>FILE SIZE:</th>
                            <th>DATE:</th>
                        </tr>
                        {#if file_list}
                            {#each file_list as file}
                                {#if file.isDir}
                                    <!-- NOT WORKING PROPERLY -->
                                    <tr>
                                        <td><button type="button" on:click={() => (traverse(file.name))} class="hover:text-cyan-400">{file.name}/</button></td>
                                        <td>-</td>
                                        <td>{file.date}</td>
                                    </tr>
                                {:else}
                                    <tr>
                                        <td><a href="{file.path}" class="hover:text-cyan-400">{file.name}</a></td>
                                        <td>{file.size}</td>
                                        <td>{file.date}</td>
                                    </tr>
                                {/if}
                            {/each}
                        {/if}
                        {#key dir}
                            {#if dir != "resources/"}
                                <tr>
                                    <td><button type="button" on:click={() => (traverse(".."))} class="hover:text-cyan-400">..</button></td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            {/if}
                        {/key}
                    </table>
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

    .dir {
        margin: 0px 0px 20px 10px;
    }

    th {
        padding: 10px;
        text-align: left;
    }

    td {
        padding: 10px;
        text-align: left;
        max-width: 15vw;
    }

    a, button {
        display: block;
        max-width: 25vw;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    tr:nth-child(odd) {
        background-color: #dddddd;
    }
</style>