<script>
    import Aerial from '$lib/components/Aerial/Aerial.svelte';

		export let data;
		const { aerials } = data;

		let progress = 0;

		function updateProgress(video) {
			const progress = (video.currentTime / video.duration) * 100;
			video.closest('.aerial__item-background').querySelector('.progress').style.strokeDashoffset = 100 - progress;
			if (!video.paused && !video.ended) {
				requestAnimationFrame(() => updateProgress(video));
			}
		}

		function startProgress(event) {
			const video = event.target;
			requestAnimationFrame(() => updateProgress(video));
		}

		let playTimeout;

		function handleMouseEnter(event) {
			const video = event.target;
			playTimeout = setTimeout(() => video.play(), 200);
		}

		function handleMouseLeave(event) {
			clearTimeout(playTimeout);
			const video = event.target;
			video.pause();
			updateProgress(video);
		}
</script>

<style lang="scss">
    .aerial__photo-item {
        margin-bottom: 1.5rem;
    }
    .aerial__item {
        display: flex;
        align-items: start;
        flex-direction: column;
        height: 100%;
    }
    .aerial__item-place {
        font-size: 0.6rem;
        letter-spacing: 0.063rem;
	      display: flex;
	      justify-content: space-between;
	      width: 100%;
    }
    .aerial__item-background {
        background: repeating-linear-gradient(
                45deg,
                #8e8d8d,
                #b2b2b2 10px,
                #c7c7c7 10px,
                #e6e6e6 20px
        );
        display: flex; /* Ensures the child img covers the area */
        justify-content: center;
        align-items: center;
        transition: opacity 0.5s ease-in-out;
        width: 100%;
        height: 100%;
				position: relative;
    }
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: opacity 0.5s ease-in-out;
      border: 0.063rem solid #000;
    }

    .progress-circle {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 24px;
      height: 24px;
    }

    .progress-circle svg {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
    }

    .progress-circle .background {
      fill: none;
      stroke: rgba(255, 190, 152, 0.37);
      stroke-width: 5;
    }

    .progress-circle .progress {
      fill: none;
      stroke: #ffbe98;
      stroke-width: 5;
      stroke-linecap: butt;
      stroke-dasharray: 100;
      stroke-dashoffset: 100;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
    }

</style>


<svelte:head>
	<title>Drone Footage</title>
</svelte:head>

<Aerial>
	{#each aerials as aerial}
		<div class="aerial__photo-item">
			<div class="aerial__item">
				<div class="aerial__item-background">
					<div class="progress-circle">
						<svg viewBox="0 0 24 24">
							<circle class="background" cx="12" cy="12" r="6"></circle>
							<circle
								class="progress"
								cx="12"
								cy="12"
								r="6"
								style="stroke-dasharray: 100; stroke-dashoffset: {100 - progress};"
							></circle>
						</svg>
					</div>

					<video
						muted
						preload="metadata"
						poster="{aerial.poster}"
						on:play={startProgress}
						on:mouseenter={handleMouseEnter}
						on:mouseleave={handleMouseLeave}
					 >
						<source src="{aerial.src}" type="video/mp4">
					</video>
				</div>
				<div class="aerial__item-place">
					<span class="aerial__item-location">{aerial.location}</span>
					<span class="aerial__item-device">{aerial.device}</span>
				</div>
			</div>
		</div>
	{/each}
</Aerial>
