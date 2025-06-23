import { forwardRef } from "react";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = forwardRef<HTMLDivElement, SectionTitleProps>(
  ({ title, subtitle }, ref) => {
    return (
       <div className="w-full lg:px-[0.03rem] md:px-[0.13rem]" ref={ref}>
        <p className="lg:text-5xl md:text-5xl text-3xl ">{title}</p>
        <p className="text-yellow-600 lg:text-7xl md:text-6xl text-5xl transfor translate-y-full">
          {subtitle}
        </p>
      </div>
    );
  }
);

export default SectionTitle;
