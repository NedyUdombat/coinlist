import { useState, useEffect, useRef } from "react";
import Toast from "react-native-toast-message";

import { http } from "@api";
import { Coin, Status } from "@types";

export const useCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [error, setError] = useState<any>();
  const [status, setStatus] = useState<Status>(Status.IDLE);

  async function getCoins() {
    setStatus(Status.PENDING);

    try {
      const {
        data: { data },
      } = await http({
        method: "GET",
        url: "/currency/rate",
      });

      const coinData = [];
      for (let item in data.rates) {
        coinData.push({
          name: item,
          key: data.rates[item].key,
          rate: data.rates[item].rate,
        });
      }

      setCoins(coinData);
      setStatus(Status.SUCCESS);
    } catch (error: any) {
      setStatus(Status.ERROR);
      Toast.show({
        type: "error",
        text1: "An error occurred. Please pull down to refresh",
      });
      setError(error?.response.data.message);
    }
  }
  useEffect(() => {
    getCoins();
  }, []);
  return { getCoins, coins, status, error };
};
