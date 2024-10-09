import { EducationCard } from "@/app/_components/EducationCard";

const EDUCATION = [
  {
    school: "OpenClassrooms",
    logo: "https://upload.wikimedia.org/wikipedia/fr/0/0d/Logo_OpenClassrooms.png",
    banner:
      "https://remotehabits.com/uploads/1560264087-fabian-grohs-423591-unsplash.jpg",
    location: "Paris (remote)",
    year: "2024",
    course: "Web Integrator",
    honors: false,
    degree: "Level 5 (2 years degree)",
    description: "I completed my Web Integrator certification at OpenClassrooms in 2024, earning a Level 5 degree. During the program, I developed skills in HTML, CSS, JavaScript, React, and Git, focusing on creating and maintaining dynamic websites.",
    skills: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "React",
      "Redux",
      "VS Code",
      "Git",
    ],
  },
  {
    school: "Lycée Les Iris",
    logo: "https://blogpeda.ac-bordeaux.fr/lyceelesiris/files/2024/02/Capture-decran-2024-02-13-a-18.56.12.png",
    banner:
      "https://www.patrimoine-nouvelle-aquitaine.fr/graphQlProxy.ashx?urlgraphql=https://rna-gertrude-diffusion-graphql-prod.atolcd.com/api/file/c4c01f4d-f660-4dfb-bbd9-154a32eba9a2.jpg",
    location: "Lormont",
    year: "2009-2012",
    course: "Graphic Production",
    honors: true,
    degree: "Vocational Bac",
    description: "I earned my Vocational Baccalaureate in Graphic Production from Lycée Les Iris (2009-2012). This program equipped me with design skills using Adobe Photoshop, Illustrator, and InDesign, as well as practical knowledge in print production processes.",
    skills: ["PhotoShop", "Illustrator", "InDesign", "Print"],
  },
];

const CERTIFICATIONS = [
  {
    certification:"MOOC Cybersecurity",
    logo: "https://upload.wikimedia.org/wikipedia/fr/archive/d/d9/20190420123211%21ANSSI_Logo.svg",
    year: "2023",
    issuer: "ANSSI",
    description: "I completed a MOOC on Cybersecurity in 2023, issued by the French National Cybersecurity Agency (ANSSI). This course covered the basics of cybersecurity, including encryption, network security, and data protection.",
    skills: ["Risk management", "data protection", "best practices"],
  },
  {
    certification:"Cloud Practitioner",
    logo: "https://pbs.twimg.com/profile_images/1351580685568393216/lVp_QFmU_400x400.jpg",
    year: "---",
    issuer: "AWS",
    description: "I'm currently preparing for the AWS Cloud Practitioner certification. This course will provide me with a solid understanding of cloud computing concepts, AWS services, security, and architecture.",
    skills: ["AWS Fundamentals", "Cloud Concepts", "Security", "Architecture"],
  },
] 

export default function Education() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-4xl font-semibold text-center">Education</h2>
      <div className="grid gap-4 grid-cols-2 max-lg:grid-cols-1">
        {EDUCATION.map((course, index) => (
          <EducationCard key={index} {...course} />
        ))}
      </div>
      <h2 className="text-4xl font-semibold text-center">Certifications</h2>
      <div className="grid gap-4 grid-cols-2 max-lg:grid-cols-1">
        {CERTIFICATIONS.map((certif, index) => (
          <EducationCard key={index} {...certif} />
        ))}
      </div>
    </section>
  );
}
