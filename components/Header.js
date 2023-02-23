import Image from "next/image";
import {signOut,useSession} from 'next-auth/react';
import {
    MagnifyingGlassIcon,
PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    Bars4Icon
} from "@heroicons/react/24/outline";
import {
    HomeIcon
} from "@heroicons/react/24/solid";


function Header(){
const{data:session} = useSession();
    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">

            {/*Left */}
            <div className="relative hidden lg:inline-grid w-24 cursor-pointer text-3xl mt-5">
                Election
            </div>
            <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer mt-5 mr-5">
            Election
            </div>

            {/*Middle */}
            <div className="max-w-xs">
            <div className="relative mt-1 p-3 rounded-md">
                <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                </div>
                <input className="bg-gray-100 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" type="text" placeholder="search" />
            </div>
            </div>

            {/*Right */}
            <div className="flex items-center justify-end space-x-4">
        <HomeIcon className="navBtn"/>
        <Bars4Icon className="h-6 md:hidden cursor-pointer" />

        <div className="relative navBtn animate-pulse hover:animate-none"> 
        <PaperAirplaneIcon className="navBtn -rotate-45" />
        <div className="absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white">3</div>
        </div>
        <PlusCircleIcon className="navBtn"/>
        <UserGroupIcon className="navBtn"/>
        <HeartIcon className="navBtn"/>

        <img src='profile.jpg' alt='profile pic' className="h-10 rounded-full cursor-pointer" /> 
            </div>


            </div>
        </div>
        )
}
//"./profile.PNG"
export default Header