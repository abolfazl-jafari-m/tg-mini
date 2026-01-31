import {useTelegram} from "../hooks/useTelegram.js";

function UserInfo() {
    const tg = useTelegram();

    if (!tg && !(tg?.initDataUnsafe)) return null;
    return (
        <div className={"flex flex-col gap-2"}>
            <div className={"flex items-center gap-1"}>
                <img src={tg.initDataUnsafe.user.photo_url} className={"size-10 rounded-full"}/>
                <p>{tg.initDataUnsafe.user.username ?? ""}</p>
            </div>
            <div>
                <p>welcome {tg.initDataUnsafe.user.first_name} {tg.initDataUnsafe.user.last_name ?? ""}</p>
            </div>
        </div>
    );
}

export default UserInfo;