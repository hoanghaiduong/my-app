import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.header}>Profile</Text>
        <Text style={styles.subHeader}>I'm a student</Text>
        <View style={styles.profileContent}>
          <View style={styles.aboutMe}>
            <Text style={styles.sectionTitle}>About me</Text>
            <Text>
              I am a lovely cat. I have passion in IT and I want to become a
              data analyst.
            </Text>
          </View>
          <Image
            source={{
              uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQd1kWKsODGmz1P44kiLTfpeIOkaemYITnaRVOZEn372xCyrpNoQQ_dMDAV4dWLpVTDFekNEtlkJaDnhlTzoQWdNg",
            }}
            style={styles.image}
          />
          <View style={styles.details}>
            <Text style={styles.sectionTitle}>Details</Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Name:</Text> Tran Van Boss
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Age:</Text> 5 years
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Location: </Text>UIT, VNU-HCM
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
     flex: 1,
     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
     backgroundColor: "#fff",
   },
  profileContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#219aa3",
  },
  subHeader: {
    textAlign: "center",
    marginBlock: 12,
    paddingBlock: 12,
    color: "gray",
  },
  profileContent: {
    paddingTop: 25,
    borderTopColor: "#E8E8E8",
    borderTopWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  aboutMe: {
    flex: 1,
  },
  details: {
    flex: 1,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    color: "#219aa3",
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginHorizontal: 16,
  },
  experienceContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
  },
  section: {
    marginBottom: 12,
  },
});
