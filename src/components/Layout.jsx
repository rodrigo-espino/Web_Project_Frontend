import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
const user = {
  name: "Tom Cook",
  imageUrl: "icon.png",
};
const navigation = [
  { name: "Home", href: "/", current: true, show: true },
  { name: "Gallery", href: "/gallery", current: false, show: false },
  { name: "VIP", href: "/vip", current: false, show: false },
  { name: "Party Room", href: "/party", current: false, show: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Layout({ children }) {

  const changeShow = (token) => {
    if(token){
      navigation.forEach((item) => {
        item.show = true;
      });
      setSession(true);
    }
  }

  const handleSignOut = () => {
    Cookies.remove("Session_Events");
    navigation.forEach((item) => {
      item.show = false;
      
    });
    setSession(false);
   window.location.reload();
  }

  const [session, setSession] = useState(false);

  const location = useLocation();
  useEffect(() => {
    navigation.forEach((item) => {
      if (item.href === location.pathname) {
        item.current = true;
      } else {
        item.current = false;
      }
      const token = Cookies.get("Session_Events");
    changeShow(token);
    });
  }, [location]);
  return (
    <>
      <div className="sticky top-0">
        <div className="min-h-full">
          <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                          alt="Your Company"
                        />
                      </div>
                      {
                        
                          <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "rounded-md px-3 py-2 text-sm font-medium",
                                item.show ? "" : "hidden"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                        
                      }
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        {/* Profile dropdown */}
                        {session ? (
                          <Menu as="div" className="relative ml-3">
                            <div>
                              <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={user.imageUrl}
                                  alt=""
                                />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                
                                  <Menu.Item>
                                    
                                      <button
                                        className={classNames(
                                          "block",
                                        "bg-gray-100",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                        onClick={handleSignOut}
                                      >
                                        Sign Out
                                      </button>
                                    
                                  </Menu.Item>
                                
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        ) : (
                          <div>
                            <a
                              href="/login"
                              className={classNames(
                                "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "rounded-md px-3 py-2 text-base font-medium"
                              )}
                            >
                              Log In
                            </a>
                            <a
                              href="/signup"
                              className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                            >
                              Sign Up
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                  <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  {session ? (
                    <div className="border-t border-gray-700 pt-4 pb-3">
                      <div className="mt-3 space-y-1 px-2">
                        
                          <Disclosure.Button
                            as="a"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                            onClick={handleSignOut}
                          >
                            Sign Out
                          </Disclosure.Button>
                        
                      </div>
                    </div>
                  ) : (
                    <div className="border-t border-gray-700 pt-4 pb-3">
                      <div className="mt-3 space-y-1 px-2">
                        <a
                        href="/login"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                        Log In
                        </a>
                        <a
                        href="/signup"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"

                        >
                        Sign Up
                        </a>
                      </div>
                    </div>
                  )}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
