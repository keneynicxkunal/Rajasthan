import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Home, 
  Trophy, 
  Music,
  Coffee,
  BookOpen,
  Dumbbell,
  Palette,
  Gamepad2,
  Camera,
  Mic,
  Heart,
  Star
} from 'lucide-react'
import Link from 'next/link'

const lifeAspects = [
  {
    title: "Hostel Life",
    description: "Comfortable and secure accommodation with modern amenities",
    icon: Home,
    href: "/student-life/hostels",
    features: ["AC Rooms", "Wi-Fi", "Mess", "Security", "Recreation"],
    color: "bg-blue-500"
  },
  {
    title: "Sports & Fitness",
    description: "State-of-the-art sports facilities and fitness programs",
    icon: Trophy,
    href: "/student-life/sports",
    features: ["Gym", "Sports Complex", "Coaching", "Tournaments", "Yoga"],
    color: "bg-green-500"
  },
  {
    title: "Clubs & Activities",
    description: "Diverse clubs and extracurricular activities for holistic development",
    icon: Music,
    href: "/student-life/clubs",
    features: ["Technical Clubs", "Cultural Clubs", "Sports Clubs", "Literary Clubs"],
    color: "bg-purple-500"
  }
]

const facilities = [
  {
    name: "Hostel Facilities",
    icon: Home,
    description: "Modern hostel buildings with all necessary amenities for comfortable living",
    stats: ["5 Hostels", "2000+ Capacity", "24/7 Security", "Medical Facility"]
  },
  {
    name: "Sports Complex",
    icon: Dumbbell,
    description: "Comprehensive sports infrastructure for various indoor and outdoor games",
    stats: ["Olympic Pool", "Gymnasium", "Athletics Track", "Multiple Courts"]
  },
  {
    name: "Student Centers",
    icon: Coffee,
    description: "Common areas for relaxation, study, and social interaction",
    stats: ["Cafeteria", "Library", "Game Room", "Study Lounges"]
  },
  {
    name: "Health & Wellness",
    icon: Heart,
    description: "Complete healthcare facilities and wellness programs for students",
    stats: ["Medical Center", "Counseling", "Yoga Classes", "Health Camps"]
  }
]

const clubs = [
  { name: "Coding Club", icon: BookOpen, members: 150, category: "Technical" },
  { name: "Robotics Club", icon: Gamepad2, members: 120, category: "Technical" },
  { name: "Music Club", icon: Music, members: 200, category: "Cultural" },
  { name: "Dance Club", icon: Users, members: 180, category: "Cultural" },
  { name: "Photography Club", icon: Camera, members: 100, category: "Creative" },
  { name: "Debate Club", icon: Mic, members: 80, category: "Literary" },
  { name: "Art Club", icon: Palette, members: 90, category: "Creative" },
  { name: "Sports Club", icon: Trophy, members: 250, category: "Sports" }
]

export default function StudentLifePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Student Life
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience vibrant campus life at Rajasthan Engineering University with excellent 
                hostel facilities, diverse sports activities, and numerous clubs for holistic development.
              </p>
            </div>
          </div>
        </section>

        {/* Life Aspects */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Life at REU
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the various aspects of student life that make REU a great place to learn and grow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {lifeAspects.map((aspect, index) => {
                const Icon = aspect.icon
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all cursor-pointer">
                    <Link href={aspect.href}>
                      <CardHeader className="text-center">
                        <div className={`${aspect.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-xl">{aspect.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{aspect.description}</p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {aspect.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                          Explore More
                        </Button>
                      </CardContent>
                    </Link>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Campus Facilities
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                World-class facilities designed to support your academic and personal growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((facility, index) => {
                const Icon = facility.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {facility.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {facility.description}
                      </p>
                      <div className="space-y-1">
                        {facility.stats.map((stat, idx) => (
                          <div key={idx} className="text-xs text-gray-500">
                            • {stat}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Student Clubs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Student Clubs & Organizations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join diverse clubs and organizations to pursue your interests and develop new skills
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clubs.map((club, index) => {
                const Icon = club.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {club.name}
                      </h3>
                      <Badge className="mb-2">{club.category}</Badge>
                      <p className="text-sm text-gray-600">
                        {club.members}+ Members
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="text-center mt-8">
              <Link href="/student-life/clubs">
                <Button size="lg">
                  Explore All Clubs
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Student Support */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Health & Wellness
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Comprehensive healthcare and counseling services for student well-being
                  </p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Academic Support
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Tutoring, mentoring, and resources to help you succeed academically
                  </p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Career Services
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Career counseling, internships, and placement assistance
                  </p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Vibrant Community
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Experience the perfect blend of academic excellence and exciting campus life at REU
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">
                Apply for Admission
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Campus Visit
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}