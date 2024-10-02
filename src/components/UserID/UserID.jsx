import './UserID.css'
import { FaCircle } from 'react-icons/fa6'

const UserID = ({ intials, available, bgColor }) => {
    console.log(bgColor);
    return (
        <div className='user'>
            <div className='user_icon' style={{ backgroundColor: bgColor }}>{intials}</div>
            <div className='dot' style={available ? { color: "#50B053" } : {}}>
                <FaCircle />
            </div>
        </div>
    )
}

export default UserID