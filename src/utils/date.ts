export const formatMonthYear = (date: string) => {
  return new Date(date).toLocaleDateString("es-CO", {
    month: "short",
    year: "numeric",
  });
};

export const getDuration = (
  startDate: string,
  endDate: string | null
) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} meses`;
  }

  if (remainingMonths === 0) {
    return `${years} año${years > 1 ? "s" : ""}`;
  }

  return `${years} año${years > 1 ? "s" : ""} • ${remainingMonths} meses`;
};