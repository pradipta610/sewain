import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface ProductDetailProps {
    productdetail: {
        id: string;
        image: string;
        title: string;
        rating: number;
        ratingText: string;
        price: string;
        rented: number;
        link: string;
    };
}

export function ProductDetail({ productdetail }: ProductDetailProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 md:my-16">
            {/* Product Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image and Gallery */}
                <div>
                    <img
                        src={productdetail.image}
                        alt={productdetail.title}
                        className="w-full h-auto rounded shadow-sm"
                    />
                    {/* <div className="flex space-x-2 mt-4">
            {productdetail.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index}`}
                className="w-16 h-16 object-cover rounded border"
              />
            ))}
          </div> */}
                </div>

                {/* Product Info */}
                <div>
                    <h1 className="text-3xl font-bold mb-2">{productdetail.title}</h1>
                    <div className="flex flex-row gap-8 flex-wrap items-start mb-4">
                        <div className="flex flex-col items-start mb-4">
                            <span className="text-yellow-500 font-semibold text-base">Arif Brata</span>
                            <span className="text-gray-500 text-xs">Aktif 10 Menit Lalu</span>
                            <div className="flex flex-row gap-1 my-2 items-start mb-4">
                                <button
                                    className="px-4 py-1 text-sm border rounded hover:bg-gray-100 hover:border-gray-400 transition duration-200"
                                > Chat Sekarang </button>
                                <button
                                    className="px-4 py-1 text-sm border rounded hover:bg-gray-100 hover:border-gray-400 transition duration-200"
                                > Hubungi Penyedia </button>
                            </div>
                        </div>
                        <div className="flex flex-col items-start mb-4">
                            <span className="text-yellow-500 font-semibold text-base">Arif Brata</span>
                            <span className="text-gray-500 text-sm">Aktif 10 Menit Lalu</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                        <span className="text-yellow-500 font-semibold">{productdetail.rating}</span>
                        <span className="text-gray-500">12 reviews</span>
                    </div>
                    <div className="text-xl font-bold text-red-600 mb-2">{productdetail.price}</div>
                    <div className="text-gray-700 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sunt a omnis, vero excepturi illo eligendi voluptates delectus, rem nulla, similique sit. Error ducimus laboriosam impedit neque adipisci, quibusdam quis.</div>
                    {/* Hari */}
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Hari</h3>
                        {/* Desktop View */}
                        <div className="hidden md:flex space-x-2">
                            {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'].map((day, index) => (
                                <button
                                    key={index}
                                    className="px-4 py-2 border rounded hover:bg-gray-100 hover:border-gray-400 transition duration-200"
                                >
                                    {day}
                                </button>
                            ))}
                        </div>
                        {/* Mobile View */}
                        <select className="block md:hidden w-full px-4 py-2 border rounded">
                            {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'].map((day, index) => (
                                <option key={index} value={day}>
                                    {day}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Ketersediaan Waktu */}
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Ketersediaan Waktu</h3>
                        {/* Desktop View */}
                        <div className="hidden md:flex space-x-2">
                            {Array.from({ length: 3 }, (_, i) => {
                                const currentHour = new Date().getHours();
                                const time = currentHour + i;
                                return (
                                    <button
                                        key={i}
                                        className="px-4 py-2 border rounded hover:bg-gray-100 hover:border-gray-400 transition duration-200"
                                    >
                                        {time}:00
                                    </button>
                                );
                            })}
                        </div>
                        {/* Mobile View */}
                        <select className="block md:hidden w-full px-4 py-2 border rounded">
                            {Array.from({ length: 3 }, (_, i) => {
                                const currentHour = new Date().getHours();
                                const time = currentHour + i;
                                return (
                                    <option key={i} value={`${time}:00`}>
                                        {time}:00
                                    </option>
                                );
                            })}
                        </select>
                    </div>





                    <Button className="w-full bg-red-600 text-white hover:bg-red-700">
                        Beli Sekarang
                    </Button>
                </div>
            </div>

            <Separator className="my-10" />

            {/* Product Specifications */}
            <div className="mb-10">
                {/* Tipe Layanan */}
                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-4">Tipe Layanan</h2>
                    {/* Desktop View */}
                    <div className="hidden md:flex space-x-2">
                        {['Pengiriman Cepat', 'Layanan Premium', 'Perbaikan Gratis', 'Konsultasi Online', 'Diskon Khusus'].map((service, index) => (
                            <button
                                key={index}
                                className="px-4 py-2 border rounded hover:bg-gray-100 hover:border-gray-400 transition duration-200"
                            >
                                {service}
                            </button>
                        ))}
                    </div>
                    {/* Mobile View */}
                    <select className="block md:hidden w-full px-4 py-2 border rounded">
                        {['Pengiriman Cepat', 'Layanan Premium', 'Perbaikan Gratis', 'Konsultasi Online', 'Diskon Khusus'].map((service, index) => (
                            <option key={index} value={service}>
                                {service}
                            </option>
                        ))}
                    </select>
                </div>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste recusandae alias ad architecto quisquam aperiam harum at ipsum libero doloremque quaerat nesciunt enim, rem repellendus, fugit voluptate? Nulla, autem exercitationem.</p>
            </div>

            <Separator className="my-10" />

            {/* Product Reviews */}
            <div>
                <h2 className="text-xl font-bold mb-4">Penilaian Produk</h2>
                {/* Review */}
                <div className="space-y-6">
                    {[{ user: 'John', rating: 4.5, comment: 'Produk bagus!' },
                    { user: 'Jane', rating: 5, comment: 'Sangat memuaskan!' },
                    { user: 'Doe', rating: 3.5, comment: 'Cukup baik.' }
                    ].map((review, index) => (
                        <div key={index} className="border-b pb-4">
                            <div className="flex items-center mb-2">
                                <span className="font-semibold">{review.user}</span>
                                <span className="ml-2 text-yellow-500 flex items-center">
                                    {'★'.repeat(Math.floor(review.rating)) + '☆'.repeat(5 - Math.ceil(review.rating))}
                                    <span className="ml-2">{review.rating}</span>
                                </span>
                            </div>
                            <p className="text-gray-600">{review.comment}</p>
                        </div>
                    ))}
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptate quam similique quaerat maiores, quibusdam eligendi. Rem aperiam repellat dicta, adipisci, enim harum at provident dolorum quas, labore doloremque in?</p>
            </div>
        </div>
    );
}
