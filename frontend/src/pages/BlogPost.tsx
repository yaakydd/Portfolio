import Navbar from "../components/Navbar"
import ItemsTray from "../components/ItemsTray";

const blogItems = [
  { name: "All Posts", link: "#" },
  { name: "Data Science", link: "#" },
  { name: "Machine Learning", link: "#" },
  { name: "Tech News", link: "#" },
];


const BlogPost = () => {
    return (
        <>
        <Navbar />
        <div className="px-5 py-7 overflow-x-hidden">
            <p className="relative left-[45%] text-center mt-2 text-[#3b82f6] rounded-4xl w-35 text-sm px-1 py-1 bg-[#3b82f6]/25">Insights & Ideas</p>
            <h1 className="text-5xl font-jakarta py-6 text-center font-extrabold text-[#1e293b]">From my <span className="text-[#3b82f6]">blog post</span></h1>
            <p className="text-center text-md font-light text-[#64748b]">Explore the intersection of data science, machine learning and modern <br />
            technology. Dive into my latest thoughts and discoveries. </p>
        </div>
        <ItemsTray items={blogItems} />
        </>

    )
}
export default BlogPost