import Http from "@/services/http";

export default function (http: Http) {
  return {
    getPublic() {
      return http.get("/public");
    },

    getLakeStat() {
      return http.get("https://api.4swap.org/api/pairs");
    },

    getLeafStat() {
      return http.get("https://leaf-api.pando.im/api/cats");
    },

    getRingsStat() {
      return http.get(
        "https://rings-api.pando.im/api/v1/statistic/markets/all/overview",
      );
    },

    getApps() {
      return http.get(
        "/3rd-party-apps-info/index.json?r=" + Math.random().toString(),
      );
    },
  };
}
