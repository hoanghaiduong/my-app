import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
function ExperienceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView>
        <View style={styles.experienceContainer}>
          <Text style={styles.header}>Experiences</Text>
          <View
            style={{
              height: 2,
              margin: 15,
              backgroundColor: "#e6e3d4",
            }}
          ></View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Educations</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>UIT, VNU-HCM </Text>
              <Text>(Apr 2019 - June 2024)</Text>
            </View>
            <Text style={{ fontWeight: "bold" }}>Information System</Text>
            <Text>
              The education was mainly System design-based, but I also learned
              about Web, Data Analysis, and more.
            </Text>
          </View>
          <View
            style={{
              height: 2,
              margin: 15,
              backgroundColor: "#e6e3d4",
            }}
          ></View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Working Experiences</Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>
                Facebook | Fresher Engineer{" "}
              </Text>{" "}
              (Sep 2021 - current)
            </Text>
            <Text style={{ fontWeight: "bold" }}>
              Part-time - Fresher Web Developer
            </Text>
            <Text>
              Working on a dating function for Facebook, similar to Tinder.
            </Text>
          </View>
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

export default ExperienceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  header: {
    color: "#3c9c90",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  profileContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    color: "#419e95",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 16,
  },
  experienceContainer: {
    backgroundColor: "#f2efe0",
    padding: 16,
    borderRadius: 10,
  },
  section: {
    marginBlock: 12,
  },
});
