<script>
	import db from '../db';
	import { goto } from '$app/navigation';

	const user = db.user;

	async function logOut() {
		await db.supabase.auth.signOut();
		goto('/auth/login');
	}
</script>

<nav class="bg-white border-gray-200">
	<div class="px-2 sm:px-4 lg:px-5">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<div class="flex items-center sm:justify-start">
				<a href="/">
					<img src="/docs/images/logo.svg" class="h-10 mr-4" alt="FlowBite Logo" />
				</a>
				<div class="hidden sm:block sm:ml-6">
					<ul class="flex space-x-8">
						{#if $user}
							<li>
								<a
									href="/dashboard"
									class="text-gray-700 hover:text-blue-700 text-sm font-medium"
									aria-current="page">Dashboard</a
								>
							</li>
						{/if}
						<li>
							<a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Services</a>
						</li>
						<li>
							<a href="/contact" class="text-gray-700 hover:text-blue-700 text-sm font-medium"
								>Contact</a
							>
						</li>
					</ul>
				</div>
			</div>
			<div class="flex items-center sm:static sm:inset-auto sm:ml-6">
				{$user?.email ?? ''}
				{#if $user}
					<button
						on:click={logOut}
						type="button"
						class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 mr-3 text-center inline-flex items-center"
					>
						Log out
					</button>
					<!-- Profile dropdown -->
					<button
						type="button"
						class="bg-gray-800 flex text-sm rounded-full focus:ring-4 focus:ring-gray-300"
						id="user-menu-button"
						aria-expanded="false"
						data-dropdown-toggle="dropdown"
					>
						<span class="sr-only">Open user menu</span>
						<img
							class="h-8 w-8 rounded-full"
							src="/docs/images/people/profile-picture-3.jpg"
							alt="user photo"
						/>
					</button>
				{:else}
					<a
						href="/auth/register"
						class="rounded-lg border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 mr-3 mb-3"
					>
						Register
					</a>
					<a
						href="/auth/login"
						class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3"
						>Log in</a
					>
				{/if}
				<!-- Mobile menu button-->
				<button
					data-collapse-toggle="mobile-menu-2"
					type="button"
					class="sm:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
					aria-controls="mobile-menu-2"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<!-- Open mobile menu icon -->
					<svg
						class="w-6 h-6"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						/></svg
					>
					<!-- Close mobile menu icon -->
					<svg
						class="hidden w-6 h-6"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/></svg
					>
				</button>
			</div>
		</div>
	</div>
	<!-- Mobile menu -->
	<div class="sm:hidden hidden" id="mobile-menu-2">
		<ul class="pt-2">
			<li>
				<a href="#" class="bg-gray-100 text-gray-900 text-base font-normal block pl-3 pr-4 py-2"
					>Dashboard</a
				>
			</li>
			<li>
				<a
					href="#"
					class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2"
					>Team</a
				>
			</li>
			<li>
				<a
					href="#"
					class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2"
					>Projects</a
				>
			</li>
			<li>
				<a
					href="#"
					class="text-gray-600 hover:bg-gray-50 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2"
					>Calendar</a
				>
			</li>
		</ul>
	</div>
</nav>
