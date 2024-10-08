"use client";
import { PencilRuler, X } from "lucide-react";
import { Section } from "./Section";
import { useState } from "react";
import VersionStatus from "./VersionStatus";

export const GlobalStatus = () => {
  const [show, setShow] = useState(true);
  const [animate, setAnimate] = useState(true);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => setShow(false), 200);
  };
  
  return (
    <>
      {show && (
        <div className={`transition-transform duration-300 ${animate ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="sticky bg-orange-700 flex items-center z-50 border-b border-accent-foreground/0">
            <Section className="">
              <span className="font-semibold text-white flex gap-1 items-center">
                <PencilRuler size={20} className="text-white" />
                Website under development<span className="text-white/90 font-light text-xs">- Some features may not work as expected -</span>
                <span className="text-white/90 text-xs font-semibold">version <VersionStatus /></span>
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
      {/* <button onClick={handleOpen} className="absolute z-50">Open</button> */}
    </>
  );
};
