import React from "react";
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    textAlign: "justify",
  },
});

const PrivacyPolicyPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.text}>
          We at The Startup Wallah ("Company," "we," "our," or "us") hold in high regard the privacy and security of your ("you," "your") personal information. This Privacy Policy describes the types of information we gather, how we use it, what we do to ensure it is protected, and your rights with respect to your personal information.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>1. Information We Collect</Text>
        <Text style={styles.text}>
          - Personal Information: Identity Information (Full name, date of birth, gender), Contact Information (Email address, phone number, postal address), Account Credentials (Username, password, and security-related information).
          - Non-Personal Information: Device Information (IP address, device type, operating system, browser type, screen resolution), Website Usage Information (Page viewing behavior, time on pages, search, clickstream information), Cookies and Tracking Technologies.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>2. How We Use Your Information</Text>
        <Text style={styles.text}>
          - Providing Services: To establish and administer user accounts, process transactions, and provide personalized experiences.
          - Communication: To send order confirmation, answer queries, and administer customer support.
          - Marketing & Promotions: To deliver promotional mail, newsletters, and special promotions (with opt-out options).
          - Legal Compliance & Security: To identify unauthorized use, maintain legal compliance, and improve data protection.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>3. Data Protection & Security</Text>
        <Text style={styles.text}>
          - Encryption Technologies: SSL encryption and other security protocols.
          - Access Controls: Restricted access to personal data.
          - Regular Security Audits: Frequent vulnerability assessments to detect and mitigate risks.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>4. Contact Us</Text>
        <Text style={styles.text}>
          If you have any questions, reach us at support@thestartupwallah.com.
        </Text>
      </View>
    </Page>
  </Document>
);

const PrivacyPolicy = () => {
  return (
    <div id="privacypolicy" className="flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl font-bold mb-4">Download Privacy Policy</h2>
      <PDFDownloadLink document={<PrivacyPolicyPDF />} fileName="Privacy_Policy.pdf">
        {({ loading }) =>
          loading ? (
            <button className="bg-gray-500 text-white px-4 py-2 rounded">Loading PDF...</button>
          ) : (
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Download PDF
            </button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default PrivacyPolicy;
