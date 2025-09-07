import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Award, 
  GraduationCap, 
  Building,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react'

const administration = {
  chancellor: {
    name: "Dr. Rajendra Kumar Sharma",
    position: "Chancellor",
    qualification: "Ph.D. in Mechanical Engineering",
    experience: "40+ years in academia and research",
    achievements: [
      "Fellow of Indian National Academy of Engineering",
      "Recipient of Padma Shri for contributions to education",
      "Published 200+ research papers",
      "Guided 50+ Ph.D. scholars"
    ],
    image: "https://z-cdn-media.chatglm.cn/files/f786bb9d-fd0c-4dd7-831e-da8500096595_1592816798phpQDBzOl.png?auth_key=1788703866-15915bde74f142a6954430969a89f3cf-0-eb33eff22e29aab97d592cf465a81b4e"
  },
  viceChancellor: {
    name: "Dr. Priya Singh",
    position: "Vice Chancellor",
    qualification: "Ph.D. in Computer Science Engineering",
    experience: "25+ years in academic administration",
    achievements: [
      "Ex-Dean of IIT Delhi",
      "Expert in Artificial Intelligence and Machine Learning",
      "100+ International publications",
      "Industry consultant for Fortune 500 companies"
    ],
    image: "https://z-cdn-media.chatglm.cn/files/2cf1fddc-9521-419a-ae39-27d4fa2e339c_rajasthan-technical-university-rtu-kota-1200x675.jpg?auth_key=1788703866-6c1a20c19a714988a4a3c07a6cfcaccb-0-d152d0712f6934461efdd49b19c59e89"
  }
}

const deans = [
  {
    name: "Dr. Amit Patel",
    position: "Dean of Academic Affairs",
    department: "Computer Science Engineering",
    email: "dean.academic@reu.ac.in",
    phone: "+91 123-456-7891"
  },
  {
    name: "Dr. Sunita Reddy",
    position: "Dean of Research & Development",
    department: "Electrical Engineering",
    email: "dean.research@reu.ac.in",
    phone: "+91 123-456-7892"
  },
  {
    name: "Dr. Rajesh Kumar",
    position: "Dean of Student Welfare",
    department: "Mechanical Engineering",
    email: "dean.students@reu.ac.in",
    phone: "+91 123-456-7893"
  },
  {
    name: "Dr. Meena Sharma",
    position: "Dean of Industry Relations",
    department: "Electronics Engineering",
    email: "dean.industry@reu.ac.in",
    phone: "+91 123-456-7894"
  }
]

const heads = [
  {
    name: "Dr. Vikram Singh",
    position: "Head of Department",
    department: "Computer Science Engineering",
    email: "hod.cse@reu.ac.in"
  },
  {
    name: "Dr. Anjali Gupta",
    position: "Head of Department",
    department: "Electrical Engineering",
    email: "hod.ee@reu.ac.in"
  },
  {
    name: "Dr. Rahul Verma",
    position: "Head of Department",
    department: "Mechanical Engineering",
    email: "hod.me@reu.ac.in"
  },
  {
    name: "Dr. Pooja Mishra",
    position: "Head of Department",
    department: "Electronics Engineering",
    email: "hod.ec@reu.ac.in"
  },
  {
    name: "Dr. Sanjay Kumar",
    position: "Head of Department",
    department: "Civil Engineering",
    email: "hod.ce@reu.ac.in"
  },
  {
    name: "Dr. Neha Singh",
    position: "Head of Department",
    department: "Chemical Engineering",
    email: "hod.che@reu.ac.in"
  }
]

export default function AdministrationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Administration
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet our distinguished leadership team committed to excellence in engineering education and research
              </p>
            </div>
          </div>
        </section>

        {/* Top Leadership */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Top Leadership
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Visionary leaders guiding our institution toward excellence
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Chancellor */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200">
                  <img
                    src={administration.chancellor.image}
                    alt={administration.chancellor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {administration.chancellor.name}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {administration.chancellor.position}
                      </p>
                    </div>
                    <Badge className="bg-purple-500 text-white">
                      <Award className="h-4 w-4 mr-1" />
                      Chancellor
                    </Badge>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      {administration.chancellor.qualification}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {administration.chancellor.experience}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {administration.chancellor.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Vice Chancellor */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200">
                  <img
                    src={administration.viceChancellor.image}
                    alt={administration.viceChancellor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {administration.viceChancellor.name}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {administration.viceChancellor.position}
                      </p>
                    </div>
                    <Badge className="bg-blue-500 text-white">
                      <Award className="h-4 w-4 mr-1" />
                      Vice Chancellor
                    </Badge>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      {administration.viceChancellor.qualification}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {administration.viceChancellor.experience}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {administration.viceChancellor.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Deans */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Deans
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Academic leaders overseeing key areas of university administration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deans.map((dean, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {dean.name}
                        </h3>
                        <p className="text-primary font-medium mb-2">
                          {dean.position}
                        </p>
                        <p className="text-gray-600 text-sm mb-3">
                          {dean.department}
                        </p>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm text-gray-600">
                            <Mail className="h-4 w-4 mr-2" />
                            {dean.email}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Phone className="h-4 w-4 mr-2" />
                            {dean.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Department Heads */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Department Heads
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Leaders of academic departments driving excellence in their respective fields
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {heads.map((head, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {head.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {head.position}
                    </p>
                    <p className="text-gray-600 text-sm mb-3">
                      {head.department}
                    </p>
                    <div className="flex items-center justify-center text-sm text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      {head.email}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Administration */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white border-primary/20">
              <CardHeader className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">Contact Administration</h2>
                <p className="text-gray-600">Get in touch with our administrative team</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center justify-center space-x-3">
                    <Building className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">Administration Block</p>
                      <p className="text-sm text-gray-600">REU Campus</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">+91 123-456-7890</p>
                      <p className="text-sm text-gray-600">Mon-Fri, 9AM-5PM</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">admin@reu.ac.in</p>
                      <p className="text-sm text-gray-600">Email Support</p>
                    </div>
                  </div>
                </div>
                <Button size="lg">
                  Schedule a Meeting
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}