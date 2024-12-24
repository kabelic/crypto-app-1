'use client'
import {  useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "@/redux/features/counter/counterSlice";
import { RootState } from "@reduxjs/toolkit/query";
import FetchRecords from "./records/fecthRecords";


export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div >
      <button onClick={() =>  dispatch(increment())}>Increment</button><br/>
      <span>{count}</span><br/>
      {/* <FetchRecords/> */}
      <button onClick={() =>  dispatch(decrement())}>Decrement</button>
    </div>
  );
}
