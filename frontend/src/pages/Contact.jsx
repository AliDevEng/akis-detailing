import ContactButtons from "../components/ContactButtons";


function Contact() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pt-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Kontakta oss</h1>
        <p className="text-slate-300 mb-3">
          Här hittar du alla sätt att nå oss. Snabbast svarar vi via WhatsApp!
        </p>
        <ContactButtons />
      </div>
    </div>
  );
}

export default Contact;
