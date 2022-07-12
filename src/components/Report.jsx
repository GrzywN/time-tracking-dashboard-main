export default function Report() {
  return (
    <div className=" rounded-2xl relative bg-DarkBlue h-[12.6875rem]">
      <div className="rounded-2xl w-full h-[8.3125rem] pl-8 pt-[2.1875rem] pb-[2.125rem] pr-10 bg-Blue flex items-center gap-5 absolute">
        <img
          className="w-16 h-auto border-[3px] border-white rounded-full"
          src="./src/images/image-jeremy.png"
          alt="Jeremy Robson"
        />
        <div className="">
          <p className="mb-1 text-PaleBlue">
            <small>Report for</small>
          </p>
          <h1 className="text-White">Jeremy Robson</h1>
        </div>
      </div>
      <div className="mt-[9.8125rem]">
        <ul className="flex">
          <li className="text-center w-full">
            <button
              type="button"
              className="text-DesaturatedBlue hover:text-White hover-transition"
            >
              Daily
            </button>
          </li>
          <li className="text-center w-full">
            <button
              type="button"
              className="text-DesaturatedBlue hover:text-White hover-transition"
            >
              Weekly
            </button>
          </li>
          <li className="text-center w-full">
            <button
              type="button"
              className="text-DesaturatedBlue hover:text-White hover-transition"
            >
              Monthly
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
