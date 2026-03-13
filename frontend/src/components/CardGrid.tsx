interface GridItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  category: string;
}

interface CardGridProps {
  data: GridItem[];
}

const CardGrid = ({ data }: CardGridProps) => {
  return (
    /* - grid-cols-1: 1 col on mobile
       - md:grid-cols-2: 2 cols on tablets
       - lg:grid-cols-3: 3 columns on desktops
       - gap-8: Exactly 32px spacing 
    */
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
      {data.map((item) => (
        <div key={item.id} className="group flex flex-col gap-3">
          {/* Image Wrapper */}
          <div className="overflow-hidden rounded-2xl aspect-video bg-gray-200">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Text Content */}
          <div>
            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-gray-500 font-medium">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;



