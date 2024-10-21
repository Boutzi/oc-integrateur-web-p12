import Image from "next/image";
import { Card } from "./ui/card";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "./ui/sidebar";

export interface ViewerProps {
  title: string;
  description?: string;
  image?: string;
  imageFull?: string;
  language?: string;
}

export const WorkViewer = (props: ViewerProps) => {
  const { open } = useSidebar();

  return (
    <div>
      <Card className="flex flex-col p-0 overflow-hidden rounded-lg border-2 max-h-[calc(100svh-435px)]">
        <div className="relative group">
          <div className="relative group gap-4 h-full">
            <Image
              src={`${props.imageFull || "/empty.webp"}`}
              alt="project view"
              width={1120}
              height={476}
              priority
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          <Sidebar
            className={`absolute right-0 h-auto p-0 border-l backdrop-blur`}
            side="right"
            variant="inset"
            collapsible="icon"
          >
            <SidebarTrigger
              className={`${open ? "mx-4" : "mx-auto"} items-center mt-4`}
            />
            <SidebarHeader className={`${open ? "" : "hidden"} p-4`}>
              {props.title}
            </SidebarHeader>
            <SidebarContent className={`${open ? "" : "hidden"} p-4`}>
              desc.
            </SidebarContent>
          </Sidebar>
        </div>
      </Card>
      {/* <div className="h-128 w-full mt-8">
        <h3 className="text-5xl font-thin text-center">{props.title}</h3>
        <p>{props.description}</p>
      </div> */}
    </div>
  );
};
