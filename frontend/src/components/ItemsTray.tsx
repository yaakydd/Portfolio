type Item = {
  name: string;
  link: string;
};

type ItemsTrayProps = {
  items: Item[];
};

const ItemsTray = ({ items }: ItemsTrayProps) => {
  return (
    <div className="py-2">
      <ul className="flex items-center justify-center gap-7 font-jakarta text-sm">
        {items.map((item, index) => (
          <li
            key={index}
            className="hover:text-white hover:bg-amber-600 rounded-2xl px-3 py-1"
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsTray;