import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import {
  Search,
  Calculator,
  Brain,
  Globe,
  Atom,
  Palette,
  Music,
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

export default function Categories() {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const filters = ["All", "Beginner", "Intermediate", "Expert"];

  const categories = [
    {
      id: "math",
      title: "Mathematics",
      description: "Numbers, algebra, geometry and more",
      quizCount: 45,
      participants: 12500,
      difficulty: "Beginner",
      icon: Calculator,
      color: "#4CAF50",
      gradient: ["#4CAF50", "#66BB6A"],
    },
    {
      id: "science",
      title: "Science",
      description: "Physics, chemistry, biology basics",
      quizCount: 32,
      participants: 8900,
      difficulty: "Intermediate",
      icon: Atom,
      color: "#2196F3",
      gradient: ["#2196F3", "#42A5F5"],
    },
    {
      id: "geography",
      title: "Geography",
      description: "Countries, capitals, landmarks",
      quizCount: 28,
      participants: 6700,
      difficulty: "Beginner",
      icon: Globe,
      color: "#FF9800",
      gradient: ["#FF9800", "#FFB74D"],
    },
    {
      id: "logic",
      title: "Logic Puzzles",
      description: "Brain teasers and critical thinking",
      quizCount: 38,
      participants: 9200,
      difficulty: "Expert",
      icon: Brain,
      color: "#9C27B0",
      gradient: ["#9C27B0", "#BA68C8"],
    },
    {
      id: "art",
      title: "Art & Culture",
      description: "Famous artists, movements, history",
      quizCount: 22,
      participants: 4300,
      difficulty: "Intermediate",
      icon: Palette,
      color: "#E91E63",
      gradient: ["#E91E63", "#F06292"],
    },
    {
      id: "music",
      title: "Music",
      description: "Instruments, composers, genres",
      quizCount: 19,
      participants: 3800,
      difficulty: "Beginner",
      icon: Music,
      color: "#FF5722",
      gradient: ["#FF5722", "#FF7043"],
    },
  ];

  const filteredCategories = categories.filter((category) => {
    const matchesSearch = category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "All" || category.difficulty === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const renderCategoryCard = (category) => {
    const IconComponent = category.icon;
    
    return (
      <TouchableOpacity
        key={category.id}
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 16,
          borderWidth: 1,
          borderColor: "#EAEAEA",
          padding: 20,
          marginBottom: 16,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        }}
        activeOpacity={0.97}
        onPress={() => router.push(`/(tabs)/quiz/${category.id}`)}
      >
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          {/* Icon Container */}
          <View
            style={{
              backgroundColor: `${category.color}20`,
              borderRadius: 16,
              padding: 16,
              marginRight: 16,
            }}
          >
            <IconComponent size={32} color={category.color} />
          </View>

          {/* Content */}
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <Text
                style={{
                  fontFamily: "Inter_600SemiBold",
                  fontSize: 18,
                  color: "#242424",
                  flex: 1,
                }}
              >
                {category.title}
              </Text>
              
              <View
                style={{
                  backgroundColor: category.difficulty === "Beginner" ? "#DDF9FA" : 
                                 category.difficulty === "Intermediate" ? "#FFEEDB" : "#FFE6E6",
                  borderRadius: 12,
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  marginLeft: 8,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Inter_600SemiBold",
                    fontSize: 12,
                    color: category.difficulty === "Beginner" ? "#00887E" : 
                           category.difficulty === "Intermediate" ? "#F7A43A" : "#F44336",
                  }}
                >
                  {category.difficulty}
                </Text>
              </View>
            </View>

            <Text
              style={{
                fontFamily: "Inter_400Regular",
                fontSize: 14,
                color: "#6F6F6F",
                lineHeight: 20,
                marginBottom: 16,
              }}
            >
              {category.description}
            </Text>

            {/* Stats Row */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Trophy size={16} color="#6F6F6F" style={{ marginRight: 6 }} />
                <Text style={{ fontFamily: "Inter_500Medium", fontSize: 14, color: "#6F6F6F" }}>
                  {category.quizCount} quizzes
                </Text>
              </View>
              
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Users size={16} color="#6F6F6F" style={{ marginRight: 6 }} />
                <Text style={{ fontFamily: "Inter_500Medium", fontSize: 14, color: "#6F6F6F" }}>
                  {category.participants.toLocaleString()}
                </Text>
              </View>
            </View>
          </View>
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
        {/* Title */}
        <View style={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 20 }}>
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 24,
              color: "#242424",
              marginBottom: 4,
            }}
          >
            Categories
          </Text>
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 14,
              color: "#6F6F6F",
            }}
          >
            Explore quizzes by topic
          </Text>
        </View>

        {/* Search Bar */}
        <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
          <View
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: 12,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 16,
              paddingVertical: 12,
            }}
          >
            <Search size={20} color="#6F6F6F" style={{ marginRight: 12 }} />
            <TextInput
              style={{
                flex: 1,
                fontFamily: "Inter_400Regular",
                fontSize: 16,
                color: "#242424",
              }}
              placeholder="Search categories..."
              placeholderTextColor="#6F6F6F"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Filter Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0 }}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}
        >
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={{
                backgroundColor: selectedFilter === filter ? "#00887E" : "#F5F5F5",
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 8,
                marginRight: 12,
              }}
              onPress={() => setSelectedFilter(filter)}
              activeOpacity={0.8}
            >
              <Text
                style={{
                  fontFamily: "Inter_600SemiBold",
                  fontSize: 14,
                  color: selectedFilter === filter ? "#FFFFFF" : "#6F6F6F",
                }}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Categories List */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ 
          padding: 16,
          paddingBottom: insets.bottom + 20 
        }}
        showsVerticalScrollIndicator={false}
      >
        {filteredCategories.length > 0 ? (
          filteredCategories.map(renderCategoryCard)
        ) : (
          <View style={{ 
            flex: 1, 
            justifyContent: "center", 
            alignItems: "center", 
            paddingVertical: 60 
          }}>
            <Text
              style={{
                fontFamily: "Inter_600SemiBold",
                fontSize: 18,
                color: "#6F6F6F",
                textAlign: "center",
              }}
            >
              No categories found
            </Text>
            <Text
              style={{
                fontFamily: "Inter_400Regular",
                fontSize: 14,
                color: "#9E9E9E",
                textAlign: "center",
                marginTop: 8,
              }}
            >
              Try adjusting your search or filters
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}