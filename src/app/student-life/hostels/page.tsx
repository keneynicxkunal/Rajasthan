import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Home, 
  Wifi, 
  Shield, 
  Utensils,
  Tv,
  Car,
  Coffee,
  Heart,
  Users,
  Star,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react'

const hostels = [
  {
    name: "Boys Hostel A",
    type: "Boys",
    capacity: 400,
    rooms: 100,
    image: "https://z-cdn-media.chatglm.cn/files/d53bfb15-fbcb-436c-8953-ae2fe52d4ce6_1490672731php4JWbaj.jpeg?auth_key=1788703866-8facb3963044476aa3b6622e0368bdda-0-aadf0b30d97e761124cbbdfa078d1b99",
    warden: "Dr. Rajesh Kumar",
    contact: "+91 123-456-7890",
    features: ["AC Rooms", "Wi-Fi", "Mess", "Gym", "Study Room", "Laundry"]
  },
  {
    name: "Boys Hostel B",
    type: "Boys",
    capacity: 350,
    rooms: 87,
    image: "https://z-cdn-media.chatglm.cn/files/f786bb9d-fd0c-4dd7-831e-da8500096595_1592816798phpQDBzOl.png?auth_key=1788703866-15915bde74f142a6954430969a89f3cf-0-eb33eff22e29aab97d592cf465a81b4e",
    warden: "Dr. Sunil Verma",
    contact: "+91 123-456-7891",
    features: ["Non-AC Rooms", "Wi-Fi", "Mess", "Common Room", "Sports Area"]
  },
  {
    name: "Girls Hostel A",
    type: "Girls",
    capacity: 300,
    rooms: 75,
    image: "https://z-cdn-media.chatglm.cn/files/2cf1fddc-9521-419a-ae39-27d4fa2e339c_rajasthan-technical-university-rtu-kota-1200x675.jpg?auth_key=1788703866-6c1a20c19a714988a4a3c07a6cfcaccb-0-d152d0712f6934461efdd49b19c59e89",
    warden: "Dr. Priya Sharma",
    contact: "+91 123-456-7892",
    features: ["AC Rooms", "Wi-Fi", "Mess", "Security", "Recreation Room"]
  },
  {
    name: "Girls Hostel B",
    type: "Girls",
    capacity: 250,
    rooms: 62,
    image: "https://z-cdn-media.chatglm.cn/files/d53bfb15-fbcb-436c-8953-ae2fe52d4ce6_1490672731php4JWbaj.jpeg?auth_key=1788703866-8facb3963044476aa3b6622e0368bdda-0-aadf0b30d97e761124cbbdfa078d1b99",
    warden: "Dr. Anjali Gupta",
    contact: "+91 123-456-7893",
    features: ["Non-AC Rooms", "Wi-Fi", "Mess", "Garden", "Common Room"]
  },
  {
    name: "International Hostel",
    type: "International",
    capacity: 150,
    rooms: 50,
    image: "https://z-cdn-media.chatglm.cn/files/f786bb9d-fd0c-4dd7-831e-da8500096595_1592816798phpQDBzOl.png?auth_key=1788703866-15915bde74f142a6954430969a89f3cf-0-eb33eff22e29aab97d592cf465a81b4e",
    warden: "Dr. Vikram Singh",
    contact: "+91 123-456-7894",
    features: ["AC Rooms", "Wi-Fi", "Kitchen", "Laundry", "Recreation"]
  }
]

const facilities = [
  {
    name: "Accommodation",
    icon: Home,
    description: "Well-furnished rooms with comfortable bedding and storage space",
    features: ["Single/Double Sharing", "Study Table", "Wardrobe", "Attached Bathroom"]
  },
  {
    name: "Dining",
    icon: Utensils,
    description: "Hygienic and nutritious food served in modern mess facilities",
    features: ["Vegetarian/Non-Veg", "Nutritious Menu", "Hygienic Kitchen", "Dining Hall"]
  },
  {
    name: "Security",
    icon: Shield,
    description: "24/7 security with CCTV surveillance and access control",
    features: ["CCTV Cameras", "Security Guards", "Access Control", "Emergency Response"]
  },
  {
    name: "Connectivity",
    icon: Wifi,
    description: "High-speed internet connectivity throughout the campus",
    features: ["Wi-Fi", "LAN Ports", "Mobile Coverage", "IT Support"]
  }
]

const rules = [
  "Students must maintain discipline and follow hostel rules",
  "Visitors are allowed only during visiting hours with proper permission",
  "Students must return to hostel before 10:00 PM",
  "Ragging is strictly prohibited and punishable",
  "Students must keep their rooms and common areas clean",
  "Use of electrical appliances is regulated for safety",
  "Alcohol and smoking are strictly prohibited in hostels",
  "Students must participate in hostel activities and programs"
]

const fees = [
  {
    type: "AC Room (Single)",
    annual: 90000,
    semester: 45000,
    features: ["Single Occupancy", "AC", "Attached Bathroom", "Wi-Fi"]
  },
  {
    type: "AC Room (Double)",
    annual: 75000,
    semester: 37500,
    features: ["Double Sharing", "AC", "Attached Bathroom", "Wi-Fi"]
  },
  {
    type: "Non-AC Room (Single)",
    annual: 60000,
    semester: 30000,
    features: ["Single Occupancy", "Non-AC", "Common Bathroom", "Wi-Fi"]
  },
  {
    type: "Non-AC Room (Double)",
    annual: 45000,
    semester: 22500,
    features: ["Double Sharing", "Non-AC", "Common Bathroom", "Wi-Fi"]
  }
]

export default function HostelsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hostel Life
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience comfortable and secure hostel living with modern amenities and a supportive 
                community atmosphere at Rajasthan Engineering University.
              </p>
            </div>
          </div>
        </section>

        {/* Hostel Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Hostels
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Five well-maintained hostels providing comfortable accommodation for all students
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hostels.map((hostel, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="aspect-video bg-gray-200">
                    <img
                      src={hostel.image}
                      alt={hostel.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{hostel.name}</h3>
                      <Badge className={
                        hostel.type === "Boys" ? "bg-blue-500" : 
                        hostel.type === "Girls" ? "bg-pink-500" : "bg-purple-500"
                      }>
                        {hostel.type}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">Capacity:</span>
                        <span className="text-gray-700 ml-2">{hostel.capacity}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Rooms:</span>
                        <span className="text-gray-700 ml-2">{hostel.rooms}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {hostel.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Users className="h-4 w-4 mr-2" />
                        Warden: {hostel.warden}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        {hostel.contact}
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

        {/* Facilities */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hostel Facilities
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Modern facilities and amenities to ensure a comfortable stay
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
                        {facility.features.map((feature, idx) => (
                          <div key={idx} className="text-xs text-gray-500">
                            • {feature}
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

        {/* Fees and Rules */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="fees" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
                <TabsTrigger value="fees">Fee Structure</TabsTrigger>
                <TabsTrigger value="rules">Rules & Regulations</TabsTrigger>
              </TabsList>

              <TabsContent value="fees">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {fees.map((fee, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {fee.type}
                          </h3>
                          <Badge className="bg-green-500 text-white">Available</Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center p-3 bg-primary/5 rounded-lg">
                            <div className="text-2xl font-bold text-primary">
                              ₹{fee.annual.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">Annual</div>
                          </div>
                          <div className="text-center p-3 bg-primary/5 rounded-lg">
                            <div className="text-2xl font-bold text-primary">
                              ₹{fee.semester.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">Per Semester</div>
                          </div>
                        </div>

                        <div className="space-y-1">
                          {fee.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="rules">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Hostel Rules & Regulations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {rules.map((rule, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{rule}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white border-primary/20">
              <CardContent className="p-8 text-center">
                <Home className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Hostel Admission
                </h2>
                <p className="text-gray-600 mb-6">
                  Apply for hostel accommodation along with your admission. Hostel seats are allocated 
                  based on merit and availability. Contact us for more information.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Chief Warden</h4>
                    <p className="text-gray-600">Dr. R.K. Sharma</p>
                    <p className="text-sm text-gray-500">+91 123-456-7899</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Hostel Office</h4>
                    <p className="text-gray-600">hostel@reu.ac.in</p>
                    <p className="text-sm text-gray-500">9AM-5PM</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Emergency</h4>
                    <p className="text-gray-600">1800-123-4567</p>
                    <p className="text-sm text-gray-500">24/7 Available</p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg">
                    Apply for Hostel
                  </Button>
                  <Button variant="outline" size="lg">
                    Download Form
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