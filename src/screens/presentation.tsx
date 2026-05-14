import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight

export default function ScreenPresentation() {
  return (
    <ScrollView
      className="flex-1 bg-light"
      showsVerticalScrollIndicator={false}
    >
      <View
        className="w-full px-4"
        style={{ marginTop: statusBarHeight + 16, paddingBottom: 20 }}
      >
        <View className="flex-row justify-between items-center">
          <Image source={require('../assets/logo.svg')}
            resizeMode="contain"></Image>

          <TouchableOpacity 
          activeOpacity={0.7}
          className="justify-center items-center w-20 h-8 rounded-lg bg-accent">
            <Text className="text-white font-bold text-sm font-poppins">Entrar</Text>
          </TouchableOpacity>
        </View>

        <View className="w-full items-center"
          style={{ marginTop: statusBarHeight + 55 }}>
          <Text className="text-black font-bold uppercase text-4xl text-center font-poppins">
            o que é a
          </Text>
          <Text
            className="font-bold uppercase text-4xl text-center font-poppins text-primary">
            syncrobaby?
          </Text>
        </View>

        <Text className="text-black text-center text-xl leading-6"
          style={{ marginTop: statusBarHeight + 30 }}>
          Um aplicativo que organiza a rotina das crianças de forma leve e acolhedora, promovendo o cuidado e harmonia em familia
        </Text>

        <View
          style={{ marginTop: statusBarHeight + 40}}
          className="w-full h-56 items-center flex justify-center rounded-2xl bg-lilas">
          <Image source={require('../assets/info.svg')}
            resizeMode="contain"></Image>
        </View>

        <View
          style={{ marginTop: statusBarHeight + 40 }}
          className="flex justify-center items-center gap-5">

          <TouchableOpacity 
          activeOpacity={0.7}
          className="bg-black w-3/4 h-14 rounded-2xl items-center justify-center flex-row gap-2">
            <Image source={require('../assets/apple.svg')}
              resizeMode="contain"></Image>

            <View>
              <Text className="text-white text-xs font-extralight"> descarregar na </Text>
              <Text className="text-white text-xl uppercase font-bold">app store </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
          activeOpacity={0.7}
          className="bg-black w-3/4 h-14 rounded-2xl items-center justify-center flex-row gap-2">
            <Image source={require('../assets/playstore.svg')}
              resizeMode="contain"></Image>

            <View>
              <Text className="text-white text-xs font-extralight"> disponível no </Text>
              <Text className="text-white text-xl uppercase font-bold">google play </Text>
            </View>
          </TouchableOpacity>
          
        </View>

        <View>

        </View>
      </View>
    </ScrollView>
  );
}