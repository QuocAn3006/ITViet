import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import * as UserService from '../../services/user';
import { resetUser } from '../../redux/Slice/userSlice';

const AdminOwnerPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state?.user);

    const handleLogout = async () => {
        const res = await UserService.logout();
        if (res?.status === 'OK') {
            dispatch(resetUser());
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            navigate(config.routes.login);
        }
    };

    return (
        <div className="flex">
            <nav className='bg-[#4b6580] min-h-screen text-white w-[20%] rounded-r-lg'>
                <div className='flex item-center flex-col p-4'>
                    <div
                        className='flex gap-2 items-center h-12 px-2 hover:bg-[#3e5369] cursor-pointer rounded-md text-lg'
                    >
                        <Icon icon='streamline:decent-work-and-economic-growth'></Icon>
                        <h1>Doanh thu</h1>
                    </div>
                    <div
                        className='flex gap-2 items-center h-12 px-2 hover:bg-[#3e5369] cursor-pointer rounded-md text-lg'
                    >
                        <Icon icon='mdi:account-file-outline'></Icon>
                        <h1>Quản lý tài khoản</h1>
                    </div>
                    <div
                        className='flex gap-2 items-center h-12 px-2 hover:bg-[#3e5369] cursor-pointer rounded-md text-lg'
                    >
                        <Icon icon='bx:detail'></Icon>
                        <h1>Thống kê chi tiết</h1>
                    </div>
                    <div
                        onClick={handleLogout}
                        className='flex gap-2 items-center h-12 px-2 hover:bg-[#3e5369] cursor-pointer rounded-md text-lg'
                    >
                        <Icon
                            icon='tabler:logout'
                            height={18}
                        ></Icon>
                        <h1>Đăng xuất</h1>
                    </div>
                </div>
            </nav>
            <div className="flex-1 ">

            </div>
        </div>

    );
}

export default AdminOwnerPage;