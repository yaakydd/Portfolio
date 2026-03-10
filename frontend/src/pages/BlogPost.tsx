import Navbar from "../components/Navbar"
import ItemsTray from "../components/ItemsTray"

const BlogPost = () => {
    return (
        <>
        <Navbar />
        <div className="px-5 py-7">
            <p className="text-center mt-3 text-[#3b82f6] text-sm">Insights & Ideas</p>
            <h1 className="text-5xl font-jakarta py-5 text-center font-extrabold text-[#1e293b]">From my <span className="text-[#3b82f6]">blog post</span></h1>
            <p className="text-center  text-md font-light text-[#64748b]">Explore the intersection of data science, machine learning and modern <br />
            technology. Dive into my latest thoughts and discoveries. </p>
        </div>
        <ItemsTray />
        </>

    )
}
export default BlogPost