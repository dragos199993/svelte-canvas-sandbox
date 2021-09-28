<script>
	import db from '../../db';
</script>

<div class="container">
	<div class="w-full flex items-center flex-col">
		<button
			on:click={() =>
				db.supabase.auth.signIn({ email: 'dragos199993+test@gmail.com', password: 'travel1*' })}
			type="button"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3"
			>Default</button
		>
	</div>
</div>
