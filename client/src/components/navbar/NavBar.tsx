"use client";

import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/auth");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold"
          prefetch={false}
        >
          <WalletIcon className="w-6 h-6" />
          <span>PocketLedger</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:underline" prefetch={false}>
            Dashboard
          </Link>
          <Link
            href="/transactions"
            className="hover:underline"
            prefetch={false}
          >
            Transactions
          </Link>
          <Link href="/budgets" className="hover:underline" prefetch={false}>
            Budgets
          </Link>
          <Link href="/reports" className="hover:underline" prefetch={false}>
            Reports
          </Link>
          <Link href="/settings" className="hover:underline" prefetch={false}>
            Settings
          </Link>
        </nav>
        <div className="hidden md:flex gap-2">
          <Button
            className="text-white border-white hover:bg-gray-800 hover:text-violet-600"
            onClick={handleNavigation}
          >
            Login
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link
                href="/"
                className="font-medium hover:underline"
                prefetch={false}
              >
                Dashboard
              </Link>
              <Link
                href="/transactions"
                className="font-medium hover:underline"
                prefetch={false}
              >
                Transactions
              </Link>
              <Link
                href="/budgets"
                className="font-medium hover:underline"
                prefetch={false}
              >
                Budgets
              </Link>
              <Link
                href="/reports"
                className="font-medium hover:underline"
                prefetch={false}
              >
                Reports
              </Link>
              <Link
                href="/settings"
                className="font-medium hover:underline"
                prefetch={false}
              >
                Settings
              </Link>
              <Button
                className="text-white border-white hover:bg-gray-800 hover:text-violet-600 mt-4"
                onClick={handleNavigation}
              >
                Login
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function WalletIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}
