<script>
  import { onMount } from "svelte";
  import util from "./util";
  export let getImgSrc;

  let input = null;
  onMount(() => {
    input = document.querySelector("input");
  });

  function handleButton() {
    input.click();
  }

  async function handleDrop(e) {
    e.preventDefault();
    getImgSrc(await util.getBase64(e.dataTransfer.files[0]));
  }

  function handleDragover(e) {
    e.preventDefault();
  }

  async function handlePaste(e) {
    getImgSrc(await util.getBase64(e.clipboardData.files[0]));
  }
  async function handleInput(e) {
    getImgSrc(await util.getBase64(e.target.files[0]));
  }
</script>

<style>
  .head {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;
    border: 1px dashed #dbdbdb;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }

  input {
    display: none;
  }

  button {
    display: inline-flex;
    font-size: 1rem;
    border-radius: 4px;
    line-height: 1.5;
    border: 1px solid transparent;
    background-color: #00c4a7;
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(0.5em - 1px);
    padding-left: 1em;
    padding-right: 1em;
    padding-top: calc(0.5em - 1px);
    text-align: center;
    white-space: nowrap;
    box-shadow: none;
    height: 2.5em;
    color: #fff;
  }
</style>

<div
  class="head"
  on:drop={handleDrop}
  on:dragover={handleDragover}
  on:paste={handlePaste}>
  >
  <div>
    <p>1. select image from folder and upload as base64</p>
    <p>2. drag image from folder and upload as base64</p>
    <p>3. select image from folder and upload as base64</p>
  </div>
  <input type="file" on:change={handleInput} />
  <button on:click={handleButton}>upload image</button>
</div>
