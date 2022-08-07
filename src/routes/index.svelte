<script lang="ts">
  import Header from "../components/Header.svelte";
  import Content from "../components/Content.svelte";
  import { getFiles } from "../scripts/getFiles";

  let cur_dir = "./resources/";
  let file_list = getFiles(cur_dir);
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
      </Content>
    </div>
  </div>
</body>

<style>

</style>