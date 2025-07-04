// Import your CSS file
import "./App.css"; // Make sure the path is correct
import { architectureTiers, legendItems } from "./constant";

// We'll apply Tailwind CSS via CDN in index.html for simplicity,
// but in a real React project, you'd configure Tailwind with PostCSS.

// Data structure for your tiers and technologies

function ArchitectureDiagram() {
  return (
    <div className="diagram-container relative">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Multi-Tier Architecture
        </h1>
        <p className="text-gray-600 mt-2">
          Modern Enterprise Application Structure with Technology Stack
        </p>
      </div>

      {architectureTiers.map((tier) => (
        <div key={tier.id} className={`tier-box ${tier.bgColor}`}>
          <div className="flex items-center">
            <div
              className={`tier-icon ${tier.iconBgColor} ${tier.iconTextColor}`}
            >
              {tier.svgIcon}
            </div>
            <div>
              <h2 className={`font-semibold text-lg ${tier.headerTextColor}`}>
                {tier.id}. {tier.name}
              </h2>
              <p className={`${tier.iconTextColor} text-sm`}>
                {tier.description}
              </p>
            </div>
            <div className="ml-auto">
              <span
                className={`${tier.tagBgColor} ${tier.tagTextColor} text-xs font-medium px-2.5 py-0.5 rounded`}
              >
                {tier.tag}
              </span>
            </div>
          </div>
          <div className="tech-icons">
            {tier.technologies.map((tech) => (
              <div key={tech.name} className="tech-icon">
                <div className={`tech-icon-img ${tech.iconColor}`}>
                  {tech.svg}
                </div>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {legendItems.map((item) => (
          <div key={item.label} className="flex items-center">
            <div className={`w-3 h-3 ${item.color} rounded-full mr-1`}></div>
            <span className="text-xs text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        N-Tier Architecture Diagram with Technology Stack
      </div>
    </div>
  );
}

export default ArchitectureDiagram;
