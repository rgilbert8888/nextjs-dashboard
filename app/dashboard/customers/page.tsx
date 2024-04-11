// CUSTOMERS > PAGE.TSX
import { fetchAllCustomers } from '@/app/lib/data';
import NewCustomersTable from '@/app/ui/customers/customers-table';

export default async function Page() {
  const customers = await fetchAllCustomers();
  return (
    <NewCustomersTable />
  )
}