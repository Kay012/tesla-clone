import React, {useState} from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Fade from 'react-reveal'
// import {selectCars} from '../../features/car/CarSlice'
// import {useSelector} from 'react-redux'

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false)

    // const state = useSelector(selectCars)

    const sidebarToggler = (e) => {
        e.preventDefault()
        setBurgerStatus(!burgerStatus)
    }

    return (
        <div className='header'>
            <a>
                <h1>T E S L S A</h1>
            </a>
            <div className="menu">
                <a href='#'>Model S</a>
                <a href='#'>Model 3</a>
                <a href='#'>Model X</a>
                <a href='#'>Model Y</a>
            </div>
            <div className="right_menu">
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
                <MenuIcon onClick={sidebarToggler} className='menu_icon'/>
            </div>
            


            <Fade right when={burgerStatus}>
                <div className="burger_nav">
                
                        <div className="close_wrapper">
                            <CloseIcon onClick={sidebarToggler} className='close_icon'/>
                        </div>
                        
                        <li><a href='#'>Existing Inventory</a></li>
                        <li><a href='#'>Used Inventory</a></li>
                        <li><a href='#'>Trade-in</a></li>
                        <li><a href='#'>Cybertruck</a></li>

                        <li><a href='#'>Existing Inventory</a></li>
                
                </div>
            </Fade>
        
            
        </div>
    )
}

export default Header
