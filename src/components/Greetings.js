import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGreeting } from "../redux/reducer";

export default function Greeting() {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{greeting.message}</h1>
      <button onClick={() => dispatch(getGreeting())}>Get Greeting</button>
    </div>
  );
}
