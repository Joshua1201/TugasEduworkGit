Cypress.Commands.add('visitHome', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('https://www.jne.co.id/')
    cy.get('label').should('contain.text', 'Lacak Pengiriman')
    cy.get('img[src="https://www.jne.co.id/cfind/source/images/logo-white.svg"]').should('be.visible')
})

Cypress.Commands.add('accCookies', () => {
    cy.get('button').contains('Setuju').click()
    cy.get('img[src="https://pttikijalurnugrahaekakurir.force.com/eclaimform/resource/1671433394000/chatLogo"]').should('be.visible')
})

Cypress.Commands.add('klikJelajahi', () => {
    cy.get('.button.button-outline.button-trigger-say').click()
    cy.get('h1').should('contain.text', 'Apa kata mereka').and('be.visible')
})

Cypress.Commands.add('klikPerusahaan', () => {
    cy.get('.nav-toggler').click({ force: true })
    cy.get('a[href="https://www.jne.co.id/perusahaan"]').click()
    cy.url().should('include', 'perusahaan')
    cy.get('h1').should('contain.text', 'Cari tau lebih mengenai JNE')
})

Cypress.Commands.add('useAvSearch', () => {
    cy.get('input[placeholder="Cari atau masukan nomor resi"]').eq(1).clear()
    cy.get('input[placeholder="Cari atau masukan nomor resi"]').eq(1).type('harga{enter}')
    cy.url().should('include', 'harga')
    cy.get('b').should('contain.text', '“harga”')
    cy.get('p').should('contain.text', 'Menampilkan 1 - 10 dari 14 pencarian dari ')

    cy.get('a[href="https://www.jne.co.id/search?search=harga&page=2"]').eq(0).click()
    cy.url().should('include', 'page=2')
    cy.get('p').should('contain.text', 'Menampilkan 11 - 14 dari 14 pencarian dari ')
})

Cypress.Commands.add('useUnavSearch', () => {
    cy.get('.ic-search').eq(0).click({ force: true })
    cy.get('input[placeholder="Cari atau masukan nomor resi"]').type('asja{enter}', { force: true })
    cy.url().should('include', 'asja')
    cy.get('h2').should('contain.text', 'MAAF, PENCARIAN TIDAK DITEMUKAN')
    cy.get('span').should('contain.text', 'Kami tidak bisa menemukan ')
})

Cypress.Commands.add('changeLanguage', () => {
    cy.get('a[href="https://www.jne.co.id/en"]').contains('ENGLISH').click({ force: true })
    cy.url().should('include', 'en')
    cy.get('label').should('contain.text', 'Track Shipment')
    cy.get('a').contains('Discover More')

    cy.get('a[href="https://www.jne.co.id"]').contains('INDONESIA').click({ force: true })
    cy.get('label').should('contain.text', 'Lacak Pengiriman')
    cy.get('a').contains('Jelajahi Lebih Jauh')
})

Cypress.Commands.add('klikProduk', () => {
    cy.get('.nav-toggler').click({ force: true })
    cy.get('a[href="https://www.jne.co.id/produk-dan-layanan"]').eq(0).click()
    cy.url().should('include', 'produk-dan-layanan')
    cy.get('h2').should('contain.text', 'JNE Express ')
})

Cypress.Commands.add('klikLayanan', () => {
    cy.get('.nav-toggler').click({ force: true })
    cy.get('a[href="https://www.jne.co.id/layanan"]').eq(0).click({ force: true })
    cy.url().should('include', 'layanan')
    cy.get('h2').should('contain.text', 'Layanan JNE')
})

Cypress.Commands.add('klikSolusiBisnis', () => {
    cy.get('.nav-toggler').click({ force: true })
    cy.get('a[href="https://www.jne.co.id/solusi-bisnis"]').eq(0).click({ force: true })
    cy.url().should('include', 'solusi-bisnis')
    cy.get('h5').should('contain.text', 'Kembangkan bisnismu bersama JNE')
})

Cypress.Commands.add('klikProfilPerusahaan', () => {
    cy.get('a[href="/profil-perusahaan"]').click()
    cy.url().should('include', 'profil-perusahaan')
    cy.get('h2').should('contain.text', 'Profil Perusahaan')
})

Cypress.Commands.add('klikSejarah', () => {
    cy.get('button').contains('Lihat Semua').click()
    cy.get('h3').should('contain.text', '1994')
    cy.get('p').should('contain.text', 'PT. Tiki Jalur Nugraha Ekakurir resmi didirikan.')
    cy.get('.ic-cross').eq(2).click()
})

Cypress.Commands.add('klikDirektur1', () => {
    cy.get('img[src="https://www.jne.co.id/cfind/source/images/director-2.png"]').click()
    cy.get('p').should('contain.text', 'President Director')
    cy.get('p').should('contain.text', 'Intro')
    cy.get('.ic-cross').eq(1).click()
})

Cypress.Commands.add('klikDirektur2', () => {
    cy.get('img[src="https://www.jne.co.id/cfind/source/images/director-1.png"]').click()
    cy.get('p').should('contain.text', 'Director')
    cy.get('p').should('contain.text', 'Intro')
    cy.get('.ic-cross').eq(1).click()
})

Cypress.Commands.add('klikMyJNE', () => {
    cy.get('a[href="myjne-id"]').click()
    cy.url().should('include', 'myjne-id')
    cy.get('strong').should('contain.text', 'Download di Android')

    cy.get('a[href="https://play.google.com/store/apps/details?id=com.indivara.jneone&hl=id&gl=US"]').eq(0).click()
    cy.origin('https://play.google.com', () => {
        cy.url().should('include', 'com.indivara.jneone')
        cy.get('h1').should('contain.text', 'My JNE')
        cy.go('back')
    })
    cy.get('a[href="https://apps.apple.com/id/app/my-jne/id1447606780?l=id"]').eq(0).click()
    cy.origin('https://apps.apple.com/', () => {
        cy.url().should('include', 'my-jne')
        cy.get('h1').should('contain.text', 'My JNE')
        cy.go('back')
    })
})

Cypress.Commands.add('klikPesona', () => {
    cy.get('a[href="pesona-id"]').click()
    cy.url().should('include', 'pesona-id')
    cy.get('h4').should('contain.text', 'Toko online makanan khas dan oleh-oleh dari UKM seluruh Indonesia')

    cy.get('a[href="https://www.pesonanusantara.co.id/"]').invoke('removeAttr', 'target').click()
    cy.origin('https://www.pesonanusantara.co.id/', () => {
        cy.get('img[src="https://www.pesonanusantara.co.id/images/img/logo.png"]').should('be.visible')
        cy.get('p').should('contain.text', 'Jauh Di Mata Dekat Di Lidah')
        cy.go('back')
    })
})

Cypress.Commands.add('klikJLCCard', () => {
    cy.get('a[href="jlc-loyalty-card-id"]').click()
    cy.url().should('include', 'jlc-loyalty-card-id')
    cy.get('h2').should('contain.text', 'JLC Loyalty Card')

    cy.get('a[href="https://jlc.jne.co.id/"]').invoke('removeAttr', 'target').click()
    cy.get('a[href="https://jlc.jne.co.id/sign"]').should('be.visible')
    cy.get('img[src="https://jlc.jne.co.id/images/jlc_jne.jpg"]').should('be.visible')
    cy.go('back')
})

Cypress.Commands.add('klikKeagenan', () => {
    cy.get('a[href="agent"]').click()
    cy.url().should('include', 'agent')
    cy.get('b').should('contain.text', 'Jadilah bagian dari layanan pengiriman terpercaya di Indonesia')

    cy.get('a[href="https://kemitraan.jne.co.id/"]').invoke('removeAttr', 'target').click()
    cy.get('h4').should('contain.text', 'Solusi Bisnis')
    cy.get('img[src="https://kemitraan.jne.co.id/assets/images/banner-ind.jpg"]').should('be.visible')
    cy.go('back')
})

Cypress.Commands.add('klikCustomerCorporate', () => {
    cy.get('a[href="customer-corporate-id"]').click()
    cy.url().should('include', 'customer-corporate-id')
    cy.get('strong').should('contain.text', 'SYARAT MENJADI CUSTOMER CORPORATE JNE :')

    cy.get('a[href="https://kemitraan.jne.co.id/"]').invoke('removeAttr', 'target').eq(0).click()
    cy.get('h4').should('contain.text', 'Solusi Bisnis')
    cy.get('img[src="https://kemitraan.jne.co.id/assets/images/banner-ind.jpg"]').should('be.visible')
    cy.go('back')
})

Cypress.Commands.add('klikHubKami', () => {
    cy.get('a[href="https://www.jne.co.id/hubungi-kami"]').contains('Hubungi Kami').click({ force: true })
    cy.url().should('include', 'hubungi-kami')
    cy.get('button').contains('Kirim Pertanyaan').should('be.visible')
})

Cypress.Commands.add('klikKirimPertanyaanDataKosong', () => {
    cy.get('button').contains('Kirim Pertanyaan').click()
    cy.get('h4').should('contain.text', 'Kirim Pertanyaan Anda')
    cy.get('#send-question').click()
    cy.get('div').should('contain.text', 'Kolom name wajib diisi.')
    cy.get('div').should('contain.text', 'Captcha harus diisi')
})

Cypress.Commands.add('klikKirimPertanyaanDataDiisi', () => {
    cy.get('#name').type('Ada')
    cy.get('#email').type('Ada@gmail.com')
    cy.get('#phone').type('08888888888')
    cy.get('#subject').select('Kemitraan').should('have.value', '6')
    cy.get('#title').type('Testing')
    cy.get('#message').type('Automation Testing Aja')
    // cy.get('.recaptcha-checkbox-border').click()

    // cy.get('#send-question').click()
    // cy.get('h4').should('contain.text', 'Terima kasih atas kiriman Anda. Kami akan menghubungi Anda segera')
    // cy.get('a[href="https://www.jne.co.id"]').contains('Kembali ke Beranda').should('be.visible')
    cy.get('.ic-cross').eq(1).click()
})

Cypress.Commands.add('klikLokasi', () => {
    cy.get('a[href="#tab-2"]').click()
    cy.get('h6').should('contain.text', 'KELAPA GADING')
    cy.get('a[href="https://goo.gl/maps/rLbNHWNwP6d3NmAy7"]').invoke('removeAttr', 'target').eq(0).click()
    cy.origin('https://www.google.com/', () => {
        cy.url().should('include', 'JNE+Kelapa+Gading')
        cy.go('back')
    })

    cy.get('a[href="#tab-5"]').click()
    cy.get('h6').should('contain.text', 'Tegal')
    cy.get('a[href="https://goo.gl/maps/9g3exFZa2BwBYwyy6"]').invoke('removeAttr', 'target').eq(0).click()
    cy.origin('https://www.google.com/', () => {
        cy.url().should('include', 'JNE+Cabang+Utama+Tegal')
        cy.go('back')
    })

    cy.get('a[href="#tab-8"]').click({ force: true })
    cy.get('h6').should('contain.text', 'KUPANG')
    cy.get('a[href="https://goo.gl/maps/bjPTbM6wJtyHHemD8"]').invoke('removeAttr', 'target').eq(0).click()
    cy.origin('https://www.google.com/', () => {
        cy.url().should('include', 'JNE+Cabang+Utama+Kupang')
        cy.go('back')
    })
})

Cypress.Commands.add('klikKarir', () => {
    cy.get('a[href="https://www.jne.co.id/karir"]').contains('Karir').click({ force: true })
    cy.url().should('include', 'karir')
    cy.get('h5').should('contain.text', 'Temukan peluang karir dan jadilah bagian tim kami.')
})

Cypress.Commands.add('sortKarir', () => {
    cy.get('#sort').select('Terlama').should('have.value', 'oldest')
    cy.url().should('include', 'sort=oldest')
    cy.get('#sort').select('Terbaru').should('have.value', 'latest')
    cy.url().should('include', 'sort=latest')
})

Cypress.Commands.add('searchKarir', () => {
    cy.get('input[placeholder="Cari Posisi"]').type('Kurir')
    cy.get('.ic-search').eq(2).click()
    cy.url().should('include', 'find=Kurir')
    cy.get('strong').should('contain.text', '0')
})

Cypress.Commands.add('klikBerita', () => {
    cy.get('a[href="https://www.jne.co.id/berita"]').contains('Berita').click({ force: true })
    cy.url().should('include', 'berita')
    cy.get('h2').should('contain.text', 'Berita Terkini')
})

Cypress.Commands.add('klikBeritaDetail', () => {
    cy.get('a[href="https://jnewsonline.com/seru-campur-haru-puncak-perayaan-hut-jne-ke-33/"]').invoke('removeAttr', 'target').click()
    cy.origin('https://jnewsonline.com/', () => {
        cy.url().should('include', 'seru-campur-haru')
        cy.get('p').should('contain.text', 'Menurutnya, untuk sekarang ini sudah tidak ada lagi isu ')
        cy.go('back')
    })
    cy.get('a[href="https://jnewsonline.com/cek-paket-jne-dengan-nomor-telepon/"]').invoke('removeAttr', 'target').click()
    cy.origin('https://jnewsonline.com/', () => {
        cy.url().should('include', 'cek-paket-jne')
        cy.get('p').should('contain.text', 'Setelah memiliki akun di aplikasi MyJNE, maka pelanggan dapat melakukan cek paket JNE dengan nomor telepon. Caranya sebagai berikut:')
        cy.go('back')
    })
})

Cypress.Commands.add('klikBeritaAll', () => {
    cy.get('a[href="javascript:void(0)"]').contains('Muat Lebih banyak').click()
    cy.get('h6').should('contain.text', 'JNE Teken Kerjasama Distribusi Hasil Perikanan dengan Koperasi Mina Nusantara Pelabuhan Ratu')
    cy.get('a[href="javascript:void(0)"]').contains('Muat Lebih banyak').click()
    cy.get('h6').should('contain.text', 'JNE Raih Penghargaan  Courier of the Year 2023')
    cy.get('a[href="javascript:void(0)"]').contains('Muat Lebih banyak').click()
    cy.get('h6').should('contain.text', 'Lika-liku Mengantarkan Paket ke Area Rawan Konflik di Papua') 
})

Cypress.Commands.add('klikContactUs', () => {
    cy.get('a[href="/contact-us"]').click()
    cy.url().should('include', 'contact-us')
    cy.get('button').should('contain.text', 'Send Question')
})

Cypress.Commands.add('klikJNELogistics', () => {
    cy.get('a[href="#2"]').click()
    cy.get('a[href="dedicated-and-shared-warehouse-id"]').click()
    cy.url().should('include', 'dedicated-and-shared-warehouse-id')
    cy.get('b').should('contain.text', 'Menyediakan sarana gudang khusus atau sharing.')
    cy.get('a[href="https://www.jne.co.id/produk"]').eq(2).click()

    cy.get('a[href="field-stock-location-fsl-or-small-warehouses-across-nation-id"]').click()
    cy.url().should('include', 'field-stock-location')
    cy.get('b').should('contain.text', 'Jaringan warehouse dalam ukuran small atau medium, dan  berkolaborasi dengan jaringan JNE.')
    cy.get('a[href="https://www.jne.co.id/produk"]').eq(2).click()

    cy.get('a[href="https://linktr.ee/jne.logistic"]').click()
    cy.origin('https://linktr.ee', () => {
        cy.url().should('include', 'jne.logistic')
        cy.get('#profile-jne-logistic').should('be.visible')
        cy.go('back')
    })
})

Cypress.Commands.add('klikJNEExpress', () => {
    cy.get('a[href="#1"]').click()
    cy.get('a[href="syarat-dan-ketentuan"]').click()
    cy.url().should('include', 'syarat-dan-ketentuan')
    cy.get('i').should('contain.text', '13. Lain-lain')
    cy.get('a[href="https://www.jne.co.id/produk"]').eq(2).click()

    cy.get('a[href="diplomat-id"]').click()
    cy.url().should('include', 'diplomat-id')
    cy.get('img[src="https://jne.dev.webarq.net/cfind/source/images/upload/64f5995179f35.png"]').should('be.visible')
    cy.get('a[href="https://www.jne.co.id/produk"]').eq(2).click()

    cy.get('a[href="https://linktr.ee/jne_id"]').eq(0).click()
    cy.origin('https://linktr.ee', () => {
        cy.url().should('include', 'jne_id')
        cy.get('#profile-jne-id').should('be.visible')
        cy.go('back')
    })
})

Cypress.Commands.add('klikJNEFreight', () => {
    cy.get('a[href="#3"]').click()
    cy.get('a[href="customs-service-id"]').click()
    cy.url().should('include', 'customs-service-id')
    cy.get('strong').should('contain.text', 'Professional consulting')
    cy.get('a[href="https://www.jne.co.id/produk"]').eq(2).click()

    cy.get('a[href="ocean-freight-id"]').click()
    cy.url().should('include', 'ocean-freight-id')
    cy.get('strong').should('contain.text', 'Special Containers')
    cy.get('a[href="https://www.jne.co.id/produk"]').eq(2).click()

    cy.get('a[href="https://linktr.ee/jne_id"]').eq(1).click()
    cy.origin('https://linktr.ee', () => {
        cy.url().should('include', 'jne_id')
        cy.get('#profile-jne-id').should('be.visible')
        cy.go('back')
    })
})

Cypress.Commands.add('klikJNEInternational', () => {
    cy.get('a[href="#4"]').click()
    cy.get('a[href="https://jnei.co/services/"]').eq(0).invoke('removeAttr', 'target').click()
    cy.origin('https://jnei.co/', () => {
        cy.url().should('include', 'services')
        cy.get('h1').contains('SERVICES').should('be.visible')
        cy.go('back')
    })

    cy.get('a[href="https://jnei.co/services/"]').eq(1).invoke('removeAttr', 'target').click()
    cy.origin('https://jnei.co/', () => {
        cy.url().should('include', 'services')
        cy.get('h1').contains('SERVICES').should('be.visible')
        cy.go('back')
    })

    cy.get('a[href="https://jnei.co/"]').click()
    cy.origin('https://jnei.co/', () => {
        cy.get('a[href="mailto:alex@jnei.co"]').should('be.visible')
        cy.get('span').contains('CONTACT US').should('be.visible')
        cy.go('back')
    })
})

Cypress.Commands.add('klikRoketIndonesia', () => {
    cy.get('a[href="#5"]').click()
    cy.get('a[href="roket-indonesia-id"]').click()
    cy.url().should('include', 'roket-indonesia-id')
    cy.get('b').should('contain.text', 'Layanan pengiriman instant dalam kota.')
    cy.get('a[href="https://www.jne.co.id/produk"]').eq(2).click()

    cy.get('a[href="https://linktr.ee/roket_indonesia"]').click()
    cy.origin('https://linktr.ee', () => {
        cy.url().should('include', 'roket_indonesia')
        cy.get('#profile-roket-indonesia').should('be.visible')
        cy.go('back')
    })
})

Cypress.Commands.add('klikHome', () => {
    cy.get('a[href="https://www.jne.co.id"]').click()
    cy.get('h1').should('contain.text', 'Apa kata mereka').and('be.visible')
    cy.get('label').should('contain.text', 'Lacak Pengiriman')
    cy.get('img[src="https://www.jne.co.id/cfind/source/images/logo-white.svg"]').should('be.visible')
})

Cypress.Commands.add('resiExist', (resi_exist_1, resi_exist_2) => {
    cy.get('.tagify__input').type(resi_exist_1)
    cy.get('.tagify__input').type(resi_exist_2)
    cy.get('#be-search-resi').click()
})

Cypress.Commands.add('resiNotExist', (resi_not_exist_1, resi_not_exist_2) => {
    cy.get('.tagify__input').type(resi_not_exist_1)
    cy.get('.tagify__input').type(resi_not_exist_2)
    cy.get('#be-search-resi').click()
})

Cypress.Commands.add('cekTarifTrue', () => {
    cy.get('input[placeholder="Masukan data pengiriman"]').click()
    cy.get('input[placeholder="Kota Awal"]').type('mal')
    cy.get('li[data-id="MXG10000"]').click()

    cy.get('input[placeholder="Kota Tujuan"]').type('jak')
    cy.get('li[data-id="CGK10200"]').click()

    cy.get('input[placeholder="Berat barang"]').type('2')
    cy.get('.button.button-outline.btn-hitung').click()

    cy.url().should('include', 'shipping-fee?')
    cy.get('h2').should('contain.text', 'Cek Ongkir')
    cy.get('td').should('contain.text', 'JTR250')
    cy.get('td').should('contain.text', 'SPS')
})

Cypress.Commands.add('cekTarifFalse', () => {
    cy.get('input[placeholder="Masukan data pengiriman"]').click()
    cy.get('input[placeholder="Kota Awal"]').type('asd')
    cy.get('li').contains('asd').click()

    cy.get('input[placeholder="Kota Tujuan"]').type('asq')
    cy.get('li').contains('asq').click()

    cy.get('input[placeholder="Berat barang"]').type('2')
    cy.get('.button.button-outline.btn-hitung').click()

    cy.url().should('include', 'shipping-fee?')
    cy.get('h2').should('contain.text', 'Cek Ongkir')
    cy.get('p').should('contain.text', 'Pencarian tidak ditemukan, silahkan lengkapi data')
})

Cypress.Commands.add('klikPenghargaan', () => {
    cy.get('#id_award').click()
    cy.url().should('include', 'penghargaan')
    cy.get('h2').should('contain.text', 'Penghargaan')

    cy.get('#year').select('2023').should('have.value', '2023')
    cy.url().should('include', 'year=2023')
    cy.get('a').should('contain.text', 'Top National Agent dalam Strategic Business Partner Summit')

    cy.get('#year').select('2022').should('have.value', '2022')
    cy.url().should('include', 'year=2022')
    cy.get('a').should('contain.text', 'The Best Industry Marketing Champion 2022 Logistics Category')

    cy.get('#year').select('2021').should('have.value', '2021')
    cy.url().should('include', 'year=2021')
    cy.get('a').should('contain.text', 'Digital Marketing Award')
})

Cypress.Commands.add('cekPenghargaan', () => {
    cy.get('a[href="https://www.jne.co.id/penghargaan"]').contains('Lihat Semua').click()
    cy.url().should('include', 'penghargaan')
    cy.get('h2').should('contain.text', 'Penghargaan')

    cy.get('#year').select('2023').should('have.value', '2023')
    cy.url().should('include', 'year=2023')
    cy.get('a').should('contain.text', 'Top National Agent dalam Strategic Business Partner Summit')

    cy.get('#year').select('2022').should('have.value', '2022')
    cy.url().should('include', 'year=2022')
    cy.get('a').should('contain.text', 'The Best Industry Marketing Champion 2022 Logistics Category')

    cy.get('#year').select('2021').should('have.value', '2021')
    cy.url().should('include', 'year=2021')
    cy.get('a').should('contain.text', 'Digital Marketing Award')
})

Cypress.Commands.add('cekPromo', () => {
    cy.get('a[href="https://www.jne.co.id/promo-id"]').contains('Lihat Semua').click()
    cy.url().should('include', 'promo-id')
    cy.get('h2').should('contain.text', 'Promo Terkini')

    cy.get('a[href="jne-bantu-wujudkan-kebahagiaan"]').click()
    cy.url().should('include', 'jne-bantu-wujudkan-kebahagiaan')
    cy.get('span').should('contain.text', 'Kerja sama ini bertujuan untuk #BantuWujudkanKebahagiaan')

    cy.get('a[href="jasa-layanan-jne-logistik"]').click()
    cy.url().should('include', 'jasa-layanan-jne-logistik')
    cy.get('p').should('contain.text', 'Melayani Jasa Pindah, Pengiriman Kendaraan, Transportasi dan Pergudangan')

    cy.get('a[href="inklusi-keuangan-platform-penjualan-digital-berbasis-ai"]').click()
    cy.url().should('include', 'inklusi-keuangan-platform-penjualan-digital-berbasis-ai')
    cy.get('h4').should('contain.text', 'MENCIPTAKAN KEBAHAGIAAN, MEMBANGKITKAN SEMANGAT')
})

Cypress.Commands.add('chatBot', () => {
    cy.get('.kurir-bt').click()
    cy.wait(10000)

    cy.get('input[name="FirstName"]').type('josh')
    cy.get('input[name="LastName"]').type('chris')
    cy.get('input[name="Email"]').type('aaa@gmail.com')
    cy.get('input[name="Phone"]').type('088822345412')
    cy.get('.label.Body').click()

    cy.get('.rich-menu-item.embeddedServiceLiveAgentStateChatRichItem').should('be.visible')

    cy.get('textarea[placeholder="Type your message..."]').type('hi{enter}')
    cy.get('div').should('contain.text', 'Mohon maaf Joni masih banyak kekurangan dan akan terus belajar.')

    cy.get('button').contains('Lacak Kiriman & Laporan').click()
    cy.get('button').should('contain.text', 'Pengajuan Klaim Barang')

    cy.get('button').contains('Kembali ke Menu Utama').click()
    cy.get('.slds-icon.slds-icon-text-default.slds-icon_x-small').click()

    cy.get('.dialogButton.dialog-button-0.uiButton.embeddedServiceSidebarButton').click()
    cy.get('div').should('contain.text', 'Chat Ended')

    cy.get('.endChatButton.closeChatButton.uiButton--default.uiButton.embeddedServiceSidebarButton').click()
    cy.get('img[src="https://pttikijalurnugrahaekakurir.force.com/eclaimform/resource/1671433394000/chatLogo"]').should('be.visible')
})

Cypress.Commands.add('trackResi', (resi_exist_1, resi_exist_2) => {
    cy.get('.tagify__input').type(resi_exist_1)
    cy.get('.tagify__input').type(resi_exist_2)
    cy.get('#lacak-pengiriman').click()
})