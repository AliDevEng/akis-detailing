const WHATSAPP_NUMBER = "46737158087"; 
// Byt ut mot ditt riktiga nummer, utan + och utan mellanslag

const WHATSAPP_MESSAGE = "Hej Mr. Aki! Jag är intresserad av dina tjänster och vill boka en tid."; 
// Standardmeddelande som fylls i automatiskt

function FloatingWhatsApp() {
  const whatsappLink =
    `https://wa.me/${WHATSAPP_NUMBER}` +
    `?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 
                 bg-green-500 hover:bg-green-600 text-white 
                 rounded-full shadow-lg hover:shadow-xl 
                 flex items-center gap-2 py-3 px-4 
                 transition transform hover:scale-105"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
        >
        <path d="M16.017 3.003c-7.167 0-12.983 5.817-12.983 12.983 0 2.292.6 4.533 1.75 6.517l-1.833 6.7 6.867-1.8c1.9 1.05 4.034 1.617 6.2 1.617h.002c7.167 0 12.983-5.817 12.983-12.983 0-3.467-1.35-6.717-3.8-9.167s-5.7-3.867-9.167-3.867zm0 23.833h-.002c-1.933 0-3.85-.517-5.517-1.5l-.4-.233-4.067 1.067 1.083-3.967-.25-.417c-1.1-1.817-1.683-3.883-1.683-5.983 0-6.283 5.117-11.4 11.4-11.4 3.05 0 5.917 1.183 8.067 3.333s3.333 5.017 3.333 8.067c0 6.283-5.117 11.4-11.4 11.4zm6.45-8.75c-.35-.183-2.075-1.025-2.4-1.142-.325-.117-.567-.183-.808.183-.242.367-.925 1.142-1.133 1.383-.208.242-.417.275-.767.092-.35-.183-1.475-.542-2.812-1.725-1.039-.925-1.742-2.067-1.95-2.417-.204-.35-.022-.542.154-.725.158-.158.35-.408.525-.617.175-.208.233-.35.35-.583.117-.233.058-.433-.025-.617-.083-.183-.808-1.95-1.108-2.675-.292-.7-.592-.608-.808-.617-.208-.008-.45-.008-.692-.008s-.617.092-.942.433c-.325.342-1.242 1.217-1.242 2.967 0 1.75 1.275 3.45 1.45 3.683.175.233 2.508 3.85 6.083 5.4.85.367 1.508.583 2.025.742.85.267 1.625.233 2.233.142.683-.1 2.075-.85 2.367-1.667.292-.817.292-1.517.2-1.667-.092-.158-.325-.25-.675-.433z"/>
    </svg>

      <span className="hidden sm:inline text-sm font-semibold">
        WhatsApp
      </span>
    </a>
  );
}

export default FloatingWhatsApp;
