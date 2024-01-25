"use client";

interface HomeCardProps {
  title: string;
  skills: string[];
  svg_d: string;
}

const HomeCard = (props: HomeCardProps) => {
  return (
    <div className="flex flex-col relative max-w-sm p-6 items-center justify-center bg-white bg-opacity-10 border border-white rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="white"
        className="my-4 w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d={props.svg_d} />
      </svg>
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-center text-gray-900 dark:text-white">
          {props.title}
        </h5>
      </a>
      <div className="grid grid-cols-3 gap-1 mt-4 h-36">
        {props.skills.map((skill) => {
          return (
            <span
              key={skill}
              className="text-center relative bg-white bg-opacity-10 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded h-5"
            >
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCard;
