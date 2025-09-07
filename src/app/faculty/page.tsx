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
  BookOpen,
  Award,
  Star,
  GraduationCap,
  Target,
  Calendar,
  CheckCircle,
  Search,
  Filter
} from 'lucide-react'

const facultyByDepartment = {
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
      achievements: ["Best Teacher Award 2023", "IEEE Senior Member", "Research Excellence Award"],
      research: "AI, Machine Learning, Data Science, Cybersecurity"
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
      achievements: ["Young Scientist Award", "Google Research Grant", "Patent Holder"],
      research: "Big Data Analytics, Data Mining, Machine Learning"
    }
  ],
  "Electrical Engineering": [
    {
      id: 3,
      name: "Dr. Anjali Gupta",
      position: "Professor & HOD",
      qualification: "Ph.D. (IIT Kanpur), M.Tech, B.Tech",
      experience: "22+ years",
      specialization: "Power Systems, Renewable Energy",
      publications: 95,
      email: "anjali.gupta@reu.ac.in",
      phone: "+91 123-456-7894",
      image: "https://z-cdn-media.chatglm.cn/files/2cf1fddc-9521-419a-ae39-27d4fa2e339c_rajasthan-technical-university-rtu-kota-1200x675.jpg?auth_key=1788703866-6c1a20c19a714988a4a3c07a6cfcaccb-0-d152d0712f6934461efdd49b19c59e89",
      achievements: ["Power System Expert", "Research Excellence", "Industry Collaboration"],
      research: "Power Systems, Renewable Energy, Smart Grid"
    }
  ],
  "Mechanical Engineering": [
    {
      id: 4,
      name: "Dr. Rahul Verma",
      position: "Professor & HOD",
      qualification: "Ph.D. (IIT Roorkee), M.Tech, B.Tech",
      experience: "21+ years",
      specialization: "Thermal Engineering, Design",
      publications: 88,
      email: "rahul.verma@reu.ac.in",
      phone: "+91 123-456-7896",
      image: "https://z-cdn-media.chatglm.cn/files/d53bfb15-fbcb-436c-8953-ae2fe52d4ce6_1490672731php4JWbaj.jpeg?auth_key=1788703866-8facb3963044476aa3b6622e0368bdda-0-aadf0b30d97e761124cbbdfa078d1b99",
      achievements: ["Thermal Research Expert", "Design Innovation", "Industry Projects"],
      research: "Thermal Engineering, Design Engineering, Manufacturing"
    }
  ],
  "Electronics Engineering": [
    {
      id: 5,
      name: "Dr. Pooja Mishra",
      position: "Professor & HOD",
      qualification: "Ph.D. (IIT Delhi), M.Tech, B.Tech",
      experience: "20+ years",
      specialization: "VLSI Design, Embedded Systems",
      publications: 78,
      email: "pooja.mishra@reu.ac.in",
      phone: "+91 123-456-7898",
      image: "https://z-cdn-media.chatglm.cn/files/f786bb9d-fd0c-4dd7-831e-da8500096595_1592816798phpQDBzOl.png?auth_key=1788703866-15915bde74f142a6954430969a89f3cf-0-eb33eff22e29aab97d592cf465a81b4e",
      achievements: ["VLSI Design Expert", "Embedded Systems Specialist", "Research Excellence"],
      research: "VLSI Design, Embedded Systems, Signal Processing"
    }
  ],
  "Civil Engineering": [
    {
      id: 6,
      name: "Dr. Sanjay Kumar",
      position: "Professor & HOD",
      qualification: "Ph.D. (IIT Kharagpur), M.Tech, B.Tech",
      experience: "23+ years",
      specialization: "Structural Engineering, Construction",
      publications: 92,
      email: "sanjay.kumar@reu.ac.in",
      phone: "+91 123-456-7899",
      image: "https://z-cdn-media.chatglm.cn/files/2cf1fddc-9521-419a-ae39-27d4fa2e339c_rajasthan-technical-university-rtu-kota-1200x675.jpg?auth_key=1788703866-6c1a20c19a714988a4a3c07a6cfcaccb-0-d152d0712f6934461efdd49b19c59e89",
      achievements: ["Structural Engineering Expert", "Construction Management", "Industry Projects"],
      research: "Structural Engineering, Construction Technology, Environmental Engineering"
    }
  ],
  "Chemical Engineering": [
    {
      id: 7,
      name: "Dr. Neha Singh",
      position: "Professor & HOD",
      qualification: "Ph.D. (IIT Bombay), M.Tech, B.Tech",
      experience: "18+ years",
      specialization: "Process Design, Chemical Engineering",
      publications: 65,
      email: "neha.singh@reu.ac.in",
      phone: "+91 123-456-7900",
      image: "https://z-cdn-media.chatglm.cn/files/d53bfb15-fbcb-436c-8953-ae2fe52d4ce6_1490672731php4JWbaj.jpeg?auth_key=1788703866-8facb3963044476aa3b6622e0368bdda-0-aadf0b30d97e761124cbbdfa078d1b99",
      achievements: ["Process Design Expert", "Chemical Engineering Specialist", "Environmental Research"],
      research: "Process Design, Chemical Process Engineering, Environmental Engineering"
    }
  ]
}

const staffByCategory = [
  {
    category: "Administration",
    members: [
      {
        name: "Dr. Rajendra Kumar Sharma",
        position: "Chancellor",
        department: "Administration",
        email: "chancellor@reu.ac.in",
        phone: "+91 123-456-7800"
      },
      {
        name: "Dr. Priya Singh",
        position: "Vice Chancellor",
        department: "Administration",
        email: "vc@reu.ac.in",
        phone: "+91 123-456-7801"
      }
    ]
  },
  {
    category: "Technical Staff",
    members: [
      {
        name: "Mr. Sunil Verma",
        position: "Senior Technical Officer",
        department: "Computer Science",
        email: "sunil.tech@reu.ac.in",
        phone: "+91 123-456-7810"
      },
      {
        name: "Ms. Anjali Patel",
        position: "Lab Technician",
        department: "Electrical Engineering",
        email: "anjali.tech@reu.ac.in",
        phone: "+91 123-456-7811"
      }
    ]
  },
  {
    category: "Support Staff",
    members: [
      {
        name: "Mr. Rajesh Kumar",
        position: "Librarian",
        department: "Library",
        email: "library@reu.ac.in",
        phone: "+91 123-456-7820"
      },
      {
        name: "Ms. Sunita Reddy",
        position: "Hostel Warden",
        department: "Student Welfare",
        email: "hostel@reu.ac.in",
        phone: "+91 123-456-7821"
      }
    ]
  }
]

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
                Meet our distinguished faculty members and dedicated staff who are committed to 
                providing quality education and support to our students.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
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
              <Card className="text-center">
                <CardContent className="p-6">
                  <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <div className="text-gray-600">Ph.D. Holders</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Faculty & Staff Directory */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Faculty & Staff Directory
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse our comprehensive directory of faculty members and staff by department
              </p>
            </div>

            <Tabs defaultValue="faculty" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
                <TabsTrigger value="faculty">Faculty</TabsTrigger>
                <TabsTrigger value="staff">Staff</TabsTrigger>
              </TabsList>

              <TabsContent value="faculty">
                <div className="space-y-8">
                  {Object.entries(facultyByDepartment).map(([department, faculty]) => (
                    <div key={department}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b">
                        {department}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {faculty.map((member) => (
                          <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-all">
                            <div className="aspect-video bg-gray-200">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                                    {member.name}
                                  </h4>
                                  <p className="text-primary font-medium mb-1">
                                    {member.position}
                                  </p>
                                  <p className="text-sm text-gray-600">
                                    {member.qualification}
                                  </p>
                                </div>
                                {member.position.includes("HOD") && (
                                  <Badge className="bg-blue-500 text-white">HOD</Badge>
                                )}
                              </div>
                              
                              <div className="space-y-2 mb-4 text-sm">
                                <div className="flex items-center text-gray-600">
                                  <Target className="h-4 w-4 mr-2" />
                                  {member.specialization}
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <Calendar className="h-4 w-4 mr-2" />
                                  {member.experience}
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <BookOpen className="h-4 w-4 mr-2" />
                                  {member.publications} Publications
                                </div>
                              </div>

                              <div className="mb-4">
                                <h5 className="font-semibold text-gray-900 mb-2">Research Areas:</h5>
                                <p className="text-sm text-gray-600">{member.research}</p>
                              </div>

                              <div className="mb-4">
                                <h5 className="font-semibold text-gray-900 mb-2">Achievements:</h5>
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
                                  <Mail className="h-4 w-4 mr-1" />
                                  Email
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Phone className="h-4 w-4" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="staff">
                <div className="space-y-8">
                  {staffByCategory.map((category) => (
                    <div key={category.category}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b">
                        {category.category}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.members.map((member, index) => (
                          <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6 text-center">
                              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-primary" />
                              </div>
                              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                                {member.name}
                              </h4>
                              <p className="text-primary font-medium mb-2">
                                {member.position}
                              </p>
                              <p className="text-sm text-gray-600 mb-4">
                                {member.department}
                              </p>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center justify-center text-gray-600">
                                  <Mail className="h-4 w-4 mr-2" />
                                  {member.email}
                                </div>
                                <div className="flex items-center justify-center text-gray-600">
                                  <Phone className="h-4 w-4 mr-2" />
                                  {member.phone}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact Faculty & Staff
                </h2>
                <p className="text-gray-600 mb-6">
                  For any inquiries or to schedule appointments with faculty members, 
                  please contact the respective department offices.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">General Inquiry</h4>
                    <p className="text-gray-600">info@reu.ac.in</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-5PM</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Faculty Affairs</h4>
                    <p className="text-gray-600">faculty@reu.ac.in</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-5PM</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">HR Department</h4>
                    <p className="text-gray-600">hr@reu.ac.in</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-5PM</p>
                  </div>
                </div>

                <Button size="lg">
                  Contact Administration
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