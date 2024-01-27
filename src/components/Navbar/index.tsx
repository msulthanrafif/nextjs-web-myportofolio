import Image from "next/image"
import LogoIcon from "@/asset/icons/logo.svg"
import ProfileImage from "@/asset/images/profile.jpg"
import "./Navbar.css"
import NavButton from "./NavButton"

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="hidden w-full h-16 items-center justify-between lg:flex">
                    <div className="w-full flex flex-1 items-center justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Image
                                src={LogoIcon}
                                className="h-10 w-auto border-slate-900 bg-slate-100 rounded-full"
                                alt="logo icon"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <NavButton />
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <Image src={ProfileImage} alt="profile picture" className="h-10 w-auto rounded-full" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar