import {useTelegram} from "./hooks/useTelegram.js";
import {safe} from "./lib/helper.ts";
import UserInfo from "./components/userInfo.jsx";
import BiometricManger from "./components/biometricManger.jsx";

function App() {
    const tg = useTelegram();

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


    return (
        <>
            <header className={"flex items-center justify-between px-2 py-2 bg-gray-300"}>
                <h1 className={"text-green-700 font-semibold text-xl"}>Mini App Test</h1>
                <UserInfo/>
            </header>
            <section className={"my-2"}>
                <h3>test features</h3>
                <div className={"grid grid-cols-2 gap-2"}>
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
                </div>
            </section>
        </>
    )
}

export default App
