export default function currentLocation() {
  const location = window.location;
  let basePath: string;

  if (location.href.includes("boutzi.github.io")) {
    basePath = `${location.origin}/oc-integrateur-web-p12`;
  } else {
    basePath = `${location.origin}`;
  }

  return basePath;
}
