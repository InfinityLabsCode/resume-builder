import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { decrement, increment } from './counterSlice';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className=" text-center text-white mt-10">
      <button className="" aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span className='m-5'>{count}</span>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}
