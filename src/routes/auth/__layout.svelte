<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import db from '../../db';

	const user = db.user;
	onMount(() => {
		if ($user) {
			goto('/');
		}
	});
</script>

<slot />
