import {Link} from 'react-router-dom'

const Header = ({user}) => {
return (<section>
    <h1 id="welcome">NC News</h1>
    <h2>Logged in as {user}</h2>
<nav>
    <Link to='/'>Home</Link>
    <Link to='/articles'>Articles</Link>
    </nav>
    </section>)
}

export default Header