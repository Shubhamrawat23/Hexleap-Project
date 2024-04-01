import React from "react";
import Dashed from '../../../Images/dashed.svg'

export default function Ticket({TktsImg, name, Collection, venue}){
    return(
        <section className="w-[257px] h-[625px] gap-0 opacity-[0px] border-[Mixed] border-solid border-[rgba(169,172,178,1)] [box-shadow:0px_8px_16px_0px_rgba(0,_0,_0,_0.1)] dark:border-[rgba(129,138,151,1)] dark:[box-shadow:0px_10px_20px_0px_rgba(0,_0,_0,_0.2)]">
            

            <div className="absolute top-[0px] w-[257px] h-[625px] gap-0 opacity-[0px] bg-[rgba(255,_255,_255,_1)] dark:bg-[rgba(59,62,71,1)]">

                <img src={Dashed} 
                alt="DashImg" 
                className="relative z-10 top-[438px] left-[23px]" />

                <div className="relative w-[257px] h-[625px] top-[0px] left-[0px] gap-0 opacity-[0px] bg-[rgba(255,_255,_255,_1)] [box-shadow:0px_4px_8px_0px_rgba(0,_0,_0,_0.05)] dark:bg-[rgba(59,62,71,1)]">

                    <div className="absolute w-[20px] h-[20px] top-[428px] -left-[10px] rounded-[50px] bg-[linear-gradient(to_right,_rgba(249,_248,_255,_1)_,_rgba(243,_249,_255,_1)_,rgba(255,_255,_255,_1))]
 [box-shadow:-4px_1px_8px_-1px_rgba(0,_0,_0,_0.1)_inset] dark:bg-[linear-gradient(to_bottom,rgba(30,26,44,1),rgba(34,26,44,1))]"> </div>
                    <div className="absolute w-[20px] h-[20px] top-[428px] left-[247px] rounded-[50px] bg-[linear-gradient(to_left,_rgba(249,_248,_255,_1)_,_rgba(243,_249,_255,_1)_,rgba(255,_255,_255,_1))]
 [box-shadow:4px_1px_8px_-1px_rgba(0,_0,_0,_0.1)_inset] dark:bg-[linear-gradient(to_bottom,rgba(30,26,44,1),rgba(34,26,44,1))]"></div>

                </div>
            </div>


{/*----------------------------------------------------Ticket Description-------------------------------------------------------*/}
            <div className="relative z-50 w-[226.1px] h-[597.91px] top-[15.92px] left-[15px] gap-0 opacity-[0px] overflow-visible">

                <img src={TktsImg} alt="MatchImg" className="absolute -top-[40px] h-[450px]"/>

                <div className="absolute w-[213px] h-[100.66px] top-[435px] left-[7px] gap-0 opacity-[0px]">
                    
                    {/*-----------------Team Name--------------- */}
                    <p className="w-[213px] h-[27px] gap-0 opacity-[0px] font-[Poppins] text-[17px] font-medium leading-[26.52px] text-center text-[rgba(0,_0,_0,_1)] dark:text-[rgba(255,255,255,1)]">
                        {name}
                    </p>

                    <div className="relative w-[213px] h-[61.66px] top-[12px] gap-0 opacity-[0px]">
                        
                        {/*-----------------------Ticket Date and Time---------------*/}
                        <div className="relative left-[30px] w-[152.22px] h-[12.66px] gap-0 opacity-[0px]">
                            <div className="flex">
                                <p className="w-[48px] h-[21px] gap-0 opacity-[0px] font-[Poppins] text-[14px] font-normal leading-[21px] text-center text-[rgba(0,_0,_0,_1)] dark:text-[rgba(255,255,255,1)]">
                                    Oct 15
                                </p>

                                <hr className="relative top-[9px] w-[12.73px] h-0 gap-0 opacity-[0px] rotate-90 border-[0.53px] border-[solid] border-[rgba(0,0,0,1)] dark:border-[rgba(255,255,255,1)]"/>

                                <p className="w-[28px] h-[21px] gap-0 opacity-[0px] font-[Poppins] text-[14px] font-normal leading-[21px] text-center text-[rgba(0,_0,_0,_1)] dark:text-[rgba(255,255,255,1)]">
                                    Sun
                                </p>

                                <hr className="relative top-[9px] w-[12.73px] h-0 gap-0 opacity-[0px] rotate-90 border-[0.53px] border-[solid] border-[rgba(0,0,0,1)] dark:border-[rgba(255,255,255,1)]"/>

                                <p className="w-[56px] h-[21px] gap-0 opacity-[0px] font-[Poppins] text-[14px] font-normal leading-[21px] text-center text-[rgba(0,_0,_0,_1)] dark:text-[rgba(255,255,255,1)]">
                                    4:30 PM
                                </p>
                            </div>
                        </div>

                        {/*------------Venue------------------ */}
                        <p className="relative w-[213px] h-[31px] top-[18px] gap-0 opacity-[0px] font-[Inter] text-[14px] font-normal leading-[20.58px] text-center text-[rgba(82,_89,_101,_1)] dark:text-[rgba(223,223,223,1)]" >
                            {venue}
                        </p>
                    </div>

                </div>

                {/*---------------Collection Btn----------------- */}
                <button className="relative w-[213px] h-[36px] top-[560px] left-[7px] gap-0 opacity-[0px] bg-[rgba(29,_29,_31,_1)]">

                    <p className="absolute w-[131px] h-[15px] top-[11px] left-[41px] gap-0 opacity-[0px] font-[Inter] text-[12.73px] font-medium leading-[15.41px] text-center text-[rgba(255,_255,_255,_1)] dark:text-[rgba(255,255,255,1)]">
                        {Collection}
                    </p>

                </button>
            </div>

        </section>
    )
}