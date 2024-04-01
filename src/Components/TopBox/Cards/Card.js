import React from "react";

export default function Cards({image,name,totalEvents,sports,ad,title,aboutAd,className}){
    return(ad?
        /*--------------Ad Card---------------------- */
        (<div className={`${className} w-[238.53px] h-[511px] bg-[rgba(255, 255, 255, 1)] [box-shadow:0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] dark:bg-[rgba(59,62,71,1)]`}>
            <div className="relative w-[218.4px] h-[491px] top-[10px] left-[10.06px] border-[0.2px] border-solid border-[rgba(0,101,85,1)] dark:bg-[rgba(59,62,71,1)]">
                
                <div className="absolute w-[48.09px] h-[25px] top-[0px] left-[170.31px] px-[15px] py-[3px] gap-[10px] bg-[rgba(0,_0,_0,_1)] z-10">
                    <p className="w-[18px] h-[19px] font-[Inter] text-[12.8px] font-bold leading-[19px] text-left text-[rgba(255,_255,_255,_1)]">
                        Ad
                    </p>
                </div>

                <img className="w-[218.4px] h-[218px] m-0 p-0" 
                src={image} 
                alt="AdImage"/>

                <p className="absolute w-[188.21px] h-[24px] top-[246px] left-[15.1px] font-[Inter] text-[20px] font-semibold leading-[24.2px] text-left text-[rgba(34,_45,_58,_1)] dark:text-[rgba(255,255,255,1)]">
                    {title}
                </p>

                <p className="absolute w-[188.34px] h-[171px] top-[278px] left-[15.1px] font-[Inter] text-[12.8px] font-normal leading-[19px] text-left text-[rgba(82,_89,_101,_1)] dark:text-[rgba(223,223,223,1)]">
                    {aboutAd}
                </p>

            </div>
        </div>):
        
        /*--------------Normal Cards------------------ */
        <div className={`${className} w-[238.53px] h-[511px] bg-[rgba(255, 255, 255, 1)] [box-shadow:0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] dark:bg-[rgba(59,62,71,1)]`}>
            <img src={image}
                alt="playerImg"
                className="relative w-[218.4px] h-[385.31px] top-[10px] left-[10.06px]"/>

            <p className="absolute w-[187.2px] h-[21px] top-[410px] left-[10.06px] font-[Inter] text-[17px] font-medium leading-[20.57px] text-left text-[rgba(0,_0,_0,_1)] dark:text-[rgba(255,255,255,1)]">
                {name}
            </p>

            <div className="bg-[#F7F7F8] absolute w-[218.4px] h-[54px] top-[447px] left-[10.06px] rounded-[2px] dark:bg-[rgba(41,43,50,1)]">

                <div className="relative flex justify-between w-[167.07px] h-[31px] top-[12px] left-[10.06px]">
                    <div className="relative w-[70.45px] h-[31px] top-[0px] left-[0px]">
                        <p className="relative w-[70.45px] h-[9px] top-[0px] left-[0px] font-[Inter] text-[12px] font-normal leading-[14.52px] text-left text-[rgba(82,_89,_101,_1)] dark:text-[rgba(223,223,223,1)]">
                            Total Events
                        </p>
                        <p className="absolute top-[21px] w-[67.43px] h-[10px] font-[Inter] text-[14px] font-medium leading-[16.94px] text-left text-[rgba(0,_0,_0,_1)] dark:text-[rgba(255,255,255,1)]">
                            {totalEvents}
                        </p>
                    </div>

                    <div className="w-[57.37px] h-[31px]">
                        <p className="w-[70.45px] h-[9px] font-[Inter] text-[12px] font-normal leading-[14.52px] text-left text-[rgba(82,_89,_101,_1)] dark:text-[rgba(223,223,223,1)]">
                            Sport
                        </p>
                        <p className="absolute top-[21px] w-[74px] h-[10px] font-[Inter] text-[14px] font-medium leading-[16.94px] text-left text-[rgba(0,_0,_0,_1)] dark:text-[rgba(255,255,255,1)]">
                            {sports}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}