import { Plugin } from "vue";

const httpClientPlugin: Plugin = {
  install(app) {
    app.provide("httpClient", new HttpClient());
  },
};

class HttpClient {
  private static _baseUrl = "https://qb-inventory/";

  public async Get(url: string, data?: object) {
    const res = await fetch(`${HttpClient._baseUrl}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await res.json();
  }

  public async Post(url: string, data?: object) {
    const res = await fetch(`${HttpClient._baseUrl}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await res.json();
  }
}

export { httpClientPlugin, HttpClient };
