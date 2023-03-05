import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { ReactComponent as LogoSVG } from '@/assets/logo.svg';

const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-white border-b select-none">
    <section className="kcz-container flex justify-between items-center h-16">
      <div className="flex items-center cursor-pointer">
        <LogoSVG className="w-6 h-6"/>
        <span className="text-xl ml-2 font-medium">kcz</span>
      </div>

      <nav className="hidden md:block">
        <ul className="flex text-sm">
          <li className="ml-4 cursor-pointer">
            <a>文档</a>
          </li>
          <li className="ml-4 cursor-pointer">
            <a>示例</a>
          </li>
          <li className="ml-4 text-gray-400">
            |
          </li>
          <li className="ml-4 cursor-pointer">
            <a className="px-3 py-2 bg-black rounded text-white">Github</a>
          </li>
        </ul>
      </nav>

      <Menu as="div" className="md:hidden relative">
        <Menu.Button className="outline-none">
          <Bars3Icon className="w-6 h-6" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg outline-none">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-900 text-white' : 'text-gray-900'
                  } flex w-full rounded-md px-2 py-2 text-sm`}
                >
                  文档
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-900 text-white' : 'text-gray-900'
                  } flex w-full rounded-md px-2 py-2 text-sm`}
                >
                  示例
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </section>

  </header>
);

export default Header;
