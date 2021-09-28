<script>
	import db from '../../db';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let password, email;
	let error = null;

	async function submit() {
		const data = await db.supabase.auth.signIn({ email, password });
		if (data.error) {
			console.log(data);
			error = data.error.message;
			return;
		}
		goto('/');
	}

	const user = db.user;

	onMount(() => {
		if ($user) {
			goto('/');
		}
	});
</script>

<svelte:head>
	<title>Log in</title>
</svelte:head>

<div class="container">
	<div class="w-full flex items-center flex-col">
		<div class="w-full sm:w-1/2 lg:w-4/12 xl:w-3/12 px-8 sm:px-0">
			<h1 class="pt-32 text-center text-2xl font-bold">Log in</h1>
			<form class="mt-8" on:submit|preventDefault={submit}>
				{#if error}
					<div class="bg-red-100 w-full rounded-lg p-4 mb-4 text-sm text-red-700" role="alert">
						{error}
					</div>
				{/if}
				<div class="mb-6">
					<label for="email" class="text-sm font-medium text-gray-900 block mb-2">Your email</label>
					<input
						type="email"
						id="email"
						bind:value={email}
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						required
					/>
				</div>
				<div class="mb-6">
					<label for="password" class="text-sm font-medium text-gray-900 block mb-2"
						>Your password</label
					>
					<input
						type="password"
						id="password"
						bind:value={password}
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						required
					/>
				</div>
				<div class="flex justify-end">
					<button
						type="submit"
						class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
						>Log in</button
					>
				</div>
			</form>
		</div>
	</div>
</div>
