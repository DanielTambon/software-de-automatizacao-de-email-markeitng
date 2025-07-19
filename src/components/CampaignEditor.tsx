
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Eye, Send, Save, Image, Calendar } from 'lucide-react';

const CampaignEditor = () => {
  const { toast } = useToast();
  const [campaign, setCampaign] = useState({
    name: '',
    subject: '',
    content: '',
    targetGroup: '',
    scheduledDate: '',
    scheduledTime: ''
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleSaveDraft = () => {
    if (!campaign.name) {
      toast({
        title: "Erro",
        description: "Nome da campanha é obrigatório",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Rascunho salvo!",
      description: "Sua campanha foi salva como rascunho",
    });
  };

  const handleScheduleCampaign = () => {
    if (!campaign.name || !campaign.subject || !campaign.content) {
      toast({
        title: "Erro",
        description: "Preencha todos os campos obrigatórios",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Campanha agendada!",
      description: `Sua campanha será enviada em ${campaign.scheduledDate} às ${campaign.scheduledTime}`,
    });
  };

  const handleSendNow = () => {
    if (!campaign.name || !campaign.subject || !campaign.content) {
      toast({
        title: "Erro",
        description: "Preencha todos os campos obrigatórios",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Campanha enviada!",
      description: "Sua campanha está sendo enviada agora",
    });
  };

  const emailTemplate = `
    <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
      <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 30px; text-align: center;">
        <h1 style="color: white; margin: 0; fontSize: 28px;">Level Marketing</h1>
      </div>
      <div style="padding: 30px; background: white;">
        ${campaign.content.replace(/\n/g, '<br>')}
      </div>
      <div style="background: #f3f4f6; padding: 20px; text-align: center; color: #6b7280; font-size: 14px;">
        <p>© 2024 Level Marketing. Todos os direitos reservados.</p>
      </div>
    </div>
  `;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Editor de Campanhas</h1>
          <p className="text-gray-600 mt-2">Crie e envie campanhas de email personalizadas</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" onClick={() => setShowPreview(true)}>
            <Eye className="mr-2 h-4 w-4" />
            Pré-visualizar
          </Button>
          <Button variant="outline" onClick={handleSaveDraft}>
            <Save className="mr-2 h-4 w-4" />
            Salvar Rascunho
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Editor Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Campanha</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="campaignName">Nome da Campanha *</Label>
                <Input
                  id="campaignName"
                  value={campaign.name}
                  onChange={(e) => setCampaign({...campaign, name: e.target.value})}
                  placeholder="Ex: Promoção de Verão 2024"
                />
              </div>
              
              <div>
                <Label htmlFor="subject">Assunto do Email *</Label>
                <Input
                  id="subject"
                  value={campaign.subject}
                  onChange={(e) => setCampaign({...campaign, subject: e.target.value})}
                  placeholder="Ex: Não perca! 50% OFF em todos os produtos"
                />
              </div>

              <div>
                <Label htmlFor="targetGroup">Grupo de Destinatários</Label>
                <Select value={campaign.targetGroup} onValueChange={(value) => setCampaign({...campaign, targetGroup: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o grupo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os Contatos</SelectItem>
                    <SelectItem value="vip">Clientes VIP</SelectItem>
                    <SelectItem value="prospects">Prospects</SelectItem>
                    <SelectItem value="partners">Parceiros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Conteúdo do Email</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="content">Mensagem *</Label>
                <Textarea
                  id="content"
                  value={campaign.content}
                  onChange={(e) => setCampaign({...campaign, content: e.target.value})}
                  placeholder="Digite o conteúdo do seu email aqui..."
                  className="min-h-[300px]"
                />
              </div>
              
              <div className="flex space-x-3">
                <Button variant="outline" size="sm">
                  <Image className="mr-2 h-4 w-4" />
                  Adicionar Imagem
                </Button>
                <Button variant="outline" size="sm">
                  Inserir Campo Dinâmico
                </Button>
              </div>

              <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded">
                <p><strong>Dica:</strong> Use campos dinâmicos como {'{nome}'} para personalizar seus emails.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Agendamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="scheduledDate">Data</Label>
                  <Input
                    id="scheduledDate"
                    type="date"
                    value={campaign.scheduledDate}
                    onChange={(e) => setCampaign({...campaign, scheduledDate: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="scheduledTime">Horário</Label>
                  <Input
                    id="scheduledTime"
                    type="time"
                    value={campaign.scheduledTime}
                    onChange={(e) => setCampaign({...campaign, scheduledTime: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Button onClick={handleSendNow} className="bg-green-600 hover:bg-green-700">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Agora
                </Button>
                <Button variant="outline" onClick={handleScheduleCampaign}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar Envio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Estatísticas do Grupo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total de contatos:</span>
                  <span className="font-semibold">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Contatos ativos:</span>
                  <span className="font-semibold">2,658</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Taxa de entrega estimada:</span>
                  <span className="font-semibold text-green-600">96%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Histórico de Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm">
                    <span>Taxa de Abertura Média</span>
                    <span>24.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '24.5%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm">
                    <span>Taxa de Cliques Média</span>
                    <span>4.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '4.8%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Melhores Práticas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Use assuntos entre 30-50 caracteres</p>
                <p>• Personalize com o nome do destinatário</p>
                <p>• Inclua um call-to-action claro</p>
                <p>• Teste diferentes horários de envio</p>
                <p>• Mantenha o conteúdo conciso e direto</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Pré-visualização do Email</h2>
                <Button variant="outline" onClick={() => setShowPreview(false)}>
                  Fechar
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-gray-100 p-4 rounded mb-4">
                <p><strong>Para:</strong> {campaign.targetGroup || 'Grupo selecionado'}</p>
                <p><strong>Assunto:</strong> {campaign.subject || 'Sem assunto'}</p>
              </div>
              <div 
                className="border rounded p-4"
                dangerouslySetInnerHTML={{ __html: emailTemplate }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignEditor;
