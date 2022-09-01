export default function formatDate(date = "") {
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
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
