// INVOICES > PAGE.TSX

import Pagination from '@/app/ui/invoices/pagination'; // navigate between pages of invoices.
import Search from '@/app/ui/search'; // search for specific invoices.
import Table from '@/app/ui/invoices/table'; // displays the invoices.
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';


// export default function Page() {
//   return <p>Invoices Page</p>;
// }

// Your search functionality will span the client and the server. 
// you'll be using URL search params to manage the search state.
// When a user searches for an invoice on the client, 
// the URL params will be updated, data will be fetched on the server, 
// and the table will re-render on the server with the new data.

// Page components accept a prop called searchParams, so you can pass the current URL params to the <Table> component.
export default async function Page({ 
    searchParams, 
  }: { 
    searchParams?: { 
      query?: string; 
      page?: string; 
    };
  }) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}