import Image from 'next/image';

const Logo: React.FC<{ variant?: 'light' | 'dark' }> = ({ variant = 'dark' }) => {
  return (
    <div className="flex items-center space-x-3">
      <Image
        src="/images/logo-gubi.png"
        alt="Gubi Logo"
        width={120}
        height={120}
        className="object-contain"
      />      
    </div>
  );
};

export default Logo;
