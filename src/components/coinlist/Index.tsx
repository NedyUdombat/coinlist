import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";
import { CoinCard } from "@components";
import styles from "./styles";
import { useCoins } from "@hooks";
import { CoinListLoader } from "./loader/coinlist.loader";

interface CoinListProps {}

export const CoinList = (props: CoinListProps) => {
  const [refreshing, setRefreshing] = useState(false);
  const { coins, getCoins } = useCoins();

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
