import Button from '@mui/material/Button';

const Sidebar = () =>{

    return(
        <div className="sidebar">
            <ul>
                <li>
                    <Button>
                        <span className='icon'></span>
                        Dashboard
                        <span className="arrow"></span>
                    </Button>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar