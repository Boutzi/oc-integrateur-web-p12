"use client";
import {
  BriefcaseBusiness,
  Check,
  PencilRuler,
  ShieldX,
  X,
} from "lucide-react";
import { Section } from "./Section";
import { useEffect, useState } from "react";
import VersionStatus from "./VersionStatus";
import { fetchDataFromBucket } from "@/utils/getBucket";
import { useStatus } from "@/context/StatusContext";

interface Status {
  mode: string;
  devDescription: string;
  publicityDescription: string;
  messageSentDescription: string;
  messageErrorDescription: string;
}

export const GlobalStatus = () => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState<boolean>(true);
  const [status, setStatus] = useState<Status | null>(null);
  const { mode, setMode } = useStatus();
  const [description, setDescription] = useState("");

  const handleClose = () => {
    if (mode === "dev" || mode === "pub") {
      sessionStorage.setItem(`hide-${mode}`, "true");
    }
    setAnimate(false);
    setTimeout(() => {
      setShow(false);
      setMode("");
      setDescription("");
    }, 300);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromBucket("config", "status");

        setStatus(data);

        const hideDev = sessionStorage.getItem("hide-dev") === "true";
        const hidePub = sessionStorage.getItem("hide-pub") === "true";

        if (data.mode === "dev" && !hideDev) {
          setMode("dev");
        } else if (data.mode === "pub" && !hidePub) {
          setMode("pub");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (mode !== "") {
      setAnimate(true);
      setShow(true);
      if (mode === "messageSent") {
        setDescription(status?.messageSentDescription || "");
        setTimeout(handleClose, 5000);
      } else if (mode === "messageError") {
        setDescription(status?.messageErrorDescription || "");
        setTimeout(handleClose, 5000);
      } else if (mode === "pub") {
        setDescription(status?.publicityDescription || "");
      } else if (mode === "dev") {
        setDescription(status?.devDescription || "");
      }
    }
  }, [mode, status]);

  // const handleButtonClick = (newMode: string) => {
  //   setMode(newMode);
  //   setShow(true);
  // };

  return (
    <>
      {(show || mode) && (
        <div
          className={`transition-transform duration-300 ${
            animate ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div
            className={`sticky bg-${
              mode === "dev"
                ? "orange-700"
                : mode === "pub"
                ? "sky-700"
                : mode === "messageSent"
                ? "green-700"
                : mode === "messageError"
                ? "destructive"
                : "slate-500"
            } flex items-center z-50 border-b border-accent-foreground/0`}
          >
            <Section className="p-0 max-sm:p-2">
              <span className="font-semibold text-white flex gap-2 items-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:w-full">
                {mode === "dev" ? (
                  <PencilRuler size={20} className="text-white" />
                ) : mode === "pub" ? (
                  <BriefcaseBusiness size={20} className="text-white" />
                ) : mode === "messageSent" ? (
                  <Check size={20} className="text-white" />
                ) : mode === "messageError" ? (
                  <ShieldX size={20} className="text-white" />
                ) : (
                  ""
                )}
                <div className="max-sm:text-sm max-sm:text-center">
                  {description}
                </div>
                {mode === "dev" ? (
                  <span className="text-white/90 text-xs font-semibold">
                    <span className="max-sm:hidden">-</span> version{" "}
                    <VersionStatus />
                  </span>
                ) : (
                  ""
                )}
              </span>
            </Section>
            <button
              onClick={handleClose}
              className="hover:bg-none p-0.5 hover:bg-accent/20"
            >
              <X size={24} className="text-white" />
            </button>
          </div>
        </div>
      )}

      {/* <div className="flex flex-col items-center gap-2 absolute z-50 right-4 top-24 bg-accent/20 border p-4 rounded">
        <span className="text-primary font-bold">DevTool</span>
        <Button
          variant={"outline"}
          onClick={() => handleButtonClick("messageSent")}
          className="rounded-full"
        >
          MessageSent
        </Button>
        <Button
          variant={"outline"}
          onClick={() => handleButtonClick("messageError")}
          className="rounded-full"
        >
          MessageError
        </Button>
        <Button
          variant={"outline"}
          onClick={() => handleButtonClick("dev")}
          className="rounded-full"
        >
          Dev
        </Button>
        <Button
          variant={"outline"}
          onClick={() => handleButtonClick("pub")}
          className="rounded-full"
        >
          Pub
        </Button>
      </div> */}
    </>
  );
};
