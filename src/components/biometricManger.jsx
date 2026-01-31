import React from 'react';
import {useTelegram} from "../hooks/useTelegram.js";

function BiometricManger() {
    const tg = useTelegram();

    if (!tg) return null;


    const authHandler =   async () => {
        const biometric = tg.BiometricManager;

        try {
            const access = await biometric.requestAccess();
            if (access){
            await biometric.authenticate({
                reason : "Please Confirm"
            })
            tg.HapticFeedback.notificationOccurred("success");
            }else  {
                tg.showAlert("access Denied");
            }
        }catch  {
            tg.HapticFeedback.notificationOccurred("error");
            tg.showAlert("Biometric authentication failed");
        }
    }

    return (
        <div>
            <button onClick={() => authHandler()}>تایید تراکنش</button>
        </div>
    );
}

export default BiometricManger;