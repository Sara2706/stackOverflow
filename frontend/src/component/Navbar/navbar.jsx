import './navbar.scss'
import { Search, AccountCircle, Language } from '@material-ui/icons';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Navbar({ setSearch, setSideBar, sideBar }) {
    const searchData = (e) => {
        const value = e.target.value;
        if (value === '') return setSearch(null)
        setSearch(value.toLowerCase())
    }
    return (
        <div className='navbar'>
            <div className="logo">
                <img src="https://www.logo.wine/a/logo/Stack_Overflow/Stack_Overflow-Icon-Logo.wine.svg" className='logoImg' alt="Logo error" />
                <h5>StackOverflow Clone</h5>
            </div>
            <div className="search">
                <div className="searchwrapper">

                    <input type="text" placeholder='Search problem using tags' onChange={searchData} />
                    <button><Search /></button>
                </div>
            </div>
            <div className="icons">
                <div className="items">
                    <CircleNotificationsIcon />
                </div>
                <div className="items">
                    <Language />
                </div>
                <div className="items">
                    < AccountCircle />
                </div>
                {sideBar ?
                    <div className="menu" onClick={() => setSideBar(false)}>
                        < CloseIcon className='icon' />
                    </div> :
                    <div className="menu" onClick={() => setSideBar(true)}>
                        < MenuIcon className='icon' />
                    </div>

                }
            </div>

        </div>
    )
}

export default Navbar