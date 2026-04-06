import CoursesHero from "@/components/courses/CoursesHero";
import CoursesGrid from "@/components/courses/CoursesGrid";
import CourseAgeSection from "@/components/courses/CourseAgeSection";
import CourseDeliverySection from "@/components/courses/CourseDeliverySection";

export default function CoursesPage() {
    return (
        <>
            <CoursesHero />
            <CoursesGrid />
            <CourseAgeSection />
            <CourseDeliverySection />
        </>
    );
}