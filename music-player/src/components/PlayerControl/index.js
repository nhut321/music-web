import { useContext, useEffect, useState } from 'react'
import { appContext } from '../../contexts/appContext'
import img from '../../assets/image/playlist-item.webp'
import axios from 'axios'
import { baseApi } from '../baseApi'
import './PlayerControl.css'

export default function PlayerControl() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [audioFetch, setAudioFetch] = useState({})
	const app = useContext(appContext)
	const song = app.state.searchResult?.data?.songs[currentIndex]
	const nextSong = () => {
		setCurrentIndex(v => v + 1)
		if(currentIndex >= app.state.searchResult?.data?.songs.length - 1) {
			setCurrentIndex(0)
		}
	}
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(baseApi.baseUrl + '/api/v1/zing/song/' + song.encodeId)
			setAudioFetch(result.data.data) 
		}
		fetchData()
	},[])
	return (
			<>
				{
					app.state.isPlay
					?
					<div className="player-control">
						<div className="player-control__left">
							<div className="player-control__left-img">
								<img src={song.thumbnail} alt="" />
							</div>
							<div className="player-control__left-info">
								<a href='#'>
									<span>{song.title}</span>
								</a>
								<a href='#'>
									<span>{song?.album?.title}</span>
								</a>
							</div>
						</div>
						<div className="player-control__center">
							<div className="player-control__center-top">

								<div className="player-control__center-top-icon">
									<i className="fa-solid fa-shuffle"></i>
								</div>

								<div className="player-control__center-top-icon">
									<i className="fa-solid fa-backward-step"></i>
								</div>

								<div className="player-control__center-top-icon play">
									<i className="fa-solid fa-circle-play"></i>
								</div>

								<div className="player-control__center-top-icon" onClick={nextSong}>
									<i className="fa-solid fa-forward-step"></i>
								</div>

								<div className="player-control__center-top-icon">
									<i className="fa-solid fa-repeat"></i>
								</div>

							</div>
							<div className="player-control__center-bottom">
								<span>00:00</span>
								<div className="range"></div>
								<span>03:00</span>
							</div>
						</div>
						<div className="audio">
							<audio src={audioFetch[128]}></audio>
						</div>
						<div className="player-control__right">right</div>
					</div>
					:
					<></>
				}
			</>
	)
}