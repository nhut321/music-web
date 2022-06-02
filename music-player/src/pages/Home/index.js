import { useEffect, useState } from 'react'
import HeroSlider from '../../components/HeroSlider'
import Playlist from '../../components/Playlist'
import axios from 'axios'
import { baseApi } from '../../components/baseApi'



function Home() {
	const [item, setItem] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(`${baseApi.baseUrl}/api/v1/zing/gethome`)
			setItem(result.data.data.items)
		}
		fetchData()
	},[])

	return (
		<div className="home" style={{margin: '0 2rem'}}>
			<HeroSlider item={item[0]}/>
			<Playlist item={item[3]}/>
			<Playlist item={item[4]}/>
			<Playlist item={item[5]}/>
			<h1>Home</h1>	
		</div>
	)
}

export default Home