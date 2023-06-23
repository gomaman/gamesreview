import { NAV_ITEMS } from "../../Config/NavigationConfig"
import NavigationItem from "./NavigationItem"
import './Navigation.css'


export function NavigationGenerator() {
    return (
        <header className="header">
            <nav className="navigation">
                <ul className='navigation-list'>
                    {NAV_ITEMS.map((item, index) => (
                        <NavigationItem
                            key={index}
                            item={item}
                        ></NavigationItem>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default NavigationGenerator