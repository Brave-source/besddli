import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <div className="min-h-screen relative flex flex-col items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/login-bg.png"
          alt="Registration Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Logo in top left corner */}
      <div className="absolute top-0 left-0 z-10 p-4">
        <Link href="/">
          <div className="inline-block">
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              width={150}
              height={50}
              className="cursor-pointer"
            />
          </div>
        </Link>
      </div>

      {/* Registration Header Section */}
      <div className="flex flex-col items-start px-4 sm:pl-[0.3125rem] w-full max-w-[917px] rounded-lg z-10 mt-6 sm:mt-12">
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center px-4 sm:px-8 md:px-[9.25rem] py-4 sm:py-2 w-full max-w-[902px] rounded-tl-lg rounded-tr-lg border-0 border-gray-200 bg-white">
          <h1 className="w-full text-gray-900 text-center font-['Poppins'] text-xl sm:text-2xl md:text-3xl leading-tight sm:leading-[1.875rem]">
            BESDDLI Diaspora Member Registration
          </h1>
          <p className="w-full sm:max-w-[22.125rem] text-gray-600 text-center font-['Poppins'] text-sm sm:text-base">
            Complete your profile to join our community
          </p>
        </div>

        {/* Progress Bar Section */}
        <div className="flex flex-col justify-center items-center sm:items-end gap-2 px-4 sm:pr-7 w-full max-w-[902px] py-4 sm:h-[5.125rem] rounded-bl-lg rounded-br-lg border-0 border-gray-200 bg-white">
          {/* Progress Bar */}
          <div className="flex flex-col items-start gap-2.5 w-full sm:w-[90%] md:w-[849px] rounded-full border-0 border-gray-200 bg-gray-200">
            <div className="w-[65%] h-2 rounded-full border-0 border-gray-200 bg-green-700"></div>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between items-center w-full sm:w-[90%] md:w-[849px] border-0 border-gray-200 bg-black/0">
            <div className="text-gray-500 font-['Poppins'] text-xs sm:text-sm leading-[14px]">
              Personal Info
            </div>
            <div className="text-gray-500 font-['Poppins'] text-xs sm:text-sm leading-[14px]">
              Contact
            </div>
            <div className="text-gray-500 font-['Poppins'] text-xs sm:text-sm leading-[14px]">
              Verification
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="flex flex-col items-start p-4 sm:p-6 rounded-lg bg-white w-full max-w-[902px] mt-4 z-10 relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center w-full mb-4">
          <h2 className="text-black font-['Poppins'] text-xl">
            Personal Information
          </h2>
        </div>

        {/* First Row - Names */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full mb-4">
          {/* First Name */}
          <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[16.625rem]">
            <label
              htmlFor="firstName"
              className="text-gray-700 font-['Poppins'] text-sm"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              className="w-full h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm"
            />
          </div>

          {/* Middle Name */}
          <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[16.625rem]">
            <label
              htmlFor="middleName"
              className="text-gray-700 font-['Poppins'] text-sm"
            >
              Middle Name
            </label>
            <input
              id="middleName"
              type="text"
              className="w-full h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[16.625rem]">
            <label
              htmlFor="lastName"
              className="text-gray-700 font-['Poppins'] text-sm"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className="w-full h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm"
            />
          </div>
        </div>

        {/* Second Row - Date of Birth and Gender */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-4 gap-4">
          {/* Date of Birth */}
          <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[calc(50%-0.5rem)]">
            <label
              htmlFor="dob"
              className="text-gray-700 font-['Poppins'] text-sm"
            >
              Date of Birth
            </label>
            <div className="flex items-center gap-1 w-full h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2">
              <input
                id="dob"
                type="date"
                placeholder="mm/dd/yyyy"
                className="w-full h-full text-black/70 font-['Inter'] outline-none"
              />
            </div>
          </div>

          {/* Gender */}
          <div className="flex flex-col flex-shrink-0 justify-center items-start gap-1 w-full sm:w-[calc(50%-0.5rem)]">
            <label
              htmlFor="gender"
              className="text-gray-700 font-['Poppins'] text-sm"
            >
              Gender
            </label>
            <select
              id="gender"
              className="w-full h-8 sm:h-[1.5625rem] rounded-md border-[0.3px] border-gray-300 bg-white px-3 py-0 text-black/70 font-['Poppins'] appearance-none cursor-pointer"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Third Row - Nationality, State, LGA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full">
          {/* Nationality */}
          <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[16.625rem]">
            <label
              htmlFor="nationality"
              className="text-gray-700 font-['Poppins'] text-sm"
            >
              Nationality
            </label>
            <input
              id="nationality"
              type="text"
              className="w-full h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm"
            />
          </div>

          {/* State of Origin */}
          <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[16.625rem]">
            <label
              htmlFor="stateOfOrigin"
              className="text-gray-700 font-['Poppins'] text-sm"
            >
              State of Origin
            </label>
            <select
              id="stateOfOrigin"
              className="w-full h-8 sm:h-[1.5625rem] rounded-md border-[0.3px] border-gray-300 bg-white px-3 py-0 text-black/70 font-['Poppins'] appearance-none cursor-pointer"
              defaultValue="benue"
            >
              <option value="benue">Benue State</option>
              <option value="lagos">Lagos State</option>
              <option value="abuja">FCT Abuja</option>
              <option value="rivers">Rivers State</option>
            </select>
          </div>

          {/* Local Government Area */}
          <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[16.625rem]">
            <label
              htmlFor="lga"
              className="text-gray-700 font-['Poppins'] text-sm"
            >
              Local Government Area
            </label>
            <select
              id="lga"
              className="w-full h-8 sm:h-[1.5625rem] rounded-md border-[0.3px] border-gray-300 bg-white px-3 py-0 text-black/70 font-['Poppins'] appearance-none cursor-pointer"
            >
              <option value="">Select LGA</option>
              {/* LGA options will be populated based on selected state */}
            </select>
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="flex flex-col items-start p-4 sm:p-6 rounded-lg bg-white w-full max-w-[902px] mt-4 z-10 relative">
        {/* Section Title */}
        <div className="items-center mb-4 w-full">
          <h2 className="text-black font-['Poppins'] text-xl">
            Contact Details
          </h2>
        </div>

        {/* Email and Phone Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-4 gap-4">
          {/* Email Address */}
          <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[412px]">
            <label
              htmlFor="email"
              className="text-gray-700 font-['Poppins'] text-sm"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[412px]">
            <label
              htmlFor="phone"
              className="text-gray-700 font-['Poppins'] text-sm"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm"
            />
          </div>
        </div>

        {/* Password Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-4 gap-4">
          {/* Input Password */}
          <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[412px]">
            <label
              htmlFor="password"
              className="text-gray-700 font-['Poppins'] text-sm"
            >
              Input Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[412px]">
            <label
              htmlFor="confirmPassword"
              className="text-gray-700 font-['Poppins'] text-sm"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="w-full h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm"
            />
          </div>
        </div>

        {/* Current Address Section */}
        <div className="flex flex-col items-start w-full mb-4">
          <label
            htmlFor="street"
            className="text-gray-700 font-['Poppins'] text-sm mb-1"
          >
            Current Address
          </label>

          {/* Street Input */}
          <input
            id="street"
            type="text"
            placeholder="Street"
            className="w-full h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm mb-2 text-black placeholder-[#adaebc]"
          />

          {/* City, State, Country Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2">
            <input
              id="city"
              type="text"
              placeholder="City"
              className="w-full sm:w-[16.125rem] h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm text-black placeholder-[#adaebc] mb-2 sm:mb-0"
            />

            <input
              id="stateProvince"
              type="text"
              placeholder="State/Province"
              className="w-full sm:w-[15.5625rem] h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm text-black placeholder-[#adaebc] mb-2 sm:mb-0"
            />

            <select
              title="country"
              id="country"
              className="w-full sm:w-[16.625rem] h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm text-black appearance-none cursor-pointer"
            >
              <option value="">Select Country</option>
              <option value="ng">Nigeria</option>
              <option value="us">United States</option>
              <option value="gb">United Kingdom</option>
              <option value="ca">Canada</option>
              {/* Add more countries as needed */}
            </select>
          </div>
        </div>

        {/* Preferred Communication Mode */}
        <div className="flex flex-col items-start w-full mb-6">
          <p className="text-gray-700 font-['Poppins'] text-sm mb-2">
            Preferred Mode of Communication
          </p>

          <div className="flex flex-col gap-2 w-full">
            {/* Email Option */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="communicationMode"
                value="email"
                className="w-[0.8125rem] h-[0.8125rem] rounded-[0.0625rem] border-[0.5px] border-black"
              />
              <span className="text-gray-700 font-['Poppins'] text-sm">
                Email
              </span>
            </label>

            {/* Phone Option */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="communicationMode"
                value="phone"
                className="w-[0.8125rem] h-[0.8125rem] rounded-[0.0625rem] border-[0.5px] border-black"
              />
              <span className="text-gray-700 font-['Poppins'] text-sm">
                Phone
              </span>
            </label>

            {/* WhatsApp Option */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="communicationMode"
                value="whatsapp"
                className="w-[0.8125rem] h-[0.8125rem] rounded-[0.0625rem] border-[0.5px] border-black"
              />
              <span className="text-gray-700 font-['Poppins'] text-sm">
                WhatsApp
              </span>
            </label>

            {/* Portal Messaging Option */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="communicationMode"
                value="portalMessaging"
                className="w-[0.8125rem] h-[0.8125rem] rounded-[0.0625rem] border-[0.5px] border-black"
              />
              <span className="text-gray-700 font-['Poppins'] text-sm">
                Portal Messaging
              </span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end items-center w-full">
          <button
            type="button"
            className="py-2 px-4 rounded-md bg-green-600 text-white font-['Poppins'] text-sm"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
