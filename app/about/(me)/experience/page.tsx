import { ExperienceCard } from "@/components/ExperienceCard";

const EXPERIENCE = [
  {
    company: "One Point",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGvpe_509Zo-w/company-logo_200_200/company-logo_200_200/0/1665673493364/onepoint_logo?e=2147483647&v=beta&t=2IzICG66zTjPXU7tr-OJXwOofkj01NmchL2WYVd8VDw",
    banner:
      "https://www.felixassocies.fr/photos/projets/onepoint/agencement-def-bordeaux-onepoint.jpg",
    location: "Bordeaux",
    year: "2023",
    role: "Back-end developer",
    contract: "Internship",
    description:
      "Internship at a consulting company, where I observed the implementation of the Scrum/Agile methodology during a sprint. I worked with Java using the Spring Boot framework, utilized Gradle, and created a Swagger to document my API routes.",
    skills: ["Java", "Swagger", "Gradle", "Spring Boot"],
  },
  {
    company: "Midica",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bh3kqOV0e-gv413V23yJ2s400Z_f_wyYCg&s",
    banner: "https://static.actu.fr/uploads/2019/09/20190905_102124.jpg",
    location: "Toulouse",
    year: "2021-2023",
    role: "Department Manager",
    contract: "Permanent Contract",
    description:
      "I started as a sales associate in the DIY department before becoming responsible for the key duplication service, and later for the framing department. I designed and implemented a new layout for the department, based on sales performance and key products. I was autonomous in managing inventory, orders, and supplier disputes.",
    skills: ["Sales Performance Analysis", "Organization", "Customer service"],
  },
  {
    company: "French Army",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkUIY0nzlXFgpWWpWIEx5pi29UtwF10sQeQ&s",
    banner:
      "https://meta-defense.fr/wp-content/uploads/2024/03/Armees-francaises-1068x601.webp",
    location: "Saint-Maixent-l’Ecole",
    year: "2017 - 2018",
    role: "Infantry NCO",
    contract: "Fixed-term Contract",
    description:
      "At ENSOA, I was trained in commanding tactical teams and handling weapons. I developed values such as teamwork, mutual support, and self-improvement, which have shaped my character.",
    skills: [
      "Leadership",
      "Teamwork",
      "Discipline",
      "Adaptability",
      "personal growth",
    ],
  },
];

export default function Experience() {
  return (
    <section className="flex flex-col gap-8">
      {EXPERIENCE.map((xp, index) => (
        <ExperienceCard key={index} {...xp} />
      ))}
    </section>
  );
}
