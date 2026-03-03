import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const sampleProperties = [
  {
    id: 1,
    title: "Double Storey Terrace House",
    location: "Shah Alam, Selangor",
    price: "RM 650,000",
    type: "Jual",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa"
  },
  {
    id: 2,
    title: "Condominium Fully Furnished",
    location: "Cyberjaya",
    price: "RM 1,800 / bulan",
    type: "Sewa",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
  },
  {
    id: 3,
    title: "Semi-D House Corner Lot",
    location: "Bangi",
    price: "RM 980,000",
    type: "Jual",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  }
];

export default function PropertyWebsite() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Semua");

  const filtered = sampleProperties.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "Semua" || p.type === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">RumahKu.my</h1>
          <div className="flex gap-2">
            <Button variant="outline">Login</Button>
            <Button>Letak Iklan</Button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Cari Rumah Idaman Anda</h2>
          <p>Platform jual beli dan sewa rumah yang mudah, pantas & dipercayai</p>

          <div className="bg-white rounded-2xl p-4 flex gap-2 items-center">
            <Search className="text-gray-400" />
            <Input
              placeholder="Cari lokasi atau jenis rumah..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="border rounded-xl px-3 py-2"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option>Semua</option>
              <option>Jual</option>
              <option>Sewa</option>
            </select>
          </div>
        </div>
      </div>

      {/* Listings */}
      <div className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <motion.div key={p.id} whileHover={{ scale: 1.03 }}>
            <Card className="rounded-2xl overflow-hidden shadow-md">
              <img src={p.image} className="h-48 w-full object-cover" />
              <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.location}</p>
                <p className="font-bold">{p.price}</p>
                <Button className="w-full">Lihat Details</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto p-6 text-center text-sm text-gray-500">
          © 2026 RumahKu.my – Platform Jual Beli & Sewa Rumah Malaysia
        </div>
      </div>
    </div>
  );
}
