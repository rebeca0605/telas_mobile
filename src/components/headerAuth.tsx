import Constants from 'expo-constants';
import { Image, Pressable, Text, View } from "react-native";

const statusBarHeight = Constants.statusBarHeight;

export default function HeaderAuth() {
    return (
        <View className="bg-primary w-full px-4 pb-20">

            <Pressable style={{ marginTop: statusBarHeight + 8 }}>
                <Image
                    source={require('../assets/arrowIcon.svg')}
                    resizeMode="contain"
                />
            </Pressable>

            <View className="flex justify-center flex-row gap-4">
                <Image source={require('../assets/logo_sem_nome.svg')}
                    resizeMode="contain"
                    style={{ width: 102 }}></Image>

                <View className="flex items-end justify-center">
                    <Text className="text-darker-purple font-poppins uppercase text-4xl">syncro</Text>
                    <Text className="text-darker-purple font-poppins uppercase text-4xl">baby</Text>
                </View>
            </View>
        </View>

    );
}