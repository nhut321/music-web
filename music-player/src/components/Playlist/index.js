import PlaylistItem from '../PlaylistItem'
import './Playlist.css'

export default function Playlist({item}) {

	console.log()

	return (
		<div className="playlist-section">
			<div className="playlist-section__header">
				<div className="playlist-section__header-heading">
					<h3>{item?.title}</h3>
				</div>
				<a href="#" className="playlist-section__header-link">
					<span>TẤT CẢ</span>
					<i className="fa-solid fa-chevron-right"></i>
				</a>
			</div>
			<div className="playlist-section__list">
				{
					item?.items?.slice(0,5).map((v,i) => {
						return (
							<PlaylistItem key={i} title={v.title} desc={v.sortDescription} thumb={v.thumbnail} />
						)
					})
				}
				{/* <PlaylistItem /> */}
				{/* <PlaylistItem /> */}
				{/* <PlaylistItem /> */}
			</div>
		</div>
	)
}