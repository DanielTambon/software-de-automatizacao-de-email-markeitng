
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Upload, Plus, Search, Filter, Download, Mail } from 'lucide-react';

const ContactManager = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddContact, setShowAddContact] = useState(false);
  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    group: '',
    phone: '',
    company: ''
  });

  const [contacts] = useState([
    { id: 1, name: 'João Silva', email: 'joao@empresa.com', group: 'Clientes VIP', phone: '(11) 99999-9999', company: 'Tech Corp', status: 'Ativo' },
    { id: 2, name: 'Maria Santos', email: 'maria@startup.com', group: 'Prospects', phone: '(11) 88888-8888', company: 'StartupXYZ', status: 'Ativo' },
    { id: 3, name: 'Pedro Costa', email: 'pedro@consultoria.com', group: 'Parceiros', phone: '(11) 77777-7777', company: 'Consultoria ABC', status: 'Inativo' },
    { id: 4, name: 'Ana Oliveira', email: 'ana@ecommerce.com', group: 'Clientes VIP', phone: '(11) 66666-6666', company: 'E-commerce Plus', status: 'Ativo' },
    { id: 5, name: 'Carlos Mendoza', email: 'carlos@agencia.com', group: 'Prospects', phone: '(11) 55555-5555', company: 'Agência Digital', status: 'Ativo' },
  ]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddContact = () => {
    if (!newContact.name || !newContact.email) {
      toast({
        title: "Erro",
        description: "Nome e email são obrigatórios",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Contato adicionado!",
      description: `${newContact.name} foi adicionado à sua lista`,
    });

    setNewContact({ name: '', email: '', group: '', phone: '', company: '' });
    setShowAddContact(false);
  };

  const handleImportContacts = () => {
    toast({
      title: "Importação iniciada",
      description: "Seus contatos estão sendo importados...",
    });
  };

  const handleExportContacts = () => {
    toast({
      title: "Exportação concluída",
      description: "Arquivo CSV baixado com sucesso",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gerenciamento de Contatos</h1>
          <p className="text-gray-600 mt-2">Gerencie sua lista de contatos e segmente por grupos</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" onClick={handleImportContacts}>
            <Upload className="mr-2 h-4 w-4" />
            Importar CSV
          </Button>
          <Button variant="outline" onClick={handleExportContacts}>
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button onClick={() => setShowAddContact(true)} className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" />
            Novo Contato
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{contacts.length}</p>
              <p className="text-sm text-gray-600">Total de Contatos</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{contacts.filter(c => c.status === 'Ativo').length}</p>
              <p className="text-sm text-gray-600">Contatos Ativos</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">3</p>
              <p className="text-sm text-gray-600">Grupos</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">4.2%</p>
              <p className="text-sm text-gray-600">Taxa de Crescimento</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add Contact Form */}
      {showAddContact && (
        <Card>
          <CardHeader>
            <CardTitle>Adicionar Novo Contato</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nome *</Label>
                <Input
                  id="name"
                  value={newContact.name}
                  onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                  placeholder="Nome completo"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={newContact.email}
                  onChange={(e) => setNewContact({...newContact, email: e.target.value})}
                  placeholder="email@exemplo.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  value={newContact.phone}
                  onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <Label htmlFor="company">Empresa</Label>
                <Input
                  id="company"
                  value={newContact.company}
                  onChange={(e) => setNewContact({...newContact, company: e.target.value})}
                  placeholder="Nome da empresa"
                />
              </div>
              <div>
                <Label htmlFor="group">Grupo</Label>
                <Input
                  id="group"
                  value={newContact.group}
                  onChange={(e) => setNewContact({...newContact, group: e.target.value})}
                  placeholder="Ex: Clientes VIP"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <Button variant="outline" onClick={() => setShowAddContact(false)}>
                Cancelar
              </Button>
              <Button onClick={handleAddContact} className="bg-green-600 hover:bg-green-700">
                Adicionar Contato
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Pesquisar contatos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contacts Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Contatos ({filteredContacts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredContacts.map((contact) => (
              <div key={contact.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {contact.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                    <p className="text-sm text-gray-600">{contact.email}</p>
                    <p className="text-xs text-gray-500">{contact.company}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant={contact.group === 'Clientes VIP' ? 'default' : 'secondary'}>
                    {contact.group}
                  </Badge>
                  <Badge variant={contact.status === 'Ativo' ? 'secondary' : 'outline'}>
                    {contact.status}
                  </Badge>
                  <Button size="sm" variant="outline">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactManager;
