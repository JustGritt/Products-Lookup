<script>
	import BackgroundTexture from "$components/BackgroundTexture.svelte";
	import Mockup from '$lib/images/Mockup.png';
	import Arrow from '$lib/icons/Arrow.svg';
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Login to your account" />
</svelte:head>

<section class="pt-8 lg:pt-32 bg-center bg-cover relative h-[70svh]">
	<BackgroundTexture />

	<div class="mx-8 sm:mx-auto max-w-lg px-4 sm:px-6 pt-8 pb-16 relative text-center bg-white/80 rounded-xl shadow-2xl">
		<div class="mt-10 mx-4 sm:mx-auto sm:w-full sm:max-w-sm">
			<h1 class="text-md font-manrope font-bold text-gray-900 mt-0 mb-8 md:text-xl">
				Sign in to your account
			</h1>
			<form class="space-y-6" action="#" method="POST">
				<div>
					<label for="email" class="block text-md text-left font-medium leading-6 text-gray-900">
						Email address
					</label>
					<div class="mt-2">
						<input id="email" name="email" type="email" autocomplete="email" required
							class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
					</div>
				</div>

				<div>
					<div class="flex items-center justify-between">
						<label for="password"
							class="block text-md font-medium leading-6 text-gray-900">Password</label>
						<div class="text-sm">
							<a href="/reset-password" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot
								password?</a>
						</div>
					</div>

					<div class="mt-2">
						<input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
					</div>
				</div>

				<div>
					<button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						Sign in
					</button>
				</div>
			</form>

			<p class="mt-10 text-center text-sm text-gray-500">
				Not a member yet?
				<a href="/register" class="block mt-2 font-semibold leading-6 text-indigo-700 hover:text-indigo-600">
					Create an account now
				</a>
			</p>
		</div>
	</div>
</section>