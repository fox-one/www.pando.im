import Http from "@/services/http";

export default function (http: Http) {
  return {
    getPublic() {
      return http.get("/public");
    },

    getApps() {
      return http.get("/3rd-party-apps/index.json?r=" + Math.random.toString());
    },
  };
}
