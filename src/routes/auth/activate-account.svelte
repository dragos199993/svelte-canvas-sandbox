<script>
	import db from '../../db';
	import { goto } from '$app/navigation';
</script>

8
<div class="container">
	<div class="w-full flex items-center flex-col">
		<div class="w-full sm:w-1/2 lg:w-4/12 px-8 sm:px-0 flex justify-center flex-col items-center">
			<h1 class="pt-32 text-center text-2xl font-bold">An activation email has been sent.</h1>
			<h1 class="pt-4 text-center text-xl">
				In order to access your account, you need to access the link received on your email.
			</h1>

			<a
				href="/auth/login"
				class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 mt-8 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3"
				>Log in</a
			>
		</div>
	</div>
</div>
