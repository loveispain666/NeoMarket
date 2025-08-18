import styles from './Router.module.css'
import ItemCard from './components/ItemCard/ItemCard'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ShowCase, { ShowCaseStr } from './components/Showcase/ShowCase'

const data = [
	{
		text: "Лучший пылесос для тех, кто не боится яркости. Гарантированный результат чистоты.",
		price: 9999,
		img: "First.jpg"
	},
	{
		text: "Ultra Red Superpowered Vacuum Cleaner 9000X Max Pro",
		price: 5555,
		img: "First.jpg"
	},
	{
		text: "Компактный, стильный и мощный. Идеален для повседневной уборки.",
		price: 1369342,
		img: "First.jpg"
	},
	{
		text: "Тихий и энергоэффективный пылесос для квартиры с животными.",
		price: 18490,
		img: "First.jpg"
	},
	{
		text: "Вертикальный беспроводной — свобода движения без проводов.",
		price: 25990,
		img: "First.jpg"
	},
	{
		text: "Робот-пылесос с лидаром: строит карту и находит грязь в углах.",
		price: 39990,
		img: "First.jpg"
	},
	{
		text: "Моющий пылесос 2-в-1: сухая и влажная уборка за один проход.",
		price: 32990,
		img: "First.jpg"
	},
	{
		text: "Компактный ручной для салона авто и мебели.",
		price: 4990,
		img: "First.jpg"
	},
	{
		text: "Пылесос для аллергиков с HEPA H14 и угольным фильтром.",
		price: 21990,
		img: "First.jpg"
	},
	{
		text: "Промышленный строительный — справляется со смесью и пылью.",
		price: 45990,
		img: "First.jpg"
	},
	{
		text: "Суперлёгкий для ежедневной быстрой уборки кухни.",
		price: 7490,
		img: "First.jpg"
	},
	{
		text: "Пылесос с аквафильтром: чистый воздух без запахов.",
		price: 27990,
		img: "First.jpg"
	},
	{
		text: "Модель с турбощёткой для ковров с длинным ворсом.",
		price: 18990,
		img: "First.jpg"
	},
	{
		text: "Ультратихий — можно пылесосить ночью не будя семью.",
		price: 23990,
		img: "First.jpg"
	},
	{
		text: "Пылесос для ламината: мягкие ролики не царапают покрытие.",
		price: 15990,
		img: "First.jpg"
	},
	{
		text: "Smart-робот с управлением через приложение и сценарием расписаний.",
		price: 44990,
		img: "First.jpg"
	},
	{
		text: "Робот с автоматической станцией самоочистки контейнера.",
		price: 62990,
		img: "First.jpg"
	},
	{
		text: "Мощный циклонный без мешка — стабильная тяга без потерь.",
		price: 17490,
		img: "First.jpg"
	},
	{
		text: "Вертикальный складной — удобно хранить в шкафу.",
		price: 19990,
		img: "First.jpg"
	},
	{
		text: "Пылесос для животных: насадка удаляет шерсть и пух.",
		price: 16990,
		img: "First.jpg"
	},
	{
		text: "Premium Edition: металлический корпус и OLED-индикатор.",
		price: 30990,
		img: "First.jpg"
	},
	{
		text: "Автономный робот с зональной уборкой и виртуальными стенами.",
		price: 51990,
		img: "First.jpg"
	},
	{
		text: "Аккумуляторный с быстрой зарядкой до 80% за 30 минут.",
		price: 28990,
		img: "First.jpg"
	},
	{
		text: "Универсальный пылесос с паровой функцией для плитки.",
		price: 33990,
		img: "First.jpg"
	},
	{
		text: "Компактный экономичный — низкое энергопотребление класса A+++.",
		price: 12990,
		img: "First.jpg"
	},
	{
		text: "Компактный экономичный — низкое энергопотребление класса A+++.",
		price: 12990,
		img: "First.jpg"
	}
];



function Router() {
	const cardsRows = [];

	for (let i = 0; i < data.length; i += 5)
		cardsRows.push(<ShowCaseStr data={data.slice(i, i + 5)} />);

	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.content}>
				{cardsRows}
			</div>
			<Footer />
		</div>
	)
}

export default Router
