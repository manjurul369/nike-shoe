import { hamburger } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants"

const Nav = () => {
  return (
    <header className="absolute w-full z-10">
        <nav className="flex justify-between items-center max-container padding-x xl:px-4 py-8">
            <a href="/">
                <img src={ headerLogo} alt="Logo" width={129} height={29} className="m-0 w-[129px] h-[29px]" />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={item.label}>
                    <a
                        href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray'
                    >
                        {item.label}
                    </a>
                    </li>
                ))}
            </ul>
            <div className="hidden max-lg:block">
                <img src={hamburger} alt='Hamburger' width={25} height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav