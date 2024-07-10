import React, { useState, useEffect } from 'react';
import { Text, View, Modal, Pressable, Dimensions, Alert, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

function TimeInput(props) {
  const { setTime, title = "Select Time", required, wrapperClass, modalWrapperClass } = props;
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinute, setSelectedMinute] = useState(0);

  // Function to get hours (0 to 23)
  const getHours = () => Array.from({ length: 24 }, (_, index) => index);

  // Function to get minutes (00 to 59)
  const getMinutes = () => Array.from({ length: 60 }, (_, index) => index);

  // Function to concatenate the selected time and set the state
  const updateTime = () => {
    const formattedHour = selectedHour.toString().padStart(2, '0');  // Ensures two-digit hour
    const formattedMinute = selectedMinute.toString().padStart(2, '0');  // Ensures two-digit minute
    const timeStr = `${formattedHour}:${formattedMinute}`;
    setTime(timeStr);
  };

  // Update the time whenever the hour or minute changes
  useEffect(() => {
    updateTime();
  }, [selectedHour, selectedMinute]);

  // Calculate the number of items per row
  const itemsPerRow = Math.floor(screenWidth / 50); // Assuming each item is approximately 50px wide

  return (
    <>
    <SafeAreaView>
      <View style={[styles.wrapper, wrapperClass]}>
        <View>
          <Text style={styles.title}>
            {title} {required && <Text style={styles.required}>*</Text>}
          </Text>
        </View>

        <View style={styles.modalTriggerContainer}>
          <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}
            style={styles.modal}
          >
            <ScrollView style={modalWrapperClass}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Pressable
                    onPress={() => setModalVisible(!modalVisible)}
                    style={styles.closeButton}
                  >
                    <Text style={styles.closeButtonText}>&times;</Text>
                  </Pressable>

                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Select Hour (24 hour format)</Text>
                    <View style={styles.flexRowWrap}>
                      {getHours().map((hour, idx, arr) => {
                        // Check if the current item is in the last row
                        const isLastRow = Math.ceil(arr.length / itemsPerRow) === Math.ceil((idx + 1) / itemsPerRow);
                        return (
                          <Pressable
                            key={hour}
                            onPress={() => setSelectedHour(hour)}
                            style={[
                              styles.timeButton,
                              selectedHour === hour && styles.selectedButton,
                              isLastRow ? styles.justifyStart : styles.justifyBetween
                            ]}
                          >
                            <Text style={[styles.timeText, selectedHour === hour && styles.selectedText]}>
                              {hour}
                            </Text>
                          </Pressable>
                        );
                      })}
                    </View>
                  </View>

                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Select Minutes</Text>
                    <View style={styles.flexRowWrap}>
                      {getMinutes().map((minute, idx, arr) => {
                        // Check if the current item is in the last row
                        const isLastRow = Math.ceil(arr.length / itemsPerRow) === Math.ceil((idx + 1) / itemsPerRow);
                        return (
                          <Pressable
                            key={minute}
                            onPress={() => setSelectedMinute(minute)}
                            style={[
                              styles.timeButton,
                              selectedMinute === minute && styles.selectedButton,
                              isLastRow ? styles.justifyStart : styles.justifyBetween
                            ]}
                          >
                            <Text style={[styles.timeText, selectedMinute === minute && styles.selectedText]}>
                              {minute}
                            </Text>
                          </Pressable>
                        );
                      })}
                    </View>
                  </View>

                  <Pressable
                    onPress={() => setModalVisible(!modalVisible)}
                    style={styles.doneButton}
                  >
                    <Text style={styles.doneButtonText}>Done</Text>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </Modal>
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.triggerButton}
          >
            <Text style={styles.triggerButtonText}>Choose Time</Text>
          </Pressable>
        </View>
      </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 21,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1f2937', // gray-900
  },
  required: {
    color: '#dc2626', // red-600
    fontSize: 18,
  },
  modalTriggerContainer: {
    marginVertical: 12,
  },
  modal: {
    width: '100%',
    height: '50%',
  },
  modalContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  modalContent: {
    marginTop: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 50,
  },
  closeButtonText: {
    fontSize: 24,
  },
  section: {
    marginHorizontal: 12,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1f2937', // gray-900
    marginBottom: 12,
  },
  flexRowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  timeButton: {
    borderColor: '#d1d5db', // gray-300
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  selectedButton: {
    backgroundColor: '#000',
  },
  timeText: {
    paddingHorizontal: 4,
    textAlign: 'center',
    fontSize: 18,
  },
  selectedText: {
    color: '#fff',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  doneButton: {
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 12,
    marginHorizontal: 12,
    marginTop: 24,
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  triggerButton: {
    borderColor: '#3b82f6', // blue-300
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
  },
  triggerButtonText: {
    color: '#3b82f6', // blue-600
  },
});

export default TimeInput;