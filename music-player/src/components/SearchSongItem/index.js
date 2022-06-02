import { useEffect, useState, useRef, useContext } from 'react'
import { appContext } from '../../contexts/appContext'
import axios from 'axios'
import { baseApi } from '../baseApi'

export default function SearchSongItem({thumb, title, artists, titleAlbum, duration, id}) {
	const app = useContext(appContext)

	const [audioFetch, setAudioFetch] = useState({})

	const audio = useRef()

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(baseApi.baseUrl + '/api/v1/zing/song/' + id)
			setAudioFetch(result.data.data)
		}
		fetchData() 
	},[])

	function playMusic() {
		app.dispatch({type: 'PLAY', isPlay: true})
		audio.current.play()
	}

	return (
		<div className="song-item">
			<div className="song-item__left">
				<div className="song-item__left-img">
					<img src={thumb} alt="" />
					<div className="left-img__icon" onClick={playMusic}>
						<i className="fa-solid fa-play"></i>
					</div>
				</div>
				<div className="song-item__left-info">
					<span>{title}</span>
					<a href="#">{artists.name}</a>
				</div>
			</div>
			<div className="song-item__center">
				<a href="#">{titleAlbum}</a>
			</div>
			<div className="song-item__right">
				<div className="song-item__right-time">
					<span>
					{
						`${Math.floor(duration/60)}: ${Math.floor(duration%60)}`
					}
					</span>
				</div>
				<div className="song-item__right-icon">
					<i className="fa-solid fa-ellipsis"></i>
				</div>
			</div>
			<div className="audio">
				<audio ref={audio} src={audioFetch[128]}></audio> 
			</div>
		</div>
	)
}