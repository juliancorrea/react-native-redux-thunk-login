import i18n from "./i18n";
import { Toast } from "native-base";

export function showMessage(messagei18nTag){
    Toast.show({
        text: i18n.t(messagei18nTag),
        duration: 2000,
        position: "top",
        textStyle: { textAlign: "center" },
    });
}

export function showMessageWithDetail(messagei18nTag, detail){
    Toast.show({
        text: i18n.t(messagei18nTag) + " - " + detail,
        duration: 2000,
        position: "top",
        textStyle: { textAlign: "center" },
    });
}