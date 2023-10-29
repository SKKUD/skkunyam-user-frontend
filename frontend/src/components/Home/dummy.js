export const itemSortOrder = ["todayMenu", "MostStore", "MostMenu", "MyStamp"];

export const menuItems = [
  {
    name: "베이컨 크림 파스타",
    cost: "5,600",
    restaurant: "금잔디 식당",
    imgSource: require("../../../assets/images/todayMenuPasta.png"),
  },
  {
    name: "중국식 계란 새우 볶음밥",
    cost: "5,600",
    restaurant: "은행골",
    imgSource: require("../../../assets/images/todayMenuRice.png"),
  },
  {
    name: "버섯 두부 된장찌개",
    cost: "5,600",
    restaurant: "금잔디 식당",
    imgSource: require("../../../assets/images/todayMenuSoup.png"),
  },
  {
    name: "간장연어구이",
    cost: "5,600",
    restaurant: "은행골",
    imgSource: require("../../../assets/images/todayMenuSalmon.png"),
  },
  {
    name: "바짝 목살 구이",
    cost: "5,600",
    restaurant: "금잔디 식당",
    imgSource: require("../../../assets/images/todayMenuBeaf.png"),
  },
];

export const stores = [
  {
    name: "레브",
    building: "수선관 별관",
    waitMinuite: 10,
    isLiked: true,
    likeCount: 426,
    imgSource: require("../../../assets/images/reve.png"),
  },
  {
    name: "사랑방",
    building: "경영관",
    waitMinuite: 8,
    isLiked: false,
    likeCount: 527,
    imgSource: require("../../../assets/images/loveroom.png"),
  },
  {
    name: "커피 나무",
    building: "중도",
    waitMinuite: 15,
    isLiked: false,
    likeCount: 123,
    imgSource: require("../../../assets/images/coffeetree.png"),
  },
  {
    name: "펜도로시",
    building: "국제관",
    waitMinuite: 0,
    isLiked: true,
    likeCount: 92,
    imgSource: require("../../../assets/images/pandorothy.png"),
  },
];

export const menus = [
  {
    name: "초코라뗴",
    restaurant: {
      name: "사랑방",
      building: "경영관",
    },
    isLiked: true,
    imgSource: require("../../../assets/images/chocolatte.png"),
  },
  {
    name: "피치 아메리카노",
    restaurant: {
      name: "레브",
      building: "수선관 별관",
    },
    isLiked: false,
    imgSource: require("../../../assets/images/peachAmericano.png"),
  },
  {
    name: "녹차라떼",
    restaurant: {
      name: "펜도로시",
      building: "국제관",
    },
    isLiked: true,
    imgSource: require("../../../assets/images/greenteaLatte.png"),
  },
  {
    name: "유자 아메리카노",
    restaurant: {
      name: "레브",
      building: "수선관 별관",
    },
    isLiked: false,
    imgSource: require("../../../assets/images/yujaAmericano.png"),
  },
];
