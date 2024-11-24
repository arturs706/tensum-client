"use client";

import { useEffect } from "react";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Database,
  Cpu
} from "lucide-react";
import Lenis from "lenis";

const GridBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
};

const LandingPage = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section with Grid Background */}
      <GridBackground>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block text-gray-300">High-Performance</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-500">
                  Software Solutions
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Specializing in scalable web applications, mobile solutions, and
                low-latency systems for modern businesses.
              </p>
              <div className="mt-8 flex gap-4 justify-center">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                  Start Project <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10">
                  Technical Specs
                </button>
              </div>
            </div>
          </div>
        </div>
      </GridBackground>
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Technical Expertise
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Building high-performance solutions with cutting-edge technology
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Web Applications",
                description:
                  "Scalable, responsive web applications using React, Next.js, and modern frameworks.",
                features: [
                  "React & Next.js",
                  "Progressive Web Apps",
                  "Real-time Features",
                ],
              },
              {
                icon: <Smartphone className="h-6 w-6" />,
                title: "Mobile Apps",
                description:
                  "Native and cross-platform mobile applications with optimal performance.",
                features: [
                  "React Native",
                  "Native iOS/Android",
                  "Cross-platform Solutions",
                ],
              },
              {
                icon: <Database className="h-6 w-6" />,
                title: "System Architecture",
                description:
                  "Scalable system design and cloud infrastructure architecture.",
                features: [
                  "Microservices",
                  "Cloud-native Design",
                  "Distributed Systems",
                ],
              },
              {
                icon: <Cpu className="h-6 w-6" />,
                title: "Low Latency Backends",
                description:
                  "High-performance backend systems optimized for speed and reliability.",
                features: [
                  "Event-driven Architecture",
                  "Real-time Processing",
                  "Performance Optimization",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-700">
                    {service.icon}
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium">
                    <a href="#" className="focus:outline-none">
                      {service.title}
                      <span className="absolute inset-0" aria-hidden="true" />
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4 space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-gray-600">
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default LandingPage;
