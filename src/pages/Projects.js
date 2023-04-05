import React from "react";
import Partners from "../components/partners/Partners";
import Helmet from "react-helmet";
import ProjectsData from "../components/projects/ProjectsData";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Lahiyələr</title>
      </Helmet>
      <div className="max-w-[70%] mt-40 mx-auto bg-[#f7f7f7] border rounded max-lg:max-w-full max-lg:mt-0">
        <span className="text-[30px] font-bold flex justify-center items-center pt-6 ">
          {t("Layihələr")}
        </span>
        <div className="max-w-[95%] mx-auto">
          <div className="bg-white mt-8 mb-8 py-[16px] border rounded-[20px]"></div>
          <span className="text-[24px] font-bold flex justify-center items-center">
            {t("Tamamlanmış Lahiyələrimiz")}
          </span>
          <ProjectsData />
        </div>
      </div>
      <Partners />
    </>
  );
}
export default Projects;
