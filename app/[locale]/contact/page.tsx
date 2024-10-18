import { Form } from "@/components/Form";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Contact({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <main className="min-h-[calc(100vh_-_theme(spacing.44))] items-center flex">
      <Form />
    </main>
  );
}
