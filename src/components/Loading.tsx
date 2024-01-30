type Prop = {
  loaded: boolean;
};

function Loading({ loaded }: Prop) {
  return (
    !loaded && (
      <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center	justify-center bg-black-60 bg-opacity-50">
        <p className="text-7 font-extrabold text-black-120">Loading ...</p>
      </div>
    )
  );
}
export default Loading;
