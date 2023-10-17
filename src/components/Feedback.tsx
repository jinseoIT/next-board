import Link from "next/link";
import Header from "./common/Header";

function Feedback() {
  const onCopy = () => {
    alert('복사');
  }
  return (
    <>
      <Header rightElements={[
        <><button key="button" onClick={onCopy}>복사</button><Link key="link" href="/feedback"></Link></>
      ]}/>
    </>
  )
}

export default Feedback; 