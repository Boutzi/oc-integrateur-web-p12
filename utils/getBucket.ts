export function fetchIconFromBucket(iconId: string) {
  return fetch(
    `https://oc-integrateur-web-p12.s3.eu-west-3.amazonaws.com/icons/${iconId}.svg`
  )
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
    });
}
