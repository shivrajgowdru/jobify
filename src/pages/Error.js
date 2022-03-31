import img from '../assets/images/not-found.svg'
import Wrapper from "../assets/wrappers/ErrorPage"
import {Link} from 'react-router-dom'
const Error = () => {
  return (
    <Wrapper className="Full-page">
         <div>
          <img src={img} alt="error"/>
          <h3>ohh! Page not found</h3>
        <p>We can't seem to find the page you are looking for</p>
         <Link to='/'>back home</Link>
         </div>
    </Wrapper>
  
  )
}

export default Error