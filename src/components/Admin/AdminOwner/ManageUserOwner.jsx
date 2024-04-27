import { Table } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";

const ManageUserOwner = () => {
    // column user
    const columns = [
        {
            title: 'Mã người dùng',
            dataIndex: 'id'
        },
        {
            title: 'Tên',
            dataIndex: 'name'
        },
        {
            title: 'Loại cửa hàng',
            dataIndex: 'category'
        },
        {
            title: 'Ngày đăng ký',
            dataIndex: 'start'
        },
        {
            title: 'Ngày hết hạn',
            dataIndex: 'end'
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        }
    ];
    // bảng dữ liệu fix cứng user
    const dataTables = [
        {
            key: 1,
            id: 'ND001',
            name: 'An',
            category: 'Shop',
            start: '27/04/2024',
            end: '27/07/2024',
            phone: '0706556039',
            email: 'aa@gmail.com'
        },
        {
            key: 2,
            id: 'ND002',
            name: 'Hy',
            category: 'Shop',
            start: '27/04/2024',
            end: '27/07/2024',
            phone: '0706556039',
            email: 'aa@gmail.com'
        },
        {
            key: 3,
            id: 'ND003',
            name: 'Phi',
            category: 'Cafe',
            start: '27/04/2024',
            end: '27/07/2024',
            phone: '0706556039',
            email: 'aa@gmail.com'
        },
        {
            key: 4,
            id: 'ND004',
            name: 'Huy',
            category: 'Cafe',
            start: '27/04/2024',
            end: '27/07/2024',
            phone: '0706556039',
            email: 'aa@gmail.com'
        },
        {
            key: 5,
            id: 'ND005',
            name: 'Hưng',
            category: 'Cafe',
            start: '27/04/2024',
            end: '27/07/2024',
            phone: '0706556039',
            email: 'aa@gmail.com'
        }
    ];

    return (
        <div className="p-4">
            <div className='flex items-center gap-2'>
                <button className='bg-green-600 text-white font-semibold text-base px-2 py-3 rounded-md flex items-center gap-1'>
                    <Icon icon='ic:baseline-plus' />
                    Thêm
                </button>
                <button className='bg-green-600 text-white font-semibold text-base px-2 py-3 rounded-md flex items-center gap-1'>
                    <Icon icon='material-symbols:delete-outline' />
                    Xóa
                </button>
                <button className='bg-green-600 text-white font-semibold text-base px-2 py-3 rounded-md flex items-center gap-1'>
                    <Icon icon='lucide:edit' />
                    Sửa
                </button>
            </div>
            <div className='mt-3'>
                <Table
                    columns={columns}
                    dataSource={dataTables}
                />
            </div>
        </div>
    );
}

export default ManageUserOwner;