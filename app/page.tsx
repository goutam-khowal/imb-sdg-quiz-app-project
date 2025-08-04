"use client";

import React, { useEffect } from "react";
import { Impact } from "@/components/Impact";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FactsCards } from "@/components/FactsCards";
import { Quiz } from "@/components/Quiz";
import { Poll } from "@/components/Poll";
import { Footer } from "@/components/Footer";

const Home = () => {
  useEffect(() => {
    // Add smooth scrolling CSS
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FactsCards />
      <Quiz />
      <Poll />
      <Impact />
      <Footer />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Home;
