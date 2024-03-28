import ReviewAndRating from "../components/ReviewAndRating";
import SchoolImageSlider from "../components/SchoolImageSlider";
import Topbar from "../components/Topbar";
import CourseCurriculum from "./components/CourseCurriculum";
import CourseDetail from "./components/CourseDetail";
import RelatedSchool from "./components/RelatedSchoolWrapper";

const Course = () => {
  return (
    <section>
      <main>
        <Topbar />
        <SchoolImageSlider />
        <CourseDetail />
        <CourseCurriculum />
        <ReviewAndRating />
        <RelatedSchool />
      </main>
    </section>
  );
};

export default Course;
