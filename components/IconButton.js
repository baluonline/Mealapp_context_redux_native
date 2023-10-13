import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
function IconButton({ name, color, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;
