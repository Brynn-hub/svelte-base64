<script>
	import Area from './Area.svelte';
	import Visual from './Visual.svelte';
  let imgSrc = "";

	function getImgSrc(value) {
		imgSrc = value;
	}
</script>

<style>
  .container {
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: inset 0 0.0625em 0.125em #000;
    border-radius: 4px;
  }
</style>

<div class="container">
  <Area getImgSrc={getImgSrc}/>
  <Visual imgSrc={imgSrc}/>
</div>
