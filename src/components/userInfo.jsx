import {useTelegram} from "../hooks/useTelegram.js";

function UserInfo() {
    const tg = useTelegram();

    if (!tg && !(tg?.initDataUnsafe)) return null;
    return (
        <div className={"flex flex-col gap-0.5"}>
            {
                !tg?.initDataUnsafe.user ?
                <p>no user founded</p>    :
                    <>
                        <div className={"flex items-center gap-1"}>
                            {tg.initDataUnsafe.user.photo_url ? <img src={tg.initDataUnsafe.user.photo_url} className={"size-10 rounded-full"}/> :  <div className={"rounded-full size-10 bg-gray-200"}></div> }
                            <p>{tg.initDataUnsafe?.user.username ?? ""}</p>
                        </div>
                        <div>
                            <p>welcome {tg.initDataUnsafe?.user.first_name} {tg.initDataUnsafe?.user.last_name ?? ""}</p>
                        </div>
                    </>
            }

        </div>
    );
}

export default UserInfo;