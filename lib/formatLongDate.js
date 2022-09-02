export default function formatDate(date = "") {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  if (date instanceof Date) {
    return date.toLocaleDateString("en-US", options);
  } else {
    return new Date(date.replace(/-/g, "/")).toLocaleDateString(
      "en-US",
      options
    );
  }
}
