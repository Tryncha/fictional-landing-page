import { BiLogoAmazon, BiLogoInstagramAlt, BiLogoTwitter } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-gray-100 p-8">
      <div className="my-4 flex gap-2">
        <button className="flex size-12 items-center justify-center rounded-full border border-cyan-700 transition-transform hover:scale-105 hover:cursor-pointer">
          <BiLogoTwitter
            size={30}
            color="#007595"
          />
        </button>
        <button className="flex size-12 items-center justify-center rounded-full border border-cyan-700 transition-transform hover:scale-105 hover:cursor-pointer">
          <BiLogoInstagramAlt
            size={30}
            color="#007595"
          />
        </button>
        <button className="flex size-12 items-center justify-center rounded-full border border-cyan-700 transition-transform hover:scale-105 hover:cursor-pointer">
          <BiLogoAmazon
            size={30}
            color="#007595"
          />
        </button>
      </div>
      <span className="text-center text-gray-600">&copy; Copyright Rowan Evercrest. All Rights Reserved.</span>
      <span className="text-gray-600">
        <span className="text-blue-700 underline hover:cursor-pointer">Privacy</span> •{' '}
        <span className="text-blue-700 underline hover:cursor-pointer">Terms of Use</span>
      </span>
    </footer>
  );
};

export default Footer;
