/*
export function About() {
    return (
        <>
            <h1>This is About Page</h1>
        </>
    );
}*/

import about from "../../../assets/products/images1.jpg";
export function About() {
    return (
        <div className="px-6 py-10 max-w-5xl mx-auto font-sans">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Image Section */}
                <div>
                    <img
                        src={about} // Replace with your actual image path
                        alt="LUXYwatch Collection"
                        className="w-full max-w-xs h-auto rounded-2xl shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">About LUXYwatch</h1>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Welcome to <span className="font-semibold">LUXYwatch</span> — where time meets elegance.
                        Our passion lies in crafting timeless watches that combine luxury, precision,
                        and modern design. Whether you're looking for a statement piece or everyday sophistication,
                        LUXYwatch offers exceptional craftsmanship tailored to your style.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        We believe a watch is more than just a timepiece — it's a reflection of who you are.
                        That’s why every LUXYwatch is designed with meticulous attention to detail,
                        using premium materials and innovative engineering.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Join us in our journey to redefine luxury and make every second count.
                    </p>
                </div>
            </div>
        </div>
    );
}
