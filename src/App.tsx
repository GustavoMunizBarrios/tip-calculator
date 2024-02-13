import { ChangeEvent, useState } from "react";
import "./App.css";

interface BillProps {
  bill: number;
  setBill: React.Dispatch<React.SetStateAction<number>>;
  children: string;
}
interface ServiceTip {
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
  children: string;
}
interface TotalPay {
  bill: number;
  tip: number;
  tipFriend: number;
}
interface ResetButton {
  setBill: React.Dispatch<React.SetStateAction<number>>;
  setTip: React.Dispatch<React.SetStateAction<number>>;
  setTipFriend: React.Dispatch<React.SetStateAction<number>>;
}

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipFriend, setTipFriend] = useState(0);

  return (
    <>
      <BillInput bill={bill} setBill={setBill}>
        How much was the bill?
      </BillInput>
      <ServiceTip tip={tip} setTip={setTip}>
        How did you like the service?
      </ServiceTip>
      <ServiceTip tip={tipFriend} setTip={setTipFriend}>
        How did your friend like the service?
      </ServiceTip>
      {bill > 0 && (
        <>
          <TotalPay bill={bill} tip={tip} tipFriend={tipFriend} />
          <ResetButton
            setBill={setBill}
            setTip={setTip}
            setTipFriend={setTipFriend}
          />
        </>
      )}
    </>
  );
}

function BillInput({ bill, setBill, children }: BillProps) {
  const handleBillChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newBill = parseFloat(event.target.value);

    if (!isNaN(newBill)) {
      setBill(newBill);
    }
  };
  return (
    <div className="div">
      <label className="label">{children}</label>
      <input
        type="text"
        placeholder="bill..."
        value={bill}
        onChange={handleBillChange}
      ></input>
    </div>
  );
}
function ServiceTip({ tip, setTip, children }: ServiceTip) {
  return (
    <div className="div">
      <label className="label">{children}</label>
      <select
        name=""
        id=""
        value={tip}
        onChange={(event) => setTip(Number(event.target.value))}
      >
        <option value={0} key={0}>
          Disatisfied 0%
        </option>
        <option value={5} key={5}>
          It was okay 5%
        </option>
        <option value={10} key={10}>
          It was good 10%
        </option>
        <option value={20} key={20}>
          Absolutely amazing 20%
        </option>
      </select>
    </div>
  );
}
function TotalPay({ bill, tip, tipFriend }: TotalPay) {
  const tipPercentage = (bill * tip) / 100;
  const tipFriendPercentage = (bill * tipFriend) / 100;
  const average = Math.round((tipFriendPercentage + tipPercentage) / 2);

  return (
    <div>
      <h2>
        You pay ${bill + average} ( ${bill} + ${average} tip )
      </h2>
    </div>
  );
}
function ResetButton({ setBill, setTip, setTipFriend }: ResetButton) {
  function handleReset() {
    setBill(0);
    setTip(0);
    setTipFriend(0);
  }
  return (
    <>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
