import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { 
  Trophy, 
  Target, 
  RotateCcw, 
  Home, 
  Share2,
  Star,
  TrendingUp,
  Award
} from "lucide-react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function Results() {
  const insets = useSafeAreaInsets();
  const { id, score, total } = useLocalSearchParams();
  
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const scoreNum = parseInt(score) || 0;
  const totalNum = parseInt(total) || 5;
  const percentage = Math.round((scoreNum / totalNum) * 100);
  
  // Determine performance level
  let performanceLevel, performanceColor, performanceEmoji, performanceMessage;
  if (percentage >= 90) {
    performanceLevel = "Excellent!";
    performanceColor = "#4CAF50";
    performanceEmoji = "🏆";
    performanceMessage = "Outstanding work! You're a quiz master!";
  } else if (percentage >= 70) {
    performanceLevel = "Great Job!";
    performanceColor = "#00887E";
    performanceEmoji = "🎉";
    performanceMessage = "Well done! You're doing really well!";
  } else if (percentage >= 50) {
    performanceLevel = "Good Effort!";
    performanceColor = "#FF9800";
    performanceEmoji = "👍";
    performanceMessage = "Nice try! Keep practicing to improve!";
  } else {
    performanceLevel = "Keep Learning!";
    performanceColor = "#F44336";
    performanceEmoji = "💪";
    performanceMessage = "Don't give up! Practice makes perfect!";
  }

  const achievements = [
    {
      title: "First Quiz",
      description: "Complete your first quiz",
      earned: true,
      icon: Trophy,
    },
    {
      title: "Quick Learner",
      description: "Score 70% or higher",
      earned: percentage >= 70,
      icon: TrendingUp,
    },
    {
      title: "Perfect Score",
      description: "Get 100% on any quiz",
      earned: percentage === 100,
      icon: Star,
    },
  ];

  const stats = [
    {
      label: "Correct Answers",
      value: `${scoreNum}/${totalNum}`,
      icon: Target,
      color: "#4CAF50",
    },
    {
      label: "Accuracy",
      value: `${percentage}%`,
      icon: TrendingUp,
      color: "#00887E",
    },
    {
      label: "Questions",
      value: totalNum.toString(),
      icon: Award,
      color: "#FF9800",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F9FA" }}>
      <StatusBar style="dark" />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View
          style={{
            backgroundColor: performanceColor,
            paddingTop: insets.top + 20,
            paddingBottom: 40,
            paddingHorizontal: 16,
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
          }}
        >
          {/* Confetti */}
          <View
            style={{
              position: "absolute",
              top: insets.top + 10,
              left: 0,
              right: 0,
              flexDirection: "row",
              justifyContent: "space-around",
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ fontSize: 20, opacity: 0.3 }}>🎉</Text>
            <Text style={{ fontSize: 16, opacity: 0.4 }}>⭐</Text>
            <Text style={{ fontSize: 18, opacity: 0.3 }}>✨</Text>
            <Text style={{ fontSize: 14, opacity: 0.4 }}>🎊</Text>
            <Text style={{ fontSize: 20, opacity: 0.3 }}>🏆</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 60, marginBottom: 16 }}>
              {performanceEmoji}
            </Text>
            
            <Text
              style={{
                fontFamily: "Inter_700Bold",
                fontSize: 28,
                color: "#FFFFFF",
                marginBottom: 8,
                textAlign: "center",
              }}
            >
              {performanceLevel}
            </Text>
            
            <Text
              style={{
                fontFamily: "Inter_400Regular",
                fontSize: 16,
                color: "#FFFFFF",
                textAlign: "center",
                opacity: 0.9,
                marginBottom: 20,
              }}
            >
              {performanceMessage}
            </Text>

            {/* Score Circle */}
            <View
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderWidth: 4,
                borderColor: "#FFFFFF",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Inter_700Bold",
                  fontSize: 32,
                  color: "#FFFFFF",
                }}
              >
                {percentage}%
              </Text>
              <Text
                style={{
                  fontFamily: "Inter_500Medium",
                  fontSize: 14,
                  color: "#FFFFFF",
                  opacity: 0.9,
                }}
              >
                Score
              </Text>
            </View>
          </View>
        </View>

        {/* Stats Section */}
        <View style={{ paddingHorizontal: 16, marginTop: 24 }}>
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 20,
              color: "#242424",
              marginBottom: 16,
            }}
          >
            Quiz Statistics
          </Text>

          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              padding: 20,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <View
                  key={stat.label}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 12,
                    borderBottomWidth: index < stats.length - 1 ? 1 : 0,
                    borderBottomColor: "#F0F0F0",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: `${stat.color}20`,
                      borderRadius: 12,
                      padding: 12,
                      marginRight: 16,
                    }}
                  >
                    <IconComponent size={24} color={stat.color} />
                  </View>
                  
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontFamily: "Inter_500Medium",
                        fontSize: 16,
                        color: "#242424",
                      }}
                    >
                      {stat.label}
                    </Text>
                  </View>
                  
                  <Text
                    style={{
                      fontFamily: "Inter_600SemiBold",
                      fontSize: 18,
                      color: stat.color,
                    }}
                  >
                    {stat.value}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* Achievements Section */}
        <View style={{ paddingHorizontal: 16, marginTop: 24 }}>
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 20,
              color: "#242424",
              marginBottom: 16,
            }}
          >
            Achievements
          </Text>

          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              padding: 20,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <View
                  key={achievement.title}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 12,
                    borderBottomWidth: index < achievements.length - 1 ? 1 : 0,
                    borderBottomColor: "#F0F0F0",
                    opacity: achievement.earned ? 1 : 0.5,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: achievement.earned ? "#4CAF5020" : "#F5F5F5",
                      borderRadius: 12,
                      padding: 12,
                      marginRight: 16,
                    }}
                  >
                    <IconComponent 
                      size={24} 
                      color={achievement.earned ? "#4CAF50" : "#9E9E9E"} 
                    />
                  </View>
                  
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontFamily: "Inter_600SemiBold",
                        fontSize: 16,
                        color: achievement.earned ? "#242424" : "#9E9E9E",
                        marginBottom: 2,
                      }}
                    >
                      {achievement.title}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Inter_400Regular",
                        fontSize: 14,
                        color: achievement.earned ? "#6F6F6F" : "#BDBDBD",
                      }}
                    >
                      {achievement.description}
                    </Text>
                  </View>
                  
                  {achievement.earned && (
                    <Text style={{ fontSize: 20 }}>✅</Text>
                  )}
                </View>
              );
            })}
          </View>
        </View>

        {/* Action Buttons */}
        <View style={{ paddingHorizontal: 16, marginTop: 32 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#00887E",
              borderRadius: 16,
              paddingVertical: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
            }}
            onPress={() => router.push(`/(tabs)/quiz/${id}`)}
            activeOpacity={0.8}
          >
            <RotateCcw size={20} color="#FFFFFF" style={{ marginRight: 8 }} />
            <Text
              style={{
                fontFamily: "Inter_600SemiBold",
                fontSize: 16,
                color: "#FFFFFF",
              }}
            >
              Try Again
            </Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", gap: 12 }}>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderWidth: 2,
                borderColor: "#00887E",
                borderRadius: 16,
                paddingVertical: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                // Share functionality would go here
                console.log("Share results");
              }}
              activeOpacity={0.8}
            >
              <Share2 size={20} color="#00887E" style={{ marginRight: 8 }} />
              <Text
                style={{
                  fontFamily: "Inter_600SemiBold",
                  fontSize: 16,
                  color: "#00887E",
                }}
              >
                Share
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderWidth: 2,
                borderColor: "#00887E",
                borderRadius: 16,
                paddingVertical: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => router.push("/(tabs)/home")}
              activeOpacity={0.8}
            >
              <Home size={20} color="#00887E" style={{ marginRight: 8 }} />
              <Text
                style={{
                  fontFamily: "Inter_600SemiBold",
                  fontSize: 16,
                  color: "#00887E",
                }}
              >
                Home
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}