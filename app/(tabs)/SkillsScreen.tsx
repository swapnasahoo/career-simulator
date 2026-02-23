import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SkillsScreen = () => {
  return (
    <View className="flex-1 bg-bg px-6 py-4">
      <SafeAreaView>
        {/* HEADER */}
        <Text className="text-text text-center text-lg font-semibold">
          Skills
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default SkillsScreen;
