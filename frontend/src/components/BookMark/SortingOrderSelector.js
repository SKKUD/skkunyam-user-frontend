import { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";

const SortingOrderSelector = ({ sortingOrder, setSortingOrder }) => {
  const sortingOrderMap = {
    0: "최근 등록된 순",
    1: "자주 구매한 순",
    2: "낮은 가격 순",
  };
  const [modalVisible, setModalVisible] = useState(false);

  const onPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const changeSortingOrder = (value) => {
    setSortingOrder(value);
    closeModal();
  };

  return (
    <>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.sortingOrderText}>
            {sortingOrderMap[sortingOrder]}
          </Text>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/underIcon.png")}
          />
        </View>
      </TouchableOpacity>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={closeModal}
        backdropOpacity={0.5}
        style={styles.modal}
      >
        <View style={styles.modalBody}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.modalButton}
            onPress={() => changeSortingOrder(0)}
          >
            <Text style={styles.buttonText}>{sortingOrderMap[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.modalButton}
            onPress={() => changeSortingOrder(1)}
          >
            <Text style={styles.buttonText}>{sortingOrderMap[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.modalButton}
            onPress={() => changeSortingOrder(2)}
          >
            <Text style={styles.buttonText}>{sortingOrderMap[2]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.modalButton}
            onPress={closeModal}
          >
            <Text style={styles.buttonText}>닫기</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 25,
    backgroundColor: "#FFE769",
    borderRadius: 20,
  },
  sortingOrderText: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "medium",
  },
  icon: {
    marginLeft: 8,
    width: 9,
    height: 6,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalBody: {
    width: Dimensions.get("window").width,
    backgroundColor: "#fff",
    height: 240,
    borderRadius: 20,
  },
  modalButton: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Pretendard Regular",
    color: "#000000",
  },
});

export default SortingOrderSelector;
