import { Heart, SquarePlus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { home } from '../../../constants/path'
import style from './sidebar.module.scss'

const Sidebar = () => {
    return (
        <div className={style['sideBar']}>
            <div className="h-screen w-64 bg-[#282C35] border-gray-700 p-4 text-white overflow-y-auto">
                {/* Logo */}
                <div className="text-center py-4">
                    <Link to={home}>
                        <b className="text-2xl ">120BPM</b>
                    </Link>
                </div>

                {/* Menu */}
                <div className="flex flex-col gap-y-4">

                    <div className="playlist">
                        <div className="heading flex justify-between items-center font-semibold py-2">
                            <p className="text-lg">Playlist</p>

                            <div className="cursor-pointer">
                                <SquarePlus size={18} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <div className="rounded-md bg-[#1b1b1d] p-2 flex items-center gap-x-2">
                                <div className="thumb">
                                    <img src="https://picsum.photos/id/237/200" alt="" width={50} className="rounded-sm " />
                                </div>

                                <div className="info">
                                    <p className="font-semibold">Playlist 1</p>
                                    <p className="text-gray-400">10 songs</p>
                                </div>
                            </div>

                            <div className="rounded-md bg-[#1b1b1d] p-2 flex items-center gap-x-2">
                                <div className="thumb">
                                    <img src="https://picsum.photos/id/237/200" alt="" width={50} className="rounded-sm" />
                                </div>

                                <div className="info">
                                    <p className="font-semibold">Playlist 1</p>
                                    <p className="text-gray-400">10 songs</p>
                                </div>
                            </div>

                            <div className="rounded-md bg-[#1b1b1d] p-2 flex items-center gap-x-1">
                                <div className="thumb">
                                    <img src="https://picsum.photos/id/237/200" alt="" width={50} className="rounded-sm" />
                                </div>

                                <div className="info">
                                    <p className="font-semibold">Playlist 1</p>
                                    <p className="text-gray-400">10 songs</p>
                                </div>
                            </div>

                            <div className="rounded-md bg-[#1b1b1d] p-2 flex items-center gap-x-2">
                                <div className="thumb">
                                    <img src="https://picsum.photos/id/237/200" alt="" width={50} className="rounded-sm" />
                                </div>

                                <div className="info">
                                    <p className="font-semibold">Playlist 1</p>
                                    <p className="text-gray-400">10 songs</p>
                                </div>
                            </div>

                            <div className="rounded-md bg-[#1b1b1d] p-2 flex items-center gap-x-2">
                                <div className="thumb">
                                    <img src="https://picsum.photos/id/237/200" alt="" width={50} className="rounded-sm " />
                                </div>

                                <div className="info">
                                    <p className="font-semibold">Playlist 1</p>
                                    <p className="text-gray-400">10 songs</p>
                                </div>
                            </div>

                            <div className="rounded-md bg-[#1b1b1d] p-2 flex items-center gap-x-2">
                                <div className="thumb">
                                    <img src="https://picsum.photos/id/237/200" alt="" width={50} className="rounded-sm" />
                                </div>

                                <div className="info">
                                    <p className="font-semibold">Playlist 1</p>
                                    <p className="text-gray-400">10 songs</p>
                                </div>
                            </div>

                            <div className="rounded-md bg-[#1b1b1d] p-2 flex items-center gap-x-1">
                                <div className="thumb">
                                    <img src="https://picsum.photos/id/237/200" alt="" width={50} className="rounded-sm" />
                                </div>

                                <div className="info">
                                    <p className="font-semibold">Playlist 1</p>
                                    <p className="text-gray-400">10 songs</p>
                                </div>
                            </div>

                            <div className="rounded-md bg-[#1b1b1d] p-2 flex items-center gap-x-2">
                                <div className="thumb">
                                    <img src="https://picsum.photos/id/237/200" alt="" width={50} className="rounded-sm" />
                                </div>

                                <div className="info">
                                    <p className="font-semibold">Playlist 1</p>
                                    <p className="text-gray-400">10 songs</p>
                                </div>
                            </div>

                            <div className="rounded-md bg-[#1b1b1d] p-2 flex items-center gap-x-2">
                                <div className="thumb">
                                    <img src="https://picsum.photos/id/237/200" alt="" width={50} className="rounded-sm " />
                                </div>

                                <div className="info">
                                    <p className="font-semibold">Playlist 1</p>
                                    <p className="text-gray-400">10 songs</p>
                                </div>
                            </div>

                            <div className="rounded-md bg-[#1b1b1d] p-2 flex items-center gap-x-2">
                                <div className="thumb">
                                    <img src="https://picsum.photos/id/237/200" alt="" width={50} className="rounded-sm" />
                                </div>

                                <div className="info">
                                    <p className="font-semibold">Playlist 1</p>
                                    <p className="text-gray-400">10 songs</p>
                                </div>
                            </div>

                            <div className="rounded-md bg-[#1b1b1d] p-2 flex items-center gap-x-1">
                                <div className="thumb">
                                    <img src="https://picsum.photos/id/237/200" alt="" width={50} className="rounded-sm" />
                                </div>

                                <div className="info">
                                    <p className="font-semibold">Playlist 1</p>
                                    <p className="text-gray-400">10 songs</p>
                                </div>
                            </div>

                            <div className="rounded-md bg-[#1b1b1d] p-2 flex items-center gap-x-2">
                                <div className="thumb">
                                    <img src="https://picsum.photos/id/237/200" alt="" width={50} className="rounded-sm" />
                                </div>

                                <div className="info">
                                    <p className="font-semibold">Playlist 1</p>
                                    <p className="text-gray-400">10 songs</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="favSong">
                        <div className="heading flex justify-between items-center font-semibold py-2">
                            <p className="text-lg">Danh sách yêu thích</p>

                            {/* <div className="cursor-pointer">
                                <SquarePlus size={18} />
                            </div> */}
                        </div>

                        <div className="rounded-md bg-[#1b1b1d] p-2 flex items-center gap-x-2">
                            <div className="thumb w-[50px] h-[50px] flex justify-center items-center rounded-sm outline outline-gray-500">
                                {/* <img src="https://picsum.photos/id/237/200" alt="" width={50} className="rounded-sm" /> */}
                                <Heart size={26} />
                            </div>

                            <div className="info">
                                <p className="font-semibold">Bài hát yêu thích</p>
                                <p className="text-gray-400">10 songs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar