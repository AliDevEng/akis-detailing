const WHATSAPP_NUMBER = "46737158087"; // byt till ditt nummer
const WHATSAPP_MESSAGE = "Hej Mr. Aki! Jag är intresserad av dina tjänster och vill boka en tid.";
const PHONE_NUMBER = "+46737158087";   // byt till ditt nummer
const INSTAGRAM_URL = "https://instagram.com/DIN_INSTAGRAM";
const TIKTOK_URL = "https://tiktok.com/@DIN_TIKTOK";

function ContactButtons() {
  const whatsappLink =
    `https://wa.me/${WHATSAPP_NUMBER}` +
    `?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 
                   text-white py-3 rounded-xl transition shadow-md hover:shadow-xl"
      >
        <WhatsAppIcon />
        <span className="font-semibold text-sm">WhatsApp</span>
      </a>

      {/* Samtal */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 
                   text-white py-3 rounded-xl transition shadow-md hover:shadow-xl"
      >
        <PhoneIcon />
        <span className="font-semibold text-sm">Ring oss</span>
      </a>

      {/* Instagram */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 
                   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                   hover:brightness-110 text-white py-3 rounded-xl transition shadow-md hover:shadow-xl"
      >
        <InstagramIcon />
        <span className="font-semibold text-sm">Instagram</span>
      </a>

      {/* TikTok */}
      <a
        href={TIKTOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-black hover:bg-zinc-900 
                   text-white py-3 rounded-xl transition shadow-md hover:shadow-xl"
      >
        <TikTokIcon />
        <span className="font-semibold text-sm">TikTok</span>
      </a>

    </div>
  );
}

/* --- Ikoner som rena SVG-komponenter --- */

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="w-5 h-5 fill-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.017 3.003c-7.167 0-12.983 5.817-12.983 12.983 0 2.292.6 4.533 1.75 6.517l-1.833 6.7 6.867-1.8c1.9 1.05 4.034 1.617 6.2 1.617h.002c7.167 0 12.983-5.817 12.983-12.983 0-3.467-1.35-6.717-3.8-9.167s-5.7-3.867-9.167-3.867zm0 23.833h-.002c-1.933 0-3.85-.517-5.517-1.5l-.4-.233-4.067 1.067 1.083-3.967-.25-.417c-1.1-1.817-1.683-3.883-1.683-5.983 0-6.283 5.117-11.4 11.4-11.4 3.05 0 5.917 1.183 8.067 3.333s3.333 5.017 3.333 8.067c0 6.283-5.117 11.4-11.4 11.4zm6.45-8.75c-.35-.183-2.075-1.025-2.4-1.142-.325-.117-.567-.183-.808.183-.242.367-.925 1.142-1.133 1.383-.208.242-.417.275-.767.092-.35-.183-1.475-.542-2.812-1.725-1.039-.925-1.742-2.067-1.95-2.417-.204-.35-.022-.542.154-.725.158-.158.35-.408.525-.617.175-.208.233-.35.35-.583.117-.233.058-.433-.025-.617-.083-.183-.808-1.95-1.108-2.675-.292-.7-.592-.608-.808-.617-.208-.008-.45-.008-.692-.008s-.617.092-.942.433c-.325.342-1.242 1.217-1.242 2.967 0 1.75 1.275 3.45 1.45 3.683.175.233 2.508 3.85 6.083 5.4.85.367 1.508.583 2.025.742.85.267 1.625.233 2.233.142.682-.1 2.075-.85 2.367-1.667.292-.817.292-1.517.2-1.667-.092-.158-.325-.25-.675-.433z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 stroke-white"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 5c0-1.1.9-2 2-2h2.1a1 1 0 0 1 .98.804l.7 3.347a1 1 0 0 1-.57 1.093l-1.52.684a.75.75 0 0 0-.36.994 11.04 11.04 0 0 0 5.27 5.27.75.75 0 0 0 .99-.36l.69-1.53a1 1 0 0 1 1.09-.57l3.35.7a1 1 0 0 1 .8.98V19a2 2 0 0 1-2 2h-1C9.82 21 3 14.18 3 6v-1Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10A5 5 0 0012 7zm0 2a3 3 0 110 6 3 3 0 010-6z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.5 3h2.1c.1.7.4 1.4.9 2 .5.6 1.1 1.1 1.9 1.4v2.1a5.4 5.4 0 01-2.8-.8 5.7 5.7 0 01-1.5-1.3v7.4a5.4 5.4 0 11-5.4-5.4c.3 0 .7 0 1 .1v2.2a3.2 3.2 0 00-1-.2 3.2 3.2 0 103.2 3.2V3z" />
    </svg>
  );
}

export default ContactButtons;
