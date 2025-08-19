import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import {
  Heart,
  Calculator,
  Brain,
  Target,
  Zap,
  Trophy,
  Clock,
  Users,
} from "lucide-react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

export default function Home() {
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const weekDays = [
    { day: "Mon", status: "completed" },
    { day: "Tue", status: "completed" },
    { day: "Wed", status: "active" },
    { day: "Thu", status: "upcoming" },
    { day: "Fri", status: "upcoming" },
    { day: "Sat", status: "upcoming" },
    { day: "Sun", status: "upcoming" },
  ];

  const featuredQuizzes = [
    {
      id: "1",
      title: "Math Basics",
      description: "Test your fundamental math skills",
      questions: 10,
      time: "5 min",
      difficulty: "Beginner",
      participants: 1250,
      icon: Calculator,
      color: "#4CAF50",
    },
    {
      id: "2", 
      title: "Logic Puzzles",
      description: "Challenge your logical thinking",
      questions: 15,
      time: "8 min",
      difficulty: "Intermediate",
      participants: 890,
      icon: Brain,
      color: "#FF9800",
    },
    {
      id: "3",
      title: "Quick Fire",
      description: "Fast-paced general knowledge",
      questions: 20,
      time: "3 min",
      difficulty: "Expert",
      participants: 2100,
      icon: Zap,
      color: "#F44336",
    },
  ];

  const dailyChallenges = [
    {
      id: "daily-1",
      title: "Daily Math",
      progress: { current: 3, total: 5 },
      icon: Target,
      difficulty: "Beginner",
    },
    {
      id: "daily-2",
      title: "Speed Round",
      progress: { current: 7, total: 10 },
      icon: Zap,
      difficulty: "Intermediate",
    },
  ];

  const renderDayCircle = (dayData) => {
    const { day, status } = dayData;

    let circleStyle, iconColor, textColor;

    if (status === "completed") {
      circleStyle = { backgroundColor: "#00887E", borderColor: "#00887E" };
      iconColor = "#FFFFFF";
      textColor = "#242424";
    } else if (status === "active") {
      circleStyle = {
        backgroundColor: "#FFFFFF",
        borderColor: "#00887E",
        borderWidth: 2,
      };
      iconColor = "#00887E";
      textColor = "#242424";
    } else {
      circleStyle = {
        backgroundColor: "#FFFFFF",
        borderColor: "#EAEAEA",
        borderWidth: 1,
      };
      iconColor = "#BDBDBD";
      textColor = "#6F6F6F";
    }

    return (
      <View key={day} style={{ alignItems: "center", marginHorizontal: 6 }}>
        <View
          style={[
            {
              width: 56,
              height: 56,
              borderRadius: 28,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            },
            circleStyle,
          ]}
        >
          <Heart size={24} color={iconColor} fill={status === "completed" ? iconColor : "none"} />
        </View>
        <Text
          style={{
            fontFamily: "Inter_500Medium",
            fontSize: 14,
            color: textColor,
          }}
        >
          {day}
        </Text>
      </View>
    );
  };

  const renderFeaturedQuiz = (quiz) => {
    const IconComponent = quiz.icon;
    
    return (
      <TouchableOpacity
        key={quiz.id}
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 16,
          borderWidth: 1,
          borderColor: "#EAEAEA",
          padding: 20,
          marginRight: 16,
          width: 280,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        }}
        activeOpacity={0.97}
        onPress={() => router.push(`/(tabs)/quiz/${quiz.id}`)}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <View
            style={{
              backgroundColor: `${quiz.color}20`,
              borderRadius: 12,
              padding: 12,
            }}
          >
            <IconComponent size={24} color={quiz.color} />
          </View>
          
          <View
            style={{
              backgroundColor: quiz.difficulty === "Beginner" ? "#DDF9FA" : quiz.difficulty === "Intermediate" ? "#FFEEDB" : "#FFE6E6",
              borderRadius: 12,
              paddingHorizontal: 8,
              paddingVertical: 4,
            }}
          >
            <Text
              style={{
                fontFamily: "Inter_600SemiBold",
                fontSize: 12,
                color: quiz.difficulty === "Beginner" ? "#00887E" : quiz.difficulty === "Intermediate" ? "#F7A43A" : "#F44336",
              }}
            >
              {quiz.difficulty}
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontFamily: "Inter_600SemiBold",
            fontSize: 18,
            color: "#242424",
            marginBottom: 4,
          }}
        >
          {quiz.title}
        </Text>

        <Text
          style={{
            fontFamily: "Inter_400Regular",
            fontSize: 14,
            color: "#6F6F6F",
            marginBottom: 16,
            lineHeight: 20,
          }}
        >
          {quiz.description}
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontFamily: "Inter_500Medium", fontSize: 14, color: "#6F6F6F", marginRight: 12 }}>
              {quiz.questions} questions
            </Text>
            <Clock size={14} color="#6F6F6F" style={{ marginRight: 4 }} />
            <Text style={{ fontFamily: "Inter_500Medium", fontSize: 14, color: "#6F6F6F" }}>
              {quiz.time}
            </Text>
          </View>
          
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Users size={14} color="#6F6F6F" style={{ marginRight: 4 }} />
            <Text style={{ fontFamily: "Inter_500Medium", fontSize: 14, color: "#6F6F6F" }}>
              {quiz.participants}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderChallengeCard = (challenge) => {
    const isIntermediate = challenge.difficulty === "Intermediate";
    const IconComponent = challenge.icon;

    return (
      <TouchableOpacity
        key={challenge.id}
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#EAEAEA",
          padding: 16,
          flex: 1,
          marginHorizontal: 6,
        }}
        activeOpacity={0.97}
        onPress={() => router.push(`/(tabs)/quiz/${challenge.id}`)}
      >
        <View
          style={{
            backgroundColor: isIntermediate ? "#FFEEDB" : "#DDF9FA",
            borderRadius: 32,
            paddingHorizontal: 12,
            paddingVertical: 4,
            alignSelf: "flex-start",
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 12,
              color: isIntermediate ? "#F7A43A" : "#00887E",
            }}
          >
            {challenge.difficulty}
          </Text>
        </View>

        <Text
          style={{
            fontFamily: "Inter_600SemiBold",
            fontSize: 16,
            color: "#242424",
            marginBottom: 16,
          }}
        >
          {challenge.title}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: "Inter_500Medium",
                fontSize: 14,
                marginBottom: 8,
              }}
            >
              <Text style={{ color: "#00887E" }}>
                {challenge.progress.current}
              </Text>
              <Text style={{ color: "#6F6F6F" }}>
                /{challenge.progress.total}
              </Text>
            </Text>
            <View
              style={{
                backgroundColor: "#DDF9FA",
                height: 4,
                borderRadius: 8,
                marginRight: 12,
              }}
            >
              <View
                style={{
                  backgroundColor: "#00887E",
                  height: 4,
                  borderRadius: 8,
                  width: `${
                    (challenge.progress.current / challenge.progress.total) *
                    100
                  }%`,
                }}
              />
            </View>
          </View>

          <IconComponent size={32} color="#00887E" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F9FA" }}>
      <StatusBar style="dark" />

      {/* Fixed Header */}
      <View
        style={{
          backgroundColor: "#FFFFFF",
          paddingTop: insets.top,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        }}
      >
        {/* Greeting Bar */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingTop: 16,
            paddingBottom: 24,
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "Inter_600SemiBold",
                fontSize: 24,
                color: "#242424",
                marginBottom: 4,
              }}
            >
              Hello Alex! 👋
            </Text>
            <Text
              style={{
                fontFamily: "Inter_400Regular",
                fontSize: 14,
                color: "#6F6F6F",
              }}
            >
              Ready for today's challenge?
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#00887E",
              borderRadius: 32,
              paddingHorizontal: 16,
              paddingVertical: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Trophy size={20} color="#FFFFFF" style={{ marginRight: 8 }} />
            <Text
              style={{
                fontFamily: "Inter_600SemiBold",
                fontSize: 14,
                color: "#FFFFFF",
              }}
            >
              1,250
            </Text>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView 
        style={{ flex: 1 }} 
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Daily Streak Row */}
        <View style={{ backgroundColor: "#FFFFFF", paddingVertical: 20, marginBottom: 16 }}>
          <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
            <Text
              style={{
                fontFamily: "Inter_600SemiBold",
                fontSize: 18,
                color: "#242424",
              }}
            >
              Daily Streak
            </Text>
          </View>
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexGrow: 0 }}
            contentContainerStyle={{
              paddingHorizontal: 16,
            }}
          >
            {weekDays.map(renderDayCircle)}
          </ScrollView>
        </View>

        {/* Featured Quizzes */}
        <View style={{ marginBottom: 24 }}>
          <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
            <Text
              style={{
                fontFamily: "Inter_600SemiBold",
                fontSize: 18,
                color: "#242424",
              }}
            >
              Featured Quizzes
            </Text>
          </View>
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexGrow: 0 }}
            contentContainerStyle={{
              paddingHorizontal: 16,
            }}
          >
            {featuredQuizzes.map(renderFeaturedQuiz)}
          </ScrollView>
        </View>

        {/* Daily Challenges */}
        <View style={{ backgroundColor: "#FFFFFF", paddingVertical: 20 }}>
          <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
            <Text
              style={{
                fontFamily: "Inter_600SemiBold",
                fontSize: 18,
                color: "#242424",
              }}
            >
              Daily Challenges
            </Text>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              flexDirection: "row",
            }}
          >
            {dailyChallenges.map(renderChallengeCard)}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}