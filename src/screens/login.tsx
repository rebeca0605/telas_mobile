import Constants from 'expo-constants';
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";

const statusBarHeight = Constants.statusBarHeight;

export default function ScreenLogin() {
    return (
        <ScrollView
            className="flex-1 bg-white"
            showsVerticalScrollIndicator={false}
        >
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

            <View
                className="bg-lilas mx-6 rounded-2xl p-8 -mt-12 mb-10 flex justify-between"
            >
                <Text className="text-darker-purple font-poppins text-4xl font-bold mb-8">
                    Entre
                </Text>

                <View className='flex-col gap-10'>
                    <TextInput
                        placeholder="E-mailas"
                        placeholderTextColor="#9c9c9c"
                        selectionColor="#9334ea"
                        cursorColor="#9334ea"
                        className="bg-white p-5 rounded-2xl shadow-purple-sm text-lg font-bold text-darker-purple"

                    />

                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor="#9c9c9c"
                        selectionColor="#9334ea"
                        cursorColor="#9334ea"
                        secureTextEntry
                        className="bg-white p-5 rounded-2xl shadow-purple-sm text-lg font-bold text-darker-purple"

                    />
                </View>


            </View>


        </ScrollView>

    );
}