"use client"
import { useEffect, useState } from 'react';
import versionData from '../../version.json';

const VersionStatus = () => {
  const [version, setVersion] = useState(versionData.version);

  useEffect(() => {
    const fetchVersion = async () => {
      const response = await fetch('/version.json');
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
