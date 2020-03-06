# capstoneReactNative
 
# Setup & Run on MacOS:

## Note: This requires two Terminal Windows to run

### Terminal Window #1:
  1. `brew install yarn`
  2. `brew install node`
  3. `brew install watchman`
  4. `brew tap AdoptOpenJDK/openjdk`
  5. `brew cask install adoptopenjdk8`
  6. `npm install -g expo-cli`
  7. `react-native init [filename]`
  8.  `cd [filename]`
  9. `npm start`
  
### Terminal Window #2:
  1. Open new Terminal Window and `cd [filename]`
  2. Run `react-native run-ios --simulator="iPhone 8 Plus"`


# Toubleshooting
 ### Xcode > File > Preferences > Location > Set dependencies
 ### If fails to build project, delete 'Build' folder in ChampLink/ios/Build and re-run
