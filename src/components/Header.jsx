import {Link} from 'react-router-dom'

const Header = () => {
return (<section>
    <h1 id="welcome">NC News</h1>
<nav>
    <Link to='/'>Home</Link>
    <Link to='/articles'>All Articles</Link>
    </nav>
    </section>)
}

export default Header