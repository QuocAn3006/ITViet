import { Icon } from "@iconify/react/dist/iconify.js";

const StatisticOwner = () => {
    return (
        <div className="p-4 flex gap-3 w-full h-full bg-[#f0f2f5]">
            <div className="w-[33%] h-fit flex p-4 shadow-lg rounded-lg bg-white">
                <Icon
                    icon='mdi:human-male-male'
                    height={50}
                    className="text-primary m-2"
                ></Icon>
                <div className="px-4 text-lg">
                    <h1>Tổng số thành viên</h1>
                    <h1 className="font-bold">20</h1>
                </div>
            </div>
            <div className="w-[33%] h-fit flex p-4 shadow-lg rounded-lg bg-white">
                <Icon
                    icon='carbon:sales-ops'
                    height={50}
                    className="text-primary m-2"
                ></Icon>
                <div className="px-4 text-lg">
                    <h1>Tổng doanh thu</h1>
                    <h1 className="font-bold">200,000</h1>
                </div>
            </div>
            <div className="w-[33%] h-fit flex p-4 shadow-lg rounded-lg bg-white">
                <Icon
                    icon='lets-icons:user-add'
                    height={50}
                    className="text-primary m-2"
                ></Icon>
                <div className="px-4 text-lg">
                    <h1>Thành viên mới</h1>
                    <h1 className="font-bold">10</h1>
                </div>
            </div>
        </div>
    );
}

export default StatisticOwner;