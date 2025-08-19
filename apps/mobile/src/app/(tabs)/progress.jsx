import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import {
  TrendingUp,
  Target,
  Trophy,
  Calendar,
  Clock,
  Star,
  Award,
  BarChart3,
} from "lucide-react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

export default function Progress() {
  const insets = useSafeAreaInsets();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const overallStats = [
    {
      label: "Total Score",
      value: "1,250",
      icon: Trophy,
      color: "#4CAF50",
      change: "+125",
    },
    {
      label: "Quizzes Completed",
      value: "24",
      icon: Target,
      color: "#00887E",
      change: "+3",
    },
    {
      label: "Average Accuracy",
      value: "78%",
      icon: TrendingUp,
      color: "#FF9800",
      change: "+5%",
    },
    {
      label: "Current Streak",
      value: "7 days",
      icon: Calendar,
      color: "#9C27B0",
      change: "+1",
    },
  ];

  const recentQuizzes = [
    {
      id: "1",
      title: "Math Basics",
      score: 85,
      totalQuestions: 10,
      date: "Today",
      category: "Mathematics",
      difficulty: "Beginner",
    },
    {
      id: "2",
      title: "Science Quiz",
      score: 70,
      totalQuestions: 15,
      date: "Yesterday",
      category: "Science",
      difficulty: "Intermediate",
    },
    {
      id: "3",
      title: "Geography",
      score: 90,
      totalQuestions: 12,
      date: "2 days ago",
      category: "Geography",
      difficulty: "Beginner",
    },
    {
      id: "4",
      title: "Logic Puzzles",
      score: 60,
      totalQuestions: 20,
      date: "3 days ago",
      category: "Logic",
      difficulty: "Expert",
    },
  ];

  const achievements = [
    {
      title: "First Steps",
      description: "Complete your first quiz",
      earned: true,
      icon: Star,
      date: "Aug 15, 2025",
    },
    {
      title: "Quick Learner",
      description: "Score 70% or higher on 5 quizzes",
      earned: true,
      icon: TrendingUp,
      date: "Aug 16, 2025",
    },
    {
      title: "Perfect Score",
      description: "Get 100% on any quiz",
      earned: false,
      icon: Trophy,
      date: null,
    },
    {
      title: "Streak Master",
      description: "Maintain a 7-day streak",
      earned: true,
      icon: Calendar,
      date: "Aug 18, 2025",
    },
  ];

  const weeklyProgress = [
    { day: "Mon", score: 75 },
    { day: "Tue", score: 82 },
    { day: "Wed", score: 68 },
    { day: "Thu", score: 90 },
    { day: "Fri", score: 85 },
    { day: "Sat", score: 78 },
    { day: "Sun", score: 88 },
  ];

  const renderStatCard = (stat) => {
    const IconComponent = stat.icon;
    
    return (
      <View
        key={stat.label}
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 16,
          padding: 20,
          flex: 1,
          marginHorizontal: 6,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        }}
      >
        <View
          style={{
            backgroundColor: `${stat.color}20`,
            borderRadius: 12,
            padding: 12,
            alignSelf: "flex-start",
            marginBottom: 12,
          }}
        >
          <IconComponent size={24} color={stat.color} />
        </View>
        
        <Text
          style={{
            fontFamily: "Inter_600SemiBold",
            fontSize: 24,
            color: "#242424",
            marginBottom: 4,
          }}
        >
          {stat.value}
        </Text>
        
        <Text
          style={{
            fontFamily: "Inter_400Regular",
            fontSize: 14,
            color: "#6F6F6F",
            marginBottom: 8,
          }}
        >
          {stat.label}
        </Text>
        
        <Text
          style={{
            fontFamily: "Inter_500Medium",
            fontSize: 12,
            color: "#4CAF50",
          }}
        >
          {stat.change} this week
        </Text>
      </View>
    );
  };

  const renderQuizCard = (quiz) => {
    const percentage = Math.round((quiz.score / quiz.totalQuestions) * 100);
    
    return (
      <TouchableOpacity
        key={quiz.id}
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 16,
          padding: 16,
          marginBottom: 12,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        }}
        activeOpacity={0.97}
        onPress={() => router.push(`/(tabs)/results/${quiz.id}?score=${quiz.score}&total=${quiz.totalQuestions}`)}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: "Inter_600SemiBold",
                fontSize: 16,
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
              }}
            >
              {quiz.category} • {quiz.date}
            </Text>
          </View>
          
          <View
            style={{
              backgroundColor: quiz.difficulty === "Beginner" ? "#DDF9FA" : 
                             quiz.difficulty === "Intermediate" ? "#FFEEDB" : "#FFE6E6",
              borderRadius: 12,
              paddingHorizontal: 8,
              paddingVertical: 4,
            }}
          >
            <Text
              style={{
                fontFamily: "Inter_600SemiBold",
                fontSize: 12,
                color: quiz.difficulty === "Beginner" ? "#00887E" : 
                       quiz.difficulty === "Intermediate" ? "#F7A43A" : "#F44336",
              }}
            >
              {quiz.difficulty}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "Inter_500Medium",
              fontSize: 14,
              color: "#6F6F6F",
            }}
          >
            {quiz.score}/{quiz.totalQuestions} correct
          </Text>
          
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 16,
              color: percentage >= 70 ? "#4CAF50" : percentage >= 50 ? "#FF9800" : "#F44336",
            }}
          >
            {percentage}%
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderAchievement = (achievement) => {
    const IconComponent = achievement.icon;
    
    return (
      <View
        key={achievement.title}
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 12,
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
          {achievement.earned && achievement.date && (
            <Text
              style={{
                fontFamily: "Inter_400Regular",
                fontSize: 12,
                color: "#9E9E9E",
                marginTop: 2,
              }}
            >
              Earned on {achievement.date}
            </Text>
          )}
        </View>
        
        {achievement.earned && (
          <Text style={{ fontSize: 20 }}>✅</Text>
        )}
      </View>
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
        <View style={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 24 }}>
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 24,
              color: "#242424",
              marginBottom: 4,
            }}
          >
            Your Progress
          </Text>
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 14,
              color: "#6F6F6F",
            }}
          >
            Track your learning journey
          </Text>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Stats Grid */}
        <View style={{ paddingHorizontal: 10, paddingTop: 20 }}>
          <View style={{ flexDirection: "row", marginBottom: 12 }}>
            {overallStats.slice(0, 2).map(renderStatCard)}
          </View>
          <View style={{ flexDirection: "row" }}>
            {overallStats.slice(2, 4).map(renderStatCard)}
          </View>
        </View>

        {/* Weekly Progress Chart */}
        <View style={{ paddingHorizontal: 16, marginTop: 24 }}>
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 18,
              color: "#242424",
              marginBottom: 16,
            }}
          >
            This Week's Performance
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
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "end", height: 120 }}>
              {weeklyProgress.map((day, index) => (
                <View key={day.day} style={{ alignItems: "center", flex: 1 }}>
                  <View
                    style={{
                      backgroundColor: "#00887E",
                      width: 20,
                      height: day.score,
                      borderRadius: 10,
                      marginBottom: 8,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: "Inter_500Medium",
                      fontSize: 12,
                      color: "#6F6F6F",
                    }}
                  >
                    {day.day}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Recent Quizzes */}
        <View style={{ paddingHorizontal: 16, marginTop: 24 }}>
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 18,
              color: "#242424",
              marginBottom: 16,
            }}
          >
            Recent Quizzes
          </Text>
          
          {recentQuizzes.map(renderQuizCard)}
        </View>

        {/* Achievements */}
        <View style={{ paddingHorizontal: 16, marginTop: 24 }}>
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 18,
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
            {achievements.map((achievement, index) => (
              <View key={achievement.title}>
                {renderAchievement(achievement)}
                {index < achievements.length - 1 && (
                  <View
                    style={{
                      height: 1,
                      backgroundColor: "#F0F0F0",
                      marginVertical: 8,
                    }}
                  />
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}