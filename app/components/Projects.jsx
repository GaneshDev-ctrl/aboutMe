"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    id: 1,
    title: "LMS Platform",
    image: "/assets/lms.jpg",
    type: "company",
    overview:
      "A SaaS-based Learning Management System designed for enterprise clients with role-based access.",
    features: [
      "Super Admin onboarding & company management",
      "Admin user & course management",
      "Trainer exams, dashboards & evaluations",
      "Student learning, exams & proctoring",
      "Singpass, Zoom & Microsoft Teams integration",
    ],
    tech: ["React Js", "Node Js", "MongoDB", "Tailwind", "Zoom API","Teams Auth"],
  },
  {
    id: 2,
    title: "Securon",
    image: "/assets/securon.jpg",
    type: "company",
    overview:
      "A vulnerability monitoring system that detects, alerts, and patches security issues.",
    features: [
      "NVD vulnerability detection",
      "Auto patching via IP-based scanning",
      "Manual patching using uploaded assets",
      "Detailed vulnerability insights",
    ],
    tech: ["Angular", "Node.js", "NVD API", "MongoDB"],
  },
  {
    id: 3,
    title: "Smart Expense Tracker",
    image: "/assets/expense.png",
    type: "personal",
    overview:
      "A personal finance app to track expenses and analyze monthly spending.",
    features: [
      "Category-based expense tracking",
      "Monthly analytics",
      "Budget alerts",
    ],
    tech: ["React", "Tailwind", "Local Storage"],
    github: "https://github.com/GaneshDev-ctrl/Mini-Project-1-ExpenseTracker",
    demo: "",
  },
  {
    id: 4,
    title: "Recipe Application",
    image: "/assets/recipe.png",
    type: "personal",
    overview:
      "A recipe discovery app with step-by-step cooking instructions.",
    features: [
      "Browse & search recipes",
      "Ingredient lists",
      "Responsive UI",
    ],
    tech: ["Next.js", "Recipe API","Redux Toolkit"],
    github: "https://github.com/GaneshDev-ctrl/recipe",
    demo: "https://yummyfy.netlify.app/",
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="works" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">AWESOME WORKS</h2>
         <div className="flex justify-center">
            <span className="w-20 h-[2px] bg-gray-700"></span>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className=" hover:shadow-lg transition cursor-pointer"
              onClick={() => setActive(project)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={260}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {project.type === "company"
                    ? "Enterprise Project"
                    : "Personal Project"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <ProjectModal project={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
