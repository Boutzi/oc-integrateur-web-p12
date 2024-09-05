import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Thumb from "../Theme/Thumb";
import PageTitle from "../Theme/PageTitle";
import Thumb1 from "@/assets/blackpearl.jpg";
import Thumb2 from "@/assets/iron-throne.webp";
import Thumb3 from "@/assets/fondcombe.jpg";
import Thumb4 from "@/assets/coruscant.webp";
import Thumb5 from "@/assets/hogwarts.png";


const Latest: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.local.darkMode);

  return (
    <>
      <div className="latest">
        <PageTitle main="My latest work" type={2} tiny />
        <div className="latest__thumb-galery">
          <Thumb
            title="The Black Pearl"
            imageSrc={Thumb1}
            description="This is a description of the thumb. Contains the complete description of the work. And it can be a very long description aswel."
          />
          <Thumb
            title="The Iron Throne"
            imageSrc={Thumb2}
            description="This is a description of the thumb. Contains the complete description of the work. And it can be a very long description aswel."
          />
          <Thumb
            title="Rivendell"
            imageSrc={Thumb3}
            description="This is a description of the thumb. Contains the complete description of the work. And it can be a very long description aswel."
          />
          <Thumb
            title="Coruscant"
            imageSrc={Thumb4}
            description="This is a description of the thumb. Contains the complete description of the work. And it can be a very long description aswel."
          />
          <Thumb
            title="Rivendell"
            imageSrc={Thumb5}
            description="This is a description of the thumb. Contains the complete description of the work. And it can be a very long description aswel."
          />
        </div>
      </div>
    </>
  );
};

export default Latest;
