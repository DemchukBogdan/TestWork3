import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import React from "react";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "hello world": "hello world",
      "Market": "Market",
      "Account": "Account",
      "Prom": "Want to be part of the future of the financial revolution? Our analytical system will help you make informed decisions and make successful transactions. You will be able to follow the latest news and analytics to keep abreast of the latest trends and changes in the cryptocurrency market.",
      "English": "English",
      "Ukraine": "Українська",
      "Russian": "Русский",
      "Change language": "Change language",
      "Go out": "Go out",
      "Hi": "Hi",
      "Chart" : "Chart",
      "Continue" : "Continue",
      "Login": "Login",
      "Options": "Options"
    }
  },
  ua: {
    translation: {
      "hello world": "Привіт світ",
      "Market": "Платформа",
      "Account": "Акаунт",
      "Prom": "Бажаєте стати частиною майбутньої фінансової революції? Наша аналітична система допоможе вам приймати обґрунтовані рішення та здійснювати успішні угоди. Ви зможете стежити за актуальними новинами та аналітикою, щоб бути в курсі останніх тенденцій та змін на ринку криптовалют.",
      "English": "English",
      "Ukraine": "Українська",
      "Russian": "Русский",
      "Change language": "Змінити мову",
      "Go out": "Вийти",
      "Hi": "Привіт",
      "Chart" : "Графік",
      "Continue": "Продовжити",
      "Login": "Логін",
      "Options": "Параметри"
    }
  },
  ru: {
    translation:
      {
        "hello world": "Привет мир",
        "Market": "Платформа",
        "Account": "Аккаунт",
        "Prom": "Хотите стать частью будущего финансовой революции? Наша аналитическая система поможет вам принимать обоснованные решения и совершать успешные сделки. Вы сможете следить за актуальными новостями и аналитикой, чтобы быть в курсе последних тенденций и изменений на рынке криптовалют.",
        "English": "English",
        "Ukraine": "Українська",
        "Russian": "Русский",
        "Change language": "Изменить язык",
        "Go out": "Выйти",
        "Hi": "Здравствуйте",
        "Chart" : "График",
        "Continue": "Далее",
        "Login": "Логин",
        "Options": "Параметры"
      }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
