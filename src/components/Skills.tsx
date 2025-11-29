import { DATA } from "@/data/Resume";

export default function Skills() {
  return (
    <div className="pt-8">
      <span className="text-2xl text-rose-400/80 font-extralight">Skills</span>

      <div className="pt-2 flex flex-col gap-y-4">
        {DATA.skills.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-3">
              <div className="sm:text-lg text-neutral-400 font-semibold">
                {item.category}
              </div>
              <div className="flex gap-1 justify-start items-center flex-wrap">
                {item.items.map((skill, innerIndex) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={innerIndex}
                      className="flex items-center gap-2 px-3 py-1.5 border border-neutral-800 text-neutral-300 hover:border-rose-500/30 transition-all duration-300 group"
                    >
                      <Icon
                        className="w-4 h-4 transition-colors"
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
