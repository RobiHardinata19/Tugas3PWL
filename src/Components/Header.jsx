

function Header() {
  return (
    <div className="header container m-auto  flex justify-between h-[60px] items-center ">
        <div className="left text-srWhite font-bold text-[18px]">Slam <br /> <span className="text-primary font-bold">Dunk</span> </div>
        <div className="right text-[17px] flex gap-7">
        <a href="/" className={`text-lg ${location.pathname === '/' ? 'font-semibold' : ''} text-white`}>Beranda</a>
                <a href="/tentang" className={`text-lg ${location.pathname === '/tentang' ? 'font-semibold' : ''} text-white`}>Tentang</a>
                <a href="/kontak" className={`text-lg ${location.pathname === '/kontak' ? 'font-semibold' : ''} text-white`}>Kontak</a>
        </div>
    </div>
  );
}

export default Header;
