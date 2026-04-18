
import { Slugs } from "../User";
import IconCloud from "./magicui/icon-cloud";

export function Loader() {
  return (
    <div className="relative flex h-full w-full animate-[ping_1.5s_ease-in-out_1_4.5s] items-center justify-center">
      <IconCloud iconSlugs={Slugs} />

      <div className=" absolute font-mono text-primaryColor font-semibold text-6xl -z-10">
        Sunil Sharma
      </div>
    </div>
  );
}
