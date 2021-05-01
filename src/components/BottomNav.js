import Navbar from 'react-bootstrap/Navbar'
import SocialMediaLinks from './SocialMedia'
function BottomNav () {
    return (
        <Navbar className='bottom-nav-custom' fixed="bottom">
            <SocialMediaLinks/>
        </Navbar>
    )
}
export default BottomNav;