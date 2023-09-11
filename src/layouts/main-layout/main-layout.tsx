import { Header } from './index'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Outlet />
			</main>
			{/* <footer>
				<Footer />
			</footer> 
			If a footer is added to the project, it will be possible to uncomment it */}
		</>
	)
}
