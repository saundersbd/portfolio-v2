interface Options {
  year?: "numeric";
  month?: "long";
  day?: "numeric";
}

export default function formatDate(date: Date | string = ""): string {
  const options: Options = {
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
