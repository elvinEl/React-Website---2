import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { ImCheckmark } from "react-icons/im";
function ProjectsData() {
  const [projects, setProjects] = useState([]);

  const { i18n } = useTranslation();

  useEffect(() => {
    async function fetchProducts() {
      const language = i18n.language;
      const response = await axios.get(
        "http://192.168.0.130:8000/api/projects",
        {
          headers: { "Accept-Language": language },
        }
      );
      setProjects(response.data.data);
    }
    fetchProducts();
  }, [i18n.language]);

  return (
    <div className="grid grid-cols-2">
      {Object.keys(projects).map((key) => (
        <div
          key={projects[key].id}
        >
          <div className="flex gap-3 mb-4 mt-8">
            <div className="flex items-start text-[18px] text-yellow-500 mt-[0.4rem]">
              <ImCheckmark />
            </div>

            <div className="flex flex-col">
              <span className="text-[14px] font-bold">{projects[key].title}</span>
              <span className="text-[12px]">
                <i>{projects[key].description}</i>
              </span>
            </div>
        
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsData;
