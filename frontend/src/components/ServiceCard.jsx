function ServiceCard ({title, description, image}) {
    return (
        <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-4 shadow-md hover:shadow-xl hover:bg-slate-800/80 transition">
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="w-full aspect-square object-cover rounded-xl mb-3 transform transition duration-300 hover:scale-105"
                />    
            )}

            <h3 className="text-lg font-semibold ">{title}</h3>
            <p className="text-sm text-slate-400 mt-1 bg-gradient-to-b from-slate-800 to-slate-900 p-2 rounded-lg">
            {description}
            </p>
        </div>
    );
}

export default ServiceCard;