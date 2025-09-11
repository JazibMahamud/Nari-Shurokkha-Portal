import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Phone, 
  MapPin, 
  AlertTriangle, 
  FileText,
  ArrowLeft,
  Clock,
  Users,
  Camera
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Safety() {
  const navigate = useNavigate();
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [complaintForm, setComplaintForm] = useState({
    type: '',
    description: '',
    location: '',
    urgent: false
  });

  const handleEmergency = () => {
    setEmergencyActive(true);
    setTimeout(() => {
      alert('Emergency services notified. Location shared. Help is on the way.');
      setEmergencyActive(false);
    }, 2000);
  };

  const emergencyContacts = [
    { name: 'Police', number: '999', description: 'General emergency' },
    { name: 'Women Helpline', number: '109', description: '24/7 women support' },
    { name: 'Medical Emergency', number: '199', description: 'Medical assistance' },
    { name: 'Fire Service', number: '16163', description: 'Fire emergency' }
  ];

  const complaintTypes = [
    'Domestic Violence',
    'Sexual Harassment',
    'Workplace Harassment',
    'Cybercrime',
    'Stalking',
    'Dowry Harassment',
    'Other'
  ];

  const handleComplaintSubmit = () => {
    if (!complaintForm.type || !complaintForm.description) {
      alert('Please fill in all required fields');
      return;
    }
    
    alert('Complaint submitted successfully. Reference ID: WC' + Math.random().toString(36).substr(2, 9).toUpperCase());
    setComplaintForm({ type: '', description: '', location: '', urgent: false });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-red-100">
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
              <Shield className="h-6 w-6 text-red-600" />
              <h1 className="text-xl font-bold text-red-600">Safety & Emergency</h1>
            </div>
            <Badge variant="outline" className="text-red-600">
              24/7 Support Available
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Emergency SOS Section */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardHeader className="text-center">
            <CardTitle className="text-red-700 flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 mr-2" />
              Emergency SOS
            </CardTitle>
            <CardDescription>
              Press the button below if you're in immediate danger
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button
              size="lg"
              className={`h-20 w-20 rounded-full text-white font-bold text-lg transition-all duration-300 ${
                emergencyActive 
                  ? 'bg-red-600 hover:bg-red-700 animate-pulse' 
                  : 'bg-red-500 hover:bg-red-600'
              }`}
              onClick={handleEmergency}
              disabled={emergencyActive}
            >
              {emergencyActive ? (
                <Clock className="h-8 w-8" />
              ) : (
                'SOS'
              )}
            </Button>
            <p className="text-sm text-red-600 mt-4">
              This will immediately alert emergency services and share your location
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Emergency Contacts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-semibold">{contact.name}</div>
                    <div className="text-sm text-gray-600">{contact.description}</div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(`tel:${contact.number}`)}
                  >
                    {contact.number}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Safety Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <MapPin className="h-4 w-4 mr-2" />
                Share Live Location
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Camera className="h-4 w-4 mr-2" />
                Record Evidence
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Alert Trusted Contacts
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Safety Resources
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Complaint Filing */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              File a Complaint
            </CardTitle>
            <CardDescription>
              Report incidents confidentially. All complaints are handled by women officers.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Complaint Type *</label>
              <select 
                className="w-full p-2 border rounded-md"
                value={complaintForm.type}
                onChange={(e) => setComplaintForm({...complaintForm, type: e.target.value})}
              >
                <option value="">Select complaint type</option>
                {complaintTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description *</label>
              <Textarea
                placeholder="Describe the incident in detail..."
                value={complaintForm.description}
                onChange={(e) => setComplaintForm({...complaintForm, description: e.target.value})}
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <Input
                placeholder="Where did this incident occur?"
                value={complaintForm.location}
                onChange={(e) => setComplaintForm({...complaintForm, location: e.target.value})}
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="urgent"
                checked={complaintForm.urgent}
                onChange={(e) => setComplaintForm({...complaintForm, urgent: e.target.checked})}
              />
              <label htmlFor="urgent" className="text-sm">This is an urgent matter</label>
            </div>

            <div className="flex space-x-4">
              <Button onClick={handleComplaintSubmit} className="bg-red-600 hover:bg-red-700">
                Submit Complaint
              </Button>
              <Button variant="outline">
                Save as Draft
              </Button>
            </div>

            <p className="text-xs text-gray-600">
              Your complaint will be reviewed by trained women officers within 24 hours. 
              All information is kept strictly confidential.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}