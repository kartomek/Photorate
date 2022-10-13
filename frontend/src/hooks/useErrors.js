export const useErrors = () =>{

    const parseResponseError = (err) => {
        
        if (err.response) {          
            return err.response.data.msg
        }
        else if (err.request) {
            return "Brak odpowiedzi serwera na zapytanie.";
        }
        else {
            return "Błąd w konfiguracji zapytania.";
        }
    }

    return{
        parseResponseError
    }
}