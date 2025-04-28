"use client";

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface RegisterFormData {
  first_name: string;
  middle_name: string;
  last_name: string;
  dob: string;
  gender: string;
  nationality: string;
  state_of_origin: string;
  lga: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  street: string;
  city: string;
  province: string;
  country: string;
  preferred_modes: string[];
}

export default function Register() {
  const router = useRouter();
  const { register, isAuthenticated, loading, user } = useAuth();
  const [step, setStep] = useState<number>(1); // 1: Personal Info, 2: Contact, 3: Verification
  const [formLoading, setFormLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [authChecked, setAuthChecked] = useState<boolean>(false);
  
  // Debug: Log auth state
  useEffect(() => {
    console.log("Auth state in Register:", {
      loading,
      user,
      token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
      isAuthenticated: isAuthenticated(),
      authChecked
    });
  }, [loading, user, isAuthenticated, authChecked]);
  
  // If already authenticated, redirect to dashboard
  useEffect(() => {
    // Only check authentication after the auth context has finished loading
    if (!loading) {
      const authenticated = isAuthenticated();
      console.log("Authentication check completed:", authenticated);
      
      if (authenticated) {
        console.log("Redirecting to dashboard...");
        router.push("/dashboard");
      } else {
        console.log("Not authenticated, showing register form");
      }
      setAuthChecked(true);
    }
  }, [router, isAuthenticated, loading]);

  const [formData, setFormData] = useState<RegisterFormData>({
    first_name: "",
    middle_name: "",
    last_name: "",
    dob: "",
    gender: "male",
    nationality: "",
    state_of_origin: "",
    lga: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    street: "",
    city: "",
    province: "",
    country: "",
    preferred_modes: []
  });

  // Skip rendering until authentication is checked
  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        <div className="ml-3 text-gray-700">Checking authentication...</div>
      </div>
    );
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      const checked = target.checked;
      const checkboxValue = target.value;
      
      // Handle checkbox for preferred communication modes
      const updatedModes = checked 
        ? [...formData.preferred_modes, checkboxValue]
        : formData.preferred_modes.filter(mode => mode !== checkboxValue);
        
      setFormData(prev => ({
        ...prev,
        preferred_modes: updatedModes
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validateStep = (currentStep: number): boolean => {
    // Basic validation
    if (currentStep === 1) {
      if (!formData.first_name || !formData.last_name || !formData.dob) {
        setError("Please fill all required fields");
        return false;
      }
    } else if (currentStep === 2) {
      if (!formData.email || !formData.phone || !formData.password) {
        setError("Please fill all required fields");
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return false;
      }
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError("Please enter a valid email address");
        return false;
      }
      // Phone validation
      if (formData.phone.length < 10) {
        setError("Please enter a valid phone number");
        return false;
      }
    }
    
    setError("");
    return true;
  };

  const nextStep = (): void => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = (): void => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateStep(2)) {
      return;
    }
    
    setFormLoading(true);
    
    try {
      // Use the register function from context instead of direct fetch
      const result = await register(formData);
  
      if (result.success) {
        // Move to the success step
        setStep(3);
        
        // After a short delay, redirect to login page
        setTimeout(() => {
          router.push("/login?registered=true");
        }, 3000);
      } else {
        setError(result.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
      console.error("Registration error:", err);
    } finally {
      setFormLoading(false);
    }
  };

  // Nigerian states for dropdown
  const nigerianStates: string[] = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", 
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT Abuja", "Gombe", 
    "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", 
    "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", 
    "Taraba", "Yobe", "Zamfara"
  ];

  // Sample LGA data - would be dynamic based on state selection in a real app
  const lgasByState: Record<string, string[]> = {
    "Benue": ["Ado", "Agatu", "Apa", "Buruku", "Gboko", "Guma", "Gwer East", "Gwer West", 
              "Katsina-Ala", "Konshisha", "Kwande", "Logo", "Makurdi", "Obi", "Ogbadibo", 
              "Ohimini", "Oju", "Okpokwu", "Otukpo", "Tarka", "Ukum", "Ushongo", "Vandeikya"],
    "Lagos": ["Alimosho", "Ajeromi-Ifelodun", "Kosofe", "Mushin", "Oshodi-Isolo", "Ojo", 
              "Ikorodu", "Surulere", "Agege", "Ifako-Ijaiye", "Shomolu", "Amuwo-Odofin", 
              "Lagos Mainland", "Ikeja", "Eti-Osa", "Badagry", "Apapa", "Lagos Island", "Epe", "Ibeju-Lekki"],
  };

  // Get LGAs based on selected state
  const getLGAs = (): string[] => {
    const state = formData.state_of_origin;
    return lgasByState[state] || [];
  };

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
            <div 
              className={`h-2 rounded-full border-0 border-gray-200 bg-green-700`}
              style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
            ></div>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between items-center w-full sm:w-[90%] md:w-[849px] border-0 border-gray-200 bg-black/0">
            <div className={`font-['Poppins'] text-xs sm:text-sm leading-[14px] ${step >= 1 ? "text-green-700 font-medium" : "text-gray-500"}`}>
              Personal Info
            </div>
            <div className={`font-['Poppins'] text-xs sm:text-sm leading-[14px] ${step >= 2 ? "text-green-700 font-medium" : "text-gray-500"}`}>
              Contact
            </div>
            <div className={`font-['Poppins'] text-xs sm:text-sm leading-[14px] ${step >= 3 ? "text-green-700 font-medium" : "text-gray-500"}`}>
              Verification
            </div>
          </div>
        </div>
      </div>

      {/* Error display */}
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-md w-full max-w-[902px] mt-4 z-10">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Information Section */}
        {step === 1 && (
          <div className="flex flex-col items-start p-4 sm:p-6 rounded-lg bg-white w-full max-w-[902px] mt-4 z-10 relative mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <div className="flex items-center w-full mb-4">
              <h2 className="text-black font-['Poppins'] text-xl">
                Personal Information
              </h2>
            </div>

            {/* Form fields remain the same */}
            {/* ... */}
            
            {/* First Row - Names */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full mb-4">
              {/* First Name */}
              <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[16.625rem]">
                <label
                  htmlFor="first_name"
                  className="text-gray-700 font-['Poppins'] text-sm"
                >
                  First Name *
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="w-full h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm"
                />
              </div>

              {/* Middle Name */}
              <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[16.625rem]">
                <label
                  htmlFor="middle_name"
                  className="text-gray-700 font-['Poppins'] text-sm"
                >
                  Middle Name
                </label>
                <input
                  id="middle_name"
                  name="middle_name"
                  type="text"
                  value={formData.middle_name}
                  onChange={handleChange}
                  className="w-full h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[16.625rem]">
                <label
                  htmlFor="last_name"
                  className="text-gray-700 font-['Poppins'] text-sm"
                >
                  Last Name *
                </label>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
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
                  Date of Birth *
                </label>
                <div className="flex items-center gap-1 w-full h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2">
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleChange}
                    required
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
                  Gender *
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full h-8 sm:h-[1.5625rem] rounded-md border-[0.3px] border-gray-300 bg-white px-3 py-0 text-black/70 font-['Poppins'] appearance-none cursor-pointer"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Third Row - Nationality, State, LGA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full mb-6">
              {/* Nationality */}
              <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[16.625rem]">
                <label
                  htmlFor="nationality"
                  className="text-gray-700 font-['Poppins'] text-sm"
                >
                  Nationality *
                </label>
                <input
                  id="nationality"
                  name="nationality"
                  type="text"
                  value={formData.nationality}
                  onChange={handleChange}
                  required
                  className="w-full h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm"
                />
              </div>

              {/* State of Origin */}
              <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[16.625rem]">
                <label
                  htmlFor="state_of_origin"
                  className="text-gray-700 font-['Poppins'] text-sm"
                >
                  State of Origin *
                </label>
                <select
                  id="state_of_origin"
                  name="state_of_origin"
                  value={formData.state_of_origin}
                  onChange={handleChange}
                  required
                  className="w-full h-8 sm:h-[1.5625rem] rounded-md border-[0.3px] border-gray-300 bg-white px-3 py-0 text-black/70 font-['Poppins'] appearance-none cursor-pointer"
                >
                  <option value="">Select State</option>
                  {nigerianStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* Local Government Area */}
              <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[16.625rem]">
                <label
                  htmlFor="lga"
                  className="text-gray-700 font-['Poppins'] text-sm"
                >
                  Local Government Area *
                </label>
                <select
                  id="lga"
                  name="lga"
                  value={formData.lga}
                  onChange={handleChange}
                  required
                  className="w-full h-8 sm:h-[1.5625rem] rounded-md border-[0.3px] border-gray-300 bg-white px-3 py-0 text-black/70 font-['Poppins'] appearance-none cursor-pointer"
                >
                  <option value="">Select LGA</option>
                  {getLGAs().map(lga => (
                    <option key={lga} value={lga}>{lga}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-end items-center w-full">
              <button
                type="button"
                onClick={nextStep}
                className="py-2 px-4 rounded-md bg-green-600 text-white font-['Poppins'] text-sm"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Steps 2 and 3 remain the same */}
        {/* ... */}
        {/* Step 2: Contact Details Section */}
        {step === 2 && (
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
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[412px]">
                <label
                  htmlFor="phone"
                  className="text-gray-700 font-['Poppins'] text-sm"
                >
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
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
                  Input Password *
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm"
                />
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-[412px]">
                <label
                  htmlFor="confirmPassword"
                  className="text-gray-700 font-['Poppins'] text-sm"
                >
                  Confirm Password *
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
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
                Current Address *
              </label>

              {/* Street Input */}
              <input
                id="street"
                name="street"
                type="text"
                placeholder="Street"
                value={formData.street}
                onChange={handleChange}
                required
                className="w-full h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm mb-2 text-black placeholder-[#adaebc]"
              />

              {/* City, State, Country Row */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2">
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full sm:w-[16.125rem] h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm text-black placeholder-[#adaebc] mb-2 sm:mb-0"
                />

                <input
                  id="province"
                  name="province"
                  type="text"
                  placeholder="State/Province"
                  value={formData.province}
                  onChange={handleChange}
                  required
                  className="w-full sm:w-[15.5625rem] h-8 sm:h-6 rounded-md border-[0.3px] border-gray-300 bg-white px-2 text-sm text-black placeholder-[#adaebc] mb-2 sm:mb-0"
                />

                <select
                  title="country"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
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
                Preferred Mode of Communication *
              </p>

              <div className="flex flex-col gap-2 w-full">
                {/* Email Option */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="communicationMode"
                    value="email"
                    checked={formData.preferred_modes.includes('email')}
                    onChange={handleChange}
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
                    checked={formData.preferred_modes.includes('phone')}
                    onChange={handleChange}
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
                    checked={formData.preferred_modes.includes('whatsapp')}
                    onChange={handleChange}
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
                    checked={formData.preferred_modes.includes('portalMessaging')}
                    onChange={handleChange}
                    className="w-[0.8125rem] h-[0.8125rem] rounded-[0.0625rem] border-[0.5px] border-black"
                  />
                  <span className="text-gray-700 font-['Poppins'] text-sm">
                    Portal Messaging
                  </span>
                </label>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center w-full">
              <button
                type="button"
                onClick={prevStep}
                className="py-2 px-4 rounded-md bg-gray-300 text-gray-700 font-['Poppins'] text-sm"
              >
                Back
              </button>
              
              <button
                type="submit"
                disabled={formLoading}
                className="py-2 px-4 rounded-md bg-green-600 text-white font-['Poppins'] text-sm disabled:bg-green-400"
              >
                {formLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Success or Verification Message */}
        {step === 3 && (
          <div className="flex flex-col items-center p-4 sm:p-6 rounded-lg bg-white w-full max-w-[902px] mt-4 z-10 relative">
            <div className="text-center mb-4">
              <h2 className="text-black font-['Poppins'] text-xl mb-2">
                Registration Complete!
              </h2>
              <p className="text-gray-600">
                Thank you for registering with BESDDLI Diaspora. Your information has been submitted successfully.
              </p>
            </div>
            
            <div className="mt-6">
              <Link 
                href="/login" 
                className="py-2 px-4 rounded-md bg-green-600 text-white font-['Poppins'] text-sm"
              >
                Continue to Login
              </Link>
            </div>
          </div>
        )}
      </form>
    </div>
  )};