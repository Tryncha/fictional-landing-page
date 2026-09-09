'use client';

import Image from 'next/image';
import { useId, useState } from 'react';

const Subscription = () => {
  const firstNameId = useId();
  const lastNameId = useId();
  const emailId = useId();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isError, setIsError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    // handle custom validation...
    // setIsError(false);

    if (!isError) {
      setShowSuccessMessage(true);
    }
  }

  return (
    <section
      id="subscription-section"
      className="flex w-full flex-col items-center justify-center py-8 text-justify"
    >
      <h2 className="text-2xl font-semibold">Subscribe to get every update!</h2>
      <p className="text-center">Don&apos;t miss any release.</p>

      <div className="flex items-center gap-8">
        <Image
          src="/books.webp"
          alt="Two books"
          width={500}
          height={500}
          className="hidden xl:block"
        />

        <div className="flex flex-col">
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-4"
          >
            <div className="flex flex-col">
              <label
                htmlFor={firstNameId}
                className="text-sm"
              >
                First Name
              </label>
              <input
                id={firstNameId}
                type="text"
                className="h-8 w-xs rounded-md border border-cyan-700 bg-white px-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor={lastNameId}
                className="text-sm"
              >
                Last Name
              </label>
              <input
                id={lastNameId}
                type="text"
                className="h-8 w-xs rounded-md border border-cyan-700 bg-white px-2"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor={emailId}
                className="text-sm"
              >
                Email
              </label>
              <input
                id={emailId}
                type="email"
                className="h-8 w-xs rounded-md border border-cyan-700 bg-white px-2"
                required
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-cyan-700 px-4 py-2 text-lg font-medium text-white transition-transform hover:scale-105 hover:cursor-pointer"
            >
              Subscribe!
            </button>
          </form>

          {/* Subscription Notification */}
          {showSuccessMessage && (
            <span className="mt-2 w-full text-center font-bold text-cyan-800">Subscription successfull!</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
