import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LifeScreen = () => {
  return (
    <View className="flex-1 bg-bg">
      <SafeAreaView>
        {/* HEADER */}
        <View className="px-6 py-4">
          <View className="flex-row items-center gap-2">
            {/* AVATAR */}
            <View className="bg-surface size-12 rounded-full shadow-sm elevation-md" />

            {/* NAME + AGE */}
            <View>
              <Text className="text-text font-medium">John Doe</Text>
              <Text className="text-text/70 text-sm">13 years old</Text>
            </View>

            {/* RELATIONSHIP */}
            <Pressable className="ml-auto bg-primary size-10 rounded-full items-center justify-center p-1 transition-all ease-in-out duration-300 active:opacity-80 active:scale-[0.95]">
              <Ionicons name="person-outline" size={18} color="#0e0f13" />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>

      {/* CONTENT */}
      <SafeAreaView>
        <View className="px-6 py-4 -mt-24">
          {/* INCREASE AGE BUTTON */}
          <Pressable
            className="w-full h-12 bg-primary rounded-md items-center justify-center transition-all ease-in-out duration-300 active:opacity-80 active:scale-[0.95]"
            accessibilityRole="button"
            accessibilityLabel="Increase Age"
          >
            <Text className="text-midnight-ink font-medium">Increase Age</Text>
          </Pressable>

          {/* LIFE EVENTS */}
          <View className="mt-6">
            <Text className="text-text/70">Life events</Text>

            <View>
              <Text className="text-text text-sm mt-2">
                You just got into Delhi Public School. Enjoy your school life
                and make the most of it!
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LifeScreen;
