```react
import React, { useState } from 'react';
import { Download, Monitor, Search, Code, LayoutGrid, Terminal, Smartphone, Info } from 'lucide-react';

/* ========================================================
  مرحباً بك! هنا يمكنك إضافة برامجك بكل سهولة.
  لإضافة برنامج جديد، قم بنسخ أحد المقاطع بين الأقواس { ... } 
  وغير النص والرابط كما تريد.
  ========================================================
*/
const myPrograms = [
  {
    id: 1,
    title: "برنامج المحاسب السهل",
    description: "برنامج متكامل لإدارة المبيعات والمخازن، مصمم خصيصاً للمحلات التجارية الصغيرة والمتوسطة بواجهة سهلة الاستخدام.",
    version: "1.2.0",
    size: "45 MB",
    platform: "Windows",
    downloadLink: "https://google.com", // ضع رابط التحميل الخاص بك هنا (مثل رابط ميديا فاير أو جوجل درايف)
    icon: <Monitor className="w-10 h-10 text-blue-500" />,
    tags: ["محاسبة", "إدارة"]
  },
  {
    id: 2,
    title: "أداة تنظيف النظام بلس",
    description: "أداة خفيفة وسريعة لتنظيف الملفات المؤقتة في نظام الويندوز وتسريع أداء الحاسوب بنقرة زر واحدة.",
    version: "2.0.1",
    size: "5 MB",
    platform: "Windows",
    downloadLink: "https://google.com", 
    icon: <Terminal className="w-10 h-10 text-green-500" />,
    tags: ["أدوات نظام", "تسريع"]
  },
  {
    id: 3,
    title: "تطبيق منظم المهام",
    description: "تطبيق لمساعدتك على ترتيب مهامك اليومية وزيادة إنتاجيتك مع خاصية التنبيهات الذكية.",
    version: "1.0.0",
    size: "12 MB",
    platform: "Android",
    downloadLink: "https://google.com",
    icon: <Smartphone className="w-10 h-10 text-purple-500" />,
    tags: ["إنتاجية", "تطبيقات"]
  },
  {
    id: 4,
    title: "محرر النصوص البرمجية",
    description: "محرر نصوص خفيف يدعم عدة لغات برمجة مع خاصية التلوين التلقائي للأكواد (Syntax Highlighting).",
    version: "3.5",
    size: "25 MB",
    platform: "Cross-platform",
    downloadLink: "https://google.com",
    icon: <Code className="w-10 h-10 text-orange-500" />,
    tags: ["برمجة", "تطوير"]
  }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // تصفية البرامج بناءً على البحث
  const filteredPrograms = myPrograms.filter(prog => 
    prog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    prog.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-200">
      
      {/* Header - رأس الصفحة */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 shadow-lg">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm mb-6 shadow-inner">
              <LayoutGrid className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              برامج ستور مود
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed">
              مرحباً بك في موقعي الرسمي. هنا أشارك معكم جميع البرامج والتطبيقات المهكرة والمعدلة و التي قمت بتطويرها. يمكنك تصفحها وتحميلها مباشرة ومجاناً.
            </p>

            {/* مربع البحث */}
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="ابحث عن برنامج..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-12 py-3 rounded-full text-gray-800 bg-white shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all duration-300 placeholder-gray-400"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - المحتوى الرئيسي (شبكة البرامج) */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        
        <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-600" />
            أحدث الإصدارات
          </h2>
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
            {filteredPrograms.length} برامج
          </span>
        </div>

        {/* شبكة الكروت */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <div 
                key={program.id} 
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group"
              >
                {/* الجزء العلوي من الكارت */}
                <div className="p-6 flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gray-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {program.icon}
                    </div>
                    <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded-md">
                      {program.version}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>

                  {/* وسوم / Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.tags.map((tag, index) => (
                      <span key={index} className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* الجزء السفلي من الكارت (معلومات إضافية وزر التحميل) */}
                <div className="bg-gray-50 p-6 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-4 text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-1">
                      <Info className="w-4 h-4" />
                      <span>{program.size}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Monitor className="w-4 h-4" />
                      <span>{program.platform}</span>
                    </div>
                  </div>
                  
                  <a 
                    href={program.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-semibold transition-colors duration-200 active:scale-95"
                  >
                    <Download className="w-5 h-5" />
                    تحميل البرنامج
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* حالة عدم وجود نتائج للبحث */
          <div className="text-center py-20">
            <div className="inline-flex bg-gray-100 p-6 rounded-full mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">لم يتم العثور على نتائج</h3>
            <p className="text-gray-500">جرب البحث بكلمات أخرى.</p>
          </div>
        )}
      </main>

      {/* Footer - تذييل الصفحة */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-12 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} - جميع الحقوق محفوظة للمُطور (محمد ماجد الفريجي).</p>
          <p className="mt-2 text-gray-500">تم التصميم بكل حب ❤️ لعرض أفضل التطبيقات المهكرة والمدفوعة والمعدلة.</p>
        </div>
      </footer>
    </div>
  );
}
