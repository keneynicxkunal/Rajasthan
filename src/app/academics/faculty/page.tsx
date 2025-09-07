import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Users, 
  Mail, 
  Phone, 
  Award,
  BookOpen,
  Target,
  GraduationCap,
  Star,
  MessageSquare
} from 'lucide-react'

const facultyData = {
  "Computer Science Engineering": [
    {
      id: 1,
      name: "Dr. Vikram Singh",
      position: "Professor & HOD",
      qualification: "Ph.D. (IIT Delhi), M.Tech, B.Tech",
      experience: "20+ years",
      specialization: "Artificial Intelligence, Machine Learning",
      publications: 85,
      email: "vikram.singh@reu.ac.in",
      phone: "+91 123-456-7891",
      image: "https://z-cdn-media.chatglm.cn/files/d53bfb15-fbcb-436c-8953-ae2fe52d4ce6_1490672731php4JWbaj.jpeg?auth_key=1788703866-8facb3963044476aa3b6622e0368bdda-0-aadf0b30d97e761124cbbdfa078d1b99",
      achievements: ["Best Teacher Award 2023", "IEEE Senior Member", "Research Excellence Award"]
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      position: "Professor",
      qualification: "Ph.D. (NIT Trichy), M.Tech, B.Tech",
      experience: "18+ years",
      specialization: "Data Science, Big Data Analytics",
      publications: 72,
      email: "priya.sharma@reu.ac.in",
      phone: "+91 123-456-7892",
      image: "https://z-cdn-media.chatglm.cn/files/f786bb9d-fd0c-4dd7-831e-da8500096595_1592816798phpQDBzOl.png?auth_key=1788703866-15915bde74f142a6954430969a89f3cf-0-eb33eff22e29aab97d592cf465a81b4e",
      achievements: ["Young Scientist Award", "Google Research Grant", "Patent Holder"]
    },
    {
      id: 3,
      name: "Dr. Rahul Kumar",
      position: "Associate Professor",
      qualification: "Ph.D. (IIT Bombay), M.Tech, B.Tech",
      experience: "15+ years",
      specialization: "Cybersecurity, Network Security",
      publications: 58,
      email: "rahul.kumar@reu.ac.in",
      phone: "+91 123-456-7893",
      image: "https://z-cdn-media.chatglm.cn/files/2cf1fddc-9521-419a-ae39-27d4fa2e339c_rajasthan-technical-university-rtu-kota-1200x675.jpg?auth_key=1788703866-6c1a20c19a714988a4a3c07a6cfcaccb-0-d152d0712f6934461efdd49b19c59e89",
      achievements: ["Cybersecurity Expert", "Industry Consultant", "Workshop Organizer"]
    }
  ],
  "Electrical Engineering": [
    {
      id: 4,
      name: "Dr. Anjali Gupta",
      position: "Professor & HOD",
      qualification: "Ph.D. (IIT Kanpur), M.Tech, B.Tech",
      experience: "22+ years",
      specialization: "Power Systems, Renewable Energy",
      publications: 95,
      email: "anjali.gupta@reu.ac.in",
      phone: "+91 123-456-7894",
      image: "https://z-cdn-media.chatglm.cn/files/d53bfb15-fbcb-436c-8953-ae2fe52d4ce6_1490672731php4JWbaj.jpeg?auth_key=1788703866-8facb3963044476aa3b6622e0368bdda-0-aadf0b30d97e761124cbbdfa078d1b99",
      achievements: ["Power System Expert", "Research Excellence", "Industry Collaboration"]
    },
    {
      id: 5,
      name: "Dr. Sunil Verma",
      position: "Professor",
      qualification: "Ph.D. (IIT Madras), M.Tech, B.Tech",
      experience: "19+ years",
      specialization: "Control Systems, Automation",
      publications: 68,
      email: "sunil.verma@reu.ac.in",
      phone: "+91 123-456-7895",
      image: "https://z-cdn-media.chatglm.cn/files/f786bb9d-fd0c-4dd7-831e-da8500096595_1592816798phpQDBzOl.png?auth_key=1788703866-15915bde74f142a6954430969a89f3cf-0-eb33eff22e29aab97d592cf465a81b4e",
      achievements: ["Control Systems Expert", "Automation Specialist", "Patent Holder"]
    }
  ],
  "Mechanical Engineering": [
    {
      id: 6,
      name: "Dr. Rahul Verma",
      position: "Professor & HOD",
      qualification: "Ph.D. (IIT Roorkee), M.Tech, B.Tech",
      experience: "21+ years",
      specialization: "Thermal Engineering, Design",
      publications: 88,
      email: "rahul.verma@reu.ac.in",
      phone: "+91 123-456-7896",
      image: "https://z-cdn-media.chatglm.cn/files/2cf1fddc-9521-419a-ae39-27d4fa2e339c_rajasthan-technical-university-rtu-kota-1200x675.jpg?auth_key=1788703866-6c1a20c19a714988a4a3c07a6cfcaccb-0-d152d0712f6934461efdd49b19c59e89",
      achievements: ["Thermal Research Expert", "Design Innovation", "Industry Projects"]
    },
    {
      id: 7,
      name: "Dr. Neha Singh",
      position: "Associate Professor",
      qualification: "Ph.D. (NIT Warangal), M.Tech, B.Tech",
      experience: "16+ years",
      specialization: "Manufacturing, CAD/CAM",
      publications: 62,
      email: "neha.singh@reu.ac.in",
      phone: "+91 123-456-7897",
      image: "https://z-cdn-media.chatglm.cn/files/d53bfb15-fbcb-436c-8953-ae2fe52d4ce6_1490672731php4JWbaj.jpeg?auth_key=1788703866-8facb3963044476aa3b6622e0368bdda-0-aadf0b30d97e761124cbbdfa078d1b99",
      achievements: ["Manufacturing Expert", "CAD/CAM Specialist", "Industry Consultant"]
    }
  ],
  "Electronics Engineering": [
    {
      id: 8,
      name: "Dr. Pooja Mishra",
      position: "Professor & HOD",
      qualification: "Ph.D. (IIT Delhi), M.Tech, B.Tech",
      experience: "20+ years",
      specialization: "VLSI Design, Embedded Systems",
      publications: 78,
      email: "pooja.mishra@reu.ac.in",
      phone: "+91 123-456-7898",
      image: "https://z-cdn-media.chatglm.cn/files/f786bb9d-fd0c-4dd7-831e-da8500096595_1592816798phpQDBzOl.png?auth_key=1788703866-15915bde74f142a6954430969a89f3cf-0-eb33eff22e29aab97d592cf465a81b4e",
      achievements: ["VLSI Design Expert", "Embedded Systems Specialist", "Research Excellence"]
    }
  ],
  "Civil Engineering": [
    {
      id: 9,
      name: "Dr. Sanjay Kumar",
      position: "Professor & HOD",
      qualification: "Ph.D. (IIT Kharagpur), M.Tech, B.Tech",
      experience: "23+ years",
      specialization: "Structural Engineering, Construction",
      publications: 92,
      email: "sanjay.kumar@reu.ac.in",
      phone: "+91 123-456-7899",
      image: "https://z-cdn-media.chatglm.cn/files/2cf1fddc-9521-419a-ae39-27d4fa2e339c_rajasthan-technical-university-rtu-kota-1200x675.jpg?auth_key=1788703866-6c1a20c19a714988a4a3c07a6cfcaccb-0-d152d0712f6934461efdd49b19c59e89",
      achievements: ["Structural Engineering Expert", "Construction Management", "Industry Projects"]
    }
  ],
  "Chemical Engineering": [
    {
      id: 10,
      name: "Dr. Neha Singh",
      position: "Professor & HOD",
      qualification: "Ph.D. (IIT Bombay), M.Tech, B.Tech",
      experience: "18+ years",
      specialization: "Process Design, Chemical Engineering",
      publications: 65,
      email: "neha.singh@reu.ac.in",
      phone: "+91 123-456-7900",
      image: "https://z-cdn-media.chatglm.cn/files/d53bfb15-fbcb-436c-8953-ae2fe52d4ce6_1490672731php4JWbaj.jpeg?auth_key=1788703866-8facb3963044476aa3b6622e0368bdda-0-aadf0b30d97e761124cbbdfa078d1b99",
      achievements: ["Process Design Expert", "Chemical Engineering Specialist", "Environmental Research"]
    }
  ]
}

export default function FacultyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Faculty & Staff
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet our distinguished faculty members who are experts in their fields, dedicated to providing 
                quality education and mentoring the next generation of engineers.
              </p>
            </div>
          </div>
        </section>

        {/* Faculty Statistics */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-gray-600">Faculty Members</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <div className="text-gray-600">Ph.D. Holders</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">1500+</div>
                  <div className="text-gray-600">Research Papers</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">Awards & Honors</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Faculty by Department */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Faculty by Department
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse our faculty members organized by their respective departments
              </p>
            </div>

            <Tabs defaultValue="Computer Science Engineering" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                {Object.keys(facultyData).map((dept) => (
                  <TabsTrigger key={dept} value={dept} className="text-xs">
                    {dept.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(facultyData).map(([department, faculty]) => (
                <TabsContent key={department} value={department}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {faculty.map((member) => (
                      <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-all">
                        <div className="aspect-square bg-gray-200">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">
                                {member.name}
                              </h3>
                              <p className="text-primary font-medium text-sm">
                                {member.position}
                              </p>
                            </div>
                            {member.position.includes("HOD") && (
                              <Badge className="bg-blue-500 text-white">HOD</Badge>
                            )}
                          </div>
                          
                          <div className="space-y-2 mb-4">
                            <div className="text-sm text-gray-600">
                              <strong>Qualification:</strong> {member.qualification}
                            </div>
                            <div className="text-sm text-gray-600">
                              <strong>Experience:</strong> {member.experience}
                            </div>
                            <div className="text-sm text-gray-600">
                              <strong>Specialization:</strong> {member.specialization}
                            </div>
                            <div className="text-sm text-gray-600">
                              <strong>Publications:</strong> {member.publications}
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Contact:</h4>
                            <div className="space-y-1">
                              <div className="flex items-center text-sm text-gray-600">
                                <Mail className="h-4 w-4 mr-2" />
                                {member.email}
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <Phone className="h-4 w-4 mr-2" />
                                {member.phone}
                              </div>
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Achievements:</h4>
                            <div className="flex flex-wrap gap-1">
                              {member.achievements.map((achievement, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {achievement}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              Contact
                            </Button>
                            <Button variant="outline" size="sm">
                              <BookOpen className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Faculty Excellence */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5" />
                    <span>Research Excellence</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-semibold">Publications</h4>
                        <p className="text-sm text-gray-600">1500+ research papers in international journals</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-semibold">Patents</h4>
                        <p className="text-sm text-gray-600">50+ patents filed and granted</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-semibold">Funding</h4>
                        <p className="text-sm text-gray-600">₹10+ Crore in research funding</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5" />
                    <span>Awards & Recognition</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-semibold">Best Teacher Awards</h4>
                        <p className="text-sm text-gray-600">15+ faculty members recognized</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-semibold">Research Excellence</h4>
                        <p className="text-sm text-gray-600">25+ research excellence awards</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-semibold">Industry Recognition</h4>
                        <p className="text-sm text-gray-600">30+ industry awards and honors</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Join Our Faculty */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white border-primary/20">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Join Our Faculty
                </h2>
                <p className="text-gray-600 mb-6">
                  We are always looking for passionate educators and researchers to join our team. 
                  If you are committed to excellence in engineering education, we would love to hear from you.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg">
                    View Openings
                  </Button>
                  <Button variant="outline" size="lg">
                    Submit Resume
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
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