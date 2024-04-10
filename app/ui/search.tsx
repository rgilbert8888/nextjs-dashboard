'use client'; // <-- This is a Client Component, which means you can use event listeners and hooks.

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  // update URL with search term - Import the useSearchParams hook from 'next/navigation', 
  // and assign it to a variable:
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const { replace } = useRouter();

  // The handle search function
  // function handleSearch(term: string) {
  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    // create a new URLSearchParams instance using your new searchParams variable.
    const params = new URLSearchParams(searchParams);
    // when the user types a new search query, you want to reset the page number to 1. 
    params.set('page', '1');
    
    if(term) {
      // set params string based on users input
      params.set('query', term);
    } else {
      // if no input, delete the params
      params.delete('query');
    }
    // use the replace method from useRouter(), pass it pathname variable
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      {/* The Search Input */}
      <input
        id="search"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}

        // To ensure the input field is in sync with the URL and will be populated when sharing, you can pass a defaultValue to input by reading from searchParams
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
