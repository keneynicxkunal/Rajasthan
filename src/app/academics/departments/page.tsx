import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Cpu, 
  Zap, 
  Wrench, 
  Building,
  TestTube,
  Users,
  Award,
  BookOpen,
  Target,
  TrendingUp,
  Calendar,
  Star
} from 'lucide-react'

const departments = [
  {
    id: 1,
    name: "Computer Science Engineering",
    icon: Cpu,
    description: "Leading the digital revolution with cutting-edge education in software development, artificial intelligence, machine learning, and emerging technologies.",
    established: 1995,
    faculty: 35,
    students: 1200,
    programs: ["B.Tech in CSE", "B.Tech in AI & ML", "M.Tech in CSE", "M.Tech in AI", "Ph.D in Computer Science"],
    labs: ["Programming Lab", "AI Lab", "Machine Learning Lab", "Database Lab", "Networking Lab", "Cloud Computing Lab"],
    research: ["Artificial Intelligence", "Machine Learning", "Data Science", "Cybersecurity", "Cloud Computing", "IoT"],
    achievements: [
      "NBA Accredited",
      "100+ Research Publications",
      "Industry Partnerships with Tech Giants",
      "Startup Incubation Center"
    ],
    hod: "Dr. Vikram Singh",
    image: "https://z-cdn-media.chatglm.cn/files/d53bfb15-fbcb-436c-8953-ae2fe52d4ce6_1490672731php4JWbaj.jpeg?auth_key=1788703866-8facb3963044476aa3b6622e0368bdda-0-aadf0b30d97e761124cbbdfa078d1b99"
  },
  {
    id: 2,
    name: "Electrical Engineering",
    icon: Zap,
    description: "Powering the future with comprehensive education in power systems, electronics, control engineering, and renewable energy technologies.",
    established: 1995,
    faculty: 28,
    students: 950,
    programs: ["B.Tech in EE", "M.Tech in Power Systems", "M.Tech in Control Systems", "Ph.D in Electrical Engineering"],
    labs: ["Power Systems Lab", "Control Systems Lab", "Electronics Lab", "Renewable Energy Lab", "High Voltage Lab"],
    research: ["Power Systems", "Renewable Energy", "Control Systems", "Power Electronics", "Smart Grid"],
    achievements: [
      "NBA Accredited",
      "80+ Research Publications",
      "MoU with Power Sector Companies",
      "State-of-the-art Power Systems Lab"
    ],
    hod: "Dr. Anjali Gupta",
    image: "https://z-cdn-media.chatglm.cn/files/f786bb9d-fd0c-4dd7-831e-da8500096595_1592816798phpQDBzOl.png?auth_key=1788703866-15915bde74f142a6954430969a89f3cf-0-eb33eff22e29aab97d592cf465a81b4e"
  },
  {
    id: 3,
    name: "Mechanical Engineering",
    icon: Wrench,
    description: "Designing tomorrow's world with in-depth knowledge of mechanical design, manufacturing, thermal systems, and automotive engineering.",
    established: 1995,
    faculty: 32,
    students: 1100,
    programs: ["B.Tech in ME", "M.Tech in Thermal Engineering", "M.Tech in Design", "Ph.D in Mechanical Engineering"],
    labs: ["Workshop", "CAD/CAM Lab", "Thermal Engineering Lab", "Fluid Mechanics Lab", "Automobile Lab"],
    research: ["Thermal Engineering", "Design Engineering", "Manufacturing", "Automotive Engineering", "Robotics"],
    achievements: [
      "NBA Accredited",
      "90+ Research Publications",
      "Industry Collaboration with Auto Companies",
      "Advanced Manufacturing Center"
    ],
    hod: "Dr. Rahul Verma",
    image: "https://z-cdn-media.chatglm.cn/files/2cf1fddc-9521-419a-ae39-27d4fa2e339c_rajasthan-technical-university-rtu-kota-1200x675.jpg?auth_key=1788703866-6c1a20c19a714988a4a3c07a6cfcaccb-0-d152d0712f6934461efdd49b19c59e89"
  },
  {
    id: 4,
    name: "Electronics Engineering",
    icon: Cpu,
    description: "Shaping the communication era with expertise in electronic circuits, communication systems, VLSI design, and embedded systems.",
    established: 1998,
    faculty: 25,
    students: 800,
    programs: ["B.Tech in ECE", "M.Tech in VLSI", "M.Tech in Communication", "Ph.D in Electronics"],
    labs: ["Electronics Lab", "Communication Lab", "VLSI Design Lab", "Embedded Systems Lab", "DSP Lab"],
    research: ["VLSI Design", "Communication Systems", "Signal Processing", "Embedded Systems", "RF Engineering"],
    achievements: [
      "NBA Accredited",
      "70+ Research Publications",
      "VLSI Design Center",
      "Industry Collaboration with Semiconductor Companies"
    ],
    hod: "Dr. Pooja Mishra",
    image: "https://z-cdn-media.chatglm.cn/files/d53bfb15-fbcb-436c-8953-ae2fe52d4ce6_1490672731php4JWbaj.jpeg?auth_key=1788703866-8facb3963044476aa3b6622e0368bdda-0-aadf0b30d97e761124cbbdfa078d1b99"
  },
  {
    id: 5,
    name: "Civil Engineering",
    icon: Building,
    description: "Building sustainable infrastructure with education in construction technology, structural engineering, transportation, and environmental engineering.",
    established: 1995,
    faculty: 30,
    students: 1000,
    programs: ["B.Tech in CE", "M.Tech in Structural", "M.Tech in Environmental", "Ph.D in Civil Engineering"],
    labs: ["Material Testing Lab", "Structural Analysis Lab", "Geotechnical Lab", "Environmental Lab", "Transportation Lab"],
    research: ["Structural Engineering", "Environmental Engineering", "Transportation", "Geotechnical", "Construction Management"],
    achievements: [
      "NBA Accredited",
      "85+ Research Publications",
      "Consultancy Projects",
      "Sustainable Construction Research"
    ],
    hod: "Dr. Sanjay Kumar",
    image: "https://z-cdn-media.chatglm.cn/files/f786bb9d-fd0c-4dd7-831e-da8500096595_1592816798phpQDBzOl.png?auth_key=1788703866-15915bde74f142a6954430969a89f3cf-0-eb33eff22e29aab97d592cf465a81b4e"
  },
  {
    id: 6,
    name: "Chemical Engineering",
    icon: TestTube,
    description: "Innovating for a sustainable future with expertise in chemical processes, plant design, environmental engineering, and industrial applications.",
    established: 2000,
    faculty: 20,
    students: 600,
    programs: ["B.Tech in Chemical", "M.Tech in Process Design", "Ph.D in Chemical Engineering"],
    labs: ["Chemical Process Lab", "Heat Transfer Lab", "Mass Transfer Lab", "Process Control Lab", "Environmental Lab"],
    research: ["Process Design", "Environmental Engineering", "Process Control", "Biochemical Engineering", "Materials Science"],
    achievements: [
      "NBA Accredited",
      "60+ Research Publications",
      "Industry Collaboration",
      "Environmental Research Center"
    ],
    hod: "Dr. Neha Singh",
    image: "https://z-cdn-media.chatglm.cn/files/2cf1fddc-9521-419a-ae39-27d4fa2e339c_rajasthan-technical-university-rtu-kota-1200x675.jpg?auth_key=1788703866-6c1a20c19a714988a4a3c07a6cfcaccb-0-d152d0712f6934461efdd49b19c59e89"
  }
]

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Departments
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our six specialized departments, each dedicated to excellence in engineering education, 
                research, and innovation across various disciplines.
              </p>
            </div>
          </div>
        </section>

        {/* Departments Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept) => (
                <Card key={dept.id} className="overflow-hidden hover:shadow-lg transition-all group">
                  <div className="aspect-video bg-gray-200">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <dept.icon className="h-8 w-8 text-primary" />
                      <h3 className="text-xl font-bold text-gray-900">{dept.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-primary">{dept.faculty}</div>
                        <div className="text-xs text-gray-600">Faculty</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-primary">{dept.students}</div>
                        <div className="text-xs text-gray-600">Students</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-primary">{dept.programs.length}</div>
                        <div className="text-xs text-gray-600">Programs</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge variant="outline">
                        <Calendar className="h-3 w-3 mr-1" />
                        Since {dept.established}
                      </Badge>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Department Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Department Details
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive information about each department's programs, facilities, and achievements
              </p>
            </div>

            <Tabs defaultValue="cse" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                {departments.map((dept) => (
                  <TabsTrigger key={dept.id} value={dept.name.toLowerCase().replace(' ', '')}>
                    {dept.name.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {departments.map((dept) => (
                <TabsContent key={dept.id} value={dept.name.toLowerCase().replace(' ', '')}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Department Info */}
                    <div className="lg:col-span-2 space-y-6">
                      <Card>
                        <CardHeader>
                          <div className="flex items-center space-x-3">
                            <dept.icon className="h-8 w-8 text-primary" />
                            <CardTitle className="text-2xl">{dept.name}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-6">{dept.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Academic Programs</h4>
                              <ul className="space-y-2">
                                {dept.programs.map((program, index) => (
                                  <li key={index} className="flex items-center text-sm text-gray-600">
                                    <Star className="h-4 w-4 text-primary mr-2" />
                                    {program}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Research Areas</h4>
                              <ul className="space-y-2">
                                {dept.research.map((area, index) => (
                                  <li key={index} className="flex items-center text-sm text-gray-600">
                                    <Target className="h-4 w-4 text-primary mr-2" />
                                    {area}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <Award className="h-5 w-5" />
                            <span>Achievements & Recognition</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {dept.achievements.map((achievement, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <TrendingUp className="h-4 w-4 text-primary" />
                                <span className="text-sm text-gray-600">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Department Stats */}
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Department Statistics</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Established</span>
                            <Badge>{dept.established}</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Faculty Members</span>
                            <Badge variant="outline">{dept.faculty}</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Students</span>
                            <Badge variant="outline">{dept.students}</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Programs</span>
                            <Badge variant="outline">{dept.programs.length}</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Laboratories</span>
                            <Badge variant="outline">{dept.labs.length}</Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Head of Department</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                              <Users className="h-8 w-8 text-primary" />
                            </div>
                            <h4 className="font-semibold text-gray-900">{dept.hod}</h4>
                            <p className="text-sm text-gray-600">Professor & HOD</p>
                            <Button variant="outline" size="sm" className="mt-3">
                              Contact
                            </Button>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Laboratory Facilities</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {dept.labs.map((lab, index) => (
                              <div key={index} className="flex items-center text-sm text-gray-600">
                                <BookOpen className="h-4 w-4 text-primary mr-2" />
                                {lab}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Academic Community
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Be part of our vibrant academic environment and pursue excellence in engineering education
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">
                Apply for Admission
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Visit
              </Button>
              <Button variant="outline" size="lg">
                Contact Department
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}