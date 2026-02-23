import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SkillsScreen = () => {
  const programmingLevel = (1000 / 1000) * 100;

  return (
    <View className="flex-1 bg-bg px-6 py-4">
      <SafeAreaView>
        {/* HEADER */}
        <Text className="text-text text-center text-lg font-semibold">
          Skills
        </Text>

        {/* CONTENT */}
        <View className="mt-6">
          {/* SKILL CARD */}
          <View className="flex-row items-center bg-card rounded-lg shadow-sm elevation-md px-6 py-4 transition-all duration-300 ease-in-out active:scale-[0.95] active:opacity-85">
            <View className="bg-warm-paper/20 p-1.5 rounded-sm">
              <Ionicons name="code" size={16} color="#f5f2ec" />
            </View>

            <View className="ml-4">
              <Text className="text-text">Programming</Text>

              <View className="h-2 bg-warm-paper/20 w-48 mt-2 rounded-full overflow-hidden">
                <View
                  className={`h-2 bg-skill-blue w-[${programmingLevel}%]`}
                />
              </View>
            </View>

            <View className="ml-auto">
              <Text className="text-text">
                {Math.min(programmingLevel, 100).toFixed(0)} / 100
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SkillsScreen;
