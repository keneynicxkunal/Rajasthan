import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Trophy, 
  Dumbbell, 
  Users, 
  Calendar,
  Target,
  Award,
  Clock,
  Star,
  CheckCircle,
  Play,
  Zap,
  Bike,
  Swimming,
  Volleyball,
  Cricket,
  Football,
  Basketball,
  TableTennis,
  Chess
} from 'lucide-react'

const sportsFacilities = [
  {
    name: "Olympic Size Swimming Pool",
    icon: Swimming,
    description: "8-lane Olympic standard swimming pool with modern filtration system",
    features: ["8 Lanes", "Modern Filtration", "Changing Rooms", "Coaching Available"],
    image: "https://z-cdn-media.chatglm.cn/files/d53bfb15-fbcb-436c-8953-ae2fe52d4ce6_1490672731php4JWbaj.jpeg?auth_key=1788703866-8facb3963044476aa3b6622e0368bdda-0-aadf0b30d97e761124cbbdfa078d1b99"
  },
  {
    name: "Multipurpose Sports Complex",
    icon: Dumbbell,
    description: "Indoor sports complex for various games and fitness activities",
    features: ["Badminton Courts", "Basketball Court", "Table Tennis", "Gymnasium"],
    image: "https://z-cdn-media.chatglm.cn/files/f786bb9d-fd0c-4dd7-831e-da8500096595_1592816798phpQDBzOl.png?auth_key=1788703866-15915bde74f142a6954430969a89f3cf-0-eb33eff22e29aab97d592cf465a81b4e"
  },
  {
    name: "Athletics Track",
    icon: Zap,
    description: "400m synthetic athletics track with field event facilities",
    features: ["400m Track", "Long Jump", "High Jump", "Shot Put"],
    image: "https://z-cdn-media.chatglm.cn/files/2cf1fddc-9521-419a-ae39-27d4fa2e339c_rajasthan-technical-university-rtu-kota-1200x675.jpg?auth_key=1788703866-6c1a20c19a714988a4a3c07a6cfcaccb-0-d152d0712f6934461efdd49b19c59e89"
  },
  {
    name: "Football Ground",
    icon: Football,
    description: "Professional football ground with natural grass and seating",
    features: ["Natural Grass", "Flood Lights", "Changing Rooms", "Seating Gallery"],
    image: "https://z-cdn-media.chatglm.cn/files/d53bfb15-fbcb-436c-8953-ae2fe52d4ce6_1490672731php4JWbaj.jpeg?auth_key=1788703866-8facb3963044476aa3b6622e0368bdda-0-aadf0b30d97e761124cbbdfa078d1b99"
  }
]

const sportsPrograms = [
  {
    name: "Cricket Academy",
    icon: Cricket,
    description: "Professional cricket coaching with expert trainers",
    schedule: "Mon-Sat: 6AM-8AM, 4PM-6PM",
    coach: "Mr. Rajesh Singh (Ex-Ranji Player)",
    achievements: ["University Champions 2023", "Inter-college Winners"]
  },
  {
    name: "Basketball Training",
    icon: Basketball,
    description: "Basketball skills development and team training",
    schedule: "Mon-Fri: 5PM-7PM",
    coach: "Ms. Priya Sharma (National Player)",
    achievements: ["State Level Runners-up", "Best Team Spirit Award"]
  },
  {
    name: "Swimming Classes",
    icon: Swimming,
    description: "Learn swimming from basic to advanced levels",
    schedule: "Mon-Sat: 6AM-8AM, 3PM-5PM",
    coach: "Mr. Amit Kumar (National Coach)",
    achievements: ["25 National Medals", "Olympic Qualifier Coach"]
  },
  {
    name: "Athletics Coaching",
    icon: Zap,
    description: "Track and field events coaching with modern techniques",
    schedule: "Mon-Sat: 6AM-8AM",
    coach: "Dr. Sunita Reddy (Arjuna Awardee)",
    achievements: ["15 University Records", "National Champions"]
  }
]

const tournaments = [
  {
    name: "REU Sports Fest 2024",
    date: "2024-03-15 to 2024-03-20",
    type: "Annual Sports Festival",
    sports: ["Cricket", "Football", "Basketball", "Volleyball", "Athletics"],
    participants: "2000+ Students",
    status: "Upcoming"
  },
  {
    name: "Inter-Department Cricket Tournament",
    date: "2024-02-01 to 2024-02-10",
    type: "Department Competition",
    sports: ["Cricket"],
    participants: "12 Teams",
    status: "Completed"
  },
  {
    name: "Basketball League",
    date: "2024-02-15 to 2024-02-25",
    type: "League Tournament",
    sports: ["Basketball"],
    participants: "8 Teams",
    status: "Ongoing"
  },
  {
    name: "Athletics Meet",
    date: "2024-01-20",
    type: "Annual Meet",
    sports: ["Track & Field Events"],
    participants: "500+ Athletes",
    status: "Completed"
  }
]

const achievements = [
  {
    title: "University Champions",
    description: "Won overall championship in Rajasthan Technical University Sports Meet 2023",
    year: "2023",
    medal: "🏆"
  },
  {
    title: "Cricket Excellence",
    description: "Cricket team won state-level inter-university tournament",
    year: "2023",
    medal: "🥇"
  },
  {
    title: "Swimming Glory",
    description: "Swimming team secured 15 medals in national university games",
    year: "2023",
    medal: "🏅"
  },
  {
    title: "Athletics Records",
    description: "Broke 5 university records in various track and field events",
    year: "2023",
    medal: "⭐"
  }
]

export default function SportsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sports & Fitness
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience world-class sports facilities and coaching at Rajasthan Engineering University. 
                Promoting physical fitness and sportsmanship through comprehensive programs.
              </p>
            </div>
          </div>
        </section>

        {/* Sports Facilities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sports Facilities
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                State-of-the-art sports infrastructure for various indoor and outdoor games
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sportsFacilities.map((facility, index) => {
                const Icon = facility.icon
                return (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="aspect-video bg-gray-200">
                      <img
                        src={facility.image}
                        alt={facility.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                        <h3 className="text-xl font-bold text-gray-900">{facility.name}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{facility.description}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {facility.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        View Gallery
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Sports Programs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sports Programs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional coaching and training programs for various sports
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sportsPrograms.map((program, index) => {
                const Icon = program.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Icon className="h-10 w-10 text-primary mt-1" />
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {program.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {program.description}
                          </p>
                          
                          <div className="space-y-2 mb-3">
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="h-4 w-4 mr-2" />
                              {program.schedule}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Users className="h-4 w-4 mr-2" />
                              Coach: {program.coach}
                            </div>
                          </div>

                          <div className="mb-3">
                            <h4 className="font-semibold text-gray-900 mb-1">Achievements:</h4>
                            <div className="flex flex-wrap gap-1">
                              {program.achievements.map((achievement, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {achievement}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Button variant="outline" size="sm">
                            Join Program
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Tournaments & Events */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tournaments & Events
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Regular tournaments and sporting events throughout the year
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tournaments.map((tournament, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {tournament.name}
                        </h3>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          {tournament.date}
                        </div>
                        <Badge className={
                          tournament.status === "Upcoming" ? "bg-blue-500" :
                          tournament.status === "Ongoing" ? "bg-yellow-500" : "bg-green-500"
                        }>
                          {tournament.status}
                        </Badge>
                      </div>
                      <Trophy className="h-8 w-8 text-primary" />
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Type:</span>
                        <span className="text-gray-600 ml-2">{tournament.type}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Sports:</span>
                        <span className="text-gray-600 ml-2">{tournament.sports.join(", ")}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Participants:</span>
                        <span className="text-gray-600 ml-2">{tournament.participants}</span>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Achievements
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Celebrating excellence in sports and athletics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{achievement.medal}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {achievement.description}
                    </p>
                    <Badge>{achievement.year}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white border-primary/20">
              <CardContent className="p-8 text-center">
                <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Join Our Sports Community
                </h2>
                <p className="text-gray-600 mb-6">
                  Whether you're a seasoned athlete or just starting out, we have programs and facilities 
                  for everyone. Join our vibrant sports community and stay fit while having fun!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Sports Officer</h4>
                    <p className="text-gray-600">Mr. Vikram Singh</p>
                    <p className="text-sm text-gray-500">+91 123-456-7898</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Sports Office</h4>
                    <p className="text-gray-600">sports@reu.ac.in</p>
                    <p className="text-sm text-gray-500">9AM-6PM</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Gym Timings</h4>
                    <p className="text-gray-600">5AM-9AM, 4PM-9PM</p>
                    <p className="text-sm text-gray-500">All Days</p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg">
                    Register for Sports
                  </Button>
                  <Button variant="outline" size="lg">
                    View Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}