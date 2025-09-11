import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { 
  Heart, 
  Calendar as CalendarIcon, 
  Video, 
  Brain, 
  Activity,
  ArrowLeft,
  Clock,
  User,
  Stethoscope
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Health() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const healthServices = [
    {
      title: 'Telemedicine',
      description: 'Consult with women doctors online',
      icon: Video,
      color: 'bg-pink-100 text-pink-700',
      available: 'Available Now'
    },
    {
      title: 'Mental Health',
      description: 'Counseling and therapy sessions',
      icon: Brain,
      color: 'bg-purple-100 text-purple-700',
      available: '24/7 Support'
    },
    {
      title: 'Health Tracking',
      description: 'Monitor your wellness journey',
      icon: Activity,
      color: 'bg-blue-100 text-blue-700',
      available: 'Personal Dashboard'
    },
    {
      title: 'Specialist Care',
      description: 'Gynecology, pregnancy, and more',
      icon: Stethoscope,
      color: 'bg-green-100 text-green-700',
      available: 'Book Appointment'
    }
  ];

  const upcomingAppointments = [
    {
      doctor: 'Dr. Fahmida Akter',
      specialty: 'Gynecologist',
      date: 'Today, 3:00 PM',
      type: 'Video Call'
    },
    {
      doctor: 'Dr. Fariha Akter',
      specialty: 'Mental Health Counselor',
      date: 'Tomorrow, 10:00 AM',
      type: 'In-Person'
    }
  ];

  const healthTips = [
    {
      title: 'Women\'s Nutrition',
      content: 'Essential nutrients for women\'s health including iron, calcium, and folic acid.',
      category: 'Nutrition'
    },
    {
      title: 'Mental Wellness',
      content: 'Simple daily practices to maintain emotional balance and reduce stress.',
      category: 'Mental Health'
    },
    {
      title: 'Regular Checkups',
      content: 'Importance of regular health screenings and preventive care for women.',
      category: 'Prevention'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <Heart className="h-6 w-6 text-pink-600" />
              <h1 className="text-xl font-bold text-pink-600">Health & Wellness</h1>
            </div>
            <Badge variant="outline" className="text-pink-600">
              Women-Only Healthcare
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {healthServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-all">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="text-xs">
                    {service.available}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Appointments */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  Upcoming Appointments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingAppointments.map((appointment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-pink-600" />
                      </div>
                      <div>
                        <div className="font-semibold">{appointment.doctor}</div>
                        <div className="text-sm text-gray-600">{appointment.specialty}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {appointment.date}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline">
                      {appointment.type}
                    </Badge>
                  </div>
                ))}
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  Book New Appointment
                </Button>
              </CardContent>
            </Card>

            {/* Health Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Health Tips & Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {healthTips.map((tip, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{tip.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {tip.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{tip.content}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Calendar & Quick Stats */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Health Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Last Checkup</span>
                  <span className="text-sm font-semibold">2 months ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Next Appointment</span>
                  <span className="text-sm font-semibold">Today</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Health Score</span>
                  <Badge className="bg-green-100 text-green-700">Excellent</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  View Full Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}