import Image from "next/image";

export interface ViewerProps {
  title: string;
  description?: string;
  image?: string;
}

export const WorkViewer = (props: ViewerProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex border">
        <div className="relative group flex gap-4 flex-[5]  w-full min-h-[500px] p-4">
          <Image
            src={`${props.image || "/empty.webp"}`}
            alt="project view"
            fill
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex border-l flex-col flex-[2]  w-full min-h-[550px] p-4">
          <h2 className="text-3xl font-semibold mb-4">{props.title}</h2>
          <div className="text-md">
            <p>Info 1</p>
            <p>Info 2</p>
            <p>Info 3</p>
            <p>Info 4</p>
          </div>
        </div>
      </div>
      <div className="h-128 w-full mt-8">
        <h3 className="text-2xl font-light">Description détaillée</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
