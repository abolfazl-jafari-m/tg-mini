import {useTelegram} from "./hooks/useTelegram.ts";

function App() {
  const tg = useTelegram();

  console.log(tg);


  return (
    <>
      <h1 className={"text-green-700"}>This is a Test for Tg mini</h1>
    </>
  )
}

export default App
