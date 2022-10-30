# Pallet Manager.

## I. O aplikacji.
Projekt **fullstackowej** aplikacji webowej do zarządzania danymi dotyczącymi palet. Od strony użytkownika jej główne funkcjonalności koncentrują się na gromadzeniu, prezentowaniu i przetwarzaniu danych na temat zgłoszeń, ich realizacji oraz czasu dostaw palet, z uwzględnieniem ich typów i geograficznych obszarów działania przedsiębiorstwa.

Pod względem programistycznym projekt stanowi twórcze wykorzystanie nowoczesnych technologii webowych. Od strony **frontendu** wykorzystany został przede wszystkim `JavaScript` we frameworku `ReactJS`, który to z kolei został usprawniony przy pomocy licznych bibliotek zewnętrznych i wbudowanych mechanizmów, takich jak:
 - biblioteka komponentów `Ant Design` dla stworzenia struktury i logiki widoku aplikacji wraz z wizualnymi fragmentami darmowego layoutu `Muse` (w zakresie efektów czysto graficznych) w celu usprawnienia User Experience,
 - `React Redux` do obsługi głównej komunikacji z backendem wraz z `redux-thunk` dla zapewnienia middleware,
 - `React Router` wraz z `React Router Dom` do zarządzania routingiem aplikacji po stronie klienta,
 - `React Apexcharts` do generowania dynamicznych wykresów,
 - `React to Print` w celu umożliwienia drukowania i zapisywania w postaci plikó PDF danych ujętych w tabelach i na wykresach dostarczanych przez aplikację,
 - `React Hooks` w celu wykonywania operacji asynchronicznych i zapewnienia stanu komponentom funkcyjnym.

Z kolei warstwa **backendu** została zbudowana w oparciu o `NodeJS` z frameworkiem `ExpressJS`. Serwer został połączony z nierelacyjną bazą danych `MongoDB` z wykorzystaniem biblioteki `mongoose`. Backend zapewnia `REST API` aplikacji, a dzięki odpowiednim zewnętrznym bibliotekom umożliwia zapisywanie plików na dysku, jak i odczytywanie zawartości plików `CSV` dostarczanych przez użytkownika, ich konwersję do formatu `JSON`, a następnie zapisanie w bazie danych.

Autorem rozwiązania jest **Mateusz Stawowski**. Istotnym założeniem twórcy, poza twórczym i racjonalnym wykorzystaniem dostępnych bibliotek i narzędzi w celu zbudowania pełnoprawnej aplikacji typu fullstack, stanowi jej zgodność z dobrymi praktyki współczesnego programowania, stąd też wraz z postępami prac nad funkcjonalnościami programu wdrażane są kolejne czynności refaktoryzacyjne.

## II. Instalacja i uruchomienie (propozycja).
Po ściągnięciu/sklonowaniu repozytorium lokalnie należy uwzględnić trzy czynniki. Po pierwsze, frontend i backend zostały umieszczone w osobnych folderach, a także posiadają swoje własne pliki `package.json`. Z tego też względu każdy z nich należy kolejno zainstalować, co w modelowej sytuacji powinno przebiec następująco:
```sh
cd frontend
npm install
npm start
```
```sh
cd backend
npm install
npm run start
```
Druga kwestia to wykorzystanie w projekcie **zmiennych środowiskowych**. Ich zawartość została ukryta przed Githubem ze względów bezpieczeństwa. Przed uruchomieniem konieczne zatem będzie stworzenie lokalnie plików `.env` i uwzględnienie w ich zmiennych wylistowanych w plikach `config.js` - odpowiednio dla frontendu oraz backendu. 
Po trzecie, aplikacja działa z bazą danych `MongoDB`. Należy więc zadbać o połączenie z bazą tego typu z kolekcją o nazwie `pallets`, przy czym w przypadku, gdyby była ona niepusta, konieczne jest bezwzględne przestrzeganie następującego schematu pojedynczego rekordu:

        {
            title: string,
            area: string.
            type: string,
            startDate: date,
            finishDate: date,
            quantity: number,
        }
