import Github from "./Github"
import Logo from "./Logo"

const Navbar = () => {
	return (
		<nav className="fix z-50 top-0 mw-full h-14 px-4 border-b shadow-sm bg-white flex items-center align-middle">
			<div className="flex flex-row justify-between w-full px-4 md:px-20">
				<div className="inline-flex gap-1 items-center">
					<Logo />
					<p className="text-lg font-bold">UrlCut</p>
				</div>
				<Github />
			</div>

		</nav>
	)
}

export default Navbar
