
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Team data 
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    position: "Position",
    image: "/hero.png"
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Position",
    image: "/hero.png"
  },
 
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 ${inter.className}">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm mb-6">
          <ol className="flex space-x-2">
            <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li>/</li>
            <li className="text-gray-600">About Us</li>
          </ol>
        </nav>

        {/* Hero Image Section */}
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-12">
          <Image
            src="/hero.png"
            alt="Our team working together"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white font-sans">About Us</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 font-sans">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6 font-sans">
              This is the about us content. we are network of diaspora members making a difference through investments, 
              knowledge sharing, and cultural preservation.
            </p>
            <p className="text-gray-600 leading-relaxed font-sans">
              Founded in YEAR, we have grown from a small local group to a recognized 
              organization serving NUMBER people annually.
            </p>
          </div>
          
          {/* Image component */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/hero.png"
              alt="Our office space"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Mission Section */}
        <section className="bg-blue-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 font-sans">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed font-sans">
           making a difference through investments, knowledge sharing, and cultural preservation.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 font-sans">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 text-gray-600">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}