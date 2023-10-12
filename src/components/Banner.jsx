import Image from "next/image";
import softwareDeveloperImage from '../Images/software-developer.png';

const Banner = () => {
    return (
        <div className="relative">
            <Image src={softwareDeveloperImage} alt="Software Developer Image" objectFit="cover" className="h-screen" />
            <div className="absolute flex flex-col top-80 left-72 text-white gap-4 ">
                <span className="font-extrabold text-6xl">
                    Welcome To Albino Travels,
                </span>
                <span className="font-medium text-2xl">
                    See the world
                </span>
            </div>
        </div>
    );
}

export default Banner;
