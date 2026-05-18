import Constants from 'expo-constants';
import { ScrollView, Text, View } from "react-native";
import ButtonDefault from '../components/buttonDefault';
import HeaderAuth from '../components/headerAuth';
import InputDefault from '../components/inputDefault';


const statusBarHeight = Constants.statusBarHeight;

export default function ScreenSignUp() {
    return (
        <ScrollView
            className="flex-1 bg-white"
            showsVerticalScrollIndicator={false}
        >
            <HeaderAuth></HeaderAuth>

            <View
                className="bg-lilas mx-6 rounded-2xl p-8 -mt-12 mb-10 flex justify-between"
            >
                <View></View>
                <Text className="text-darker-purple font-poppins text-4xl font-bold mb-8">
                    Entre
                </Text>

                <View className='flex-col gap-10'>
                    <InputDefault placeholder='Nome'
                    ></InputDefault>

                    <InputDefault placeholder='E-mail'
                    ></InputDefault>

                    <InputDefault
                        placeholder="Senha"
                        isPassword={true}
                    />

                    <InputDefault
                        placeholder="Confirmar senha"
                        isPassword={true}
                    />

                    <ButtonDefault title='Cadastre-se'></ButtonDefault>


                </View>
            </View>


        </ScrollView>

    );
}