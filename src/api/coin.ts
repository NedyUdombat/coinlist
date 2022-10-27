import { http } from "@api";

export async function getCoinsEndpoint() {
  const {
    data: { data },
  } = await http({
    method: "GET",
    url: "/currency/rate",
  });
  const coinsData = [];
  if (data) {
    for (let i in data.rates) {
      coinsData.push({
        name: i,
        rate: data.rates[i].rate,
        key: data.rates[i].key,
      });
    }
  }

  return coinsData;
}
