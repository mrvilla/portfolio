<script>
    import Photo from '$lib/components/Photo/Photo.svelte';

		export async function load({ fetch }) {
			const response = await fetch('_photo.js');
			const photos = await response.json();
			return { photos };
		}
		export let data;
		const { photos } = data;
</script>

<style lang="scss">
    .photo__photo-item {
        margin-bottom: 1.5rem;
    }
    .photo__item {
        display: flex;
        align-items: start;
        flex-direction: column;
        height: 100%;
    }
    .photo__item-place {
        font-size: 0.6rem;
        letter-spacing: 0.063rem;
	    display: flex;
	    justify-content: space-between;
	    width: 100%;
    }
    .photo__item-background {
        background: repeating-linear-gradient(
                45deg,
                #373737,
                #373737 10px,
                #696969 10px,
                #696969 20px
        );
        display: flex; /* Ensures the child img covers the area */
        justify-content: center;
        align-items: center;
        transition: opacity 0.5s ease-in-out;
        width: 100%;
        height: 100%;

    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: opacity 0.5s ease-in-out;
      border: 0.063rem solid #fff
    }
</style>


<svelte:head>
	<title>Photography</title>
</svelte:head>

<Photo>
	{#each photos as photo}
		<div class="photo__photo-item">
			<div class="photo__item">
				<div class="photo__item-background">
					<img
						src="{photo.src}"
						alt="{photo.alt}"
						on:load={(e) => e.target.classList.add('is-loaded')}
					 />
				</div>
				<div class="photo__item-place">
					<span class="photo__item-location">{photo.location}</span>
					<span class="photo__item-year">{photo.year}</span>
				</div>
			</div>
		</div>
	{/each}
</Photo>
