import { IDataTypes } from '../types/dataTypes';

const clearLocalStorage = () => {
  localStorage.clear();
  window.location.reload();
};

const shuffleArray = (data: IDataTypes[]) => {
  for (let i = data.length - 1; i > 0; i--) {
    let index = Math.floor(Math.random() * (i + 1));
    [data[i], data[index]] = [data[index], data[i]];
  }
  return data;
};

const getCurrencies = (data: IDataTypes) => {

  if (data.currencies === undefined || null) {
    return '';
  }

  const arrayOfArrays: any = Object.entries(data.currencies);
  let firstArray = arrayOfArrays[0];
  let objectCurrencies = firstArray[firstArray.length-1];
  let currencies: string[] = [];

  for (const value in objectCurrencies) {
    currencies.push(objectCurrencies[value]);
  }
  return currencies.join(', ');
};

const getLanguages = (data: IDataTypes) => {

  if (data.languages === undefined || null) {
    return '';
  }

  let languages: string[] = [];
  for (const lang in data.languages) {
    languages.push(data.languages[lang]);
  }
  return languages.join(', ');
};

const getTimezones = (data: IDataTypes) => {
  let timeZones: string[] = [];
  data.timezones.forEach((item) => {
    timeZones.push(item);
  });
  return timeZones.join(', ');
};

export { clearLocalStorage, shuffleArray, getLanguages, getTimezones, getCurrencies }
