'use client';

import { useId } from 'react';

const Subscription = () => {
  const firstNameId = useId();
  const lastNameId = useId();
  const emailId = useId();

  return (
    <section className="flex w-full flex-col items-center justify-center gap-1 py-8 text-justify">
      <h2 className="text-2xl font-semibold">Subscribe to get every update!</h2>
      <p className="text-center">Don&apos;t miss any release.</p>

      <form className="mt-8 flex flex-col gap-4">
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
          />
        </div>

        <button
          type="submit"
          onClick={(e) => e.preventDefault()}
          className="rounded-full bg-cyan-700 px-4 py-2 text-lg font-medium text-white hover:cursor-pointer"
        >
          Subscribe!
        </button>
      </form>
    </section>
  );
};

export default Subscription;
