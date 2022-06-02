import { useContext, useEffect, useState } from 'react'
import { appContext } from '../../contexts/appContext'
import imgItem from '../../assets/image/playlist-item.webp'
import SearchSongItem from '../../components/SearchSongItem'
import './Search.css'

function Search() {
	const [result, setResult] = useState({
		songs: []
	})
	const app = useContext(appContext)

	useEffect(() => {
		setResult(app.state.searchResult.data)
	},[app.state.searchResult])

	return (
		<div className="search-page">
			<div className="search-page__header">
				<div className="search-page__header-result">
					<h1>Kết Quả Tìm Kiếm</h1>
				</div>
			</div>
			<div className="search-page__content">
				<div className="search-page__content-item song">
					<div className="song-header">
						<div className="song-header__left">
							<h3>Bài Hát</h3>
						</div>
						<div className="song-header__right">
							<a href="#">
								<span>TẤT CẢ</span>
							</a>
							<i className="fa-solid fa-chevron-right"></i>
						</div>
					</div>
					<div className="song-list">

						{
							result?.songs?.map((v,i) => {
								return (
									// <h1>Hihi</h1>
									<SearchSongItem 
										key={i}
										thumb={v?.thumbnail} 
										title={v?.title} 
										artists={v?.artists[0]} 
										titleAlbum={v?.album?.title}
										duration={v?.duration}
										id={v?.encodeId}
									/>

								)
							})
						}


					</div>
				</div>
				<div className="search-page__content-item album"></div>
				<div className="search-page__content-item artist"></div>
			</div>
		</div>
	)
}

export default Search