export async function fetchDataFromBucket(
  lang: string,
  selectedData: string,
  objectKey: string
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/${lang}/${selectedData}.json`
    );
    const data = await response.json();
    const specificObject = data[objectKey];
    return specificObject;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
