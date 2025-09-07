'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar, Clock, MapPin, User, ArrowRight } from 'lucide-react'

const newsItems = [
  {
    id: 1,
    title: "REU Ranked Among Top Engineering Colleges in Rajasthan",
    excerpt: "Rajasthan Engineering University has been ranked among the top 5 engineering colleges in Rajasthan according to the latest NIRF rankings.",
    date: "2024-01-10",
    author: "Admin",
    category: "Achievement",
    image: "https://z-cdn-media.chatglm.cn/files/d53bfb15-fbcb-436c-8953-ae2fe52d4ce6_1490672731php4JWbaj.jpeg?auth_key=1788703866-8facb3963044476aa3b6622e0368bdda-0-aadf0b30d97e761124cbbdfa078d1b99"
  },
  {
    id: 2,
    title: "New Research Center for Artificial Intelligence Established",
    excerpt: "The university has established a state-of-the-art research center focusing on AI and Machine Learning applications.",
    date: "2024-01-08",
    author: "Research Dept",
    category: "Research",
    image: "https://z-cdn-media.chatglm.cn/files/f786bb9d-fd0c-4dd7-831e-da8500096595_1592816798phpQDBzOl.png?auth_key=1788703866-15915bde74f142a6954430969a89f3cf-0-eb33eff22e29aab97d592cf465a81b4e"
  },
  {
    id: 3,
    title: "Industry-Academia Collaboration with Tech Giants",
    excerpt: "REU signs MoU with leading technology companies to enhance industry exposure for students.",
    date: "2024-01-05",
    author: "Placement Cell",
    category: "Collaboration",
    image: "https://z-cdn-media.chatglm.cn/files/2cf1fddc-9521-419a-ae39-27d4fa2e339c_rajasthan-technical-university-rtu-kota-1200x675.jpg?auth_key=1788703866-6c1a20c19a714988a4a3c07a6cfcaccb-0-d152d0712f6934461efdd49b19c59e89"
  }
]

const eventItems = [
  {
    id: 1,
    title: "Annual Technical Symposium - TechFest 2024",
    description: "Join us for the biggest technical festival featuring competitions, workshops, and guest lectures.",
    date: "2024-02-15",
    time: "9:00 AM",
    venue: "Main Auditorium",
    category: "Technical",
    registration: true
  },
  {
    id: 2,
    title: "Guest Lecture by Industry Expert",
    description: "Interactive session on 'Future of Engineering in the Digital Age' by renowned industry leader.",
    date: "2024-02-10",
    time: "2:00 PM",
    venue: "Conference Hall A",
    category: "Lecture",
    registration: true
  },
  {
    id: 3,
    title: "Sports Meet 2024",
    description: "Annual inter-departmental sports competition with various athletic events.",
    date: "2024-02-20",
    time: "8:00 AM",
    venue: "Sports Complex",
    category: "Sports",
    registration: false
  },
  {
    id: 4,
    title: "Cultural Festival - REU Utsav",
    description: "Celebrate diversity with music, dance, drama, and various cultural performances.",
    date: "2024-03-01",
    time: "6:00 PM",
    venue: "Open Air Theatre",
    category: "Cultural",
    registration: false
  }
]

export default function NewsEvents() {
  const [activeTab, setActiveTab] = useState("news")

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'achievement': return 'bg-blue-500'
      case 'research': return 'bg-green-500'
      case 'collaboration': return 'bg-purple-500'
      case 'technical': return 'bg-orange-500'
      case 'lecture': return 'bg-indigo-500'
      case 'sports': return 'bg-red-500'
      case 'cultural': return 'bg-pink-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            News & Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings, achievements, and upcoming events at Rajasthan Engineering University
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="news">Latest News</TabsTrigger>
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
          </TabsList>

          <TabsContent value="news" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((news) => (
                <Card key={news.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`${getCategoryColor(news.category)} text-white`}>
                        {news.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(news.date).toLocaleDateString()}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        {news.author}
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                View All News
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eventItems.map((event) => (
                <Card key={event.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <Badge className={`${getCategoryColor(event.category)} text-white mb-3`}>
                          {event.category}
                        </Badge>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.venue}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      {event.registration ? (
                        <Button size="sm">
                          Register Now
                        </Button>
                      ) : (
                        <Badge variant="outline">Open to All</Badge>
                      )}
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        View Details <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                View All Events
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}