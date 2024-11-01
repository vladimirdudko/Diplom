export const buildUrl = (
  url: string,
  params: Record<string, string | number>
): string => {
  let urlWithParams = url;
  Object.entries(params).forEach(([key, value], i) => {
    const sign = !i ? "?" : "&";
    urlWithParams += `${sign}${key}=${value}`;
  });
  return urlWithParams;
};
