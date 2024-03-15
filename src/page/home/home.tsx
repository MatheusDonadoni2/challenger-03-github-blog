import { HomeCard } from "./home-card";
import { HomeHeader } from "./home-header";
import { HomeSearchForm } from "./home-search-form";

export function Home() {
  return (
    <div className=" w-full">
      <HomeHeader />
      <HomeSearchForm />
      <div className="grid grid-cols-2 gap-[2rem]">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
}
