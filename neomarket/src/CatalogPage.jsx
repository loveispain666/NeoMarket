import styles from './Router.module.css'
import ItemCard from './components/ItemCard/ItemCard'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ShowCase, { ShowCaseStr } from './components/Showcase/ShowCase'

const data = [
	{
		id: 1,
		text: "Лучший пылесос для тех, кто не боится яркости. Гарантированный результат чистоты.",
		price: 9999,
		img: "First.jpg"
	},
	{
		id: 2,
		text: "Ultra Red Superpowered Vacuum Cleaner 9000X Max Pro",
		price: 5555,
		img: "First.jpg"
	},
	{
		id: 3,
		text: "Компактный, стильный и мощный. Идеален для повседневной уборки.",
		price: 1369342,
		img: "First.jpg"
	},
	{
		id: 4,
		text: "Тихий и энергоэффективный пылесос для квартиры с животными.",
		price: 18490,
		img: "First.jpg"
	},
	{
		id: 5,
		text: "Вертикальный беспроводной — свобода движения без проводов.",
		price: 25990,
		img: "First.jpg"
	},
	{
		id: 6,
		text: "Робот-пылесос с лидаром: строит карту и находит грязь в углах.",
		price: 39990,
		img: "First.jpg"
	},
	{
		id: 7,
		text: "Моющий пылесос 2-в-1: сухая и влажная уборка за один проход.",
		price: 32990,
		img: "First.jpg"
	},
	{
		id: 8,
		text: "Компактный ручной для салона авто и мебели.",
		price: 4990,
		img: "First.jpg"
	},
	{
		id: 9,
		text: "Пылесос для аллергиков с HEPA H14 и угольным фильтром.",
		price: 21990,
		img: "First.jpg"
	},
	{
		id: 10,
		text: "Промышленный строительный — справляется со смесью и пылью.",
		price: 45990,
		img: "First.jpg"
	},
	{
		id: 11,
		text: "Суперлёгкий для ежедневной быстрой уборки кухни.",
		price: 7490,
		img: "First.jpg"
	},
	{
		id: 12,
		text: "Пылесос с аквафильтром: чистый воздух без запахов.",
		price: 27990,
		img: "First.jpg"
	},
	{
		id: 13,
		text: "Модель с турбощёткой для ковров с длинным ворсом.",
		price: 18990,
		img: "First.jpg"
	},
	{
		id: 14,
		text: "Ультратихий — можно пылесосить ночью не будя семью.",
		price: 23990,
		img: "First.jpg"
	},
	{
		id: 15,
		text: "Пылесос для ламината: мягкие ролики не царапают покрытие.",
		price: 15990,
		img: "First.jpg"
	},
	{
		id: 16,
		text: "Smart-робот с управлением через приложение и сценарием расписаний.",
		price: 44990,
		img: "First.jpg"
	},
	{
		id: 17,
		text: "Робот с автоматической станцией самоочистки контейнера.",
		price: 62990,
		img: "First.jpg"
	},
	{
		id: 18,
		text: "Мощный циклонный без мешка — стабильная тяга без потерь.",
		price: 17490,
		img: "First.jpg"
	},
	{
		id: 19,
		text: "Вертикальный складной — удобно хранить в шкафу.",
		price: 19990,
		img: "First.jpg"
	},
	{
		id: 20,
		text: "Пылесос для животных: насадка удаляет шерсть и пух.",
		price: 16990,
		img: "First.jpg"
	},
	{
		id: 21,
		text: "Premium Edition: металлический корпус и OLED-индикатор.",
		price: 30990,
		img: "First.jpg"
	},
	{
		id: 22,
		text: "Автономный робот с зональной уборкой и виртуальными стенами.",
		price: 51990,
		img: "First.jpg"
	},
	{
		id: 23,
		text: "Аккумуляторный с быстрой зарядкой до 80% за 30 минут.",
		price: 28990,
		img: "First.jpg"
	},
	{
		id: 24,
		text: "Универсальный пылесос с паровой функцией для плитки.",
		price: 33990,
		img: "First.jpg"
	},
	{
		id: 25,
		text: "Компактный экономичный — низкое энергопотребление класса A+++.",
		price: 12990,
		img: "First.jpg"
	},
	{
		id: 26,
		text: "Компактный экономичный — низкое энергопотребление класса A+++.",
		price: 12990,
		img: "First.jpg"
	}
];


function CatalogPage() {
	const cardsRows = [];

	for (let i = 0; i < data.length; i += 5)
		cardsRows.push(<ShowCaseStr key={i} data={data.slice(i, i + 5)} />);

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

export default CatalogPage
