import { FaQuoteLeft } from "react-icons/fa";
import SectionHeading from "../ui/sectionheadings";

export default function Testimonials() {
  const testimonials = [
    {
      text: "I am pleased to recommend Pranay for any Software Engineering role, particularly those requiring strong analytical and problem-solving skills. During his tenure, Pranay consistently demonstrated a high level of competence in both .NET and Python, quickly mastering complex tasks and delivering high-quality solutions. Pranay not only excelled in the technical aspects of their role but also received commendations from clients for his outstanding work. His ability to understand client requirements, coupled with programming expertise, made him a valuable asset to our team.",
      role: "Manager at Accenture",
      source: "LinkedIn",
    },
    {
      text: "I have had the pleasure of working with Pranay in the same team at Accenture. Pranay is exceptional professional with a deep understanding of ASP.NET Core, C#, SQL, ASP.NET MVC, Jquery, Javascript, ReactJS. His technical proficiency is evident in his ability to tackle complex programming challenges with ease and efficiency. Pranay consistently demonstrates a strong passion for his work and a remarkable problem-solving ability. His expertise is not only reflected in his individual contributions but also in his collaborative spirit and willingness to assist others in overcoming their technical difficulties.",
      role: "Colleague at Accenture",
      source: "LinkedIn",
    },
  ];

  return (
    <section>
      <div className="m-20 px-4 max-sm:m-2 sm:m-4 md:m-8">
        <SectionHeading>Word On Street</SectionHeading>
        <div className="mx-auto mt-20 grid max-w-fit gap-8 max-sm:grid-cols-1 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="overflow-show group relative cursor-pointer rounded-xl border border-gray-800 p-10"
            >
              <div className="absolute inset-0 rounded-xl bg-gray-900/50 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0" />
              <div className="absolute inset-0 rounded-xl bg-gradient-custom text-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <FaQuoteLeft className="z-12 absolute -top-5 left-0 h-10 w-10 text-gray-700" />
              <blockquote className="relative z-10">
                <p className="leading-relaxed text-gray-300">
                  {testimonial.text}
                </p>
                <footer className="mt-6">
                  <div className="font-medium text-gray-200">
                    {testimonial.role}
                  </div>
                  <div className="text-gray-400">via {testimonial.source}</div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
