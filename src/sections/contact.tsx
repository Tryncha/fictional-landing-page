import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="flex h-76 w-full justify-center gap-36 py-8 text-cyan-800">
      <div className="flex flex-col items-center justify-center">
        <MapPin size={86} />
        <span className="text-md w-56 text-center font-medium">501 Washington Ave, Roselle, NJ 07203, EE. UU.</span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Phone size={86} />
        <span className="text-md w-56 text-center font-medium">+1 484 762 3565</span>
        <span className="text-md w-56 text-center font-medium">+1 216 486 4197</span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Mail size={86} />
        <span className="text-md w-56 text-center font-medium">rowan.evercerst@contact.com</span>
        <span className="text-md w-56 text-center font-medium">free.library@contact.com</span>
      </div>
    </section>
  );
};

export default Contact;
