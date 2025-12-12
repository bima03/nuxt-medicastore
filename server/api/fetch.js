export default defineEventHandler(async (event) => {
  try {
    const headers = await getHeaders(event);
    const query = await getQuery(event);

    const { path, method = "GET", ...restQuery } = query;
    const body = method !== "GET" ? await readBody(event) : undefined;

    const allowedHeaders = {};
    ["authorization", "signature", "content-type"].forEach((key) => {
      if (headers[key]) {
        allowedHeaders[key] = headers[key];
      }
    });

    const res = await $fetch(
      "https://anaconda.medicastore.com/?r=" + path,
      {
        method,
        headers: {
          "Content-Type": "application/json",
          ...allowedHeaders,
        },
        body: method !== "GET" ? body : undefined,
        query: restQuery,
      }
    );

    return res;
  } catch (e) {
    return { error: true, message: e.message };
  }
});
