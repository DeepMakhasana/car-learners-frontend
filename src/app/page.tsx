import Filter from "./components/Filter";
import SchoolWrapper from "./components/SchoolWrapper";
import Search from "./components/Search";
import Slider from "./components/Slider";
import Topbar from "@/components/navbar/Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <section>
        <main>
          <Search />
          <Slider />
          <Filter />
          <SchoolWrapper />
        </main>
      </section>
    </>
  );
}
