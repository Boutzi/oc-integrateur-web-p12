"use client";
import { useEffect, useState } from "react";

const VersionStatus = () => {
  const [version, setVersion] = useState<string>();

  useEffect(() => {
    const location = window.location;
    let basePath: string;

    if (location.href.includes("boutzi.github.io")) {
      basePath = `${location.origin}/oc-integrateur-web-p12`;
    } else {
      basePath = `${location.origin}`;
    }

    const fetchVersion = async () => {
      try {
        console.log(`Fetching version from: ${basePath}/api/version`);
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
