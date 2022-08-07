<div class="content">
    <slot></slot>
</div>

<style>
    .content {
        background-color: #fffff0;
        float: left;
        width: calc(100% - 20px);
        height: calc(100% - 10px);
        margin: 0 10px 10px;
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        border: 2px solid #000000;

        align-items: center;
        display: flex;
        flex-direction: column;
    }
</style>