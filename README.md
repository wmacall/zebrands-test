 # ZebrandsTest

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [@react-native-community/cli](https://github.com/react-native-community/cli).

## Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start
```

 Or using Yarn
```bash
yarn start
```

### Installing pods

For `ios` you must install the pods. You can do this by running one of the following commands:

```bash
# using npx
npx pod-install
```

 Or navigating to the `ios` directiory
```bash
cd ios
pod install
```

For `android` its not needed

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

If everything is set up correctly, you should see your new app running in your Android Emulator or iOS Simulator shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Step 3: Modifying your App

### XCode issues

Find the `ENABLE_USER_SCRIPT_SANDBOXING` setting in Xcode. Go to the Search icon tab in the left-hand panel within Xcode and change its value from `YES` to `NO`.

> **Note**: Do this step if you have issues when trying to run the app.


# Libraries Used

- **[Gluestack v1](https://www.npmjs.com/package/@gluestack-ui/themed)**: Used for the entire design of the application to accelerate the UI creation process.
- **[axios](https://www.npmjs.com/package/axios)**: For making API calls.
- **[react-native-bootsplash](https://www.npmjs.com/package/react-native-bootsplash)**: For the splash screen.
- **[react-navigation](https://reactnavigation.org/)**: For navigation throughout the app.

Images for empty states were sourced from [Flaticon](https://www.flaticon.com/).

## Running Tests

To run the tests, execute the following command in the terminal:

```bash
npm run test
```


# Demo

### iOS

https://github.com/user-attachments/assets/f737982c-9c62-4fe4-85e9-eace11f43d52

### Android

https://github.com/user-attachments/assets/db937b7d-f83b-4b1c-87cc-b72e72fb16be



### Download the apk

https://drive.google.com/file/d/1J_oTqEC3qF4GZYUB2YhpCQCZXv8mM_Jn/view?usp=sharing
