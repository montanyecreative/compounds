export default function Menu() {
	return (
		<nav className="w-full app-bar-navigation border-t-2 border-l-2 border-r-2 border-slate-500">
			<div className="flex justify-center text-center">
				<a href="#" className="px-1 lg:px-5 py-4 transition-colors hover:opacity-50 hover:dark:border-neutral-700">
					<h2>Home</h2>
				</a>
				<a href="#" className="px-1 lg:px-5 py-4 transition-colors hover:opacity-50 hover:dark:border-neutral-700">
					<h2>Brews</h2>
				</a>
				<a href="#" className="px-1 lg:px-5 py-4 transition-colors hover:opacity-50 hover:dark:border-neutral-700">
					<h2>Beans</h2>
				</a>
				<a href="#" className="px-1 lg:px-5 py-4 transition-colors hover:opacity-50 hover:dark:border-neutral-700">
					<h2>Methods</h2>
				</a>
				<a href="#" className="px-1 lg:px-5 py-4 transition-colors hover:opacity-50 hover:dark:border-neutral-700">
					<h2>Grinders</h2>
				</a>
				<a href="#" className="px-1 lg:px-5 py-4 transition-colors hover:opacity-50 hover:dark:border-neutral-700">
					<h2>Roasts</h2>
				</a>
			</div>
		</nav>
	);
}
