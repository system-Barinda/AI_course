import { css } from '../../../styled-system/css';
import { flex, stack, center } from '../../../styled-system/patterns';
export default function FeatureCardsSection() {
  return (
    <div className={css({
      px: { base: '6', md: '10' },
      py: '16',
      bg: '#f1f5f9'
    })}>

      <div className={css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
        gap: '6'
      })}>

        {[1,2,3].map((item) => (
          <div key={item} className={stack({
            bg: 'white',
            p: '6',
            borderRadius: '2xl',
            boxShadow: 'md',
            gap: '4',
            transition: 'all 0.3s ease',
            _hover: { transform: 'translateY(-5px)', boxShadow: 'lg' }
          })}>

            <div className={css({
              width: '50px',
              height: '50px',
              borderRadius: 'xl',
              bg: '#0f3d2e',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            })}>
              AI
            </div>

            <h3 className={css({ fontSize: 'lg', fontWeight: 'bold', color: '#1e293b' })}>
              Smart Learning {item}
            </h3>

            <p className={css({ fontSize: 'sm', color: '#64748b' })}>
              Build intelligent systems that learn and adapt using modern AI tools and techniques.
            </p>

            <div className={flex({ justify: 'space-between', align: 'center' })}>
              <span className={css({ fontWeight: 'bold', color: '#0f3d2e' })}>Explore</span>
              <span className={css({ fontSize: 'lg' })}>→</span>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}