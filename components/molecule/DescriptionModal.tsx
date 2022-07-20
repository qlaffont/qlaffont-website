import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, useState } from 'react';

export const DescriptionModal = ({ description }: { description: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button type="button" onClick={openModal} className="pl-1 pb-1 align-middle" aria-label="open description modal">
        <i className="icon icon-info-circle block h-4 w-4 bg-sky-500 hover:opacity-50" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" flex w-full max-w-md transform gap-2 overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-[#1E1D24]">
                  <div className="grow">
                    <p>{description}</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="rounded-full bg-gray-100 p-1 hover:opacity-50 dark:bg-[#151519]"
                      onClick={closeModal}
                      aria-label="close modal"
                    >
                      <i className={clsx('icon icon-close mask-center block h-3 w-3 bg-white')} />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
