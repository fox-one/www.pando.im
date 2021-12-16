import Http from "@/services/http";

export default function (http: Http) {
  return {
    getPublic() {
      return http.get("/public");
    },

    getLakeStat() {
      return http.get("https://api.4swap.org/api/pairs");
    },

    getApps() {
      return http.get(
        "/3rd-party-apps-info/index.json?r=" + Math.random().toString(),
      );
    },
  };
}
