import React from "react";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { buttonVariants } from "../ui/button";
import { Card } from "../ui/card";
import Image from "next/image";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100">
      <MaxWidthWrapper>
        <div className="grid lg:grid-cols-2 items-center">
          <div className="lg:text-left text-center">
            <h1 className="mb-6 text-4xl font-black leading-tight text-gray-900 lg:text-6xl">
              Generate educational{" "}
              <span className="text-violet-600">Powerpoints</span> from YouTube
              videos.
            </h1>
            <p className="mb-9 text-lg text-gray-600">
              An online tool for teachers that allows you to convert educational
              YouTube videos into engaging presentations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <RegisterLink
                href="/"
                className={buttonVariants({
                  className: "w-full sm:w-auto",
                })}
              >
                Get started
              </RegisterLink>
              <LoginLink
                href="/"
                className={buttonVariants({
                  variant: "secondary",
                  className: "w-full sm:w-auto",
                })}
              >
                Generate Powerpoint
              </LoginLink>
            </div>
          </div>
          <div>
            <Card className="overflow-hidden shadow-2xl">
              <Image
                src="/lecture-1.jpg"
                className="w-full h-auto object-cover"
                alt="hero image"
                width={600}
                height={600}
              />
            </Card>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
