import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Modal,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { ArrowLeft, Lightbulb, X, ChevronLeft } from "lucide-react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
  useFonts as useInstrumentFonts,
  InstrumentSans_400Regular,
  InstrumentSans_600SemiBold,
  InstrumentSans_700Bold,
} from "@expo-google-fonts/instrument-sans";
import {
  useFonts as useInstrumentSerifFonts,
  InstrumentSerif_400Regular,
} from "@expo-google-fonts/instrument-serif";

export default function Quiz() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showCorrectToast, setShowCorrectToast] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [headerBorderOpacity] = useState(new Animated.Value(0));
  const totalQuestions = 5;

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const [instrumentFontsLoaded] = useInstrumentFonts({
    InstrumentSans_400Regular,
    InstrumentSans_600SemiBold,
    InstrumentSans_700Bold,
  });

  const [instrumentSerifFontsLoaded] = useInstrumentSerifFonts({
    InstrumentSerif_400Regular,
  });

  if (!fontsLoaded || !instrumentFontsLoaded || !instrumentSerifFontsLoaded) {
    return null;
  }

  // Sample questions data - in a real app this would come from an API
  const questions = [
    {
      id: 1,
      question: "What is 15 + 27?",
      answers: [
        { id: "A", text: "A. 40", isCorrect: false },
        { id: "B", text: "B. 42", isCorrect: true },
        { id: "C", text: "C. 44", isCorrect: false },
        { id: "D", text: "D. 46", isCorrect: false },
      ],
      explanation: "To solve 15 + 27, we add the ones place: 5 + 7 = 12 (write 2, carry 1). Then add the tens place: 1 + 2 + 1 = 4. So the answer is 42.",
    },
    {
      id: 2,
      question: "Which planet is closest to the Sun?",
      answers: [
        { id: "A", text: "A. Venus", isCorrect: false },
        { id: "B", text: "B. Mercury", isCorrect: true },
        { id: "C", text: "C. Earth", isCorrect: false },
        { id: "D", text: "D. Mars", isCorrect: false },
      ],
      explanation: "Mercury is the closest planet to the Sun in our solar system, with an average distance of about 36 million miles.",
    },
    {
      id: 3,
      question: "What is the capital of France?",
      answers: [
        { id: "A", text: "A. London", isCorrect: false },
        { id: "B", text: "B. Berlin", isCorrect: false },
        { id: "C", text: "C. Paris", isCorrect: true },
        { id: "D", text: "D. Madrid", isCorrect: false },
      ],
      explanation: "Paris has been the capital of France since the 12th century and is the country's largest city.",
    },
    {
      id: 4,
      question: "How many sides does a triangle have?",
      answers: [
        { id: "A", text: "A. 2", isCorrect: false },
        { id: "B", text: "B. 3", isCorrect: true },
        { id: "C", text: "C. 4", isCorrect: false },
        { id: "D", text: "D. 5", isCorrect: false },
      ],
      explanation: "A triangle is a polygon with three sides and three angles. The prefix 'tri-' means three.",
    },
    {
      id: 5,
      question: "What is 8 × 7?",
      answers: [
        { id: "A", text: "A. 54", isCorrect: false },
        { id: "B", text: "B. 56", isCorrect: true },
        { id: "C", text: "C. 58", isCorrect: false },
        { id: "D", text: "D. 60", isCorrect: false },
      ],
      explanation: "8 × 7 = 56. You can think of this as 8 groups of 7, or adding 8 seven times: 8+8+8+8+8+8+8 = 56.",
    },
  ];

  const currentQuestionData = questions[currentQuestion - 1];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    if (answer.isCorrect) {
      setScore(score + 1);
      setTimeout(() => {
        setShowCorrectToast(true);
      }, 500);
    } else {
      // Show incorrect feedback
      setTimeout(() => {
        setShowCorrectToast(true);
      }, 500);
    }
  };

  const handleNextQuestion = () => {
    setShowCorrectToast(false);
    setSelectedAnswer(null);

    if (currentQuestion < totalQuestions) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Quiz completed, go to results
      router.push(`/(tabs)/results/${id}?score=${score}&total=${totalQuestions}`);
    }
  };

  const handleExplanationOpen = () => {
    setShowExplanation(true);
  };

  const handleExplanationClose = () => {
    setShowExplanation(false);
  };

  const ExplanationBottomSheet = () => (
    <Modal
      visible={showExplanation}
      animationType="slide"
      transparent={true}
      onRequestClose={handleExplanationClose}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            backgroundColor: "#F7F7F7",
            paddingTop: insets.top,
            flex: 1,
          }}
        >
          {/* Header with back button and progress */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 16,
              paddingVertical: 12,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={handleExplanationClose}>
              <ChevronLeft size={24} color="#000000" />
            </TouchableOpacity>

            <View
              style={{
                flex: 1,
                marginHorizontal: 16,
              }}
            >
              <View
                style={{
                  height: 8,
                  backgroundColor: "#ECECEC",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    height: "100%",
                    backgroundColor: "#005F59",
                    width: `${(currentQuestion / totalQuestions) * 100}%`,
                    borderRadius: 4,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                backgroundColor: "rgba(0, 95, 89, 0.15)",
                borderRadius: 12,
                paddingHorizontal: 8,
                paddingVertical: 4,
              }}
            >
              <Text
                style={{
                  fontFamily: "InstrumentSans_600SemiBold",
                  fontSize: 12,
                  color: "#005F59",
                }}
              >
                {currentQuestion}/{totalQuestions}
              </Text>
            </View>
          </View>

          {/* Bottom Sheet */}
          <View
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              marginTop: 20,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 5,
            }}
          >
            {/* Drag handle */}
            <View
              style={{
                width: 40,
                height: 3,
                backgroundColor: "#CFCFCF",
                borderRadius: 3,
                alignSelf: "center",
                marginTop: 12,
              }}
            />

            {/* Close button */}
            <TouchableOpacity
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                zIndex: 1,
              }}
              onPress={handleExplanationClose}
            >
              <X size={24} color="#000000" />
            </TouchableOpacity>

            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
              showsVerticalScrollIndicator={false}
            >
              <View style={{ padding: 16 }}>
                {/* Title */}
                <Text
                  style={{
                    fontFamily: "InstrumentSans_700Bold",
                    fontSize: 28,
                    color: "#212121",
                    marginBottom: 16,
                  }}
                >
                  Explanation
                </Text>

                {/* Body copy */}
                <Text
                  style={{
                    fontFamily: "InstrumentSans_400Regular",
                    fontSize: 16,
                    lineHeight: 24,
                    color: "#212121",
                  }}
                >
                  {currentQuestionData.explanation}
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );

  const renderAnswerButton = (answer) => {
    const isSelected = selectedAnswer?.id === answer.id;
    const isCorrect = answer.isCorrect;
    const showResult = selectedAnswer !== null;

    let buttonStyle = {
      width: "48%",
      height: 54,
      borderWidth: 1,
      borderRadius: 18,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 12,
    };

    let textStyle = {
      fontFamily: "Poppins_600SemiBold",
      fontSize: 16,
      textAlign: "center",
    };

    if (showResult) {
      if (isSelected && isCorrect) {
        // Selected and correct
        buttonStyle = { ...buttonStyle, backgroundColor: "#00887F", borderColor: "transparent" };
        textStyle = { ...textStyle, color: "#FFFFFF" };
      } else if (isSelected && !isCorrect) {
        // Selected but incorrect
        buttonStyle = { ...buttonStyle, backgroundColor: "#F44336", borderColor: "transparent" };
        textStyle = { ...textStyle, color: "#FFFFFF" };
      } else if (!isSelected && isCorrect) {
        // Not selected but correct (show correct answer)
        buttonStyle = { ...buttonStyle, backgroundColor: "#E8F5E8", borderColor: "#00887F" };
        textStyle = { ...textStyle, color: "#00887F" };
      } else {
        // Not selected and incorrect
        buttonStyle = { ...buttonStyle, backgroundColor: "#F5F5F5", borderColor: "#E3E3E3" };
        textStyle = { ...textStyle, color: "#9E9E9E" };
      }
    } else {
      // No answer selected yet
      buttonStyle = { ...buttonStyle, backgroundColor: "#FFFFFF", borderColor: "#E3E3E3" };
      textStyle = { ...textStyle, color: "#333333" };
    }

    return (
      <TouchableOpacity
        key={answer.id}
        style={buttonStyle}
        onPress={() => !selectedAnswer && handleAnswerSelect(answer)}
        activeOpacity={selectedAnswer ? 1 : 0.8}
        disabled={selectedAnswer !== null}
      >
        <Text style={textStyle}>
          {answer.text}
        </Text>
      </TouchableOpacity>
    );
  };

  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const opacity = scrollY > 0 ? 1 : 0;

    Animated.timing(headerBorderOpacity, {
      toValue: opacity,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar style="dark" />

      {/* Fixed Header */}
      <View
        style={{
          backgroundColor: "#FFFFFF",
          paddingTop: insets.top,
        }}
      >
        {/* Top utility row */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 12,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowLeft size={26} color="#00887F" />
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              marginHorizontal: 16,
            }}
          >
            <View
              style={{
                height: 14,
                backgroundColor: "#F2F2F2",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  height: "100%",
                  backgroundColor: "#00887F",
                  width: `${(currentQuestion / totalQuestions) * 100}%`,
                  borderRadius: 12,
                }}
              />
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#E6F8F6",
              borderRadius: 12,
              paddingHorizontal: 10,
              paddingVertical: 4,
              height: 24,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 14,
                color: "#00887F",
              }}
            >
              {currentQuestion}/{totalQuestions}
            </Text>
          </View>
        </View>

        {/* Animated bottom border */}
        <Animated.View
          style={{
            height: 1,
            backgroundColor: "#E0E0E0",
            opacity: headerBorderOpacity,
          }}
        />
      </View>

      {/* Main Content Container */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: insets.bottom,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          {/* Top Content Section */}
          <View>
            {/* Question */}
            <View
              style={{
                paddingHorizontal: 16,
                paddingVertical: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                  color: "#333333",
                  lineHeight: 26,
                  textAlign: "center",
                }}
              >
                {currentQuestionData.question}
              </Text>
            </View>

            {/* Multiple choice answers */}
            <View
              style={{
                paddingHorizontal: 16,
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {currentQuestionData.answers.map(renderAnswerButton)}
            </View>
          </View>

          {/* Bottom Section - Result Card */}
          {showCorrectToast && (
            <View
              style={{
                marginHorizontal: 16,
                marginTop: "auto",
                marginBottom: 20,
                backgroundColor: selectedAnswer?.isCorrect ? "#E6F8F6" : "#FFE6E6",
                borderWidth: 2,
                borderColor: selectedAnswer?.isCorrect ? "#00887F" : "#F44336",
                borderRadius: 24,
                padding: 20,
              }}
            >
              {/* Confetti pattern for correct answers */}
              {selectedAnswer?.isCorrect && (
                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 40,
                    overflow: "hidden",
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      paddingTop: 8,
                    }}
                  >
                    <Text style={{ fontSize: 16, opacity: 0.6 }}>⭐</Text>
                    <Text style={{ fontSize: 14, opacity: 0.4 }}>🎉</Text>
                    <Text style={{ fontSize: 18, opacity: 0.5 }}>✨</Text>
                    <Text style={{ fontSize: 12, opacity: 0.3 }}>🎊</Text>
                    <Text style={{ fontSize: 16, opacity: 0.6 }}>⭐</Text>
                  </View>
                </View>
              )}

              <View
                style={{
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Text style={{ fontSize: 26, marginRight: 8 }}>
                    {selectedAnswer?.isCorrect ? "🎉" : "😔"}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Poppins_700Bold",
                      fontSize: 24,
                      color: selectedAnswer?.isCorrect ? "#00887F" : "#F44336",
                    }}
                  >
                    {selectedAnswer?.isCorrect ? "Correct!" : "Incorrect"}
                  </Text>
                </View>

                <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    fontSize: 16,
                    color: selectedAnswer?.isCorrect ? "#00887F" : "#F44336",
                    textAlign: "center",
                  }}
                >
                  {selectedAnswer?.isCorrect 
                    ? "Great job! Keep it up!" 
                    : "Don't worry, keep learning!"}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    height: 48,
                    backgroundColor: "transparent",
                    borderWidth: 2,
                    borderColor: selectedAnswer?.isCorrect ? "#00887F" : "#F44336",
                    borderRadius: 24,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={handleExplanationOpen}
                  activeOpacity={0.8}
                >
                  <Lightbulb
                    size={20}
                    color={selectedAnswer?.isCorrect ? "#00887F" : "#F44336"}
                    style={{ marginRight: 8 }}
                  />
                  <Text
                    style={{
                      fontFamily: "Poppins_600SemiBold",
                      fontSize: 16,
                      color: selectedAnswer?.isCorrect ? "#00887F" : "#F44336",
                    }}
                  >
                    Explanation
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flex: 1,
                    height: 48,
                    backgroundColor: selectedAnswer?.isCorrect ? "#00887F" : "#F44336",
                    borderRadius: 24,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={handleNextQuestion}
                  activeOpacity={0.8}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins_600SemiBold",
                      fontSize: 16,
                      color: "#FFFFFF",
                    }}
                  >
                    {currentQuestion < totalQuestions ? "Next Question" : "View Results"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Explanation Modal */}
      <ExplanationBottomSheet />
    </View>
  );
}