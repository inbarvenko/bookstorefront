import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsyncStorageItem = async (name: string, item: any) => {
  await AsyncStorage.setItem(name, JSON.stringify(item));
};

export const getAsyncStorageItem = async (name: string) => {
  const storedItem = await AsyncStorage.getItem(name);
  const parsedItem = JSON.parse(storedItem as string);

  return parsedItem;
};
