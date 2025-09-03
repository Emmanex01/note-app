import React from 'react'

const SideBar = () => {
    const data = [
        {
            title: "Templates",
            items: [
            { icon: "file", label: "templates", href: "/templates" },
            { icon: "import", label: "import", href: "/import" },
            { icon: "trash", label: "trash", href: "/trash" },
            ],
        },
        {
            title: "Workspace",
            items: [
            { icon: "file-text", label: "notes", href: "/notes" },
            { icon: "check-square", label: "tasks", href: "/tasks" },
            { icon: "bell", label: "announcements", href: "/announcements" },
            { icon: "music", label: "music", href: "/music" },
            { icon: "help-circle", label: "questions", href: "/questions" },
            { icon: "layout", label: "dashboard", href: "/dashboard" },
            { icon: "code", label: "development", href: "/development" },
            { icon: "smartphone", label: "swift", href: "/swift" },
            ],
        },
        ];

  return (
    <div>
      <div>
        <div>
            Template
        </div>
        <div>
            Import
        </div>
        <div>
            Trash
        </div>
      </div>
    </div>
  )
}

export default SideBar
