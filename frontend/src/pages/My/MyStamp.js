import { ScrollView, StyleSheet, Text, View } from "react-native";
import MyHeader from "../../components/My/MyHeader";

const stamps = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const MyStamp = () => {
  const stampRendered = [];
  for (let i = 0; i < 6; i++) {
    const tmp = [];
    for (let j = 0; j < 4; j++) {
      tmp.push(<View style={styles.stamp} key={i * 4 + j}></View>);
    }
    stampRendered.push(<View style={styles.stampRow}>{tmp}</View>);
  }

  return (
    <View style={styles.container}>
      <MyHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={styles.bodyHeader}>
            <Text style={styles.title}>스탬프</Text>
            <Text style={styles.subtitle}>스탬프를 모아보세요!</Text>
          </View>
          <View style={styles.stampBoard}>{stampRendered}</View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFBE5",
    height: "100%",
  },
  body: {
    marginTop: 24,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bodyHeader: {
    width: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222222",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "normal",
    color: "#8B8B8B",
  },
  stampBoard: {
    marginTop: 24,
    width: 350,
    height: 600,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
    paddingHorizontal: 23,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  stampRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stamp: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#D9D9D9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyStamp;
