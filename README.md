# Date Picker and Time Picker Components for React Native

This repository provides reusable Date Picker and Time Picker components for React Native projects. These components are designed to be easy to integrate and customise according to your project's requirements.

If you are using date time picker and your app is crashing on test flight than there is a possibility that date-time-picker or any other picker 
package is causing it.

To resolve this issue i created this new and enganced version of date time picker without the hassle of crashing the apps.

## Screenshots
![Mobile Date Picker](images/1.png)
![Mobile Time Picker](images/2.png)
![iPad Date Picker](images/3.png)
![iPad Time Picker](images/4.png)


### Key Features

- **Customizable UI**: Easily style the date and time picker components to match your app's design.
- **Simple Integration**: Add date and time picking functionality to your app with minimal setup.
- **React Native Modal**: Utilizes the built-in `Modal` component from React Native for cross-platform compatibility.
- **Support for Expo and React Native CLI**: Works smoothly with both Expo managed workflow and React Native CLI.


## Installation

To use these components in your React Native project, follow these steps:

1. **Install Dependencies**

   Make sure you have `react-native` installed in your project. If not, you can install them using npm or yarn:

   ```bash
   npm install lonare-react-native-date-time-picker
   # or
   yarn add lonare-react-native-date-time-picker
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
import { DateInput, TimeInput } from 'lonare-react-native-date-time-picker';   

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
        modalWrapperClass={{ marginTop: 50 } } 
      />
      <Text style={{ marginVertical: 10 }}>Selected Date: {selectedDate}</Text>

      <TimeInput
        title="Select Time"
        setTime={setSelectedTime}
        wrapperClass="my-1" // Optional: Custom CSS classes
        required={true} // Optional: Whether the field is required
        modalWrapperClass={{ marginTop: 50 } } 
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
 

 