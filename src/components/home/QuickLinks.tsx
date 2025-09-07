'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Building, 
  Trophy, 
  Calendar,
  FileText,
  Phone
} from 'lucide-react'

const quickLinks = [
  {
    title: "Admissions",
    description: "Apply for various programs",
    icon: GraduationCap,
    href: "/admissions",
    color: "bg-blue-500"
  },
  {
    title: "Academics",
    description: "Explore courses and departments",
    icon: BookOpen,
    href: "/academics",
    color: "bg-green-500"
  },
  {
    title: "Faculty",
    description: "Meet our distinguished faculty",
    icon: Users,
    href: "/faculty",
    color: "bg-purple-500"
  },
  {
    title: "Campus Life",
    description: "Experience vibrant campus life",
    icon: Building,
    href: "/student-life",
    color: "bg-orange-500"
  },
  {
    title: "Sports",
    description: "Sports facilities and activities",
    icon: Trophy,
    href: "/student-life/sports",
    color: "bg-red-500"
  },
  {
    title: "Events",
    description: "Upcoming events and calendar",
    icon: Calendar,
    href: "/events",
    color: "bg-indigo-500"
  },
  {
    title: "Downloads",
    description: "Forms and documents",
    icon: FileText,
    href: "/downloads",
    color: "bg-gray-500"
  },
  {
    title: "Contact",
    description: "Get in touch with us",
    icon: Phone,
    href: "/contact",
    color: "bg-teal-500"
  }
]

export default function QuickLinks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Links
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access important information and services quickly through our comprehensive quick links section
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <Link href={link.href}>
                  <CardContent className="p-6 text-center">
                    <div className={`${link.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {link.description}
                    </p>
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                      Explore
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            )
          })}
        </div>

        {/* Additional Quick Actions */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Quick Assistance?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you with any questions or concerns
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">
                Chat with Support
              </Button>
              <Button variant="outline" size="lg">
                Call Us: +91 123-456-7890
              </Button>
              <Button variant="outline" size="lg">
                Email: info@reu.ac.in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}