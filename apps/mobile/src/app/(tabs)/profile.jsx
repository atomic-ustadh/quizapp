import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import {
  User,
  Settings,
  Trophy,
  Target,
  Calendar,
  Bell,
  HelpCircle,
  LogOut,
  Edit3,
  Star,
  Award,
  TrendingUp,
} from "lucide-react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

export default function Profile() {
  const insets = useSafeAreaInsets();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const userStats = [
    {
      label: "Total Score",
      value: "1,250",
      icon: Trophy,
      color: "#4CAF50",
    },
    {
      label: "Quizzes Completed",
      value: "24",
      icon: Target,
      color: "#00887E",
    },
    {
      label: "Current Streak",
      value: "7 days",
      icon: Calendar,
      color: "#FF9800",
    },
    {
      label: "Achievements",
      value: "12",
      icon: Award,
      color: "#9C27B0",
    },
  ];

  const menuItems = [
    {
      title: "Edit Profile",
      subtitle: "Update your personal information",
      icon: Edit3,
      color: "#00887E",
      onPress: () => console.log("Edit Profile"),
    },
    {
      title: "Notifications",
      subtitle: "Manage your notification preferences",
      icon: Bell,
      color: "#FF9800",
      onPress: () => console.log("Notifications"),
    },
    {
      title: "Settings",
      subtitle: "App preferences and privacy",
      icon: Settings,
      color: "#2196F3",
      onPress: () => console.log("Settings"),
    },
    {
      title: "Help & Support",
      subtitle: "Get help and contact support",
      icon: HelpCircle,
      color: "#9C27B0",
      onPress: () => console.log("Help & Support"),
    },
  ];

  const recentAchievements = [
    {
      title: "Streak Master",
      description: "Maintain a 7-day streak",
      icon: Calendar,
      color: "#4CAF50",
      date: "Today",
    },
    {
      title: "Quick Learner",
      description: "Score 70% or higher on 5 quizzes",
      icon: TrendingUp,
      color: "#00887E",
      date: "2 days ago",
    },
    {
      title: "First Steps",
      description: "Complete your first quiz",
      icon: Star,
      color: "#FF9800",
      date: "3 days ago",
    },
  ];

  const renderStatCard = (stat) => {
    const IconComponent = stat.icon;
    
    return (
      <View
        key={stat.label}
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 16,
          padding: 16,
          flex: 1,
          marginHorizontal: 6,
          alignItems: "center",
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
            marginBottom: 8,
          }}
        >
          <IconComponent size={24} color={stat.color} />
        </View>
        
        <Text
          style={{
            fontFamily: "Inter_600SemiBold",
            fontSize: 20,
            color: "#242424",
            marginBottom: 4,
          }}
        >
          {stat.value}
        </Text>
        
        <Text
          style={{
            fontFamily: "Inter_400Regular",
            fontSize: 12,
            color: "#6F6F6F",
            textAlign: "center",
          }}
        >
          {stat.label}
        </Text>
      </View>
    );
  };

  const renderMenuItem = (item) => {
    const IconComponent = item.icon;
    
    return (
      <TouchableOpacity
        key={item.title}
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 16,
          padding: 16,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        }}
        onPress={item.onPress}
        activeOpacity={0.97}
      >
        <View
          style={{
            backgroundColor: `${item.color}20`,
            borderRadius: 12,
            padding: 12,
            marginRight: 16,
          }}
        >
          <IconComponent size={24} color={item.color} />
        </View>
        
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 16,
              color: "#242424",
              marginBottom: 2,
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 14,
              color: "#6F6F6F",
            }}
          >
            {item.subtitle}
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
        }}
      >
        <View
          style={{
            backgroundColor: `${achievement.color}20`,
            borderRadius: 12,
            padding: 12,
            marginRight: 16,
          }}
        >
          <IconComponent size={24} color={achievement.color} />
        </View>
        
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 16,
              color: "#242424",
              marginBottom: 2,
            }}
          >
            {achievement.title}
          </Text>
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 14,
              color: "#6F6F6F",
            }}
          >
            {achievement.description}
          </Text>
        </View>
        
        <Text
          style={{
            fontFamily: "Inter_400Regular",
            fontSize: 12,
            color: "#9E9E9E",
          }}
        >
          {achievement.date}
        </Text>
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
            Profile
          </Text>
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 14,
              color: "#6F6F6F",
            }}
          >
            Manage your account and preferences
          </Text>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            marginHorizontal: 16,
            marginTop: 20,
            borderRadius: 16,
            padding: 20,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          {/* Avatar */}
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: "#00887E",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontFamily: "Inter_600SemiBold",
                fontSize: 32,
                color: "#FFFFFF",
              }}
            >
              A
            </Text>
          </View>
          
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 24,
              color: "#242424",
              marginBottom: 4,
            }}
          >
            Alex Johnson
          </Text>
          
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 16,
              color: "#6F6F6F",
              marginBottom: 16,
            }}
          >
            alex.johnson@email.com
          </Text>
          
          <View
            style={{
              backgroundColor: "#E6F8F6",
              borderRadius: 20,
              paddingHorizontal: 16,
              paddingVertical: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Trophy size={16} color="#00887E" style={{ marginRight: 6 }} />
            <Text
              style={{
                fontFamily: "Inter_600SemiBold",
                fontSize: 14,
                color: "#00887E",
              }}
            >
              Quiz Master
            </Text>
          </View>
        </View>

        {/* Stats Grid */}
        <View style={{ paddingHorizontal: 10, marginTop: 24 }}>
          <View style={{ flexDirection: "row", marginBottom: 12 }}>
            {userStats.slice(0, 2).map(renderStatCard)}
          </View>
          <View style={{ flexDirection: "row" }}>
            {userStats.slice(2, 4).map(renderStatCard)}
          </View>
        </View>

        {/* Recent Achievements */}
        <View style={{ paddingHorizontal: 16, marginTop: 24 }}>
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 18,
              color: "#242424",
              marginBottom: 16,
            }}
          >
            Recent Achievements
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
            {recentAchievements.map((achievement, index) => (
              <View key={achievement.title}>
                {renderAchievement(achievement)}
                {index < recentAchievements.length - 1 && (
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

        {/* Menu Items */}
        <View style={{ paddingHorizontal: 16, marginTop: 24 }}>
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 18,
              color: "#242424",
              marginBottom: 16,
            }}
          >
            Account
          </Text>
          
          {menuItems.map(renderMenuItem)}
        </View>

        {/* Logout Button */}
        <View style={{ paddingHorizontal: 16, marginTop: 24 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              borderWidth: 2,
              borderColor: "#F44336",
              borderRadius: 16,
              padding: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => console.log("Logout")}
            activeOpacity={0.8}
          >
            <LogOut size={20} color="#F44336" style={{ marginRight: 8 }} />
            <Text
              style={{
                fontFamily: "Inter_600SemiBold",
                fontSize: 16,
                color: "#F44336",
              }}
            >
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}