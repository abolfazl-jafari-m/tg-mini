import React from 'react';
import { useTelegram } from "../hooks/useTelegram.js";

function BiometricManager() {
    const tg = useTelegram();

    if (!tg) return null;

    const authHandler = async () => {
        const biometric = tg.BiometricManager;

        if (!tg.BiometricManager?.isAvailable) {
            tg.showAlert("Biometric not supported on this device");
            return;
        }

        if (!biometric) {
            tg.showAlert("Biometric not supported on this device");
            return;
        }

        try {
            const access = await biometric.requestAccess();
            if (access) {
                await biometric.authenticate({
                    reason: "Please confirm to proceed",
                });

                tg.HapticFeedback.notificationOccurred("success");
                tg.showAlert("Authentication successful!");
                console.log("Biometric success ✅");

                // اینجا می‌تونی تراکنش یا claim رو اجرا کنی
            } else {
                tg.showAlert("Access denied");
            }
        } catch (err) {
            console.log("Biometric failed:", err);
            tg.HapticFeedback.notificationOccurred("error");
            tg.showAlert("Biometric authentication failed");
        }
    };

    return (
        <div className={"my-2 w-full"}>
            <button
                onClick={authHandler}
                className="px-4 py-2 bg-blue-500 text-white rounded mx-auto"
            >
                تایید تراکنش
            </button>
        </div>
    );
}

export default BiometricManager;
