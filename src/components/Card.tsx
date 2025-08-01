import GrainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";

export const Card = ({className, children}:
    PropsWithChildren<{
    className?: string;
}>) => {
    return (
        <div>
            <div className={twMerge("bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6",className)}
            >
                <div className="absolute inset-0 -z-10 opacity-5" style={{
                    backgroundImage: `url(${GrainImage.src})`
                }}>
                </div>
                {children}
            </div>
        </div>

    )
}