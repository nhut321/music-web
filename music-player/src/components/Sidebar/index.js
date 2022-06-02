import { Link } from 'react-router-dom'
import logo from '../../assets/image/logo.png'
import './Sidebar.css'

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar-logo">
				<Link to='/' >
					<img src={logo} alt="" />
				</Link>
			</div>
			<div className="sidebar-list">

				<div className="sidebar-item">
					<div className="sidebar-item__icon">
						<i className="fa-solid fa-tablet-screen-button"></i>
					</div>
					<div className="sidebar-item__name">
						<span>Cá Nhân</span>
					</div>
				</div>

				<div className="sidebar-item">
					<div className="sidebar-item__icon">
						<i className="fa-solid fa-compact-disc"></i>
					</div>
					<div className="sidebar-item__name">
						<span>Khám Phá</span>
					</div>
				</div>

				<div className="sidebar-item">
					<div className="sidebar-item__icon">
						<i className="fa-solid fa-tablet-screen-button"></i>
					</div>
					<div className="sidebar-item__name">
						<span>#chart</span>
					</div>
				</div>

				<div className="sidebar-item">
					<div className="sidebar-item__icon">
						<i className="fa-solid fa-radio"></i>
					</div>
					<div className="sidebar-item__name">
						<span>Radio</span>
					</div>
				</div>

				<div className="sidebar-item">
					<div className="sidebar-item__icon">
						<i className="fa-solid fa-newspaper"></i>
					</div>
					<div className="sidebar-item__name">
						<span>Theo Dõi</span>
					</div>
				</div>

			</div>
		</div>
	)
}