import T from "i18n-react";
import dictionary from "./i18n/pt-br.json";

export function i18nInit() {
    T.setTexts(dictionary, {
        MDFlavor: 1,
        notFound: 'Missing translation'
    });
}