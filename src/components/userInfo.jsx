import {useTelegram} from "../hooks/useTelegram.js";

function UserInfo() {
    const tg = useTelegram();

    if (!tg) return null;
    return (
        <ul>
            <li>
                <p>{tg.initDataUnsafe.user.first_name}</p>
                <p>نام : </p>
            </li>
            <li>
                <p>{tg.initDataUnsafe.user.last_name}</p>
                <p>نام خانوادگی : </p>
            </li>
            <li>
                <p>{tg.initDataUnsafe.user.username ?? "unset"}</p>
                <p>یورزنیم : </p>
            </li>  <li>
                <img src={tg.initDataUnsafe.user.photo_url} className={"size-10 rounded-full"} />
                <p>عکس : </p>
            </li>
        </ul>
    );
}

export default UserInfo;