import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import Header from "../../components/CafeCollect/Header";
import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import DivideLine from "../../components/CafeCollect/DivideLine";
import CustomButton from "../../components/CafeCollect/CustomButton";

const Pay = ({ navigation }) => {
  const [isClassTime, setClassTime] = useState(false);
  const [isSafeNumber, setSafeNumber] = useState(false);
  const [isReceipt, setReceipt] = useState(false);
  const [isNextTime, setNextTime] = useState(false);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const toggleCheckBox = (option) => {
    switch (option) {
      case "classTime":
        setClassTime(!isClassTime);
        break;
      case "safeNumber":
        setSafeNumber(!isSafeNumber);
        break;
      case "receipt":
        setReceipt(!isReceipt);
        break;
      case "nextTime":
        setNextTime(!isNextTime);
        break;
      default:
        break;
    }
  };

  const renderCheckBox = (label, state, option) => (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        gap: 10,
        marginVertical: 5,
        alignItems: "center",
      }}
      onPress={() => toggleCheckBox(option)}
    >
      <FontAwesome
        name={state ? "check-square" : "square"}
        size={16}
        color={state ? "#FFCD4D" : "#EAEAEA"}
      />
      <Text style={{ fontSize: 12 }}>{label}</Text>
    </TouchableOpacity>
  );

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const renderPaymentMethod = (method) => (
    <>
      <TouchableOpacity
        style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
        onPress={() => handlePaymentMethodChange(method)}
      >
        <FontAwesome
          name={selectedPaymentMethod === method ? "check-square" : "square"}
          size={16}
          color={selectedPaymentMethod === method ? "#FFCD4D" : "#EAEAEA"}
        />
        <Text style={{ fontSize: 12 }}>{method}</Text>
      </TouchableOpacity>
      <View style={{ marginVertical: 8 }}>
        <DivideLine height={1} />
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <Header title="결제하기"/>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <MaterialCommunityIcons name="clock-outline" size={12} color="black" />
            <Text>5분 뒤에 픽업할 수 있어요.</Text>
        </View>

        <View style={{ marginVertical: 15 }}>
            <DivideLine height={1} />
        </View>

        <View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Feather name="map-pin" size={16} color="black" />
            <View>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>레브</Text>
                <Text>수선관 별관 5층</Text>
            </View>
            </View>

            <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 20,
            }}
            >
            <Text style={{ fontWeight: "bold" }}>010-1234-5678</Text>
            <TouchableOpacity
                style={{
                backgroundColor: "#FFCD4D",
                width: 59,
                paddingVertical: 3,
                borderRadius: 10,
                alignItems: "center",
                }}
            >
                <Text style={{ color: "#fff", fontSize: 10, fontWeight: "bold" }}>
                변경하기
                </Text>
            </TouchableOpacity>
            </View>

            <View>
            {renderCheckBox(
                "수업시간이에요! 푸시알림으로 알려주세요!",
                isClassTime,
                "classTime"
            )}
            {renderCheckBox("안심번호 사용", isSafeNumber, "safeNumber")}
            {renderCheckBox("종이영수증 주세요!", isReceipt, "receipt")}
            </View>
        </View>

        <View style={{ marginVertical: 15 }}>
            <DivideLine height={1} />
        </View>

        <View>
            <Text style={{ fontWeight: "bold", marginBottom: 15, fontSize: 12 }}>
            요청사항
            </Text>
            <TextInput
            placeholder="커피 연하게 해주세요!"
            style={{ backgroundColor: "#EEEEEE", padding: 8, borderRadius: 4 }}
            />
            <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
            }}
            >
            {renderCheckBox("다음에도 사용", isNextTime, "nextTime")}
            </View>
        </View>

        <View>
            <View style={{ flexDirection: "row", marginTop: 20, gap: 20 }}>
            <Text style={{ fontWeight: "bold", marginBottom: 15, fontSize: 12 }}>
                도착시간
            </Text>
            <Text style={{ color: "#757575", fontSize: 12 }}>
                픽업시간을 직접 알려주세요!
            </Text>
            </View>
            <TextInput
            placeholder="5분 뒤"
            style={{ backgroundColor: "#EEEEEE", padding: 8, borderRadius: 4 }}
            />
        </View>

        <View style={{ marginVertical: 15 }}>
            <DivideLine height={1} />
        </View>

        <View>
            <Text style={{ fontWeight: "bold", marginBottom: 15, fontSize: 12 }}>
            결제수단
            </Text>
            {renderPaymentMethod("카드결제")}
            {renderPaymentMethod("계좌이체")}
            {renderPaymentMethod("페이코")}
        </View>

        <View>
            <Text style={{ fontWeight: "bold", marginTop: 7, fontSize: 12 }}>
            스탬프
            </Text>
            <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 6
            }}
            >
            <Text style={{fontSize: 12}}>
                현재까지 모은 스탬프는 총 <Text style={{fontSize: 15, fontWeight: 'bold'}}>6개</Text> 입니다!
            </Text>
            <TouchableOpacity
                style={{
                backgroundColor: "#FFCD4D",
                width: 59,
                paddingVertical: 3,
                borderRadius: 10,
                alignItems: "center",
                }}
            >
                <Text style={{ color: "#fff", fontSize: 10, fontWeight: "bold" }}>
                적립하기
                </Text>
            </TouchableOpacity>
            </View>
            <Text style={{fontSize: 12, color: '#757575'}}>공짜 아메리카노까지 4개</Text>
        </View>

        <View style={{ marginVertical: 15 }}>
            <DivideLine height={16} />
        </View>

        <View>
            <Text style={{ fontWeight: "bold", marginBottom: 15, fontSize: 12 }}>
            결제금액
            </Text>
            <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
            >
                <Text style={{fontSize: 12, fontWeight: 'bold', color: '#757575'}}>아메리카노(아이스) 2개</Text>
                <Text style={{fontSize: 12}}>4,500원</Text>
            </View>
            <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
            >
                <Text style={{fontSize: 12, fontWeight: 'bold', color: '#757575'}}>카페라떼 2개</Text>
                <Text style={{fontSize: 12}}>4,500원</Text>
            </View>

            <View style={{ marginVertical: 15 }}>
                <DivideLine height={1} />
            </View>

            <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 15
            }}
            >
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>총 결제금액</Text>
                <Text style={{ fontSize: 12 }}>9,000원</Text>
            </View>

            <DivideLine height={1} />
        </View>
        <View style={{ marginVertical: 15 }}>
            <CustomButton title="9,000원 결제하기"/>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Pay;
