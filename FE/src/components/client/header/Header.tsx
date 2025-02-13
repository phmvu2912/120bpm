const Header = () => {
    return (
        <header className="flex justify-between items-center gap-x-4">
            {/* Search bar */}
            <div className="flex-1 rounded-full border border-gray-300 p-2">
                abc
            </div>

            <div className="flex gap-x-4 py-4">
                <div className="rounded-full bg-red-300">
                    <div className="px-4 py-2">
                        a
                    </div>
                </div>

                <div className="rounded-full bg-red-300">
                    <div className="px-4 py-2">
                        a
                    </div>
                </div>

                <div className="rounded-full bg-red-300">
                    <div className="px-4 py-2">
                        a
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header