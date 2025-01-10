const Loading = () => {
    return (
        <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-20 z-50 flex items-center justify-center">
            <div className="rotate-anim w-10 h-10">
                <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 309.09 300.23">
                    <defs>
                    </defs>
                    <path className="cls-1" d="M206.21,0l6.18,30.6c42.07,21.19,70.94,64.76,70.94,115.09,0,71.13-57.66,128.79-128.79,128.79S25.76,216.81,25.76,145.69c0-37.97,16.43-72.09,42.57-95.66l-5.76-28.53C24.61,49.65,0,94.79,0,145.69c0,85.35,69.19,154.55,154.55,154.55s154.55-69.19,154.55-154.55c0-67.23-42.93-124.42-102.88-145.69Z"/>
                </svg>
            </div>
        </div>
    )
}

export default Loading;