import { Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Trainers() {
  const trainers = [
    {
      name: "Sarah Johnson",
      specialty: "Strength & Conditioning",
      experience: "8 years",
      image: "/trainer.jpg",
      bio: "Certified strength coach specializing in powerlifting and functional movement",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Mike Rodriguez",
      specialty: "HIIT & Boxing",
      experience: "6 years",
      image: "/trainer.jpg",
      bio: "Former professional boxer turned fitness trainer, expert in high-intensity workouts",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Emma Chen",
      specialty: "Yoga & Pilates",
      experience: "10 years",
      image: "/trainer.jpg",
      bio: "Yoga instructor and wellness coach focused on mind-body connection",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    }
  ]

  return (
    <section id="trainers" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-poppins">
            Meet Our <span className="text-red-600">Expert Trainers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our certified trainers are passionate about helping you reach your fitness goals with personalized guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Social Links Overlay */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={trainer.social.instagram} className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href={trainer.social.twitter} className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href={trainer.social.linkedin} className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {trainer.experience} exp
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-1">{trainer.name}</h3>
                <p className="text-red-600 font-medium mb-3">{trainer.specialty}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{trainer.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
            Book a Session
          </button>
        </div>
      </div>
    </section>
  )
}