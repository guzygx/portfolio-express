<!-- index-->

<script>
	import Grass from './components/Grass.svelte';
	import Flower from './components/Flower.svelte';
</script>

<footer
	class="fixed bottom-0 pt-0.5 w-full bg-contain flex flex-col text-5xl pointer-events-none"
>
	{#each Array(3) as _}
		<div class="flex absolute -left-28">
			{#each Array(28) as _}
				<Flower />
			{/each}
		</div>
	{/each}
	<Grass />
</footer>


<!-- flower -->

<script>
  import _ from "lodash";

	const chars = ['•', '·'];
	const size = Math.floor(Math.random() * 20) + 4;
	const offset = _.sample(['top-[10px]', 'top-[-10px]', 'top-[-5px]', 'top-[5px]', ''])
</script>

<div class="relative min-w-20">
	<div class="flex rotate-90 absolute">
		{#each { length: size } as x}
			<p class={`relative ${offset}`}>{_.sample(chars)}</p>
		{/each}
	</div>
</div>


<!-- grass -->

<script>
	let char = '#';
	let numberOfDots = 200;
	let dots = char.repeat(numberOfDots);
</script>

<div class="max-h-5 overflow-hidden">
	<div class={`font-display text-5xl max-sm:text-4xl relative top-[2px]`}>{dots}</div>
</div>
