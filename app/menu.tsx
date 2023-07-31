export default function Menu() {
	return (
		<nav className="flex justify-center app-bar border-t-2 border-l-2 border-r-2 border-slate-500">
			<div className="flex text-center">
				<a href="#" className="group px-5 py-4 transition-colors hover:opacity-50 hover:dark:border-neutral-700">
					<h2 className={`text-2xl`}>Home</h2>
				</a>
				<a href="#" className="group px-5 py-4 transition-colors hover:opacity-50 hover:dark:border-neutral-700">
					<h2 className={`text-2xl`}>Brews</h2>
				</a>
				<a href="#" className="group px-5 py-4 transition-colors hover:opacity-50 hover:dark:border-neutral-700">
					<h2 className={`text-2xl`}>Beans</h2>
				</a>
				<a href="#" className="group px-5 py-4 transition-colors hover:opacity-50 hover:dark:border-neutral-700">
					<h2 className={`text-2xl`}>Methods</h2>
				</a>
				<a href="#" className="group px-5 py-4 transition-colors hover:opacity-50 hover:dark:border-neutral-700">
					<h2 className={`text-2xl`}>Grinders</h2>
				</a>
				<a href="#" className="group px-5 py-4 transition-colors hover:opacity-50 hover:dark:border-neutral-700">
					<h2 className={`text-2xl`}>Roasts</h2>
				</a>
			</div>
		</nav>
	);
}
