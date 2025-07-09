import { DATA } from "@/data/Resume";

export default function Skills() {
  return (
    <div className="pt-8">
      <span className="text-2xl text-rose-400/80 font-extralight">Skills</span>

      <div className="pt-2 flex flex-col gap-y-2">
        {DATA.skills.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex gap-1.5 justify-start items-center flex-wrap">
                <div className="sm:text-lg text-neutral-400 font-semibold">
                  {item.category} :{" "}
                </div>
                {item.items.map((innerItem, innerIndex) => {
                  return (
                    <div key={innerIndex} className="flex text-neutral-500">
                      {innerItem}
                      {innerIndex < item.items.length - 1 && ","}
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
