import Image from "next/image";
import AuthButtons from "./components/AuthButtons";
import UserInfo from "./components/UserInfo";
import Form from "./components/Form";


export default function Home() {


  return (
    <div className="">
      <div className="flex justify-center items-center gap-10 h-screen">
        <AuthButtons />
        <Form />
      </div>
      {/* <UserInfo /> */}
    </div>
  );
}
