export default function Menu() {
	return (
		<nav className="flex justify-center">
			<div className="app-bar flex text-center">
				<a
					href="#"
					className="group px-5 py-4 transition-colors hover:opacity-75 hover:dark:border-neutral-700"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl`}>Home</h2>
				</a>
				<a
					href="#"
					className="group px-5 py-4 transition-colors hover:opacity-75 hover:dark:border-neutral-700"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl`}>Brews</h2>
				</a>
				<a
					href="#"
					className="group px-5 py-4 transition-colors hover:opacity-75 hover:dark:border-neutral-700"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl`}>Beans</h2>
				</a>
				<a
					href="#"
					className="group px-5 py-4 transition-colors hover:opacity-75 hover:dark:border-neutral-700"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl`}>Methods</h2>
				</a>
				<a
					href="#"
					className="group px-5 py-4 transition-colors hover:opacity-75 hover:dark:border-neutral-700"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl`}>Grinders</h2>
				</a>
				<a
					href="#"
					className="group px-5 py-4 transition-colors hover:opacity-75 hover:dark:border-neutral-700"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl`}>Roasts</h2>
				</a>
			</div>
		</nav>
	);
}
