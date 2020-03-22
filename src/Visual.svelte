<script>
export let imgSrc;
</script>

<style>
  textarea {
    display: block;
    height: 200px;
    max-width: 100%;
    min-width: 100%;
    padding: calc(0.75em - 1px);
    resize: vertical;
    box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
    width: 100%;
    background-color: #fff;
    border-color: #dbdbdb;
    border-radius: 4px;
    box-sizing: border-box;
  }
</style>

<textarea value={imgSrc}/>
