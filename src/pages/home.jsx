import {useTelegram} from "../hooks/useTelegram.js";
import {safe} from "../lib/helper.ts";
import UserInfo from "../components/userInfo.jsx";
import BiometricManger from "../components/biometricManger.jsx";
import {Link} from "react-router";
import TelegramLogin from "../components/telegram-login.jsx";

function Home() {
    const tg = useTelegram();
    console.log(window.Telegram.WebApp.version);

    const handleContact = async () => {
        if (!tg) return;
        try {
            const contact = await tg.requestContact();
        } catch {
            tg.showAlert("permission denied");
        }
    }
    const handleHaptic = () => {
        if (!tg?.HapticFeedback) {
            tg?.showAlert("HapticFeedback not supported");
            return;
        }
        tg.HapticFeedback.impactOccurred("heavy");
    };

    const handleLocation = async () => {
        if (!tg) return;

        try {

            tg.LocationManager?.init?.();

            if (!tg.LocationManager?.isLocationAvailable) {
                tg.showAlert(
                    `Location not available. platform=${tg.platform} version=${tg.version}`
                );
                return;
            }

            const res = await tg.LocationManager.requestLocation();

            tg.showPopup({
                title: "📍 Location",
                message: `Lat: ${res.latitude}\nLng: ${res.longitude}\nAcc: ${res.accuracy ?? "?"}`,
                buttons: [{ type: "ok" }],
            });
        } catch (e) {
            tg.showAlert(e?.message || "Something went wrong / cancelled");
        }
    };

    const handleSetting = () => {
        tg?.openLocationSettings?.();
    };

    const tgDebug = ()=>{
        tg?.showPopup?.({
        title: "TG Debug",
        message:
            `platform: ${tg?.platform}\n` +
            `version: ${tg?.version}\n` +
            `has LocationManager: ${!!tg?.LocationManager}\n` +
            `has getLocation: ${!!tg?.LocationManager?.getLocation}\n` +
            `has openSettings: ${!!tg?.LocationManager?.openSettings}\n` +
            `has requestLocation: ${!!tg?.LocationManager?.requestLocation}`,
        buttons: [{ type: "ok" }],
    });
    }
    return (
        <>
            <header className={"flex items-center justify-between px-2 py-2 bg-gray-300"}>
                <h1 className={"text-green-700 font-semibold text-xl"}>Mini App Test</h1>
                <TelegramLogin />
                <UserInfo/>
            </header>
            <section className={"my-2 px-4"}>
                <h3>test features</h3>
                <div className={"grid grid-cols-1 gap-2"}>
                    <button className={"text-white bg-gray-800 rounded-md px-4 py-0"} onClick={() => safe(tg.showPopup({
                        title: "test",
                        message: "this is a test for popup"
                    }), null)}>show popup
                    </button>
                    <button className={"border-white rounded-md px-4 py-0.5 bg-rose-800 text-white"}
                            onClick={handleContact}>request Contacts
                    </button>
                    <button className={"border-white rounded-md px-4 py-0.5 bg-yellow-800 text-white"}
                            onClick={handleHaptic}>shake it
                    </button>
                    <BiometricManger/>
                    <button onClick={handleLocation} className={"bg-amber-900 text-white px-4 py-0.5 rounded-md"}>Share Location</button>
                    <button onClick={handleSetting} className={"bg-amber-900 text-white px-4 py-0.5 rounded-md"}>Open Location setting</button>
                    <button onClick={tgDebug} className={"bg-amber-900 text-white px-4 py-0.5 rounded-md"}>Debug</button>
                </div>
            </section>
        </>
    )
}

export default Home
