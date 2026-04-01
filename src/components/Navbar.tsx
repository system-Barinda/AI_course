import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";

export default function Navbar() {
  return (
      <nav className={flex({ justify: 'space-between', 
        align: 'center', 
        p: '6', 
        lg: { px: '20' }, 
        bg: 'linear-gradient(135deg, #000000 0%, #0a2a22 50%)' })}>
        <div className={flex({ align: 'center', gap: '2' })}>
          <div className={css({ fontSize: '2xl', fontWeight: 'bold' })}>✦</div>
          <span className={css({ textTransform: 'uppercase', fontSize: 'xs', letterSpacing: 'widest' })}>Your Logo</span>
        </div>
        
        <div className={flex({ gap: '8', align: 'center', display: { base: 'none', md: 'flex', } })}>
          <a href="#" className={css({ border: '1px solid white', px: '4', py: '1', borderRadius: 'full', fontSize: 'sm',color:'white' })}>home</a>
          <a href="#" className={css({ fontSize: 'sm',color:'white' })}>About us</a>
          <a href="#" className={css({ fontSize: 'sm',color:'white' })}>PRODUCT</a>
          <a href="#" className={css({ fontSize: 'sm',color:'white' })}>CONTACT US</a>
          <button className={css({ bg: 'white', color: 'black', borderRadius: 'full', w: '8', h: '8', display: 'grid', placeItems: 'center' })}>
            ☰
          </button>
        </div>
      </nav>
  );
}