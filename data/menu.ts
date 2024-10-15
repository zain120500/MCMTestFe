const menu = [
    {
        title: "Dashboard",
        icon: "humbleicons:dashboard",
        visible: true,
        path: "/dashboard",
        code: 'DAS'
    },
    {
        title: 'Master',
        path: '/master',
        icon: 'humbleicons:database',
        code: 'MST',
        items: [
            {
                title: 'Jenis Barang',
                path: '/master/jenis-barang',
                code: 'MJE',
            },
            {
                title: 'Merk Barang',
                path: '/master/merk-barang',
                code: 'MME',
            },
            {
                title: 'Tipe Barang',
                path: '/master/tipe-barang',
                code: 'MTI',
            },
            {
                title: 'Harga & Jasa Emas',
                path: '/master/harga-emas',
                code: 'MHE',
            },
            {
                title: 'Kelompok Barang',
                path: '/master/kelompok-barang',
                code: 'MKE',
            },
            {
                title: 'Cabang',
                path: '/master/cabang',
                code: 'MCA',
            },
            {
                title: 'Anggota',
                path: '/master/anggota',
                code: 'MAN',
            },
            {
                title: 'Pekerjaan Nasabah',
                path: '/master/pekerjaan-nasabah',
                code: 'MPK',
            },
            {
                title: 'Alasan Reject Gadai',
                path: '/master/alasan-reject-gadai',
                code: 'MAR',
            },
            {
                title: 'Bank',
                path: '/master/bank',
                code: 'BNK',
            },
            {
                title: 'User Staff',
                path: '/master/user-staff',
                code: 'MUS',
            },
            {
                title: 'Role',
                path: '/master/role',
                code: 'MRO',
            },
            {
                title: 'Promo',
                path: '/master/promo',
                code: 'MPR',
            },
            {
                title: 'Master Promo Mobile',
                path: '/master/promo-mobile',
                code: 'MPM',
            },
            {
                title: 'Parameter',
                path: '/master/parameter',
                code: 'MPA',
            },
            {
                title: 'Akses Menu',
                path: '/master/akses-menu',
                code: 'MAK',
            },
            {
                title: 'Banner Mobile',
                path: '/master/banner-mobile',
                code: 'MBM'
            }
        ]
    },
    {
        title: 'Gadai',
        path: '/gadai',
        icon: 'humbleicons:plus',
        code: 'GAD',
        items: [
            {
                title: 'Elektronik',
                path: '/gadai/elektronik',
                code: 'GEL',
            },
            {
                title: 'Kendaraan',
                path: '/gadai/kendaraan',
                code: 'GKE',
            },
            {
                title: 'Antrian Mobile',
                path: '/gadai/antrian',
                code: 'GAM'
            },
            {
                title: 'Emas',
                path: '/gadai/emas',
                code: 'GEM',
            },
            {
                title: 'Simulasi Gadai',
                path: '/gadai/simulasi',
                code: 'GSI',
            },
            {
                title: 'Perpanjangan',
                path: '/gadai/perpanjangan',
                code: 'GPP',
            },
            {
                title: 'Pelunasan',
                path: '/gadai/pelunasan',
                code: 'GPL',
            },
            {
                title: 'Daftar Gadai',
                path: '/gadai/daftar',
                code: 'GDA',
            },
            {
                title: 'Pencarian Faktur',
                path: '/gadai/inquiry-faktur',
                code: 'GIF',
            },
            {
                title: 'Daftar Penarikan',
                path: '/gadai/daftar-penarikan',
                code: 'GDP',
            },
            {
                title: 'Reject Gadai',
                path: '/gadai/reject-gadai',
                code: 'GRE',
            }
        ]
    },
    {
        title: 'Persetujuan',
        path: '/persetujuan',
        icon: 'humbleicons:check',
        code: 'STJ',
        items: [
            {
                title: 'Cek Gadai',
                path: '/persetujuan/cek-gadai',
                code: 'SCE',
            },
            {
                title: 'Edit Gadai',
                path: '/persetujuan/edit-gadai',
                code: 'SED',
            },
            {
                title: 'Keringanan',
                path: '/persetujuan/keringanan',
                code: 'SKE',
            },
            {
                title: 'Void Pembayaran',
                path: '/persetujuan/void-pembayaran',
                code: 'SVO',
            },
            {
                title: 'Kas Keluar',
                path: '/persetujuan/kas-keluar',
                code: 'SKK',
            },
            {
                title: 'Barang Hilang',
                path: '/persetujuan/barang-hilang',
                code: 'SBH',
            }
        ]
    },
    {
        title: 'Pusat',
        path: '/pusat',
        icon: 'humbleicons:home',
        code: 'PST',
        items: [
            {
                title: 'Daftar Void Gadai',
                path: '/pusat/daftar-void-gadai',
                code: 'PVG',
            },
            {
                title: 'Daftar Void Pembayaran',
                path: '/pusat/daftar-void-pembayaran',
                code: 'PVP',
            },
            {
                title: 'Daftar Cek Gadai',
                path: '/pusat/daftar-cek-gadai',
                code: 'PCG',
            },
            {
                title: 'Daftar Edit Gadai',
                path: '/pusat/daftar-edit-gadai',
                code: 'PEG',
            },
            {
                title: 'Daftar Antrian Mobile',
                path: '/pusat/daftar-antrian-mobile',
                code: 'PAM',
            },
            {
                title: 'Daftar Transaksi Online',
                path: '/pusat/daftar-transaksi-online',
                code: 'PTO',
            },
            {
                title: 'Surat BPKB',
                path: '/pusat/surat-bpkb',
                code: 'PSB'
            },
            {
                title: 'Daftar Penarikan',
                path: '/pusat/daftar-penarikan',
                code: 'PDP'
            },
            {
                title: 'SMS',
                path: '/pusat/sms',
                code: 'PSM'
            },
            {
                title: 'Monitoring IP',
                path: '/pusat/monitoringip',
                code: 'PMI'
            },
            {
                title: 'Data Jurnal',
                path: '/pusat/data-jurnal',
                code: 'PDJ'
            }
        ]
    },
    {
        title: 'Kasir',
        path: '/kasir',
        icon: 'material-symbols:calculate-outline',
        code: 'KSR',
        items: [
            {
                title: 'Transaksi Gadai',
                path: '/kasir/transaksi-gadai',
                code: 'KTG',
            },
            {
                title: 'Transaksi Pembayaran',
                path: '/kasir/transaksi-pembayaran',
                code: 'KTP',
            },
            {
                title: 'Transaksi Online',
                path: '/kasir/transaksi-online',
                code: 'KTO',
            },
            {
                title: 'Transaksi QRIS',
                path: '/kasir/transaksi-qris',
                code: 'KTQ',
            },
            {
                title: 'Kas Mutasi',
                path: '/kasir/kas-mutasi',
                code: 'KKA',
            },
            {
                title: 'Transaksi Kas Masuk',
                path: '/kasir/transaksi-kas-masuk',
                code: 'KKM',
            },
            {
                title: 'Transaksi Kas Keluar',
                path: '/kasir/transaksi-kas-keluar',
                code: 'KKK',
            },
            {
                title: 'Approval Transaksi Non-Tunai',
                path: '/kasir/approval-transaksi-non-tunai',
                code: 'ATN',
            },
        ]
    },
    {
        title: 'Informasi Umum',
        path: '/informasi-umum',
        icon: 'material-symbols:info-outline',
        code: 'INF',
    },
    {
        title: 'Lelang',
        path: '/lelang',
        icon: 'material-symbols:sell-outline',
        code: 'LEL',
        items: [
            {
                title: 'Order Lelang',
                path: '/lelang/order-lelang',
                code: 'LBA',
            },
            {
                title: 'Persiapan Lelang',
                path: '/lelang/persiapan-lelang',
                code: 'LPE',
            },
            {
                title: 'Penjualan',
                path: '/lelang/penjualan',
                code: 'LPJ',
            },
            {
                title: 'Kirim Balik',
                path: '/lelang/kirim-balik',
                code: 'LKB',
            }
        ]
    },
    {
        title: 'Laporan',
        path: '/laporan',
        icon: 'carbon:report',
        code: 'LAP',
        items: [
            {
                title: 'Laporan Stok Gudang',
                path: '/laporan/laporan-stok-gudang',
                code: 'RSG',
            },
            {
                title: 'Laporan Pembayaran',
                path: '/laporan/laporan-pembayaran',
                code: 'RPB',
            },
            {
                title: 'Laporan Pelunasan',
                path: '/laporan/laporan-pelunasan',
                code: 'RPL',
            },
            {
                title: 'Laporan Kas Masuk',
                path: '/laporan/laporan-kas-masuk',
                code: 'RMA',
            },
            {
                title: 'Laporan Kas Keluar',
                path: '/laporan/laporan-kas-keluar',
                code: 'RKE',
            },
            {
                title: 'Laporan Kas Mutasi',
                path: '/laporan/laporan-kas-mutasi',
                code: 'RMU',
            },
            {
                title: 'Laporan Buku Besar',
                path: '/laporan/laporan-buku-besar',
                code: 'RBB',
            },
            {
                title: 'Laporan Kas Cabang',
                path: '/laporan/laporan-kas-cabang',
                code: 'RKC',
            },
            {
                title: 'Laporan Kembar IMEI / SN',
                path: '/laporan/laporan-kembar-imei',
                code: 'RKI',
            },
        ]
    },
    {
        title: 'Laporan Harian Cabang',
        path: '/laporan-harian-cabang',
        icon: 'carbon:report',
        code: 'LHC',
        items: [
            {
                title: 'Serah Terima Gadai',
                path: '/laporan-harian-cabang/serah-terima-gadai',
                code: 'CGB',
            },
            {
                title: 'Serah Terima Gadai Lunas',
                path: '/laporan-harian-cabang/serah-terima-gadai-lunas',
                code: 'CGL',
            },
            {
                title: 'Transaksi Harian',
                path: '/laporan-harian-cabang/transaksi-harian',
                code: 'CTH',
            }
        ]
    },
    {
        title: 'Laporan Eksekutif',
        path: '/laporan eksekutif',
        icon: 'carbon:report',
        code: 'EKS',
        items: [
            {
                title: 'Laporan Omzet',
                path: '/laporan-eksekutif/laporan-omzet',
                code: 'EOM',
            },
            {
                title: 'Laporan Gadai Baru',
                path: '/laporan-eksekutif/laporan-gadai-baru',
                code: 'EGB',
            },
            {
                title: 'Laporan Pemasukan',
                path: '/laporan-eksekutif/laporan-pemasukan',
                code: 'EPE',
            },
            // {
            // 	name: 'Laporan PP/ PL',
            // 	path: '/laporan-eksekutif/laporan-pp-pl',
            // 	code: 'EPL',
            // },
            {
                title: 'Daftar BPKB Macet',
                path: '/laporan-eksekutif/daftar-bpkb-macet',
                code: 'EBM',
            },
            {
                title: 'Daftar Gadai Aktif',
                path: '/laporan-eksekutif/daftar-gadai-aktif',
                code: 'EGA',
            },
            {
                title: 'Laporan Penjualan',
                path: '/laporan-eksekutif/laporan-penjualan',
                code: 'EJU',
            }
        ]
    },
    {
        title: 'Akses Laporan Eksekutif',
        path: '/akses-laporan-eksekutif',
        icon: 'material-symbols:key-outline',
        code: 'ALE',
    },

];

export default menu