
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Mail, Users, Send, TrendingUp, Calendar, BarChart3 } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Total de Contatos', value: '2,847', icon: Users, change: '+12%', color: 'bg-blue-500' },
    { title: 'Emails Enviados', value: '15,382', icon: Send, change: '+8%', color: 'bg-green-500' },
    { title: 'Taxa de Abertura', value: '24.5%', icon: Mail, change: '+3.2%', color: 'bg-purple-500' },
    { title: 'Taxa de Cliques', value: '4.8%', icon: TrendingUp, change: '+1.4%', color: 'bg-orange-500' },
  ];

  const campaignData = [
    { name: 'Jan', enviados: 4000, abertos: 2400, cliques: 240 },
    { name: 'Fev', enviados: 3000, abertos: 1398, cliques: 156 },
    { name: 'Mar', enviados: 2000, abertos: 2800, cliques: 189 },
    { name: 'Abr', enviados: 2780, abertos: 3908, cliques: 295 },
    { name: 'Mai', enviados: 1890, abertos: 4800, cliques: 381 },
    { name: 'Jun', enviados: 2390, abertos: 3800, cliques: 412 },
  ];

  const recentCampaigns = [
    { name: 'Promoção Verão 2024', status: 'Enviada', date: '2024-01-15', opens: 1250, clicks: 89 },
    { name: 'Newsletter Mensal', status: 'Agendada', date: '2024-01-20', opens: 0, clicks: 0 },
    { name: 'Oferta Especial Black Friday', status: 'Rascunho', date: '2024-01-10', opens: 892, clicks: 67 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Visão geral das suas campanhas de email marketing</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Mail className="mr-2 h-4 w-4" />
          Nova Campanha
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 h-5 w-5" />
              Performance das Campanhas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={campaignData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="enviados" fill="#3B82F6" name="Enviados" />
                <Bar dataKey="abertos" fill="#10B981" name="Abertos" />
                <Bar dataKey="cliques" fill="#F59E0B" name="Cliques" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Tendência de Engajamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={campaignData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="abertos" stroke="#10B981" strokeWidth={3} name="Taxa de Abertura" />
                <Line type="monotone" dataKey="cliques" stroke="#F59E0B" strokeWidth={3} name="Taxa de Cliques" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Campaigns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Campanhas Recentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentCampaigns.map((campaign, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                  <p className="text-sm text-gray-600">Data: {campaign.date}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-900">{campaign.opens}</p>
                    <p className="text-xs text-gray-600">Aberturas</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-900">{campaign.clicks}</p>
                    <p className="text-xs text-gray-600">Cliques</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    campaign.status === 'Enviada' ? 'bg-green-100 text-green-800' :
                    campaign.status === 'Agendada' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {campaign.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
