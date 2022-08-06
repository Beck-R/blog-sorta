<script lang="ts">
    import Header from "../components/Header.svelte";
    import Content from "../components/Content.svelte";
    import { getFiles } from "../scripts/getFiles";

    let cur_dir = "./resources/";
    let file_list = getFiles(cur_dir);

    function handleClick(file: string) {
        console.log("test");
        cur_dir += file;
        file_list = getFiles(cur_dir);
    }
</script>
  
<head>
    <link rel="stylesheet" href="../app.css">
</head>
<body>
    <div class="box">
        <div class="row header" style="height: auto !important;">
        <Header />
        </div>
        <div class="row content" style="height: auto !important;">
            <Content>
                <div class="container">
                    <span class="dir">{cur_dir}</span>
                    <table>
                        <tr>
                            <th>FILE NAME:</th> 
                            <th>FILE SIZE:</th>
                            <th>DATE:</th>
                        </tr>
                        {#if file_list}
                            {@debug file_list}
                            {#each file_list as file}
                                {#if file.isDir}
                                    <!-- NOT WORKING PROPERLY -->
                                    <tr>
                                        <td><button on:click={() => handleClick(file.name)} class="hover:text-cyan-400">{file.name}/</button></td>
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