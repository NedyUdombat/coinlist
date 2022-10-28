import React, { useState } from "react";
import { View, Animated, RefreshControl } from "react-native";

import styles from "./styles";
import { CoinCard } from "@components";
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
        <Animated.FlatList
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
