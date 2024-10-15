"use client";
import {
  BriefcaseBusiness,
  Check,
  PencilRuler,
  ShieldX,
  X,
} from "lucide-react";
import { Section } from "./Section";
import { Suspense, useEffect, useState, useCallback } from "react";
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

  const handleClose = useCallback(() => {
    if (mode === "dev" || mode === "pub") {
      sessionStorage.setItem(`hide-${mode}`, "true");
    }
    setAnimate(false);
    setTimeout(() => {
      setShow(false);
      setMode("");
      setDescription("");
    }, 300);
  }, [mode, setMode]);

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
  }, [setMode]);

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
  }, [mode, status, handleClose]);

  const backgroundClass = `sticky flex items-center z-50 border-b border-accent-foreground/0 ${
    mode === "dev"
      ? "bg-orange-700"
      : mode === "pub"
      ? "bg-sky-700"
      : mode === "messageSent"
      ? "bg-green-700"
      : mode === "messageError"
      ? "bg-destructive"
      : "bg-slate-400"
  }`;
  return (
    <>
      {show && (
        <Suspense>
          <div
            className={`transition-transform duration-300 ${
              animate ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className={backgroundClass}>
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
        </Suspense>
      )}
    </>
  );
};
