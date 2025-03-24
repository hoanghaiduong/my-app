import {
  StyleSheet,
  Platform,
  StatusBar,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import axios from "axios";

const API_KEY = "";
const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export default function TabTwoScreen() {
  const [text, setText] = useState<string>("");
  const [sentiment, setSentiment] = useState<string>("");

  const analyzeSentiment = async () => {
    try {
      const prompt = `Determine the sentiment of the following sentence as one of: Positive, Negative, or Neutral.\nSentence: ${text}\nSentiment:`;

      const response = await axios.post(
        API_URL,
        {
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        },
        {
          headers: { "Content-Type": "application/json" },
          params: { key: API_KEY },
        }
      );

      const sentimentResponse =
        response.data.candidates[0]?.content?.parts[0]?.text?.toLowerCase();
        console.log(sentimentResponse);
      if (sentimentResponse.includes("positive")) setSentiment("positive");
      else if (sentimentResponse.includes("negative")) setSentiment("negative");
      else setSentiment("neutral");
    } catch (error) {
      console.log(error);
      console.error("Error fetching sentiment:", error);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <View style={[styles.innerContainer, sentiment && styles[sentiment]]}>
        <Text style={styles.title}>Sentiment Analysis</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a sentence..."
          value={text}
          onChangeText={setText}
        />
        <Button title="Submit" onPress={analyzeSentiment} />
        {sentiment && (
          <Text style={styles.emoji}>
            {sentiment === "positive"
              ? "😃"
              : sentiment === "negative"
              ? "☹️"
              : "😐"}
          </Text>
        )}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    width: "90%",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  emoji: {
    fontSize: 50,
    marginTop: 20,
  },
  positive: {
    backgroundColor: "#4CAF50",
  },
  negative: {
    backgroundColor: "#B71C1C",
  },
  neutral: {
    backgroundColor: "#9E9E9E",
  },
});
