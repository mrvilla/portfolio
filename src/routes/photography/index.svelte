<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`photography.json`)
      .then(r => r.json())
      .then(photos => {
        return { photos };
      });
  }
</script>

<script>
    import Photo from '../../components/Photo/Photo.svelte';
	export let photos;
</script>

<style>
    .photo__photo-item {
        padding-bottom: 24px;
    }
    .photo__item {
        display: flex;
        align-items: start;
        flex-direction: column;
    }
    .photo__item-place {
        font-size: 0.6em;
        letter-spacing: 1px;
	    display: flex;
	    justify-content: space-between;
	    width: 100%;
    }
    img {
        border: 1px solid #fff;
    }
</style>


<svelte:head>
	<title>Photography</title>
</svelte:head>

<Photo>
	{#each photos as photo}
		<div class="photo__photo-item">
			<div class="photo__item">
				<img src="{photo.src}" alt="{photo.alt}">
				<div class="photo__item-place">
					<span class="photo__item-location">{photo.location}</span>
					<span class="photo__item-year">{photo.year}</span>
				</div>
			</div>
		</div>
	{/each}
</Photo>
