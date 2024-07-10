import React, { useState, useEffect } from 'react';
import { Text, View, Modal, Pressable, Dimensions, ScrollView, StyleSheet } from 'react-native';

function DateInput(props) {
  const { setDate, title = "Title of the input", required, wrapperClass } = props;
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const currentDate = new Date();

  // Set initial states to today's date
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState(currentDate.getDate());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth() + 1); // Months are zero-based in JS
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

  // Function to get the days of a month considering leap years
  const getDays = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  // Function to get the months
  const getMonths = () => {
    return [
      { label: 'January', value: 1 },
      { label: 'February', value: 2 },
      { label: 'March', value: 3 },
      { label: 'April', value: 4 },
      { label: 'May', value: 5 },
      { label: 'June', value: 6 },
      { label: 'July', value: 7 },
      { label: 'August', value: 8 },
      { label: 'September', value: 9 },
      { label: 'October', value: 10 },
      { label: 'November', value: 11 },
      { label: 'December', value: 12 },
    ];
  };

  // Function to get the years
  const getYears = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 3 }, (_, index) => currentYear + index);
  };

  // Days in the currently selected month and year
  const daysInMonth = getDays(selectedMonth, selectedYear);

  // Function to concatenate the selected date and set the state
  const updateDate = () => {
    const formattedDay = selectedDay.toString().padStart(2, '0'); // Ensures two-digit day
    const formattedMonth = selectedMonth.toString().padStart(2, '0'); // Ensures two-digit month
    const dateStr = `${formattedDay}-${formattedMonth}-${selectedYear}`;
    setDate(dateStr);
  };

  // Update the date whenever the day, month, or year changes
  useEffect(() => {
    updateDate();
  }, [selectedDay, selectedMonth, selectedYear]);

  // Calculate the number of items per row
  const itemsPerRow = Math.floor(screenWidth / 50); // Assuming each item is approximately 50px wide

  return (
    <>
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
              setModalVisible(!modalVisible);
            }}
            style={styles.modal}
          >
            <ScrollView>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Pressable
                    onPress={() => setModalVisible(!modalVisible)}
                    style={styles.closeButton}
                  >
                    <Text style={styles.closeButtonText}>&times;</Text>
                  </Pressable>

                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Select Day</Text>
                    <View style={styles.flexRowWrap}>
                      {Array.from({ length: 31 }, (_, index) => index + 1).map((day, idx, arr) => {
                        // Check if the current item is in the last row
                        const isLastRow = Math.ceil(arr.length / itemsPerRow) === Math.ceil((idx + 1) / itemsPerRow);
                        const isDisabled = day > daysInMonth;
                        return (
                          <Pressable
                            key={day}
                            onPress={() => !isDisabled && setSelectedDay(day)}
                            style={[
                              styles.dateButton,
                              selectedDay === day && styles.selectedButton,
                              isLastRow ? styles.justifyStart : styles.justifyBetween,
                              isDisabled && styles.disabledButton,
                            ]}
                            disabled={isDisabled}
                          >
                            <Text style={[styles.dateText, selectedDay === day && styles.selectedText]}>
                              {day}
                            </Text>
                          </Pressable>
                        );
                      })}
                    </View>
                  </View>

                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Select Month</Text>
                    <View style={styles.flexRowWrap}>
                      {getMonths().map((month, idx, arr) => {
                        // Check if the current item is in the last row
                        const isLastRow = Math.ceil(arr.length / itemsPerRow) === Math.ceil((idx + 1) / itemsPerRow);
                        return (
                          <Pressable
                            key={month.value}
                            onPress={() => setSelectedMonth(month.value)}
                            style={[
                              styles.dateButton,
                              selectedMonth === month.value && styles.selectedButton,
                              isLastRow ? styles.justifyStart : styles.justifyBetween,
                            ]}
                          >
                            <Text style={[styles.dateText, selectedMonth === month.value && styles.selectedText]}>
                              {month.label}
                            </Text>
                          </Pressable>
                        );
                      })}
                    </View>
                  </View>

                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Select Year</Text>
                    <View style={styles.flexRowWrap}>
                      {getYears().map((year) => (
                        <Pressable
                          key={year}
                          onPress={() => setSelectedYear(year)}
                          style={[
                            styles.dateButton,
                            selectedYear === year && styles.selectedButton,
                          ]}
                        >
                          <Text style={[styles.dateText, selectedYear === year && styles.selectedText]}>
                            {year}
                          </Text>
                        </Pressable>
                      ))}
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
            <Text style={styles.triggerButtonText}>Choose Date</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 4,
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
    right: 5,
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
  dateButton: {
    borderColor: '#d1d5db', // gray-300
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  selectedButton: {
    backgroundColor: '#000',
  },
  disabledButton: {
    opacity: 0.5,
  },
  dateText: {
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
    marginHorizontal: 24,
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

export default DateInput;