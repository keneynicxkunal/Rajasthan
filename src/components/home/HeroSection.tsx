'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, Calendar, MapPin, Phone, Mail } from 'lucide-react'

const announcements = [
  {
    id: 1,
    title: "Admissions Open for 2024-2025",
    content: "Apply now for undergraduate and postgraduate programs",
    date: "2024-01-15",
    type: "admission"
  },
  {
    id: 2,
    title: "Research Conference 2024",
    content: "Join us for the International Engineering Research Conference",
    date: "2024-02-20",
    type: "event"
  },
  {
    id: 3,
    title: "Campus Placement Drive",
    content: "Top companies visiting for campus recruitment",
    date: "2024-03-01",
    type: "placement"
  },
  {
    id: 4,
    title: "New Laboratory Inauguration",
    content: "State-of-the-art AI and Machine Learning Lab opening soon",
    date: "2024-01-25",
    type: "facility"
  }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % announcements.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % announcements.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + announcements.length) % announcements.length)
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'admission': return 'bg-blue-500'
      case 'event': return 'bg-green-500'
      case 'placement': return 'bg-purple-500'
      case 'facility': return 'bg-orange-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to
                <span className="text-primary block">Rajasthan Engineering University</span>
              </h1>
              <p className="text-xl text-gray-600 mt-4">
                Excellence in Engineering Education, Research, and Innovation
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Virtual Tour
              </Button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Card className="text-center p-4">
                <CardContent className="space-y-2 p-0">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600">Programs</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="space-y-2 p-0">
                  <div className="text-2xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="space-y-2 p-0">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-sm text-gray-600">Faculty</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Content - Announcement Banner */}
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-96 bg-gradient-to-br from-primary to-primary/80 text-white">
                  {/* Announcement Content */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center space-y-4">
                      <Badge className={`${getTypeColor(announcements[currentSlide].type)} text-white`}>
                        {announcements[currentSlide].type.toUpperCase()}
                      </Badge>
                      <h2 className="text-3xl font-bold">
                        {announcements[currentSlide].title}
                      </h2>
                      <p className="text-lg opacity-90">
                        {announcements[currentSlide].content}
                      </p>
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(announcements[currentSlide].date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={prevSlide}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={nextSlide}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {announcements.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentSlide(index)}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}