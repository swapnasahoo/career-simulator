import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SkillCard from "../components/SkillCard";

const SkillsScreen = () => {
  return (
    <View className="flex-1 bg-bg px-6 py-4">
      <SafeAreaView>
        {/* HEADER */}
        <Text className="text-text text-center text-lg font-semibold">
          Skills
        </Text>

        {/* CONTENT */}
        <View className="mt-6 gap-6">
          <SkillCard skillName="Programming" skillLevel={1} skillIcon="code" />

          <SkillCard
            skillName="Singing"
            skillLevel={24}
            skillIcon="musical-note-outline"
          />

          <SkillCard
            skillName="Painting"
            skillLevel={50}
            skillIcon="brush-outline"
          />

          <SkillCard
            skillName="Story Telling"
            skillLevel={10}
            skillIcon="book-outline"
          />

          <SkillCard
            skillName="Video Editing"
            skillLevel={22}
            skillIcon="videocam-outline"
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SkillsScreen;
