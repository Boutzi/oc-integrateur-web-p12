import { Section } from "./Section";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Form = () => {
  return (
    <Section className="flex flex-col items-start justify-between gap-4 min-h-[calc(100vh-170px)]">
      <form className="m-auto mr-56 ml-56 max-lg:mr-24 max-lg:ml-24 max-sm:mr-8 max-sm:ml-8">
        <h1 className="font-caption text-5xl font-bold text-primary max-md:text-4xl max-sm:text-3xl">
          Let&apos;s talk!
        </h1>
        <h2 className="font-caption font-extralight text-xl max-sm:text-xl">
          If you have a question, a job opportunity, or a project in mind, don’t
          hesitate to reach out. I’m eager to connect and discuss how we can
          work together.
        </h2>
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex gap-4 max-lg:flex-col">
            <div className="flex flex-[2] flex-col gap-1">
              <label className="text-xs">First Name</label>
              <Input
                className="flex-1 rounded-lg p-3 hover:bg-accent/20"
                required
              />
            </div>
            <div className="flex flex-[2] flex-col gap-1">
              <label className="text-xs">Last Name</label>
              <Input
                className="flex-1 rounded-lg p-3 hover:bg-accent/20"
                required
              />
            </div>
          </div>
          <div className="flex gap-4 max-lg:flex-col">
            <div className="flex flex-[2] flex-col gap-1">
              <label className="text-xs">Email</label>
              <Input
                className="flex-1 rounded-lg p-3 hover:bg-accent/20"
                required
              />
            </div>
            <div className="flex flex-[2] flex-col gap-1">
              <label className="text-xs">Company</label>
              <Input className="flex-1 rounded-lg p-3 hover:bg-accent/20" />
            </div>
          </div>
          <div className="flex flex-[2] flex-col gap-1">
            <label className="text-xs">Your message</label>
            <Textarea
              placeholder="Type your message here."
              className="flex-1 rounded-lg p-3 hover:bg-accent/20 resize-y min-h-[130px]"
              required
            />
          </div>
          <div className="m-auto items-center mt-4">
            <Button className="rounded-full font-semibold text-lg w-36">
              Send
            </Button>
          </div>
        </div>
      </form>
    </Section>
  );
};
