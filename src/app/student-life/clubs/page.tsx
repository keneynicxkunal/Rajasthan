import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Users, 
  Calendar, 
  Target, 
  Award,
  Star,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  BookOpen,
  Gamepad2,
  Music,
  Palette,
  Camera,
  Mic,
  Dumbbell,
  Heart,
  Code,
  Drama,
  Coffee,
  Lightbulb
} from 'lucide-react'

const clubs = [
  {
    name: "Coding Club",
    category: "Technical",
    icon: Code,
    description: "Learn programming, participate in hackathons, and work on innovative projects",
    members: 150,
    meeting: "Every Friday, 4PM-6PM",
    coordinator: "Dr. Vikram Singh",
    contact: "coding@reu.ac.in",
    achievements: ["Winner - Hackathon 2023", "50+ Projects", "Tech Workshop Series"],
    activities: ["Coding Competitions", "Workshops", "Hackathons", "Guest Lectures"]
  },
  {
    name: "Robotics Club",
    category: "Technical",
    icon: Gamepad2,
    description: "Design, build, and program robots for various competitions and projects",
    members: 120,
    meeting: "Every Saturday, 2PM-5PM",
    coordinator: "Dr. Priya Sharma",
    contact: "robotics@reu.ac.in",
    achievements: ["National Robotics Medal", "IIT Tech Fest Winner", "Patent Filed"],
    activities: ["Robot Building", "Programming", "Competitions", "Research Projects"]
  },
  {
    name: "Music Club",
    category: "Cultural",
    icon: Music,
    description: "Explore various genres of music, learn instruments, and perform at events",
    members: 200,
    meeting: "Every Wednesday, 5PM-7PM",
    coordinator: "Mr. Rajesh Kumar",
    contact: "music@reu.ac.in",
    achievements: ["Best Performance - Cultural Fest", "Inter-college Winner", "Album Released"],
    activities: ["Music Classes", "Performances", "Jam Sessions", "Music Production"]
  },
  {
    name: "Dance Club",
    category: "Cultural",
    icon: Drama,
    description: "Learn various dance forms and participate in cultural events and competitions",
    members: 180,
    meeting: "Every Tuesday & Thursday, 5PM-7PM",
    coordinator: "Ms. Anjali Gupta",
    contact: "dance@reu.ac.in",
    achievements: ["State Level Champions", "Cultural Fest Winners", "Reality Show Participants"],
    activities: ["Dance Classes", "Choreography", "Performances", "Workshops"]
  },
  {
    name: "Photography Club",
    category: "Creative",
    icon: Camera,
    description: "Capture moments, learn photography techniques, and showcase your work",
    members: 100,
    meeting: "Every Saturday, 10AM-12PM",
    coordinator: "Dr. Rahul Verma",
    contact: "photography@reu.ac.in",
    achievements: ["Photo Exhibition", "Magazine Features", "Competition Winners"],
    activities: ["Photo Walks", "Workshops", "Exhibitions", "Competitions"]
  },
  {
    name: "Debate Club",
    category: "Literary",
    icon: Mic,
    description: "Enhance your public speaking and critical thinking skills through debates",
    members: 80,
    meeting: "Every Monday, 4PM-6PM",
    coordinator: "Dr. Pooja Mishra",
    contact: "debate@reu.ac.in",
    achievements: ["National Debate Winners", "MUN Participants", "Youth Parliament"],
    activities: ["Debates", "MUN", "Youth Parliament", "Public Speaking"]
  },
  {
    name: "Art Club",
    category: "Creative",
    icon: Palette,
    description: "Express creativity through various art forms and participate in exhibitions",
    members: 90,
    meeting: "Every Friday, 3PM-5PM",
    coordinator: "Ms. Neha Singh",
    contact: "art@reu.ac.in",
    achievements: ["Art Exhibition", "Campus Beautification", "Competition Winners"],
    activities: ["Painting", "Sculpture", "Digital Art", "Exhibitions"]
  },
  {
    name: "Sports Club",
    category: "Sports",
    icon: Dumbbell,
    description: "Promote fitness and organize various sports activities and tournaments",
    members: 250,
    meeting: "Daily, 6AM-8AM & 5PM-7PM",
    coordinator: "Mr. Sunil Kumar",
    contact: "sports@reu.ac.in",
    achievements: ["Inter-university Champions", "Tournament Organizers", "Fitness Camps"],
    activities: ["Sports Training", "Tournaments", "Fitness Programs", "Yoga Sessions"]
  }
]

const events = [
  {
    name: "Tech Fest 2024",
    date: "2024-03-15",
    type: "Technical",
    description: "Annual technical festival with coding competitions, workshops, and tech talks",
    clubs: ["Coding Club", "Robotics Club"],
    participants: "1000+"
  },
  {
    name: "Cultural Fiesta",
    date: "2024-02-20",
    type: "Cultural",
    description: "Celebration of music, dance, drama, and cultural diversity",
    clubs: ["Music Club", "Dance Club", "Art Club"],
    participants: "1500+"
  },
  {
    name: "Sports Meet",
    date: "2024-01-25",
    type: "Sports",
    description: "Annual sports competition with various athletic events",
    clubs: ["Sports Club"],
    participants: "800+"
  },
  {
    name: "Art Exhibition",
    date: "2024-02-10",
    type: "Creative",
    description: "Showcase of artistic talents and creative works",
    clubs: ["Art Club", "Photography Club"],
    participants: "500+"
  }
]

const benefits = [
  {
    title: "Skill Development",
    description: "Learn new skills and enhance existing ones through club activities",
    icon: Target
  },
  {
    title: "Networking",
    description: "Connect with like-minded individuals and build professional relationships",
    icon: Users
  },
  {
    title: "Leadership",
    description: "Develop leadership skills by organizing events and managing teams",
    icon: Award
  },
  {
    title: "Portfolio Building",
    description: "Build an impressive portfolio with projects and achievements",
    icon: Star
  }
]

export default function ClubsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Student Clubs & Organizations
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover your passion and join vibrant student clubs at Rajasthan Engineering University. 
                From technical to cultural, there's something for everyone!
              </p>
            </div>
          </div>
        </section>

        {/* Clubs Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Clubs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore diverse clubs catering to different interests and passions
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="cultural">Cultural</TabsTrigger>
                <TabsTrigger value="creative">Creative</TabsTrigger>
                <TabsTrigger value="sports">Sports</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {clubs.map((club, index) => (
                    <ClubCard key={index} club={club} />
                  ))}
                </div>
              </TabsContent>

              {["technical", "cultural", "creative", "sports"].map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clubs
                      .filter(club => club.category.toLowerCase() === category)
                      .map((club, index) => (
                        <ClubCard key={index} club={club} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join exciting events organized by various student clubs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {event.name}
                        </h3>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <Badge className={
                          event.type === "Technical" ? "bg-blue-500" :
                          event.type === "Cultural" ? "bg-purple-500" :
                          event.type === "Sports" ? "bg-green-500" : "bg-orange-500"
                        }>
                          {event.type}
                        </Badge>
                      </div>
                      <Star className="h-8 w-8 text-primary" />
                    </div>

                    <p className="text-gray-600 text-sm mb-3">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Participating Clubs:</span>
                        <span className="text-gray-600 ml-2">{event.clubs.join(", ")}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Expected Participants:</span>
                        <span className="text-gray-600 ml-2">{event.participants}</span>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Benefits of Joining Clubs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the advantages of being part of student clubs and organizations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Start New Club */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white border-primary/20">
              <CardContent className="p-8 text-center">
                <Lightbulb className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Start Your Own Club
                </h2>
                <p className="text-gray-600 mb-6">
                  Have an idea for a new club? We encourage students to start new clubs and organizations. 
                  Get support from the university and build a community around your passion!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Requirements</h4>
                    <p className="text-gray-600 text-sm">25+ Members, Faculty Advisor, Constitution</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Support</h4>
                    <p className="text-gray-600 text-sm">Funding, Space, Equipment, Mentorship</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Process</h4>
                    <p className="text-gray-600 text-sm">Proposal → Review → Approval → Launch</p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg">
                    Start New Club
                  </Button>
                  <Button variant="outline" size="lg">
                    Download Guidelines
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

function ClubCard({ club }: { club: any }) {
  const Icon = club.icon
  return (
    <Card className="hover:shadow-lg transition-all">
      <CardContent className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Icon className="h-10 w-10 text-primary" />
          <div>
            <h3 className="text-lg font-bold text-gray-900">{club.name}</h3>
            <Badge className="text-xs">{club.category}</Badge>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{club.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            {club.members}+ Members
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            {club.meeting}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Achievements:</h4>
          <div className="flex flex-wrap gap-1">
            {club.achievements.map((achievement: string, idx: number) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {achievement}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">
            <div className="font-medium">Coordinator: {club.coordinator}</div>
            <div className="flex items-center mt-1">
              <Mail className="h-3 w-3 mr-1" />
              {club.contact}
            </div>
          </div>
        </div>

        <Button variant="outline" size="sm" className="w-full">
          Join Club
        </Button>
      </CardContent>
    </Card>
  )
}