import {Link} from 'react-router-dom'
import UserLogin from './UserLogin'

const Header = ({user}) => {
return (<section className='header'>
    <h1 id="welcome">NC News</h1>
    <UserLogin ></UserLogin>
<nav className='menu'>
    <Link className='menu_item' to='/'>Home</Link>
    <Link className='menu_item' to='/articles'>Articles</Link>
    </nav>
    </section>)
}

export default Header