import itemimg from '../../assets/image/playlist-item.webp'
import './PlaylistItem.css' 

export default function PlaylistItem({title, thumb, desc}) {
	return (
		<div className="playlist-item">
			<div className="playlist-item__img">
				<a href="#">
					<img src={thumb ? thumb : itemimg } alt="" />
					<div className="playlist-item__img-options"></div> 
				</a>
			</div>
			<div className="playlist-item__name">
				{title}
			</div>
			<div className="playlist-item__description">
				{desc}
			</div>
		</div>
	)
}