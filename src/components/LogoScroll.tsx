import AnimatedText from './AnimatedText';

interface LogoEntry {
  src: string;
  label: string;
}

const LogoScroll = () => {
  const logos: LogoEntry[] = [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Stanford_Cardinal_logo.svg', label: 'Stanford' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', label: 'Amazon' },
    { src: 'https://1000logos.net/wp-content/uploads/2021/05/JP-Morgan-Chase-logo.png', label: 'JP Morgan' },
    { src: 'https://via.placeholder.com/100x40.png?text=Mercor', label: 'Mercor' },
    { src: 'https://via.placeholder.com/100x40.png?text=Phoenix+Tailings', label: 'Phoenix Tailings' },
  ];

  return (
    <AnimatedText delay={1700} className="w-full">
      <div className="w-full overflow-hidden py-8">
        <div className="flex items-center space-x-12 animate-marquee">
          {logos.concat(logos).map(({ src, label }, idx) => (
            <div key={`${label}-${idx}`} className="flex flex-col items-center justify-center h-24 w-auto bg-gray-800 rounded-lg px-6 group transition-all duration-300 hover:bg-gray-700 hover:scale-105">
              <img
                src={src}
                alt={label}
                className="h-12 w-auto object-contain transition duration-300"
                onError={({ currentTarget }) => { currentTarget.src = `https://via.placeholder.com/100x40.png?text=${encodeURIComponent(label)}`; }}
              />
              <span className="mt-2 text-white/60 text-xs uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedText>
  );
};

export default LogoScroll;