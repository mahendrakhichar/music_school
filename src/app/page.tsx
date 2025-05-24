// import Image from "next/image";
import { FeaturedCourses } from "@/components/courses/FeaturedCourses";
import Hero from "@/components/hero/hero";


export default function Home() {
  return (
    <div >
      <Hero/>
      <div className="max-w-fit mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <FeaturedCourses/>
      </div>
    </div>
  );
}
