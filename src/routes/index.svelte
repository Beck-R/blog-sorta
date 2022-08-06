<script lang="ts">
  import Header from "../components/Header.svelte";
  import Content from "../components/Content.svelte";
  import { getFiles } from "../scripts/getFiles";

  let cur_dir = "./resources/";
  let file_list = getFiles(cur_dir);

  function handleClick(file: string) {
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
      </Content>
    </div>
  </div>
</body>

<style>

</style>