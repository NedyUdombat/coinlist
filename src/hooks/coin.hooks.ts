import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";

import { getCoinsEndpoint } from "@api";
import { Coin, Status } from "@types";

const defaultValues = {
  param: "",
};

export interface FormValues {
  param: string;
}

interface Response {
  publicKey: string;
  rates: any;
  signature: string;
}

export const useCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [error, setError] = useState<any>();
  const [status, setStatus] = useState<Status>(Status.IDLE);
  const [response, setResponse] = useState<Coin[]>();

  const { control } = useForm<FormValues>({ defaultValues });

  async function getCoins() {
    setStatus(Status.PENDING);

    try {
      const response = await getCoinsEndpoint();
      setResponse(response);
      setCoins(response);
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

  async function searchCoins(param: string) {
    if (response && response.length > 0) {
      const searchTokens = param
        .toLowerCase()
        .split(" ")
        .filter(token => token.trim() !== "");

      const searchTermRegex = new RegExp(searchTokens.join("|"), "gi");
      setCoins(
        response.filter(coin => coin.name.toLowerCase().match(searchTermRegex)),
      );
    }
  }

  function handleSearchInput(param: string) {
    if (param) {
      searchCoins(param);
    } else {
      setCoins(response ? response : []);
    }
  }

  useEffect(() => {
    getCoins();
  }, []);

  return {
    control,
    getCoins,
    coins,
    status,
    error,
    searchCoins,
    handleSearchInput,
  };
};
