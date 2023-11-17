import {Header as CHeader} from './styles'
import LogoFIAP from '../../assets/images/logo--fiap.svg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <CHeader>
            <img src={LogoFIAP} alt="" />
            <nav>
                <ul>
                    <li><Link to="/">Sobre</Link></li>
                    <li><Link to="/formation">Formação</Link></li>
                    <li><Link to="/hobbies">Hobbies</Link></li>
                    <li><Link to="/experiences">Experiências</Link></li>
                </ul>
            </nav>
        </CHeader>
    )
}

export default Header;
