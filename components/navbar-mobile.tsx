"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button, buttonVariants } from "./ui/button";
import { LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => onOpenChange?.(false)}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}

const NavbarMobile = ({ user }: { user: KindeUser<object> | null }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="flex md:hidden">
        <Button
          className={buttonVariants({
            variant: "outline",
            className: "text-gray-900",
          })}
        >
          Menu
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <SheetTitle>SlideGen</SheetTitle>

        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pr-10">
          <div className="flex flex-col space-y-3">
            <MobileLink href="/generate" onOpenChange={setOpen}>
              Generate
            </MobileLink>
            {user ? (
              <div className=" flex flex-col space-y-3">
                <MobileLink href="/dashboard">Dashboard</MobileLink>
                <LogoutLink className={buttonVariants()}>Log out</LogoutLink>
              </div>
            ) : (
              <div className="flex flex-col space-y-3">
                <LoginLink className={buttonVariants({ variant: "secondary" })}>
                  Login
                </LoginLink>
                <RegisterLink className={buttonVariants()}>
                  Sign up
                </RegisterLink>
              </div>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;
