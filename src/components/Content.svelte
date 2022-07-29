<script>
    import { onMount } from 'svelte';

    onMount(() => {
        let header = document.querySelector('.header');
        
        // const content = document.getElementById('content');
        // if(content) {
        //     content.style.height = `calc(100% - ${header?.clientHeight}px)`;
        // }
    });
    
</script>

<div class="content">
    <slot></slot>
</div>

<style>
    .content {
        background-color: #fffff0;
        float: left;
        width: calc(100% - 20px);
        height: 100%;
        margin: 0 10px 10px;
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        border: 2px solid #000000;

        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
</style>