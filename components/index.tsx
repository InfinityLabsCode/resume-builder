import Counter from './../store/features/counter';
export default function Page() {
  return (
    <>
      <div className="text-center py-10 bg-emerald-600 h-screen">
        <p>What is your name?</p>
        <Counter />
      </div>
    </>
  );
}
