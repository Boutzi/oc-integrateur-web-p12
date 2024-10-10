"use client";
import { useEffect, useState } from 'react';
import packageData from '../../package.json';

const VersionStatus = () => {
  const [version, setVersion] = useState(packageData.version);

  useEffect(() => {
    const fetchVersion = async () => {
      const response = await fetch('/package.json');
      const data = await response.json();
      setVersion(data.version);
    };

    fetchVersion();
  }, []);

  return (
    <span>{version}</span>
  );
};

export default VersionStatus;
