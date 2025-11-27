import { useState, useEffect } from 'react';
import { Video, Check, Instagram, ArrowRight, Menu, X, Users, Layers, MessageCircle, MonitorPlay, BarChart3, Fingerprint, ChevronDown, Mail, MapPin, Phone } from 'lucide-react';
import JopiLogo from './assets/LOGOFULL.png';

const App = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [packageModalOpen, setPackageModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            setMobileMenuOpen(false);
            
            // Pequeño delay para asegurar que el menú móvil se cierre primero
            setTimeout(() => {
                // Obtener la altura del navbar dinámicamente
                const nav = document.querySelector('nav');
                const navbarHeight = nav ? nav.offsetHeight : 100;
                
                // Calcular la posición con offset usando getBoundingClientRect para mayor precisión
                const elementRect = element.getBoundingClientRect();
                const elementPosition = elementRect.top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight;

                // Usar requestAnimationFrame para una animación más suave y visible
                const startPosition = window.pageYOffset;
                const distance = offsetPosition - startPosition;
                const duration = 1200; // Duración de 1.2 segundos para que sea muy visible
                let start = null;

                const smoothScroll = (timestamp) => {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const percentage = Math.min(progress / duration, 1);
                    
                    // Función de easing ease-in-out-cubic para un movimiento más natural y visible
                    const easeInOutCubic = percentage < 0.5
                        ? 4 * percentage * percentage * percentage
                        : 1 - Math.pow(-2 * percentage + 2, 3) / 2;
                    
                    const currentPosition = startPosition + distance * easeInOutCubic;
                    window.scrollTo(0, currentPosition);
                    
                    if (progress < duration) {
                        requestAnimationFrame(smoothScroll);
                    } else {
                        // Asegurar que llegamos exactamente a la posición final
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'auto' // Cambiar a auto al final para asegurar posición exacta
                        });
                    }
                };

                requestAnimationFrame(smoothScroll);
            }, 50);
        }
    };

    const whatsappNumber = "51945591695";
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    // Mensajes predeterminados según el paquete
    const getPackageMessage = (packageName) => {
        const messages = {
            'clasico': `¡Hola! Me interesa el paquete *Clásico* (S/. 95). Me gustaría agendar una sesión de 30 minutos para conocer más detalles.`,
            'emprendedor': `¡Hola! Me interesa el paquete *Emprendedor* (S/. 255). Me gustaría agendar una sesión de 30 minutos para conocer más detalles.`,
            'premium': `¡Hola! Me interesa el paquete *Premium* (S/. 155). Me gustaría agendar una sesión de 30 minutos para conocer más detalles.`
        };
        return encodeURIComponent(messages[packageName] || messages['emprendedor']);
    };

    const handlePackageSelection = (packageName) => {
        const message = getPackageMessage(packageName);
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
        setPackageModalOpen(false);
        window.open(whatsappLink, '_blank');
    };

    const openPackageModal = () => {
        setPackageModalOpen(true);
        setMobileMenuOpen(false);
    };

    return (
        // FONDO BASE: BLANCO
        <div className="min-h-screen bg-white text-gray-900 font-poppins selection:bg-[#214A44] selection:text-white overflow-x-hidden">

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        .font-poppins { font-family: 'Poppins', sans-serif; }

        /* PALETA */
        .bg-jopi-teal { background-color: #214A44; }
        .text-jopi-teal { color: #214A44; }
        .border-jopi-teal { border-color: #214A44; }
        
        /* SOMBRAS SUAVES (ELEVACIÓN) */
        .card-shadow {
          box-shadow: 0 10px 40px -10px rgba(33, 74, 68, 0.15);
        }
        
        .card-shadow-hover:hover {
          box-shadow: 0 20px 50px -10px rgba(33, 74, 68, 0.25);
        }

        /* DECORACIÓN */
        .pattern-dot {
          background-image: radial-gradient(#214A44 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.05;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>

            {/* --- NAVBAR --- */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 md:py-4 shadow-md' : 'bg-transparent py-4 md:py-6'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
                    {/* LOGO: Image */}
                    <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img src={JopiLogo} alt="JopiCrew Logo" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-10 text-sm font-medium tracking-wide text-gray-600">
                        <button onClick={() => scrollToSection('nosotros')} className="hover:text-[#214A44] transition-colors relative group whitespace-nowrap">
                            LA DUPLA
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#214A44] group-hover:w-full transition-all duration-300"></span>
                        </button>
                        <button onClick={() => scrollToSection('metodologia')} className="hover:text-[#214A44] transition-colors relative group whitespace-nowrap">
                            METODOLOGÍA
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#214A44] group-hover:w-full transition-all duration-300"></span>
                        </button>
                        <button onClick={() => scrollToSection('precios')} className="hover:text-[#214A44] transition-colors relative group whitespace-nowrap">
                            PAQUETES
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#214A44] group-hover:w-full transition-all duration-300"></span>
                        </button>
                        <button
                            onClick={openPackageModal}
                            className="bg-[#214A44] text-white px-5 xl:px-6 py-2 xl:py-2.5 rounded-full font-bold hover:bg-[#15302c] transition-all transform hover:scale-105 shadow-lg shadow-[#214A44]/20 text-xs xl:text-sm whitespace-nowrap"
                        >
                            AGENDAR SESIÓN
                        </button>
                    </div>

                    <button className="lg:hidden text-gray-900 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 lg:hidden z-50 shadow-xl">
                        <button onClick={() => scrollToSection('nosotros')} className="text-left text-lg font-medium text-gray-600 py-2">La Dupla</button>
                        <button onClick={() => scrollToSection('metodologia')} className="text-left text-lg font-medium text-gray-600 py-2">Metodología</button>
                        <button onClick={() => scrollToSection('precios')} className="text-left text-lg font-medium text-gray-600 py-2">Paquetes</button>
                        <button onClick={openPackageModal} className="text-left text-lg font-bold text-[#214A44] py-2">Empezar</button>
                    </div>
                )}
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 md:pt-32 overflow-hidden bg-white">
                {/* Decorative Background */}
                <div className="absolute inset-0 pattern-dot pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-[#214A44]/5 rounded-full blur-[100px] -z-10"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-[#214A44]/5 rounded-full blur-[100px] -z-10"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 sm:px-5 py-2 rounded-full border border-[#214A44]/20 bg-[#214A44]/5 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-[#214A44] animate-float">
                        <span className="w-2 h-2 rounded-full bg-[#214A44] animate-pulse"></span>
                        Estrategia + Producción
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-[1.1] tracking-tighter mb-6 sm:mb-8 text-gray-900 px-2">
                        DOMINA <br />
                        <span className="text-[#214A44]">EL SCROLL</span>
                    </h1>

                    <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-4">
                        Transformamos la estrategia de tu marca en activos digitales de alto impacto.
                        <strong className="block mt-2 text-gray-900 font-semibold">Sin relleno. Solo resultados.</strong>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4">
                        <button
                            onClick={() => scrollToSection('precios')}
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#214A44] text-white font-bold text-base sm:text-lg rounded-lg hover:bg-[#15302c] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 shadow-xl shadow-[#214A44]/30"
                        >
                            Ver Planes <ArrowRight size={20} />
                        </button>
                        <button
                            onClick={() => scrollToSection('nosotros')}
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 text-gray-700 font-medium text-base sm:text-lg rounded-lg hover:border-[#214A44] hover:text-[#214A44] transition-all flex items-center justify-center gap-3 bg-white"
                        >
                            <Users size={20} /> Conoce al Crew
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-300">
                    <ChevronDown size={24} className="sm:w-8 sm:h-8" />
                </div>
            </section>

            {/* --- LA DUPLA (About Us) --- */}
            <section id="nosotros" className="py-16 sm:py-20 md:py-24 relative bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="mb-12 sm:mb-16 md:mb-20 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 px-4">LA VENTAJA DEL <span className="text-[#214A44]">DÚO</span></h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg px-4">
                            Dos especialistas. Un solo objetivo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                        {/* Jose Miguel */}
                        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-100 card-shadow card-shadow-hover transition-all group">
                            <div className="flex items-start justify-between mb-4 sm:mb-6">
                                <div className="flex-1">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">El Visual</h3>
                                    <p className="text-[#214A44] font-bold text-xs sm:text-sm uppercase tracking-wider">Jose Miguel Pisfil</p>
                                </div>
                                <div className="p-2 sm:p-3 bg-[#214A44]/10 rounded-lg text-[#214A44] group-hover:bg-[#214A44] group-hover:text-white transition-all flex-shrink-0 ml-4">
                                    <MonitorPlay size={24} className="sm:w-7 sm:h-7" />
                                </div>
                            </div>
                            <p className="text-gray-500 leading-relaxed border-l-4 border-[#214A44] pl-3 sm:pl-4 text-sm sm:text-base">
                                Director y creador. Se encarga de que tu marca se vea impecable. Excelencia técnica y dirección de arte.
                            </p>
                        </div>

                        {/* Maria Veronica */}
                        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-100 card-shadow card-shadow-hover transition-all group">
                            <div className="flex items-start justify-between mb-4 sm:mb-6">
                                <div className="flex-1">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">La Estratega</h3>
                                    <p className="text-[#214A44] font-bold text-xs sm:text-sm uppercase tracking-wider">Maria Veronica Sialer</p>
                                </div>
                                <div className="p-2 sm:p-3 bg-[#214A44]/10 rounded-lg text-[#214A44] group-hover:bg-[#214A44] group-hover:text-white transition-all flex-shrink-0 ml-4">
                                    <Fingerprint size={24} className="sm:w-7 sm:h-7" />
                                </div>
                            </div>
                            <p className="text-gray-500 leading-relaxed border-l-4 border-[#214A44] pl-3 sm:pl-4 text-sm sm:text-base">
                                Coordinadora y narradora. Se encarga de que tu marca tenga sentido. Define voz, tono y propósito.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- METODOLOGÍA (Minimal Cards) --- */}
            <section id="metodologia" className="py-16 sm:py-20 md:py-24 bg-white relative">
                <div className="absolute inset-0 pattern-dot pointer-events-none"></div>
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="text-center mb-12 sm:mb-16 md:mb-20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 px-4">NUESTRO <span className="text-[#214A44]">PROCESO</span></h2>
                        <p className="text-gray-500 text-sm sm:text-base">Creatividad con estructura.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
                        {[
                            {
                                step: "01",
                                title: "Descubrimiento",
                                desc: "Auditoría profunda de tu marca y competencia.",
                                icon: <MessageCircle />
                            },
                            {
                                step: "02",
                                title: "Estrategia",
                                desc: "Definición de pilares de contenido y voz.",
                                icon: <Layers />
                            },
                            {
                                step: "03",
                                title: "Producción",
                                desc: "Grabación y edición con estándares pro.",
                                icon: <Video />
                            },
                            {
                                step: "04",
                                title: "Optimización",
                                desc: "Análisis de métricas y ajuste de rumbo.",
                                icon: <BarChart3 />
                            }
                        ].map((phase, idx) => (
                            <div key={idx} className="bg-gray-50 p-6 sm:p-7 md:p-8 rounded-xl border border-transparent hover:border-[#214A44]/30 hover:bg-white card-shadow-hover transition-all duration-300 group">
                                <div className="text-[#214A44]/20 font-black text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:text-[#214A44] transition-colors">0{idx + 1}</div>
                                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PRICING SECTION --- */}
            <section id="precios" className="py-16 sm:py-20 md:py-24 bg-gray-900 text-white relative overflow-hidden">
                {/* Este fondo oscuro para precios crea un gran contraste y enfoca la atención */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-[#214A44]/20 rounded-full blur-[120px] -z-10"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white px-4">PAQUETES</h2>
                        <p className="text-gray-300 text-sm sm:text-base">Inversión clara. Resultados visibles.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">

                        {/* Plan Clásico */}
                        <div className="bg-gray-800/90 backdrop-blur-sm p-6 sm:p-7 md:p-8 rounded-2xl border border-gray-700/60 hover:border-[#214A44] transition-all flex flex-col shadow-xl">
                            <h3 className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-3 sm:mb-4">Inicial</h3>
                            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">Clásico</div>
                            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-lg">
                                S/. 95
                            </div>

                            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-gray-200 text-xs sm:text-sm flex-grow">
                                <li className="flex gap-2 sm:gap-3 items-start"><Check size={18} className="text-[#214A44] flex-shrink-0 mt-0.5" /> <span>1 sesión fotos básica</span></li>
                                <li className="flex gap-2 sm:gap-3 items-start"><Check size={18} className="text-[#214A44] flex-shrink-0 mt-0.5" /> <span>5 fotos editadas</span></li>
                                <li className="flex gap-2 sm:gap-3 items-start"><Check size={18} className="text-[#214A44] flex-shrink-0 mt-0.5" /> <span>2 diseños RRSS</span></li>
                                <li className="flex gap-2 sm:gap-3 items-start"><Check size={18} className="text-[#214A44] flex-shrink-0 mt-0.5" /> <span>1 video vertical</span></li>
                                <li className="flex gap-2 sm:gap-3 items-start"><Check size={18} className="text-[#214A44] flex-shrink-0 mt-0.5" /> <span>Entrega: 48h</span></li>
                            </ul>
                            <button 
                                onClick={openPackageModal}
                                className="w-full py-3 border-2 border-gray-600 text-white hover:bg-[#214A44] hover:border-[#214A44] font-bold transition-all text-xs sm:text-sm uppercase tracking-wider rounded-lg"
                            >
                                Seleccionar
                            </button>
                        </div>

                        {/* Plan Emprendedor (Highlighted) */}
                        <div className="bg-white p-6 sm:p-7 md:p-8 rounded-2xl relative transform lg:scale-105 shadow-2xl z-10 border-2 sm:border-4 border-[#214A44] flex flex-col order-first lg:order-none">
                            <div className="absolute top-0 right-0 bg-[#214A44] text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-bl-lg uppercase tracking-wider shadow-lg">
                                Recomendado
                            </div>
                            <h3 className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-3 sm:mb-4 mt-1">Crecimiento Total</h3>
                            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Emprendedor</div>
                            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 drop-shadow-md">
                                S/. 255
                            </div>

                            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-gray-700 text-xs sm:text-sm flex-grow">
                                <li className="flex gap-2 sm:gap-3 items-start"><Check size={18} className="text-[#214A44] flex-shrink-0 mt-0.5" /> <span className="font-bold">Sesión audiovisual completa</span></li>
                                <li className="flex gap-2 sm:gap-3 items-start"><Check size={18} className="text-[#214A44] flex-shrink-0 mt-0.5" /> <span>15 fotos HQ</span></li>
                                <li className="flex gap-2 sm:gap-3 items-start"><Check size={18} className="text-[#214A44] flex-shrink-0 mt-0.5" /> <span>6 diseños RRSS</span></li>
                                <li className="flex gap-2 sm:gap-3 items-start"><Check size={18} className="text-[#214A44] flex-shrink-0 mt-0.5" /> <span>3 videos PRO</span></li>
                                <li className="flex gap-2 sm:gap-3 items-start"><Check size={18} className="text-[#214A44] flex-shrink-0 mt-0.5" /> <span>Asesoría Estrategia</span></li>
                                <li className="flex gap-2 sm:gap-3 items-start"><Check size={18} className="text-[#214A44] flex-shrink-0 mt-0.5" /> <span>Mini guía identidad</span></li>
                            </ul>
                            <button 
                                onClick={openPackageModal}
                                className="w-full py-3 sm:py-4 bg-[#214A44] text-white hover:bg-[#15302c] font-bold transition-all shadow-lg text-xs sm:text-sm uppercase tracking-wider rounded-lg"
                            >
                                Lo Quiero Todo
                            </button>
                        </div>

                        {/* Plan Premium */}
                        <div className="bg-gray-800/90 backdrop-blur-sm p-6 sm:p-7 md:p-8 rounded-2xl border border-gray-700/60 hover:border-[#214A44] transition-all flex flex-col shadow-xl">
                            <h3 className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-3 sm:mb-4">Intermedio</h3>
                            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">Premium</div>
                            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-lg">
                                S/. 155
                            </div>

                            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-gray-200 text-xs sm:text-sm flex-grow">
                                <li className="flex gap-2 sm:gap-3 items-start"><Check size={18} className="text-[#214A44] flex-shrink-0 mt-0.5" /> <span>1 sesión foto completa</span></li>
                                <li className="flex gap-2 sm:gap-3 items-start"><Check size={18} className="text-[#214A44] flex-shrink-0 mt-0.5" /> <span>10 fotos editadas</span></li>
                                <li className="flex gap-2 sm:gap-3 items-start"><Check size={18} className="text-[#214A44] flex-shrink-0 mt-0.5" /> <span>4 diseños RRSS</span></li>
                                <li className="flex gap-2 sm:gap-3 items-start"><Check size={18} className="text-[#214A44] flex-shrink-0 mt-0.5" /> <span>2 videos verticales</span></li>
                                <li className="flex gap-2 sm:gap-3 items-start"><Check size={18} className="text-[#214A44] flex-shrink-0 mt-0.5" /> <span>Entrega: 72h</span></li>
                            </ul>
                            <button 
                                onClick={openPackageModal}
                                className="w-full py-3 border-2 border-gray-600 text-white hover:bg-[#214A44] hover:border-[#214A44] font-bold transition-all text-xs sm:text-sm uppercase tracking-wider rounded-lg"
                            >
                                Seleccionar
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* Modal de Selección de Paquete */}
            {packageModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setPackageModalOpen(false)}>
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setPackageModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={24} />
                        </button>
                        
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Selecciona tu Paquete</h3>
                        <p className="text-gray-500 text-sm sm:text-base mb-6">Elige el paquete que más te interesa para agendar tu sesión</p>

                        <div className="space-y-3">
                            <button
                                onClick={() => handlePackageSelection('clasico')}
                                className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-[#214A44] hover:bg-[#214A44]/5 transition-all group"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-bold text-gray-900 group-hover:text-[#214A44] transition-colors">Clásico</div>
                                        <div className="text-sm text-gray-500">S/. 95</div>
                                    </div>
                                    <ArrowRight className="text-gray-400 group-hover:text-[#214A44] transition-colors" size={20} />
                                </div>
                            </button>

                            <button
                                onClick={() => handlePackageSelection('emprendedor')}
                                className="w-full p-4 text-left border-2 border-[#214A44] rounded-xl bg-[#214A44]/5 hover:bg-[#214A44]/10 transition-all group"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-gray-900 group-hover:text-[#214A44] transition-colors">Emprendedor</span>
                                            <span className="text-xs bg-[#214A44] text-white px-2 py-0.5 rounded-full font-bold">Recomendado</span>
                                        </div>
                                        <div className="text-sm text-gray-500">S/. 255</div>
                                    </div>
                                    <ArrowRight className="text-[#214A44] transition-colors" size={20} />
                                </div>
                            </button>

                            <button
                                onClick={() => handlePackageSelection('premium')}
                                className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-[#214A44] hover:bg-[#214A44]/5 transition-all group"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-bold text-gray-900 group-hover:text-[#214A44] transition-colors">Premium</div>
                                        <div className="text-sm text-gray-500">S/. 155</div>
                                    </div>
                                    <ArrowRight className="text-gray-400 group-hover:text-[#214A44] transition-colors" size={20} />
                                </div>
                            </button>
                        </div>

                        <p className="text-xs text-gray-400 text-center mt-6">
                            Serás redirigido a WhatsApp con un mensaje predeterminado
                        </p>
                    </div>
                </div>
            )}

            {/* --- MODERN BIG FOOTER --- */}
            <footer id="contacto" className="bg-[#0d1f1c] text-white pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12 relative overflow-hidden">
                {/* Decorative pattern for footer */}
                <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#214A44]/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-[#214A44]/10 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">

                    {/* Top Section: CTA & Newsletter */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20 border-b border-[#214A44]/30 pb-12 sm:pb-14 md:pb-16">
                        <div className="lg:w-1/2 w-full">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight">
                                Let&apos;s create <br />
                                <span className="text-[#214A44] bg-white px-2 inline-block -rotate-1 transform mt-1 sm:mt-2">impact.</span>
                            </h2>
                            <p className="text-gray-400 text-base sm:text-lg max-w-md leading-relaxed">
                                No dejes que tu marca sea una más en el feed. Comencemos a construir tu legado digital hoy mismo.
                            </p>
                        </div>

                        <div className="lg:w-1/3 w-full">
                            <div className="bg-[#152725] p-6 sm:p-7 md:p-8 rounded-2xl border border-[#214A44]/20">
                                <h4 className="font-bold text-lg sm:text-xl mb-4">Contáctanos Rápido</h4>
                                <div className="space-y-3 sm:space-y-4">
                                    <button
                                        onClick={openPackageModal}
                                        className="w-full py-3 sm:py-4 bg-[#214A44] hover:bg-white hover:text-[#0d1f1c] text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                                    >
                                        <MessageCircle size={18} className="sm:w-5 sm:h-5" />
                                        Agendar Sesión 30min
                                    </button>
                                    <a href="mailto:jopicrew0@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
                                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#214A44]/20 flex items-center justify-center text-[#214A44] flex-shrink-0">
                                            <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                                        </div>
                                        <div className="min-w-0">
                                            <span className="block text-xs uppercase tracking-wider text-gray-500">Email</span>
                                            <span className="text-sm sm:text-base break-all">jopicrew0@gmail.com</span>
                                        </div>
                                    </a>
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
                                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#214A44]/20 flex items-center justify-center text-[#214A44] flex-shrink-0">
                                            <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                                        </div>
                                        <div className="min-w-0">
                                            <span className="block text-xs uppercase tracking-wider text-gray-500">Teléfono / WhatsApp</span>
                                            <span className="text-sm sm:text-base">+51 945 591 695</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Section: Links Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
                        <div className="col-span-2 sm:col-span-2 md:col-span-1">
                            <div className="flex items-center gap-2 mb-4 sm:mb-6">
                                <img src={JopiLogo} alt="JopiCrew Logo" className="h-10 sm:h-12 w-auto object-contain" />
                            </div>
                            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                Agencia creativa especializada en estrategia y producción audiovisual para marcas que buscan destacar.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-4 sm:mb-6 text-sm sm:text-base">Explorar</h4>
                            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-xs sm:text-sm">
                                <li><button onClick={() => scrollToSection('nosotros')} className="hover:text-[#214A44] transition-colors text-left">La Dupla</button></li>
                                <li><button onClick={() => scrollToSection('metodologia')} className="hover:text-[#214A44] transition-colors text-left">Metodología</button></li>
                                <li><button onClick={() => scrollToSection('precios')} className="hover:text-[#214A44] transition-colors text-left">Paquetes</button></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-4 sm:mb-6 text-sm sm:text-base">Servicios</h4>
                            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-xs sm:text-sm">
                                <li>Gestión de Redes</li>
                                <li>Producción Audiovisual</li>
                                <li>Fotografía de Producto</li>
                                <li>Estrategia Digital</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-4 sm:mb-6 text-sm sm:text-base">Social</h4>
                            <div className="flex gap-3 sm:gap-4">
                                <a href="https://www.instagram.com/jopicrew/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#214A44] transition-all hover:scale-110">
                                    <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
                                </a>
                                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#214A44] transition-all hover:scale-110">
                                    <MonitorPlay size={16} className="sm:w-[18px] sm:h-[18px]" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Copyright */}
                    <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-[#214A44]/20 text-xs text-gray-600 gap-3 sm:gap-0">
                        <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} JopiCrew Digital. All rights reserved.</p>
                        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-end">
                            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                            <a href="#" className="hover:text-white transition-colors">Términos</a>
                            <span className="flex items-center gap-1 text-[#214A44]">
                                <MapPin size={12} /> Lima, Perú
                            </span>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default App;
