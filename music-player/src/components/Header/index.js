import { useState, useContext, useEffect, useRef } from 'react'
import { appContext } from '../../contexts/appContext'
import { useNavigate } from 'react-router-dom'
import avatar from '../../assets/image/avatar.png'
import './Header.css'
import axios from 'axios'
import { baseApi } from '../baseApi'

export default function Header() {
	const app = useContext(appContext)
	const navigate = useNavigate()
	const [searchInput, setSearchInput] = useState('')
	const [showSetting, setShowSetting] = useState(false)
	const [showUserSub, setShowUserSub] = useState(false)
	const subRef = useRef()

	const toggleShowSetting = () => {
		setShowSetting(v => !v)
	}
	const toggleUserSub = () => {
		setShowUserSub(v => !v)
	}

	useEffect(() => {
		const handleShow = (e) => {
			if(!subRef.current.contains(e.target)) {
				setShowSetting(false)
				setShowUserSub(false)
			}
		}
		document.addEventListener('mousedown', handleShow)


		return () => {
			document.removeEventListener('mousedown', handleShow)
		}

	},[showSetting, showUserSub])

	const searchFn = async (e) => {
		e.preventDefault()
		const result = await axios.get(baseApi.baseUrl + '/api/v1/zing/search/' + searchInput)
		navigate('/tim-kiem/tat-ca?' + searchInput)
		app.dispatch({
			type: 'SEARCH', 
			payload: result.data.data
		})
	}

	return (
		<div className="header">
			<div className="header-left">
				<div className="header-left__icon">
					<i className="fa-solid fa-chevron-left"></i>
				</div>
				<div className="header-left__icon">
					<i className="fa-solid fa-chevron-right"></i>
				</div>
			</div>
			<div className="header-center">
				<div className="header-center__search">
					<div className="header-center__search-icon" onClick={searchFn}>
						<i className="fa-solid fa-magnifying-glass"></i>
					</div>
					<div className="header-center__search-input">
						<input 
							type="text" 
							placeholder='Nhập tên bài hát, nghệ sĩ hoặc MV...' 
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
						/>
					</div>
				</div>
			</div>
			<div className="header-right">
				<div className="header-right__list">
					<div className="header-right__item" onClick={toggleShowSetting}>
						<div className="icon">
							<i className="fa-solid fa-gear"></i>
						</div>
						<div className={showSetting ? 'header-right__item-sub active' : 'header-right__item-sub'}>

							<div ref={subRef} className="header-right__item-sub-list">
								<div className="header-right__item-sub-item">
									<div className="sub-item__icon">
										<i className="fa-solid fa-ban"></i>
									</div>
									<div className="sub-item__name">
										<span>Danh sách chặn</span>
									</div>
								</div>
								<div className="header-right__item-sub-item">
									<div className="sub-item__icon">
										<i className="fa-regular fa-circle-play"></i>
									</div>
									<div className="sub-item__name">
										<span>Giao diện</span>
									</div>
								</div>
							</div>

							<div className="header-right__item-sub-list">
								<div className="header-right__item-sub-item">
									<div className="sub-item__icon">
										<i className="fa-solid fa-circle-info"></i>
									</div>
									<div className="sub-item__name">
										<span>Giới thiệu</span>
									</div>
								</div>
								<div className="header-right__item-sub-item">
									<div className="sub-item__icon">
										<i className="fa-solid fa-flag"></i>
									</div>
									<div className="sub-item__name">
										<span>Góp ý</span>
									</div>
								</div>
								<div className="header-right__item-sub-item">
									<div className="sub-item__icon">
										<i className="fa-solid fa-ban"></i>
									</div>
									<div className="sub-item__name">
										<span>Liên hệ</span>
									</div>
								</div>
							</div>

						</div>
					</div>
					<div className="header-right__item" onClick={toggleUserSub}>
						<div className="avatar">
							<img src={avatar} alt="avatar" />
						</div>
						<div className={showUserSub ? 'header-right__item-sub active' : 'header-right__item-sub'}>

							<div ref={subRef} className="header-right__item-sub-list">
								<div className="header-right__item-sub-item">
									<div className="sub-item__icon">
										<i className="fa-solid fa-gem"></i>
									</div>
									<div className="sub-item__name">
										<span>Nâng cấp VIP</span>
									</div>
								</div>
								<div className="header-right__item-sub-item">
									<div className="sub-item__icon">
										<i className="fa-solid fa-rectangle-ad"></i>
									</div>
									<div className="sub-item__name">
										<span>Mua VIP</span>
									</div>
								</div>
							</div>

							<div className="header-right__item-sub-list">
								<div className="header-right__item-sub-item">
									<div className="sub-item__icon">
										<i className="fa-solid fa-arrow-right-from-bracket"></i>
									</div>
									<div className="sub-item__name">
										<span>Đăng xuất</span>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}