import React from "react";
import Card from '../TopBox/Cards/Card.js'
import firstMatchImg from '../../Images/firstMatch.svg'
import secondAndfourthMatchImg from '../../Images/secondAndFourthMatch.svg'
import thirdMatchImg from '../../Images/thirdMatch.svg'
import AdImage from '../../Images/AdImage.svg' 

export default function TopBox(){

    return(
        <section className="absolute w-[1249px] h-[673px] top-[46px] left-[98px]">
            <div className="absolute w-[80.52px] h-[41px] top-[0px] left-[0px] text-[rgba(0,0,0,1)] dark:text-[rgba(255,255,255,1)]">
                <div className="absolute w-[80.52px] h-[41px] top-[0px] left-[0px]">

                    <p className="relative w-[80.52px] h-[36px] top-[0px] left-[0px] font-[Poppins] text-[24px] font-bold leading-[36px] text-left text-[rgba(0,0,0,1)] dark:text-[rgba(255,255,255,1)]">
                        Sports
                    </p>
                    <hr className="relative w-[80.52px] h-0 top-[0px] left-[0px] border-[2px] border-solid border-[rgba(115,143,255,1)]" />
                </div>
            </div>
            <Card image={firstMatchImg}
                name={`Sacramento River Cats`}
                totalEvents={`48 Events`}
                sports={`Baseball`}
                ad={false}
                className={`absolute top-[66px] left-[0px]`} />
            
            <Card image={secondAndfourthMatchImg}
                name={`Las Vegas Aviators`}
                totalEvents={`28 Events`}
                sports={`Baseball`}
                ad={false} 
                className={`absolute top-[66px] left-[252.62px]`}/>
            
            <Card image={thirdMatchImg}
                name={`New Jersey Devils`}
                totalEvents={`15 Events`}
                sports={`Ice Hockey`}
                ad={false} 
                className={`absolute top-[66px] left-[505.24px]`}/>
            
            <Card image={secondAndfourthMatchImg}
                name={`Las Vegas Aviators`}
                totalEvents={`28 Events`}
                sports={`Baseball`}
                ad={false} 
                className={`absolute top-[66px] left-[757.86px]`}/>
            
            <Card ad={true}
                title={`Advertisement title`}
                image={AdImage}
                aboutAd={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`} 
                className={`absolute top-[66px] left-[1010.47px] border-[0.2px] border-solid border-[rgba(0,101,85,1)]`}/>

                <div className="absolute w-[124.8px] h-[46px] top-[627px] left-[562.61px] px-[30px] py-[10px] gap-[5px] rounded-tl-[3px] rounded-br-none rounded-tr-none rounded-bl-none opacity-[0px] bg-[rgba(44,_156,_240,_1)] [box-shadow:0px_4px_8px_0px_rgba(0,_0,_0,_0.05)]">
                   <button className="w-[64px] h-[26px] font-[Inter] text-[14px] font-semibold leading-[25.89px] text-left text-[rgba(255,_255,_255,_1)]">See More</button>
                </div>
        </section>
    )
}