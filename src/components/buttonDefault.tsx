import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonDefaultProps extends TouchableOpacityProps {
  title: string; 
}

export default function ButtonDefault({ title, ...rest }: ButtonDefaultProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="bg-accent p-5 rounded-2xl items-center active:opacity-80"
      {...rest}
    >
      <Text className="text-white text-xl font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}