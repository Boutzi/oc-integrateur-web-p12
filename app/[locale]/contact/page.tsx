import { Form } from "@/components/Form";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Contact() {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return (
    <main className="min-h-[calc(100vh_-_theme(spacing.44))] items-center flex">
      <Form />
    </main>
  );
}
