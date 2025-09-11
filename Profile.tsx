import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  User, 
  Settings, 
  Shield, 
  Bell,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Edit
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState({
    name: 'Raisa Ahmed',
    email: 'raisa.ahmed.242@northsouth.edu',
    phone: '01711661851',
    location: 'Bashundhara Residential Area, Dhaka',
    emergencyContact1: 'Fatima Ahmed - 01571503637',
    emergencyContact2: 'Dr. Fahmida Akter - 01796340513'
  });

  const [notifications, setNotifications] = useState({
    emergency: true,
    health: true,
    legal: false,
    financial: true,
    updates: false
  });

  const [privacy, setPrivacy] = useState({
    shareLocation: true,
    profileVisible: false,
    dataCollection: true
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
              <User className="h-6 w-6 text-purple-600" />
              <h1 className="text-xl font-bold text-purple-600">Profile & Settings</h1>
            </div>
            <Badge variant="outline" className="text-purple-600">
              Secure Account
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
          <Button
            variant={activeTab === 'profile' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('profile')}
            className="flex-1"
          >
            <User className="h-4 w-4 mr-2" />
            Profile
          </Button>
          <Button
            variant={activeTab === 'notifications' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('notifications')}
            className="flex-1"
          >
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Button
            variant={activeTab === 'privacy' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('privacy')}
            className="flex-1"
          >
            <Shield className="h-4 w-4 mr-2" />
            Privacy
          </Button>
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Keep your information updated for better service
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      value={profile.email}
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      value={profile.phone}
                      onChange={(e) => setProfile({...profile, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <Input
                      value={profile.location}
                      onChange={(e) => setProfile({...profile, location: e.target.value})}
                    />
                  </div>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Edit className="h-4 w-4 mr-2" />
                  Update Profile
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Contacts</CardTitle>
                <CardDescription>
                  These contacts will be notified in case of emergency
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Primary Contact</label>
                  <Input
                    value={profile.emergencyContact1}
                    onChange={(e) => setProfile({...profile, emergencyContact1: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Secondary Contact</label>
                  <Input
                    value={profile.emergencyContact2}
                    onChange={(e) => setProfile({...profile, emergencyContact2: e.target.value})}
                  />
                </div>
                <Button variant="outline">
                  Update Emergency Contacts
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose what notifications you want to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Emergency Alerts</div>
                  <div className="text-sm text-gray-600">Critical safety notifications</div>
                </div>
                <Switch
                  checked={notifications.emergency}
                  onCheckedChange={(checked) => 
                    setNotifications({...notifications, emergency: checked})
                  }
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Health Reminders</div>
                  <div className="text-sm text-gray-600">Appointment and health tips</div>
                </div>
                <Switch
                  checked={notifications.health}
                  onCheckedChange={(checked) => 
                    setNotifications({...notifications, health: checked})
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Legal Updates</div>
                  <div className="text-sm text-gray-600">Case status and legal news</div>
                </div>
                <Switch
                  checked={notifications.legal}
                  onCheckedChange={(checked) => 
                    setNotifications({...notifications, legal: checked})
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Financial Notifications</div>
                  <div className="text-sm text-gray-600">Application status and opportunities</div>
                </div>
                <Switch
                  checked={notifications.financial}
                  onCheckedChange={(checked) => 
                    setNotifications({...notifications, financial: checked})
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Platform Updates</div>
                  <div className="text-sm text-gray-600">New features and announcements</div>
                </div>
                <Switch
                  checked={notifications.updates}
                  onCheckedChange={(checked) => 
                    setNotifications({...notifications, updates: checked})
                  }
                />
              </div>

              <Button className="w-full">Save Notification Preferences</Button>
            </CardContent>
          </Card>
        )}

        {/* Privacy Tab */}
        {activeTab === 'privacy' && (
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Security</CardTitle>
              <CardDescription>
                Control your privacy and data sharing preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Location Sharing</div>
                  <div className="text-sm text-gray-600">Allow emergency services to access your location</div>
                </div>
                <Switch
                  checked={privacy.shareLocation}
                  onCheckedChange={(checked) => 
                    setPrivacy({...privacy, shareLocation: checked})
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Profile Visibility</div>
                  <div className="text-sm text-gray-600">Make your profile visible to service providers</div>
                </div>
                <Switch
                  checked={privacy.profileVisible}
                  onCheckedChange={(checked) => 
                    setPrivacy({...privacy, profileVisible: checked})
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Data Collection</div>
                  <div className="text-sm text-gray-600">Allow anonymous data collection for service improvement</div>
                </div>
                <Switch
                  checked={privacy.dataCollection}
                  onCheckedChange={(checked) => 
                    setPrivacy({...privacy, dataCollection: checked})
                  }
                />
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium mb-4">Data & Account Management</h4>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Download My Data
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Delete Account
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Privacy Policy
                  </Button>
                </div>
              </div>

              <Button className="w-full">Save Privacy Settings</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}