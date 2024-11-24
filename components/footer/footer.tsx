import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold">Start Your Project</h2>
            <p className="mt-4 text-lg text-gray-400">
              Let's discuss your technical requirements and build something
              great together
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-400" />
                <span className="ml-3 text-gray-300">London, UK</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-400" />
                <span className="ml-3 text-gray-300">info@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-400" />
                <span className="ml-3 text-gray-300">+44 7 4601 62893</span>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-700 bg-black/50 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-700 bg-black/50 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="project" className="block text-sm font-medium">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  className="mt-1 block w-full rounded-md border-gray-700 bg-black/50 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option>Web Application</option>
                  <option>Mobile App</option>
                  <option>System Architecture</option>
                  <option>Backend Development</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-700 bg-black/50 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
