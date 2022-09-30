import {Link} from 'react-router-dom'

const Header = ({user}) => {
return (<section className='header'>
    <h1 id="welcome">NC News</h1>
    <h2 id='user_status'>Logged in as {user}</h2>
<nav className='menu'>
    <Link className='menu_item' to='/'>Home</Link>
    <Link className='menu_item' to='/articles'>Articles</Link>
    </nav>
    </section>)
}

export default Header