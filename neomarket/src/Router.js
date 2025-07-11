import ItemCard from './components/ItemCard/ItemCard'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ShowCase, { ShowCaseStr } from './components/Showcase/ShowCase'

const data = [
	{
		text: "Лучший пылесос для тех, кто не боится яркости Гарантированный ",
		price: 9999,
		img: "First.jpg"
	},
	{
		text: "Ultra Red Superpowered Vacuum Cleaner 9000X Max Pro",
		price: 5555,
		img: "Tretiy.jpg"
	},
	{
		text: "Компактный, стильный и мощный. Идеален для повс",
		price: 1369342,
		img: "Second.jpg"
	}
]

function Router() {
	return (
		<div>
			<ShowCaseStr data={data} />
		</div>
	)
}

export default Router
