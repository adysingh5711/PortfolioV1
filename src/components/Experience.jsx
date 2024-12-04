"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  Hackthechain,
  GSSOC,
  IITB,
  Sports,
  IIITians,
  GDSC,
  KDE,
  Oppia,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={Oppia}
              title="IIITians Network"
              subtitle="Tech Team Member"
              date="August 2023 - present"
              para="- Working collaboratively within a team to develop and maintain the webbsite of the organisation."
            />
            <Exp_prop
              img={GSSOC}
              title="SSoC'23 Contributor"
              subtitle="Contributor"
              date="June 2023 - present"
              para="- Contributed in open source repositories like GameSphere, OpenTech, Moksh, Community Website etc. "
            />
            <Exp_prop
              img={GSSOC}
              title="Hacktoberfest 10"
              subtitle="Contributor"
              date="October 2023 - November 2023"
              para="- Contributed in open source repositories like GameSphere, OpenTech, Moksh, Community Website etc. "
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
