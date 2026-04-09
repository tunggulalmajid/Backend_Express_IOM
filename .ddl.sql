-- DROP TABLE users;
-- DROP TABLE kantongs;
-- DROP TABLE kategoris;
-- DROP TABLE transaksis;
-- DROP TABLE transfers;

-- 1. Tabel Users
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(200) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password_user VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabel Kantongs
CREATE TABLE kantongs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_user INT,
    is_aktif boolean Not NULL Default 1,
    nama VARCHAR(50) NOT NULL,
    balance DECIMAL(15, 0) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE
    
);

-- 3. Tabel Kategoris (Isi: 1=Pemasukan, 2=Pengeluaran)
CREATE TABLE kategoris (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);
INSERT INTO kategoris (id, name) VALUES (1, 'Pemasukan'), (2, 'Pengeluaran');

-- 4. Tabel Transaksis (Nama Bebas + Foto Bukti)
CREATE TABLE transaksis (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_kantong INT,
    id_kategori INT, 
    amount DECIMAL(15, 0) NOT NULL,
    nama VARCHAR(255) NOT NULL, -- Contoh: "Beli Kopi"
    note TEXT,
    foto_bukti VARCHAR(255), -- Lokasi file foto struk
    tanggal_transaksi DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_kategori) REFERENCES kategoris(id) ON DELETE CASCADE,
    FOREIGN KEY (id_kantong) REFERENCES kantongs(id) ON DELETE CASCADE
);

-- 5. Tabel Transfers (Distribusi Antar Kantong)
CREATE TABLE transfers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_user INT, -- Tambahkan ini agar query riwayat transfer lebih cepat
    id_kantong_asal INT,
    id_kantong_tujuan INT,
    amount DECIMAL(15, 0) NOT NULL,
    tanggal_transfer DATE NOT NULL,
    note TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (id_kantong_asal) REFERENCES kantongs(id) ON DELETE CASCADE,
    FOREIGN KEY (id_kantong_tujuan) REFERENCES kantongs(id) ON DELETE CASCADE
);


-- INSERT QUERY
INSERT INTO users (nama, email, password_user) VALUES 
('Budi Santoso', 'budi@mail.com', 'password123'),
('Siti Aminah', 'siti@mail.com', 'password123');

INSERT INTO kantongs (id_user, nama, balance) VALUES 
(1, 'Dompet Utama', 500000),
(1, 'Tabungan Bank', 2000000),
(1, 'Dana Darurat', 1000000);

INSERT INTO transaksis (id_kantong, id_kategori, amount, nama, note, tanggal_transaksi) VALUES 
(1, 1, 5000000, 'Gaji Bulanan', 'Gaji bulan April', '2024-04-01'),
(1, 2, 50000, 'Makan Siang', 'Beli nasi padang', '2024-04-02'),
(2, 2, 150000, 'Beli Pulsa', 'Paket data bulanan', '2024-04-03'),
(1, 2, 25000, 'Parkir Mall', 'Parkir di Grand Indonesia', '2024-04-04');

INSERT INTO transfers (id_kantong_asal, id_kantong_tujuan, amount, tanggal_transfer, note) VALUES 
(1, 2, 1000000, '2024-04-05', 'Sisihkan gaji ke tabungan bank'),
(2, 3, 500000, '2024-04-06', 'Pindah ke dana darurat');