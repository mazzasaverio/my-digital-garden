"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import ModeToggle from "./mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";

export function SiteHeader() {
  const { isSignedIn } = useAuth();
  console.log(isSignedIn);
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MobileNav />
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4 lg:space-x-4">
          <div className="hidden md:inline">
            <ModeToggle />
          </div>

          <nav className="flex items-center">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <Button size="sm" variant="outline" asChild className="mr-2">
                  <Link href="/sign-in">Accedi</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/sign-up">Registrati</Link>
                </Button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
