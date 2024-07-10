# Date Picker and Time Picker Components for React Native

This repository provides reusable Date Picker and Time Picker components for React Native projects. These components are designed to be easy to integrate and customise according to your project's requirements.

If you are using date time picker and your app is crashing on test flight than there is a possibility that date-time-picker or any other picker 
package is causing it.

To resolve this issue i created this new and enganced version of date time picker without the hassle of crashing the apps.

## Installation

To use these components in your React Native project, follow these steps:

1. **Install Dependencies**

   Make sure you have `react-native` and `react-native-modal` installed in your project. If not, you can install them using npm or yarn:

   ```bash
   npm install react-native react-native-modal
   # or
   yarn add react-native react-native-modal
   ```

2. **Install the Date Picker and Time Picker Components**

   You can install these components directly from this GitHub repository also:

   ```bash
   npm install https://github.com/harshalone/react-native-date-time-picker.git
   # or
   yarn add https://github.com/harshalone/react-native-date-time-picker.git
   ```

## Usage

Here's how you can use the Date Picker and Time Picker components in your React Native project:

```javascript
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DateInput, TimeInput } from 'react-native-date-time-picker';   

function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <DateInput
        title="Select Date"
        setDate={setSelectedDate}
        wrapperClass="my-1" // Optional: Custom CSS classes
        required={true} // Optional: Whether the field is required
      />
      <Text style={{ marginVertical: 10 }}>Selected Date: {selectedDate}</Text>

      <TimeInput
        title="Select Time"
        setTime={setSelectedTime}
        wrapperClass="my-1" // Optional: Custom CSS classes
        required={true} // Optional: Whether the field is required
      />
      <Text>Selected Time: {selectedTime}</Text>
    </View>
  );
}

export default App;
```

## Components Props

### DateInput

- `title`: Title of the input field (default: "Title of the input").
- `setDate`: Function to handle selected date (required).
- `wrapperClass`: Optional additional CSS classes for wrapper.
- `required`: Whether the field is required (default: false).

### TimeInput

- `title`: Title of the input field (default: "Title of the input").
- `setTime`: Function to handle selected time (required).
- `wrapperClass`: Optional additional CSS classes for wrapper.
- `required`: Whether the field is required (default: false).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

Special thanks to contributors and open source projects used in this repository.
 

 