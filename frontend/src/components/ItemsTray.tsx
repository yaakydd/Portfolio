type Item = {
  name: string;
  link: string;
};

type ItemsTrayProps = {
  items: Item[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const ItemsTray = ({ items, activeIndex, setActiveIndex }: ItemsTrayProps) => {
  return (
    <div className="box-border py-2">
      <ul className="flex items-center justify-center gap-7 font-jakarta text-sm">
        {items.map((item, index) => (
          <li
            key={index}
            // Trigger the state change when clicked
            onClick={() => setActiveIndex(index)}
            className={`
              cursor-pointer rounded-4xl px-4 py-2 transition-all font-jakarta
              ${
                activeIndex === index
                  ? "bg-[#3b82f6] text-white font-bold" // Active Styles
                  : "text-[#475569] bg-transparent border-transparent hover:border-[#3b82f6] hover:text-[#3b82f6]" // Inactive/Hover Styles
              }
            `}
          >
            {/* If using as filter buttons, we can remove <a> or keep it for links */}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsTray;