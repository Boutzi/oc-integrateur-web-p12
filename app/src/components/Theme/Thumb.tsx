import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import PageTitle from "./PageTitle";
import Image, { StaticImageData } from "next/image";

interface CustomThumb {
    title: string;
    imageSrc: string | StaticImageData;
    description: string;
}

const Thumb: React.FC<CustomThumb> = ({title, description, imageSrc}) => {
  const darkMode = useSelector((state: RootState) => state.local.darkMode);

  return (
    <>
      <div className="thumb">
        <div className="thumb__overlay"></div>
        <Image className="thumb__image" src={imageSrc} alt={`Project ${title}`} />
        <p className="thumb__title">
          <PageTitle main={title} type={3} tiny />
        </p>
        <p className="thumb__description">{description}</p>
      </div>
    </>
  );
};

export default Thumb;
