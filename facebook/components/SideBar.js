import React from "react"
import {useSession} from "next-auth/react"
import SideBarRow from "./SideBarRow"
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon
} from "@heroicons/react/outline"

import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from "@heroicons/react/solid"
function SideBar(){
    const {data:session}=useSession()
    return(
        <div className="p-2 mt-5 max-w-[600px] xs:min-w-[300px]">
            <SideBarRow src={session.user.image} title={session.user.name}/>
            <SideBarRow  Icon={UsersIcon} title="Friends"/>
            <SideBarRow Icon={UserGroupIcon} title="Groups"/>
            <SideBarRow Icon={ShoppingBagIcon} title="MarketPlace"/>
            <SideBarRow Icon={DesktopComputerIcon} title="Watch"/>
            <SideBarRow Icon={CalendarIcon} title="Events"/>
            <SideBarRow Icon={ClockIcon} title="Memories"/>
            <SideBarRow Icon={ChevronDownIcon} title="See More"/>
        </div>
    )
}
export default SideBar;