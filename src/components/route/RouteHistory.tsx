function RouteHistory() {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                        src="/public/images/cang-vinh-dam-ket-noi-phu-quoc-nam-du-01-900x603.jpg"
                        alt="Phú Quốc"
                        className="object-cover w-[368px] h-[181.05px]"
                    />
                </div>
                <span className="block mt-2 text-lg">Hà Tiên - Nam Du</span>
            </div>
            <div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                        src="/public/images/Rach-Gia-Hon-Nghe-900x603.jpg"
                        alt="Phú Quốc"
                        className="object-cover222 w-[368px] h-[181.05px]"
                    />
                </div>
                <span className="block mt-2 text-lg">Rạch Giá - Hòn Nghệ</span>
            </div>
        </div>
    );
}

export default RouteHistory;