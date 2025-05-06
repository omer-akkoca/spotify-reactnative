import AsyncStorage from '@react-native-async-storage/async-storage';

const setAsyncData = async <T>({ key = "", data }: { key: string, data: T }) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error("Could not save to async storage")
  }
};

const getAsyncData = async <T>({ key = "" }: { key: string }) => {
  try {
    const storedValue = await AsyncStorage.getItem(key);
    const value = JSON.parse(storedValue!) as T
    return value;
  } catch (e) {
    console.error("Could not get to async storage")
  }
};

export { setAsyncData, getAsyncData }