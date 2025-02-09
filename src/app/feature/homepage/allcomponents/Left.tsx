import React from "react";
import Image from "next/image";
import { CiMail, CiPhone } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";

const Left = () => {
  // Skills
  const skills = [
    "React",
    "Nextjs",
    "Tailwindcss",
    "Nodejs",
    "Express",
    "TypeScript",
  ];
  // tools
  const tools = ["Jira", "Slack", "Github"];
  //function
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className="w-1/2 bg-[#FFDAB3] p-10 font-bold">
      <div className="flex justify-center items-center">
        <Image
          alt="profile"
          width={1080}
          height={1080}
          className="rounded-full w-40 h-40 "
          src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/418837648_2052245055131162_4905678453270264319_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEexd9EmH5saZ1r7wtFBEZ1z3Gjlydx6TnPcaOXJ3HpOQ7BmNOHbym6sAyq3bU4v4dXijNMrgLoVQ42CPnVtpZH&_nc_ohc=T_WRMdmy6wEQ7kNvgHEZpI2&_nc_oc=AdjI2fEvx9P4B0ZvTqH_lC00Yh7Autai7JN0xRVYQ1fxvpMX5RSyiOWjx8-4hk1dgpI&_nc_zt=23&_nc_ht=scontent.fbkk7-2.fna&_nc_gid=AwVFpnbaGqy-cWBnjik41u-&oh=00_AYA3d5qdbZmKfC1MHncTUQwrFzJljFzPGacFVIsmqUe5ng&oe=67AE14B2"
        />
      </div>
      <div className="contract flex flex-col gap-5">
        <span className="flex items-center text-2xl font-bold gap-3">
          <CiPhone className="w-16 h-16" />{" "}
          <p className="flex items-center gap-3 ">0958456270 </p>
          <FaCopy
            onClick={() => {
              handleCopy("0958456270");
            }}
            className="cursor-pointer "
          />
        </span>
        <span className="flex items-center text-2xl font-bold gap-3">
          <FaGithub className="w-16 h-16" />
          <a
            target="blank"
            href="https://github.com/ColonyRabbit"
            className="hover:text-blue-500"
          >
            Github
          </a>
        </span>
        <span className="flex items-center text-2xl font-bold gap-3">
          <CiMail className="w-16 h-16" />
          <span className="items-center">khanakorn01@gmail.com</span>
          <FaCopy
            onClick={() => {
              handleCopy("khanakorn01@gmail.com");
            }}
            className="cursor-pointer"
          />
        </span>
        <hr className="font-bold border-black border-2 " />
        <span className="flex gap-5 ">
          <span className="  flex flex-col gap-5">
            <h1 className="text-center">Education</h1>
            <span className="grid grid-cols-2 gap-5">
              <span className="text-center">
                <h4>High school</h4>
                <p>Prakanong pittayalai school</p>
              </span>
              <span>
                <h4>Bachelor </h4>
                <p>
                  Computer Science, Rajamangala University of Technology
                  Krungthep
                </p>
              </span>
            </span>
          </span>
        </span>
        <hr className="font-bold border-black border-2 " />
        <span className="flex gap-5">
          <ul className="gap-3 flex flex-col w-1/3 list-disc ">
            <h2>Skills</h2>
            {skills?.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
          <ul className="flex flex-col w-full gap-3 list-disc">
            <h2>Tools for Co-Working</h2>
            {tools?.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Left;
