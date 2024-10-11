"use client";
import { useEffect, useState } from 'react';

const VersionStatus = () => {
  const [version, setVersion] = useState<string>();

  useEffect(() => {
    const fetchVersion = async () => {
      const response = await fetch('/api/version');
      const data = await response.json();
      setVersion(data);
    };

    fetchVersion();
  }, []);

  return (
    <span>{version}</span>
  );
};

export default VersionStatus;
