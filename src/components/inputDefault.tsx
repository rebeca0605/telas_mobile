import { TextInput, TextInputProps } from "react-native";

interface InputDefaultProps extends TextInputProps {
  placeholder: string;
  isPassword?: boolean;
}

export default function InputDefault({ placeholder, isPassword = false, ...rest }: InputDefaultProps) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={isPassword} 
      placeholderTextColor="#9c9c9c"
      selectionColor="#9334ea"
      cursorColor="#9334ea"
      className="bg-white p-5 rounded-2xl shadow-purple-sm text-lg font-bold text-darker-purple"
      {...rest}
    />
  );
}