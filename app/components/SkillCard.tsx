import { Ionicons } from "@expo/vector-icons";
import React, { ComponentProps } from "react";
import { Text, View } from "react-native";

type SkillCardProps = {
  skillName: string;
  skillLevel: number;
  skillIcon: ComponentProps<typeof Ionicons>["name"];
  skillColor: string;
};

const SkillCard = ({
  skillName,
  skillLevel,
  skillIcon,
  skillColor,
}: SkillCardProps) => {
  return (
    <View className="w-full flex-row items-center bg-card rounded-lg shadow-sm elevation-md px-6 py-4 transition-all duration-300 ease-in-out active:scale-[0.95] active:opacity-85">
      <View className="bg-warm-paper/20 p-1.5 rounded-sm">
        <Ionicons name={skillIcon} size={16} color="#f5f2ec" />
      </View>

      <View className="ml-4">
        <Text className="text-text">{skillName}</Text>

        <View className="h-2 bg-warm-paper/20 w-full mt-2 rounded-full overflow-hidden">
          <View
            style={{
              height: 8,
              backgroundColor: skillColor,
              width: `${skillLevel}%`,
            }}
          />
        </View>
      </View>

      <View className="ml-auto">
        <Text className="text-text">
          {Math.min(skillLevel, 100).toFixed(0)} / 100
        </Text>
      </View>
    </View>
  );
};

export default SkillCard;
