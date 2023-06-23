import { NavLink } from 'react-router-dom'
import './Navigation.css'

function NavigationItem(props) {
    const {text, href} = props.item
    if(text, href) {
        return (
            <li className='nav-item'>
                 <NavLink to={href}>{text}</NavLink>
            </li>
        )
    }
}
export default NavigationItem