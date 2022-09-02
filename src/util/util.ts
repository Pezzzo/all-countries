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

const getLanguages = (data: IDataTypes) => {
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

export { clearLocalStorage, shuffleArray, getLanguages, getTimezones }
