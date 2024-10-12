"use client";
import currentLocation from "@/utils/CurrentLocation";
import { useEffect, useState } from "react";

const VersionStatus = () => {
  const [version, setVersion] = useState<string>();
  
  useEffect(() => {
    const basePath = currentLocation(); 

    const fetchVersion = async () => {
      try {
        const response = await fetch(`${basePath}/api/version`);
        if (!response.ok) {
          throw new Error(`Error fetching version: ${response.status}`);
        }
        const data = await response.json();
        setVersion(data.version);
      } catch (error) {
        console.error("Failed to fetch version:", error);
      }
    };

    fetchVersion();
  }, []);

  return <span>{version ? version : "---"}</span>;
};

export default VersionStatus;
