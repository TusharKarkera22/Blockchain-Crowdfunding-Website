'use-client'
import Image from "next/image";
export default function Loading(){
    return(

        <div className="min-w-screen min-h-screen items-center m-[50%] bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100
        ">
            <Image className="flex justify-center" src='/loading.gif' width={150} height={150}/>
        </div>
    );
}