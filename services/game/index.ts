import { useApi } from "~/components/useApi";

const api = useApi();
class gameService {
  async GET_DATA() {
    return await api({
      url: "https://www.mmobomb.com/api1/games?platform=pc",
      method: "GET",
    });
  }
}

export default new gameService();
