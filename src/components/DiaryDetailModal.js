
import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';

import {
  COLORS,
  SPACE,
  RADIUS,
  TYPO,
} from '../styles/tokens';

export default function DiaryDetailModal({
  visible,
  onClose,
  entry,
}) {
  if (!entry) return null;

  const {
    title,
    date,
    body,
    preview,
    heroUri,
    moodUri,
  } = entry;

  const imageSource = heroUri || moodUri;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        <Image
          source={
            typeof imageSource === 'string'
              ? { uri: imageSource }
              : imageSource
          }
          style={styles.hero}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            {title}
          </Text>

          <Text style={styles.date}>
            {date}
          </Text>

          <Text style={styles.body}>
            {body || preview}
          </Text>

          <Pressable
            onPress={onClose}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Tutup detail buku harian"
          >
            <Text style={styles.buttonText}>
              Tutup
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },

  scrollContent: {
    paddingBottom: SPACE.xl,
  },

  hero: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: COLORS.imagePlaceholder,
    borderBottomLeftRadius: RADIUS.card,
    borderBottomRightRadius: RADIUS.card,
  },

  content: {
    padding: SPACE.l,
    gap: SPACE.s,
  },

  title: {
    fontSize: TYPO.modalTitle,
    fontWeight: '700',
    color: COLORS.text,
  },

  date: {
    fontSize: TYPO.caption,
    color: COLORS.muted,
    marginBottom: SPACE.s,
  },

  body: {
    fontSize: TYPO.body,
    color: COLORS.text,
    lineHeight: 22,
  },

  button: {
    marginTop: SPACE.l,
    minHeight: 48,
    padding: SPACE.m,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonPressed: {
    opacity: 0.85,
  },

  buttonText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: TYPO.body,
  },
});
