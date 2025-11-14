import { Video, Shield, FileText, Lock, Users, Clock, CheckCircle } from 'lucide-react';
import PsyncLogo from './components/PsyncLogo';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PsyncLogo size={32} />
            <span className="text-2xl font-bold text-purple-600">Psync</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-gray-600 hover:text-purple-600 transition-colors">Início</a>
            <a href="#funcionalidades" className="text-gray-600 hover:text-purple-600 transition-colors">Funcionalidades</a>
            <a href="#psicologos" className="text-gray-600 hover:text-purple-600 transition-colors">Para Psicólogos</a>
            <a href="#seguranca" className="text-gray-600 hover:text-purple-600 transition-colors">Segurança</a>
            <a href="#precos" className="text-gray-600 hover:text-purple-600 transition-colors">Preços</a>
            <button className="text-purple-600 hover:text-purple-700 transition-colors">Login</button>
            <button className="bg-purple-600 text-white px-6 py-2.5 rounded-full hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 hover:shadow-xl">
              Começar Agora
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="inicio" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                A nova era da <span className="text-purple-600">telepsicologia</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Atenda seus pacientes com segurança, privacidade e ferramentas profissionais.
                A plataforma completa para psicólogos que valorizam a excelência no cuidado digital.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all shadow-xl shadow-purple-200 hover:shadow-2xl text-lg font-medium">
                  Criar Conta
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-50 transition-all text-lg font-medium">
                  Agendar Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Video className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Sessão em andamento</p>
                      <p className="text-sm text-gray-500">Consulta segura e criptografada</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>Conexão protegida por criptografia E2E</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Lock className="w-4 h-4 text-green-500" />
                      <span>Gravação bloqueada pelo psicólogo</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FileText className="w-4 h-4 text-green-500" />
                      <span>Prontuário sincronizado em tempo real</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="funcionalidades" className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Tudo que você precisa em uma plataforma
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Recursos profissionais pensados para otimizar seu atendimento e garantir a melhor experiência terapêutica
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Video className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Vídeo Seguro</h3>
                <p className="text-gray-600 leading-relaxed">
                  Consultas por vídeo com criptografia de ponta a ponta e qualidade HD para uma experiência natural
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Prontuário Integrado</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sistema completo com escalas clínicas, notas de sessão e histórico organizado do paciente
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Lock className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Controle de Gravação</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bloqueio total de gravações não autorizadas para proteger a privacidade das sessões
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sala de Espera</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sala de espera digital elegante onde pacientes aguardam confortavelmente pelo atendimento
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="psicologos" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Feito para <span className="text-purple-600">psicólogos</span> que valorizam a excelência
                  </h2>
                  <p className="text-xl text-gray-600">
                    Recursos avançados que respeitam sua prática clínica e elevam a qualidade do atendimento online
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Bloqueio de Gravações</h3>
                      <p className="text-gray-600">
                        Impeça capturas de tela e gravações não autorizadas, protegendo o sigilo terapêutico
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Notas Clínicas Completas</h3>
                      <p className="text-gray-600">
                        Registre observações, aplicações de escalas e evoluções com templates personalizáveis
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Consentimento Digital</h3>
                      <p className="text-gray-600">
                        Coleta e armazenamento seguro de termos de consentimento com validade jurídica
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Supervisão Segura</h3>
                      <p className="text-gray-600">
                        Compartilhe casos com supervisores mantendo a anonimização e privacidade dos pacientes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 shadow-2xl text-white">
                  <h3 className="text-2xl font-bold mb-6">Recursos Profissionais</h3>
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Escalas Clínicas</span>
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <p className="text-sm text-purple-100">BAI, BDI, WHOQOL e mais de 20 escalas validadas</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Agendamento Inteligente</span>
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <p className="text-sm text-purple-100">Sincronização com Google Calendar e lembretes automáticos</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Relatórios e Atestados</span>
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <p className="text-sm text-purple-100">Geração automática com sua assinatura digital</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Gestão Financeira</span>
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <p className="text-sm text-purple-100">Controle de pagamentos e emissão de recibos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="seguranca" className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Segurança e privacidade em primeiro lugar</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Construído com as mais rigorosas práticas de segurança para proteger você e seus pacientes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                <Shield className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Criptografia E2E</h3>
                <p className="text-gray-300 leading-relaxed">
                  Todas as consultas são protegidas com criptografia de ponta a ponta. Nem mesmo nós temos acesso ao conteúdo das sessões.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                <Lock className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Conformidade LGPD</h3>
                <p className="text-gray-300 leading-relaxed">
                  100% em conformidade com a Lei Geral de Proteção de Dados e resoluções do Conselho Federal de Psicologia.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                <CheckCircle className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Servidores no Brasil</h3>
                <p className="text-gray-300 leading-relaxed">
                  Dados armazenados exclusivamente em servidores brasileiros certificados com redundância e backup automático.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-8 bg-white/5 backdrop-blur-sm border border-white/10 px-12 py-6 rounded-2xl">
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">99.9%</p>
                  <p className="text-sm text-gray-400 mt-1">Uptime garantido</p>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">ISO 27001</p>
                  <p className="text-sm text-gray-400 mt-1">Certificação</p>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">24/7</p>
                  <p className="text-sm text-gray-400 mt-1">Monitoramento</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="precos" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Planos transparentes para cada necessidade</h2>
              <p className="text-xl text-gray-600">Comece gratuitamente e escale conforme seu consultório cresce</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Inicial</h3>
                <p className="text-gray-600 mb-6">Para psicólogos iniciando na telepsicologia</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">R$ 0</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>Até 10 pacientes</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>Consultas ilimitadas</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>Prontuário básico</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>Sala de espera</span>
                  </li>
                </ul>
                <button className="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-full hover:bg-purple-50 transition-all font-medium">
                  Começar Grátis
                </button>
              </div>

              <div className="border-2 border-purple-600 rounded-2xl p-8 shadow-2xl shadow-purple-200 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Mais popular
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Profissional</h3>
                <p className="text-gray-600 mb-6">Para psicólogos estabelecidos</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">R$ 97</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>Pacientes ilimitados</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>Todas as escalas clínicas</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>Bloqueio de gravação</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>Consentimento digital</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>Gestão financeira</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>Suporte prioritário</span>
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition-all font-medium shadow-lg shadow-purple-200">
                  Começar Agora
                </button>
              </div>

              <div className="border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Clínica</h3>
                <p className="text-gray-600 mb-6">Para clínicas e grupos de psicólogos</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">R$ 297</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>Até 10 psicólogos</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>Dashboard gerencial</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>Sistema de supervisão</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>Relatórios avançados</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>Branding personalizado</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>Suporte dedicado</span>
                  </li>
                </ul>
                <button className="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-full hover:bg-purple-50 transition-all font-medium">
                  Falar com Vendas
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Pronto para transformar sua prática clínica?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Junte-se a centenas de psicólogos que já atendem com segurança e profissionalismo na Psync
            </p>
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full hover:bg-purple-50 transition-all text-lg font-semibold shadow-xl">
              Criar Conta Gratuita
            </button>
            <p className="text-sm text-purple-200 mt-4">Sem cartão de crédito • Configuração em 5 minutos</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <PsyncLogo size={24} />
                <span className="text-xl font-bold text-white">Psync</span>
              </div>
              <p className="text-sm text-gray-400">
                A plataforma completa para telepsicologia com segurança e privacidade.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Segurança</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Atualizações</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Guias</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Webinars</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Termos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-gray-400 text-center">
            <p>2024 Psync. Todos os direitos reservados. Desenvolvido com cuidado para psicólogos.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
