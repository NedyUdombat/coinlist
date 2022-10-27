import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import { CoinCard } from "@components";
import styles from "./styles";
import { useCoins } from "@hooks";
import { CoinListLoader } from "./loader/coinlist.loader";
import { Coin } from "@types";

interface CoinListProps {
  coins: Coin[];
}

export const CoinList = ({ coins }: CoinListProps) => {
  const [refreshing, setRefreshing] = useState(false);
  const { getCoins } = useCoins();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getCoins();
    setRefreshing(false);
  }, []);

  const renderCoinCard = ({ item }: any) => <CoinCard coin={item} />;

  return (
    <View style={styles.container}>
      {coins.length > 0 ? (
        <FlatList
          data={coins}
          renderItem={renderCoinCard}
          keyExtractor={item => item.key}
          horizontal={false}
          numColumns={2}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          columnWrapperStyle={styles.columnWrapperStyle}
        />
      ) : (
        <CoinListLoader />
      )}
    </View>
  );
};
