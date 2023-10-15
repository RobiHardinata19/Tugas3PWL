
const Footer = () => {
  return (
    <div className="container m-auto py-[50px]">
        <div className="wrap flex flex-col gap-[30px]">
            <div className="title text-[32px] font-bold text-center">Slam Dunk <br /> <span className="text-primary">Basketball Store</span> </div>
            <div className="nav flex gap-3 justify-center">
            <a href="/" className={`text-lg ${location.pathname === '/' ? 'font-semibold' : ''} text-white`}>Beranda</a>
                <a href="/tentang" className={`text-lg ${location.pathname === '/tentang' ? 'font-semibold' : ''} text-white`}>Tentang</a>
                <a href="/kontak" className={`text-lg ${location.pathname === '/kontak' ? 'font-semibold' : ''} text-white`}>Kontak</a>
            </div>
            <div className="text-center">Copyright 2023 All Right Reserve | Built by Robi Hardinata</div>
        </div>
    </div>
  )
}

export default Footer