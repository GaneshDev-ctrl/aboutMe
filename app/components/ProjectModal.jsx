"use client";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl"
        >
          ✕
        </button>

        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

        {/* Overview */}
        <section className="mb-6">
          <h4 className="font-semibold mb-2">Overview</h4>
          <p className="text-gray-700">{project.overview}</p>
        </section>

        {/* Features */}
        <section className="mb-6">
          <h4 className="font-semibold mb-2">Key Features</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-6">
          <h4 className="font-semibold mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="border px-3 py-1 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Actions */}
        {project.type === "personal" ? (
          <div className="flex gap-4 mt-8">
            <a
              href={project.github}
              target="_blank"
              className="border px-5 py-2 hover:bg-black hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              className="border px-5 py-2 hover:bg-black hover:text-white transition"
            >
              Live Demo
            </a>
          </div>
        ) : (
          <p className="text-sm text-gray-500 mt-6">
            🔒 This is a company project. Code and demo are private.
          </p>
        )}
      </div>
    </div>
  );
}
