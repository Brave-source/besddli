"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProtectedRoute from '@/components/ProtectedRoute';
import { User } from '@/types/auth';
import { useAuth } from '@/context/AuthContext';


export default function Dashboard() {
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState<User | null>(null);
  
  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <div className="block h-8 w-auto">
                      <Image
                        src="/images/logo.png"
                        alt="BESDDLI Logo"
                        width={150}
                        height={50}
                        className="cursor-pointer"
                      />
                    </div>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <div className="px-3 py-2 text-sm font-medium text-gray-900">Dashboard</div>
                  <div className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">Profile</div>
                  <div className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">Settings</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  <span className="text-sm text-gray-700 mr-4">Welcome, {userData.first_name || userData.name}</span>
                  <button
                    onClick={logout}
                    className="px-3 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="px-4 py-8 sm:px-0">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Member Information</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and contact information.</p>
                  </div>
                  <div className="border-t border-gray-200">
                    <dl>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Full name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.first_name || ''} {userData.middle_name || ''} {userData.last_name || ''}
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Email address</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.email}</dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Phone number</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.phone || userData.phone_number}</dd>
                      </div>
                      {userData.gender && (
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">Gender</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {userData.gender.charAt(0).toUpperCase() + userData.gender.slice(1)}
                          </dd>
                        </div>
                      )}
                      {userData.preferred_communication && (
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">Preferred communication</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {
                              typeof userData.preferred_communication === 'string' 
                                ? JSON.parse(userData.preferred_communication).join(', ')
                                : Array.isArray(userData.preferred_communication)
                                  ? userData.preferred_communication.join(', ') 
                                  : 'Not specified'
                            }
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>
                </div>
                
                <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Member Status</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Your current membership status information.</p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900">Your membership is active</h3>
                        <div className="text-sm text-gray-500">
                          <p>You have full access to all member benefits.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}