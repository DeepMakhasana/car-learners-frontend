import SchoolWrapper from "@/app/components/SchoolWrapper";
import ReviewAndRating from "./components/ReviewAndRating";
import SchoolCourses from "./components/SchoolCourses";
import SchoolDetail from "./components/SchoolDetail";
import SchoolImageSlider from "./components/SchoolImageSlider";
import Topbar from "./components/Topbar";

const SchoolPage = () => {
  return (
    <section>
      <Topbar />
      <main>
        <SchoolImageSlider />
        <SchoolDetail />
        <SchoolCourses />
        <ReviewAndRating />
        <h3>Related Schools</h3>
        <SchoolWrapper />
      </main>
    </section>
  );
};

export default SchoolPage;
