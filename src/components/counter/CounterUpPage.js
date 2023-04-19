import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import {useTranslation} from 'react-i18next'


function CounterUpPage() {

    const {t,i18n} = useTranslation()

    const [counterStart, setCounterStart] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterStart(true)}
        onExit={() => setCounterStart(false)}
      >
        <div className="fixed-img pt-11">
          <div className="flex justify-center pt-8 ">
          <p className="text-[35px] font-bold text-white">{t("Statistika")}</p>
          </div>

          <div className="grid grid-cols-3 mt-16 mb-16 text-white max-lg:flex max-lg:flex-col max-lg:pb-10 max-lg:m-0">
            <div className="flex flex-col justify-center items-center max-lg:mb-4">
              <div className="flex text-[50px] max-lg:text-[30px]">
                {counterStart && (
                  <CountUp start={0} end={160} duration={2} delay={0} />
                )}{" "}
                +
              </div>
              <p className="text-[18px]">{t("Tamamlanmış Lahiyələr")} </p>
            </div>

            <div className="flex flex-col justify-center items-center max-lg:mb-4">
              <div className="flex text-[50px] max-lg:text-[30px]">
                {counterStart && (
                  <CountUp start={0} end={150} duration={2} delay={0} />
                )}{" "}
                +
              </div>
              <p className="text-[18px]">{t("Razı Qalan Müştəri")} </p>
            </div>

            <div className="flex flex-col justify-center items-center max-lg:mb-4">
              <div className="flex text-[50px] max-lg:text-[30px]">
                {counterStart && (
                  <CountUp start={0} end={15} duration={2} delay={0} />
                )}
                +
              </div>
              <p className="text-[18px]">{t("Davam Edən")} </p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}

export default CounterUpPage;
