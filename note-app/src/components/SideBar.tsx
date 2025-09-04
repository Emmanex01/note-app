import React from 'react'
import { LuFiles } from "react-icons/lu";
import { CiImport } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { FaNoteSticky } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaMusic } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";
import { FaSwift } from "react-icons/fa";

const SideBar = () => {
    const icons = {
  LuFiles,
  CiImport,
  CiTrash,
  FaNoteSticky,
  FaTasks,
  TfiAnnouncement,
  FaMusic,
  CiCircleQuestion,
  MdDashboard,
  MdDeveloperMode,
  FaSwift,
};

    const data = [
        {
            title: "",
            items: [
            { icon: "LuFiles", label: "templates", href: "/templates" },
            { icon: "CiImport", label: "import", href: "/import" },
            { icon: "CiTrash", label: "trash", href: "/trash" },
            ],
        },
        {
            title: "Workspace",
            items: [
            { icon: "FaNoteSticky", label: "notes", href: "/notes" },
            { icon: "FaTasks", label: "tasks", href: "/tasks" },
            { icon: "TfiAnnouncement", label: "announcements", href: "/announcements" },
            { icon: "FaMusic", label: "music", href: "/music" },
            { icon: "CiCircleQuestion", label: "questions", href: "/questions" },
            { icon: "MdDashboard", label: "dashboard", href: "/dashboard" },
            { icon: "MdDeveloperMode", label: "development", href: "/development" },
            { icon: "FaSwift", label: "swift", href: "/swift" },
            ],
        },
        ];

  return (
    <>
    {data.map((items, index) => (
      <div key={index} className='mt-8 ml-6'>
          <h1 className='font-medium my-6 text-gray-400 hidden sm:block'>{items.title}</h1>
          {items.items.map((item, idx) => {
            const IconComponent = icons[item.icon as keyof typeof icons];
            return (
              <div key={idx} className='flex items-center gap-4 font-medium mb-2 hover:cursor-pointer hover:bg-gray-200 p-2 rounded-md'>
                <IconComponent/>
                <span className='hidden sm:block'>{item.label}</span>
              </div>
          );
        })}
    </div>
    ))}
    </>
  )
}

export default SideBar
