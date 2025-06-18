const EditProfile = () => {
  return (
    <div className="w-full flex flex-col gap-5 items-center py-20">
      <div className="relative w-28 h-28 rounded-full border-2 border-[#7A6EFF] flex items-center justify-center">
        <img
          src="./Dashboard/user.jpg"
          className="w-full h-full rounded-full"
          alt=""
        />
        <img
          src="./Dashboard/img-bottom.png"
          className="absolute w-full bottom-0"
          alt=""
        />
        <img
          src="./Dashboard/bottom-icon.png"
          className="absolute bottom-3"
          alt=""
        />
      </div>
      <div className="w-[70%] bg-[#2A2A2A] p-4">
        <div className="space-y-3">
          {[
            { label: "Account Number", value: "012345678902" },
            { label: "IBAN", value: "012345678902" },
            { label: "SWIFT Code", value: "012345678902" },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="text-sm text-[#B3B5B8]">{item.label}</div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white">
                  {item.value}
                </span>
                <i className="ri-file-copy-line text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[85%] p-4 mt-4 flex flex-col gap-4">
          <div className="w-full flex items-start gap-2 border border-[#313131] py-3 pl-5 rounded-md">
            <h1>Alex Jacob</h1>
          </div>
          <div className="w-full flex items-start gap-2 border border-[#313131] py-3 pl-5 rounded-md">
            <h1>alexjacob@gmail.com</h1>
          </div>
          <div className="w-full flex items-start gap-2 border border-[#313131] py-3 pl-5 rounded-md">
            <h1>+91354235436423</h1>
          </div>
          <div className="w-full flex items-start gap-2 border border-[#313131] py-3 pl-5 rounded-md">
            <h1>Male</h1>
          </div>
      </div>
    </div>
  );
};

export default EditProfile;
