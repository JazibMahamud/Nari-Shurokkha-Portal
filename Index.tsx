import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Heart, 
  Scale, 
  MessageCircle, 
  Phone, 
  MapPin,
  Clock,
  Users,
  LogIn,
  UserPlus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();
  const [emergencyActive, setEmergencyActive] = useState(false);

  const handleEmergency = () => {
    setEmergencyActive(true);
    // In a real app, this would trigger emergency services
    setTimeout(() => {
      alert('Emergency services have been notified. Help is on the way.');
      setEmergencyActive(false);
    }, 2000);
  };

  const services = [
    {
      title: 'Seba Apa',
      description: 'Your digital elder sister for guidance and support',
      icon: MessageCircle,
      color: 'bg-purple-100 text-purple-700',
      path: '/seba-apa'
    },
    {
      title: 'Safety & Emergency',
      description: 'SOS alerts, complaint filing, and emergency support',
      icon: Shield,
      color: 'bg-red-100 text-red-700',
      path: '/safety'
    },
    {
      title: 'Health & Wellness',
      description: 'Telemedicine, mental health, and wellness tracking',
      icon: Heart,
      color: 'bg-pink-100 text-pink-700',
      path: '/health'
    },
    {
      title: 'Legal & Financial',
      description: 'Legal aid, financial assistance, and empowerment',
      icon: Scale,
      color: 'bg-blue-100 text-blue-700',
      path: '/support'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Suraksha
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-purple-600">
                <Users className="h-3 w-3 mr-1" />
                Women Only
              </Badge>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/login')}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button 
                size="sm"
                onClick={() => navigate('/signup')}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Emergency SOS Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className={`h-16 w-16 rounded-full shadow-lg transition-all duration-300 ${
            emergencyActive 
              ? 'bg-red-600 hover:bg-red-700 animate-pulse' 
              : 'bg-red-500 hover:bg-red-600'
          }`}
          onClick={handleEmergency}
          disabled={emergencyActive}
        >
          {emergencyActive ? (
            <Clock className="h-6 w-6 text-white" />
          ) : (
            <Phone className="h-6 w-6 text-white" />
          )}
        </Button>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your Safe Space
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Suraksha is your comprehensive digital ecosystem for safety, health, legal support, 
            and empowerment. Access all essential services in a secure, women-only environment.
          </p>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => navigate('/signup')}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <UserPlus className="h-5 w-5 mr-2" />
              Join Suraksha Today
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/login')}
            >
              <LogIn className="h-5 w-5 mr-2" />
              Already a Member?
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center border-purple-200">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Emergency Support</div>
            </CardContent>
          </Card>
          <Card className="text-center border-pink-200">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Confidential</div>
            </CardContent>
          </Card>
          <Card className="text-center border-blue-200">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">Free</div>
              <div className="text-sm text-gray-600">Core Services</div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-purple-300"
                onClick={() => navigate(service.path)}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Emergency Information */}
        <Card className="bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center text-red-700">
              <Shield className="h-5 w-5 mr-2" />
              Emergency Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Police:</strong> 999
              </div>
              <div>
                <strong>Women Helpline:</strong> 109
              </div>
              <div>
                <strong>Medical Emergency:</strong> 199
              </div>
            </div>
            <p className="text-red-600 mt-4 text-sm">
              Use the red SOS button in the bottom-right corner for immediate emergency assistance.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}