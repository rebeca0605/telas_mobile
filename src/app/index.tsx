import { ScrollView, TouchableOpacity, View } from "react-native";

import Constants from 'expo-constants';
import { Image, Text } from "react-native";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView
      className="flex-1 bg-light"
      showsVerticalScrollIndicator={false}
    >

      <View className="bg-lilas flex w-full h-1/3">
        <View className="w-full px-4 flex-col gap-20"
          style={{ marginTop: statusBarHeight + 60, paddingBottom: 20 }}
        >
          <View className="bg-primary w-full flex items-center justify-center rounded-xl gap-10 pt-3 pb-10">

            <Image source={require('../assets/logo2.svg')}></Image>

            <Image source={require('../assets/syncrobaby.svg')}
              resizeMode="contain"></Image>
          </View>

          <View className="flex flex-col gap-4">
            <Text className="text-darker-purple font-bold text-5xl uppercase">bem-vindo!</Text>
            <Text className="text-darker-purple text-xl">Conectando você a cada pequeno momento.</Text>
          </View>

          <View className="flex-col gap-4">
            <TouchableOpacity
              activeOpacity={0.7}
              className="bg-lilas w-full items-center h-14 justify-center rounded-xl">
              <Text className="text-primary-text font-bold text-3xl">Entre</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              className="bg-accent w-full items-center h-14 justify-center rounded-xl">
              <Text className="text-white font-bold text-3xl">Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </ScrollView>
  );
}