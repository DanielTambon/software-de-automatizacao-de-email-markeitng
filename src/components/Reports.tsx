
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Download, FileText, Calendar, TrendingUp, Users, Mail } from 'lucide-react';

const Reports = () => {
  const { toast } = useToast();
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [selectedCampaign, setSelectedCampaign] = useState('all');

  const performanceData = [
    { name: 'Semana 1', enviados: 4000, entregues: 3800, abertos: 1200, cliques: 180 },
    { name: 'Semana 2', enviados: 3500, entregues: 3350, abertos: 1050, cliques: 145 },
    { name: 'Semana 3', enviados: 4200, entregues: 4000, abertos: 1400, cliques: 220 },
    { name: 'Semana 4', enviados: 3800, entregues: 3650, abertos: 1300, cliques: 195 },
  ];

  const campaignComparison = [
    { name: 'Promoção Verão', value: 35, color: '#0088FE' },
    { name: 'Newsletter', value: 25, color: '#00C49F' },
    { name: 'Black Friday', value: 20, color: '#FFBB28' },
    { name: 'Outros', value: 20, color: '#FF8042' },
  ];

  const engagementTrend = [
    { month: 'Jan', abertura: 22, cliques: 3.2 },
    { month: 'Fev', abertura: 25, cliques: 4.1 },
    { month: 'Mar', abertura: 28, cliques: 4.8 },
    { month: 'Abr', abertura: 24, cliques: 3.9 },
    { month: 'Mai', abertura: 26, cliques: 4.5 },
    { month: 'Jun', abertura: 29, cliques: 5.2 },
  ];

  const topCampaigns = [
    { name: 'Promoção Verão 2024', sent: 12500, opened: 3125, clicked: 437, rate: '25.0%' },
    { name: 'Newsletter Janeiro', sent: 8900, opened: 2225, clicked: 267, rate: '25.0%' },
    { name: 'Oferta Especial VIP', sent: 2100, opened: 735, clicked: 147, rate: '35.0%' },
    { name: 'Convite Webinar', sent: 5600, opened: 1456, clicked: 233, rate: '26.0%' },
  ];

  const handleExportReport = (format: string) => {
    toast({
      title: "Relatório exportado!",
      description: `Arquivo ${format.toUpperCase()} baixado com sucesso`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Relatórios e Analytics</h1>
          <p className="text-gray-600 mt-2">Acompanhe o desempenho das suas campanhas</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" onClick={() => handleExportReport('csv')}>
            <Download className="mr-2 h-4 w-4" />
            Exportar CSV
          </Button>
          <Button variant="outline" onClick={() => handleExportReport('pdf')}>
            <FileText className="mr-2 h-4 w-4" />
            Relatório PDF
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Período</label>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Últimos 7 dias</SelectItem>
                  <SelectItem value="30d">Últimos 30 dias</SelectItem>
                  <SelectItem value="90d">Últimos 90 dias</SelectItem>
                  <SelectItem value="1y">Último ano</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Campanha</label>
              <Select value={selectedCampaign} onValueChange={setSelectedCampaign}>
                <SelectTrigger className="w-60">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as Campanhas</SelectItem>
                  <SelectItem value="promo-verao">Promoção Verão 2024</SelectItem>
                  <SelectItem value="newsletter">Newsletter</SelectItem>
                  <SelectItem value="black-friday">Black Friday</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Emails Enviados</p>
                <p className="text-3xl font-bold text-gray-900">15,500</p>
                <p className="text-sm text-green-600 font-medium">+12% vs período anterior</p>
              </div>
              <div className="p-3 rounded-full bg-blue-500">
                <Mail className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Taxa de Entrega</p>
                <p className="text-3xl font-bold text-gray-900">96.2%</p>
                <p className="text-sm text-green-600 font-medium">+0.8% vs período anterior</p>
              </div>
              <div className="p-3 rounded-full bg-green-500">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Taxa de Abertura</p>
                <p className="text-3xl font-bold text-gray-900">26.4%</p>
                <p className="text-sm text-green-600 font-medium">+2.1% vs período anterior</p>
              </div>
              <div className="p-3 rounded-full bg-purple-500">
                <Calendar className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Taxa de Cliques</p>
                <p className="text-3xl font-bold text-gray-900">4.9%</p>
                <p className="text-sm text-green-600 font-medium">+0.7% vs período anterior</p>
              </div>
              <div className="p-3 rounded-full bg-orange-500">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Semanal</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="enviados" fill="#3B82F6" name="Enviados" />
                <Bar dataKey="entregues" fill="#10B981" name="Entregues" />
                <Bar dataKey="abertos" fill="#F59E0B" name="Abertos" />
                <Bar dataKey="cliques" fill="#EF4444" name="Cliques" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribuição por Campanha</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={campaignComparison}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, value}) => `${name}: ${value}%`}
                >
                  {campaignComparison.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tendência de Engajamento</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={engagementTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="abertura" stroke="#10B981" strokeWidth={3} name="Taxa de Abertura (%)" />
              <Line type="monotone" dataKey="cliques" stroke="#F59E0B" strokeWidth={3} name="Taxa de Cliques (%)" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Campaigns Table */}
      <Card>
        <CardHeader>
          <CardTitle>Top Campanhas por Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Campanha</th>
                  <th className="text-right py-3 px-4 font-semibold">Enviados</th>
                  <th className="text-right py-3 px-4 font-semibold">Abertos</th>
                  <th className="text-right py-3 px-4 font-semibold">Cliques</th>
                  <th className="text-right py-3 px-4 font-semibold">Taxa de Abertura</th>
                </tr>
              </thead>
              <tbody>
                {topCampaigns.map((campaign, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{campaign.name}</td>
                    <td className="py-3 px-4 text-right">{campaign.sent.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right">{campaign.opened.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right">{campaign.clicked.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                        {campaign.rate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
