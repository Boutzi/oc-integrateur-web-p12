import { Form } from "@/components/Form";

export async function generateStaticParams() {
  const locales = ["en", "fr", "kr"];
  const paths = locales.map((locale) => ({
    locale,
  }));

  return paths;
}

export default function Contact() {
  return (
    <main className="min-h-[calc(100vh_-_theme(spacing.44))] items-center flex">
      <Form />
    </main>
  );
}
