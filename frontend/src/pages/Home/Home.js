import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import HomeHeader from "../../components/Home/HomeHeader";
import RadioButton from "../../components/Home/RadioButton";
import TodayMenuCarousel from "../../components/Home/TodayMenuCarousel";

import { itemSortOrder, menus, stores } from "../../components/Home/dummy";
import MostStoreCard from "../../components/Home/MostStoreCard";
import MostMenuCard from "../../components/Home/MostMenuCard";

const Home = ({ navigation }) => {
  const user = {
    name: "스꾸디",
    point: "7,860",
  };

  // 명륜/율전 선택
  const [isMyeongryun, setIsMyeongryun] = useState(true);
  const onMyeongryunClick = () => {
    console.log("명륜 clicked");
    setIsMyeongryun(true);
  };
  const onYuljeonClick = () => {
    console.log("율전 clicked");
    setIsMyeongryun(false);
  };

  const onCafeCollectClick = () => {
    console.log("카페 모아보기 clicked");
    navigation.navigate("CafeHome");
  };
  const onRestaurantCollectClick = () => {
    console.log("식당 모아보기 clicked");
  };

  const onMostStoreMoreClick = () => {
    console.log("가장 많이 이용한 매장 더보기 clicked");
  };
  const onMostMenuCMorelick = () => {
    console.log("가장 많이 주문한 메뉴 더보기 clicked");
  };

  const onMyStampClick = () => {
    console.log("내 스탬프 clicked");
  };
  const onMyPointClick = () => {
    console.log("내 포인트 clicked");
  };

  const renderDict = {
    todayMenu: (
      <>
        <View style={styles.todayMenuContainer}>
          <View style={styles.todayMenuHeader}>
            <Text style={styles.todayMenuTitle}>오늘의 메뉴</Text>
          </View>
          <TodayMenuCarousel />
        </View>

        <View style={styles.collectContainer}>
          <TouchableOpacity
            style={styles.collectButton}
            onPress={onCafeCollectClick}
          >
            <Image
              style={styles.collectImage}
              source={require("../../../assets/icons/coffeeCupIcon.png")}
            />
            <Text style={styles.collectText}>카페 모아보기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.collectButton}
            onPress={onRestaurantCollectClick}
          >
            <Image
              style={styles.collectImage}
              source={require("../../../assets/icons/cutleryIcon.png")}
            />
            <Text style={styles.collectText}>식당 모아보기</Text>
          </TouchableOpacity>
        </View>
      </>
    ),
    MostStore: (
      <View style={styles.mostContainer}>
        <View style={styles.mostHeader}>
          <View style={styles.mostHeaderLeft}>
            <Text style={styles.mostTitle}>{user.name} 님이</Text>
            <Text style={styles.mostTitle}>가장 많이 이용한 매장이에요!</Text>
          </View>
          <TouchableOpacity
            style={styles.mostHeaderRight}
            onPress={onMostStoreMoreClick}
          >
            <View style={styles.moreWrapper}>
              <Text stlye={styles.moreText}>더보기</Text>
              <Image source={require("../../../assets/icons/rightIcon.png")} />
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.mostBody}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          {stores.map((store, index) => (
            <MostStoreCard key={index} store={store} />
          ))}
        </ScrollView>
      </View>
    ),
    MostMenu: (
      <View style={styles.mostContainer}>
        <View style={styles.mostHeader}>
          <View style={styles.mostHeaderLeft}>
            <Text style={styles.mostTitle}>{user.name} 님이</Text>
            <Text style={styles.mostTitle}>가장 많이 주문한 메뉴에요!</Text>
          </View>
          <TouchableOpacity
            style={styles.mostHeaderRight}
            onPress={onMostMenuCMorelick}
          >
            <View style={styles.moreWrapper}>
              <Text stlye={styles.moreText}>더보기</Text>
              <Image source={require("../../../assets/icons/rightIcon.png")} />
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.mostBody}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          {menus.map((menu, index) => (
            <MostMenuCard key={index} menu={menu} />
          ))}
        </ScrollView>
      </View>
    ),
    MyStamp: (
      <View style={styles.pointContainer}>
        <View style={styles.pointHeader}>
          <Text style={styles.pointHeaderTitle}>{user.name} 님의 포인트</Text>
        </View>
        <View style={styles.pointBody}>
          <View style={styles.pointBodyHeader}>
            <Text style={styles.pointBodyTitle}>
              {user.name} 님이 당장 사용할 수 있는 포인트를 확인하세요!
            </Text>
          </View>
          <View style={styles.pointBodyBody}>
            <View style={styles.pointBodyBodyUp}>
              <Image
                style={styles.pointBodyBodyUpImage}
                source={require("../../../assets/icons/UsDollarCircledIcon.png")}
              />
              <Text style={styles.pointBodyBodyUpText}>{user.point}</Text>
              <Text style={styles.pointBodyBodyUpTextSub}>원</Text>
            </View>
            <View style={styles.pointBodyBodyDown}>
              <TouchableOpacity
                style={styles.pointBodyBodyDownButton}
                onPress={onMyStampClick}
              >
                <Text style={styles.pointBodyBodyDownButtonText}>
                  내 스탬프
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.pointBodyBodyDownButton}
                onPress={onMyPointClick}
              >
                <Text style={styles.pointBodyBodyDownButtonText}>
                  내 포인트
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    ),
  };

  const [render, setRender] = useState([]);
  const [renderOrder, setRenderOrder] = useState(itemSortOrder);
  useEffect(() => {
    setRender(renderOrder.map((item) => renderDict[item]));
  }, [renderOrder]);

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <HomeHeader />
      <ScrollView
        style={styles.body}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* 명/율 선택 */}
        <View style={styles.radioContainer}>
          <RadioButton
            label="명륜"
            checked={isMyeongryun}
            onPressed={onMyeongryunClick}
          />
          <RadioButton
            label="율전"
            checked={!isMyeongryun}
            onPressed={onYuljeonClick}
          />
        </View>
        {/* 홍보? */}
        <View style={styles.festaContainer}>
          <ImageBackground
            style={styles.bgImage}
            source={require("../../../assets/festaImage.png")}
            imageStyle={{ borderRadius: 8 }}
          >
            <View style={styles.festaTextContainer}>
              <Text style={styles.festaText}>2024 ESKARA</Text>
              <Text style={styles._festaText}>
                성균인이라면! 축제도 꾸냠이와 함께~!
              </Text>
            </View>
          </ImageBackground>
        </View>
        {/* 바로주문하기 */}
        <View style={styles.quickOrderContainer}>
          <View style={styles.quickOrderHeader}>
            <Text style={styles.quickOrderTitle}>바로주문하기</Text>
          </View>
          <View style={styles.quickOrderBody}>
            <Text>여기 바뀔 것 같아서 나중에 만들게요</Text>
          </View>
        </View>
        {render.map((item, index) => (
          <View key={index}>{item}</View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 100,
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 20,
    marginHorizontal: 24,
  },
  festaContainer: {
    width: 350,
    height: 80,
    backgroundColor: "#BBBBBB",
    marginHorizontal: 20,
    borderRadius: 8,
    marginTop: 32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  festaTextContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 16,
  },
  festaText: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Rubik Mono One",
  },
  _festaText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Pretendard Bold",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  quickOrderContainer: {
    width: 350,
    height: 140,
    marginHorizontal: 20,
    marginTop: 24,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  quickOrderHeader: {
    width: "100%",
    height: 40,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  quickOrderTitle: {
    fontSize: 20,
    fontFamily: "Pretendard Bold",
  },
  quickOrderBody: {
    width: "100%",
    height: 80,
    backgroundColor: "#BBBBBB",
  },
  todayMenuContainer: {
    width: 350,
    height: 200,
    marginHorizontal: 20,
    marginTop: 24,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  todayMenuHeader: {
    width: "100%",
    height: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 8,
  },
  todayMenuTitle: {
    fontSize: 20,
    fontFamily: "Pretendard Bold",
  },
  collectContainer: {
    width: 350,
    height: 50,
    marginHorizontal: 20,
    marginTop: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  collectButton: {
    width: 160,
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    backgroundColor: "#FFCD4D",
  },
  collectImage: {
    width: 19,
    height: 19,
  },
  collectText: {
    fontSize: 16,
    marginLeft: 8,
    textAlign: "center",
    fontFamily: "Pretendard Regular",
  },
  mostContainer: {
    marginHorizontal: 20,
    marginTop: 40,
    width: 350,
    height: 220,
  },
  mostHeader: {
    width: "100%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  mostHeaderRight: {
    width: 80,
    height: 45,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  moreWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  moreText: {
    fontSize: 14,
    fontFamily: "Pretendard Thin",
  },
  mostTitle: {
    fontSize: 20,
    fontFamily: "Pretendard Bold",
    color: "#222222",
  },
  mostBody: {
    marginTop: 20,
  },
  pointContainer: {
    width: 350,
    height: 160,
    marginTop: 24,
    marginHorizontal: 20,
    marginBottom: 80,
  },
  pointHeader: {
    width: "100%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  pointHeaderTitle: {
    fontSize: 20,
    fontFamily: "Pretendard Bold",
    color: "#222222",
  },
  pointBody: {
    width: "100%",
    height: 140,
    marginTop: 16,
    backgroundColor: "#FFFBE5",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 18,
    elevation: 5, // 안드로이드에서 그림자 효과를 위한 속성
    shadowColor: "#000", // iOS에서 그림자 색상을 지정
    shadowOffset: { width: 0, height: 6 }, // iOS 그림자의 오프셋
    shadowOpacity: 0.2, // iOS 그림자의 투명도
    shadowRadius: 4, // iOS 그림자의 반경
  },
  pointBodyHeader: {
    width: "100%",
    height: 22,
  },
  pointBodyTitle: {
    fontSize: 14,
    color: "#222222",
    fontFamily: "Pretendard Regular",
  },
  pointBodyBody: {
    width: "100%",
    height: 120,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pointBodyBodyUp: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  pointBodyBodyUpImage: {
    width: 18,
    height: 18,
  },
  pointBodyBodyUpText: {
    fontSize: 20,
    fontFamily: "Pretendard Bold",
    color: "#222222",
    marginLeft: 8,
  },
  pointBodyBodyUpTextSub: {
    fontSize: 14,
    fontFamily: "Pretendard Bold",
    color: "#222222",
    marginLeft: 4,
  },
  pointBodyBodyDown: {
    marginTop: 16,
    width: "100%",
    height: 34,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pointBodyBodyDownButton: {
    width: 150,
    backgroundColor: "#FFCD4D",
    borderRadius: 7,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pointBodyBodyDownButtonText: {
    fontFamily: "Pretendard Regular",
    fontSize: 14,
  },
});

export default Home;
