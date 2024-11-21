function Promotions() {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                    src="/public/images/superdong-sinh-nhat-ron-rang-ngan-loi-tri-an.jpg"
                    alt="Phú Quốc"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                    src="/public/images/mua-he-roi-di-bien-cung-superdong-thoi.jpg"
                    alt="Phú Quốc"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                    src="/images/superdong-tet-den-sum-vay-ven-tron-niem-vui.png"
                    alt="Khuyến mãi"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default Promotions;