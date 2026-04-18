import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import ItemsTray from "../components/ItemsTray";
import CardGrid from "../components/CardGrid";
import Footer from "../components/Footer";

const blogItems = [
  { name: "All Posts", link: "#" },
  { name: "Data Science", link: "#" },
  { name: "Machine Learning", link: "#" },
  { name: "Tech News", link: "#" },
];

const blogData = [
  { id: 1, title: "Weather App", subtitle: "Data World", image: "/weather.jpg", category: "Data Science" },
  { id: 2, title: "E-commerce Bot", subtitle: "Machine Learning", image: "/bot.jpg", category: "Machine Learning" },
  { id: 3, title: "New Tech", subtitle: "Tech News", image: "/tech.jpg", category: "Tech News" },
];

const BlogPost = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Logic: This calculates the filtered data automatically whenever activeIndex changes
    const filteredData = useMemo(() => {
        const selectedCategory = blogItems[activeIndex].name;
        
        if (selectedCategory === "All Posts") return blogData;
        
        return blogData.filter((post) => post.category === selectedCategory);
    }, [activeIndex]);

    return (
        <>
            <Navbar />
            
            <div className="box-border px-5 py-7 overflow-x-hidden">
            <p className="relative left-[45%] text-center mt-2 text-[#3b82f6] rounded-4xl w-35 text-sm px-1 py-1 bg-[#3b82f6]/25">Insights & Ideas</p>
            <h1 className="text-5xl font-jakarta py-6 text-center font-extrabold text-[#1e293b]">
            {"From my blog post".split(" ").map((word, index) => (
            <span 
            key={index}
            className={`inline-block animate-text-reveal delay-${(index + 1) * 100} ${
            word === "blog" || word === "post" ? "text-[#3b82f6]" : ""
            }`}
            >
          {word}&nbsp;
            </span>
            ))}
            </h1>
            <p className="text-center text-md font-light text-[#64748b]">Explore the intersection of data science, machine learning and modern <br />
            technology. Dive into my latest thoughts and discoveries. </p>
        </div>
            <ItemsTray 
                items={blogItems}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />

            {/* Pass the filtered data instead of the raw blogData */}
            <CardGrid data={filteredData} />

            <Footer />
        </>
    );
};

export default BlogPost;