import React from "react";
import BackArrow from '../../Images/BackArr.svg'
import NextArrow from '../../Images/NextArr.svg';
import Ticket from "./Tickets/Ticket";
import TicketImg1_3 from "../../Images/Ticket_1&3.svg";
import TicketImg2 from "../../Images/Ticket_2.svg";

export default function BottomBox(){
    return(
        <section className="absolute w-[1240px] h-[918px] top-[772px] left-[122px] bg-[linear-gradient(180deg,_#F9F8FF_0%,_#F3F9FF_100%)] dark:bg-[linear-gradient(180deg,_#18282A_0%,_#221A2C_100%)]">

            <div className="relative w-[1085.75px] h-[799px] top-[70px] left-[77px]">
                <div className="w-[1085.75px] h-[799px]">

                    <p className="absolute w-[506px] h-[52px] top-[0px] left-[289.87px] font-[Poppins] font-[700] leading-[52.5px] text-[50px] text-left text-[rgba(0,_0,_0,_1)] dark:text-[rgba(255,255,255,1)]">
                        Collection Spotlight
                    </p>

                    <p className="absolute w-[917px] h-[46px] top-[77px] left-[84.37px] font-[Inter] text-[14px] font-normal leading-[22.65px] text-center text-[rgba(0,_0,_0,_1)] dark:text-[rgba(255,255,255,1)]">
                        Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
                    </p>

                    <div className="absolute w-[1085.75px] h-[625px] top-[174px] left-[0px]">

                        <div className="absolute flex justify-between w-[850px] h-[625px] top-[0px] left-[118px]">

                            <Ticket TktsImg={TicketImg1_3} 
                            name={`Las Vegas Aviators`} 
                            Collection={`Take Flight Collection`} 
                            venue={`Las Vegas Ballpark, Las Vegas, Nevada`}/>

                            <Ticket TktsImg={TicketImg2} 
                            name={`Sacramento River Cats`} 
                            Collection={`Orange Collection`} 
                            venue={`Sutter Health Park, Sacramento, California`}/>

                            <Ticket TktsImg={TicketImg1_3} 
                            name={`Las Vegas Aviators`} 
                            Collection={`Take Flight Collection`} 
                            venue={`Las Vegas Ballpark, Las Vegas, Nevada`}/>

                        </div>

                        <div className="absolute w-[36.75px] h-[49px] top-[288px] left-[0px] border-[1px] border-solid border-[rgba(44,156,240,1)]">
                            <img className="relative top-[14.9px] left-[12.55px]" 
                            src={BackArrow} 
                            alt="BackArrow"/>
                        </div>

                        <div className="absolute w-[36.75px] h-[49px] top-[288px] right-[0px] border-[1px] border-solid border-[rgba(44,156,240,1)]">
                            <img className="relative top-[14.9px] left-[13.17px]" 
                            src={NextArrow} 
                            alt="NextArrow"/>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}