import React from "react";

const Right = () => {
  const courses = [
    "Web Development",
    "Data Structures",
    "Algorithms",
    "Database",
    "Artificial Intelligence",
    "Data Science",
    "Data Mining",
  ];
  return (
    <div className="w-1/2 bg-[#C8AAAA] p-3 font-bold flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        <h1>Mini Project</h1>
        <p className="text-lg">
          Web Application : Web Blog: Developed a full-stack web blog featuring
          CRUD functionality using Node.js, Express, and MongoDB, ejs, resulting
          in a user-friendly platform with efficient data management.
        </p>
      </div>
      <hr className="font-bold border-black border-2 " />
      <div className="flex flex-col gap-3">
        <h1>Relevant Coursework</h1>
        <ul className="list-disc list-inside flex flex-col gap-3">
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Right;
