export default defineEventHandler(async (event) => {
  try {
    const baseUrl = "http://10.4.15.2/medicastore/wsapi/web/?r=";
    // const baseUrl = "https://anaconda.medicastore.com/index.php?r=";
    const headers = await getHeaders(event);
    const query = await getQuery(event);

    const { path, ...restQuery } = query;
    const method = event.method;
    const body = method !== "GET"
    ? await readBody(event)
    : undefined

    // console.log({
    //   httpMethod: event.method,
    //   body
    // })
    const allowedHeaders = {};
    ["authorization", "signature", "content-type"].forEach((key) => {
      if (headers[key]) {
        allowedHeaders[key] = headers[key];
      }
    });

    const res = await $fetch(
      baseUrl + path,
      {
        method,
        headers: {
          "Content-Type": "application/json",
          ...allowedHeaders,
        },
        query: restQuery,
        body,
      }
    );

    return res;
  } catch (e) {
    return { error: true, message: e.message };
  }
});
