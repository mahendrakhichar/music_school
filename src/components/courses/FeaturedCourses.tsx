"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import courses from "@/data/music_courses.json";
// import { IconAppWindow } from "@tabler/icons-react";
import Link from "next/link";


export function FeaturedCourses() {
  return (
    <>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 ">
            {courses.courses.map((course)=>{
                return(
                    <div key={course.id} className=""  >
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                )
            })}
        </div>
    
    </>

  );
}
