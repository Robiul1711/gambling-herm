import React from"react";
import { useParams, Link } from"react-router-dom";
import useClient from"@/hooks/useClient";

const DEFAULT_IMAGE ="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop";

const NewsAndReserchDetails = () => {
 const { id } = useParams();

 // Fetch the current single resource
 const { data: responseData, isLoading, isError } = useClient({
 queryKey: ["resource", id],
 url: `/blogs/${id}`,
 });

 const resource = responseData?.data;

 // Fetch all resources to construct the"Related Links" sidebar
 const { data: allResourcesResponse } = useClient({
 queryKey: ["resources"],
 url:"/blogs",
 });

 const allResources = allResourcesResponse?.data || [];
 
 // Filter out the current resource and take top 5 for sidebar
 const relatedLinks = allResources
 .filter((item) => item._id !== id)
 .slice(0, 5);

 // Render Loader / Skeleton
 if (isLoading) {
 return (
 <div className="min-h-screen bg-white font-sans selection:bg-[#006699]/10">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 animate-pulse">
 {/* Header Skeleton */}
 <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
 <div className="h-8 bg-slate-100 w-full mb-3" />
 <div className="h-8 bg-slate-100 w-3/4 mx-auto mb-4" />
 <div className="h-4 bg-slate-100 w-1/2 mx-auto" />
 </div>

 {/* Banner Skeleton */}
 <div className="w-full mb-12 md:mb-16">
 <div className="aspect-[16/8] md:aspect-[21/9] w-full bg-slate-100 ] ]" />
 </div>

 {/* Content Layout Skeleton */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
 <aside className="lg:col-span-4 space-y-4">
 {[1, 2, 3, 4].map((n) => (
 <div key={n} className="h-10 bg-slate-100 w-full" />
 ))}
 </aside>
 <main className="lg:col-span-8 space-y-4">
 <div className="h-4 bg-slate-100 w-full" />
 <div className="h-4 bg-slate-100 w-full" />
 <div className="h-4 bg-slate-100 w-full" />
 <div className="h-4 bg-slate-100 w-4/5" />
 </main>
 </div>
 </div>
 </div>
 );
 }

 // Error state
 if (isError || !resource) {
 return (
 <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
 <h2 className="text-2xl font-bold text-slate-800 mb-2">Publication Not Found</h2>
 <p className="text-slate-500 mb-6">The article you are trying to view does not exist or has been removed.</p>
 <Link to="/news-and-research" className="px-5 py-2.5 bg-Primary text-white font-bold">
 Back to News & Research
 </Link>
 </div>
 );
 }

 // Parse text content into paragraphs
 const contentParagraphs = resource.content
 ? resource.content.split("\n").filter(Boolean)
 : [resource.description];

 return (
 <div className="min-h-screen bg-white font-sans selection:bg-[#006699]/10">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
 {/* Header Section */}
 <header className="text-center max-w-5xl mx-auto mb-10 md:mb-14">
 <span className="text-xs font-bold text-Primary uppercase tracking-wider block mb-2">
 {resource.category}
 </span>
 <h1 className="text-2xl sm:text-4xl md:text-[44px] font-bold text-slate-800 tracking-tight leading-tight mb-4">
 {resource.title}
 </h1>
 <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
 {resource.description}
 </p>
 </header>

 {/* Featured Image Banner */}
 <div className="w-full mb-12 md:mb-16">
 <div className="aspect-[16/8] md:aspect-[21/9] w-full relative overflow-hidden ] ] shadow-sm bg-slate-50">
 <img
 src={resource.image || DEFAULT_IMAGE}
 alt={resource.title}
 className="w-full h-full object-cover"
 />
 </div>
 </div>

 {/* Asymmetric Content Layout */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
 {/* Left Sidebar Links (4 Cols on Large Screens) */}
 <aside className="lg:col-span-4 space-y-4 border-l border-slate-100 lg:sticky lg:top-6">
 <h4 className="text-xs font-extrabold text-slate-700 tracking-widest uppercase mb-4 pl-4">
 Other Publications
 </h4>
 
 {relatedLinks.length === 0 ? (
 <p className="text-xs text-slate-400 pl-4 italic">No other publications.</p>
 ) : (
 relatedLinks.map((link) => (
 <Link
 key={link._id}
 to={`/news-and-research/${link._id}`}
 className="pl-4 border-l-2 border-transparent -ml-[1.5px] transition-all duration-200 cursor-pointer group block text-slate-400 hover:text-slate-600 font-medium"
 >
 <p className="text-xs sm:text-sm leading-snug group-hover:underline line-clamp-2">
 {link.title}
 </p>
 </Link>
 ))
 )}
 </aside>

 {/* Right Detailed Prose Content (8 Cols on Large Screens) */}
 <main className="lg:col-span-8 space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed font-normal tracking-wide">
 {contentParagraphs.map((paragraph, index) => (
 <p key={index}>{paragraph}</p>
 ))}
 </main>
 </div>
 </div>
 </div>
 );
};

export default NewsAndReserchDetails;
