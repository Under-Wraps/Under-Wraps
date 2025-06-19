
// Under Wraps Website - Built with React and TailwindCSS
// Mobile-friendly, SEO-optimized, and social media ready

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: 'url(/hero-car.jpg)' }}>
        <div className="bg-black/70 p-8 rounded-xl max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold">FOR CARS THAT DON’T CONFORM</h1>
          <p className="text-lg mt-4">Premium Vinyl Wraps for Retro Restorations</p>
          <Button className="mt-6 text-black bg-white hover:bg-gray-200">Shop Wraps</Button>
        </div>
      </section>
      {/* Other Sections Omitted for Brevity */}
    </main>
  );
}
