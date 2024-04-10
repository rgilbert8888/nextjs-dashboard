// Adding loading skeletons
import DashboardSkeleton from '@/app/ui/skeletons';

// Example of streaming a whole page with loading.tsx file

// loading.tsx is a special Next.js file built on top of Suspense,
// it allows you to create fallback UI to show as a replacement while page content loads.

export default function Loading() {
//   return <div>Loading...</div>;
    return <DashboardSkeleton />;
}