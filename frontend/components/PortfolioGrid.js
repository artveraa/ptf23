import styles from '../styles/PortfolioGrid.module.scss';
import {useEffect, useRef, useState} from "react";
import gsap from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {SplitText} from "gsap/dist/SplitText";


const PortfolioGrid = () => {

	if (typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger, SplitText);
	}

	const [hasRendered, setHasRendered] = useState(false);

	useEffect(() => {
		setHasRendered(true);
	});

	const gridRef = useRef(null);
	const gridItemRef = useRef(null);

	useEffect(() => {
		if (hasRendered) {
			const items = gridRef.current.querySelectorAll('.item');

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: gridRef.current,
					start: 'top bottom',
					end: 'top -=1000',
					scrub: true,
					markers: true,
				},
			});

			items.forEach((item) => {
				gsap.set(item, {y: 150, autoAlpha: 0});
			});

			tl.to(items, {y: 0, autoAlpha: 1, duration: 1.5, stagger: 1, ease: "Power2.easeInOut"})
		}
	}, [hasRendered]);





    return (
        <div className={styles.portfolioGrid} ref={gridRef}>
			<div className={styles.portfolioGrid__item + ' item'} ref={gridItemRef}>
				<div className={styles.inner}></div>
			</div>
			<div className={styles.portfolioGrid__item + ' item'} ref={gridItemRef}>
				<div className={styles.inner}></div>
			</div>
			<div className={styles.portfolioGrid__item + ' item'} ref={gridItemRef}>
				<div className={styles.inner}></div>
			</div>
			<div className={styles.portfolioGrid__item + ' item'} ref={gridItemRef}>
				<div className={styles.inner}></div>
			</div>
			<div className={styles.portfolioGrid__item + ' item'} ref={gridItemRef}>
				<div className={styles.inner}></div>
			</div>
			<div className={styles.portfolioGrid__item + ' item'} ref={gridItemRef}>
				<div className={styles.inner}></div>
			</div>
			<div className={styles.portfolioGrid__item + ' item'} ref={gridItemRef}>
				<div className={styles.inner}></div>
			</div>
			<div className={styles.portfolioGrid__item + ' item'} ref={gridItemRef}>
				<div className={styles.inner}></div>
			</div>
			<div className={styles.portfolioGrid__item + ' item'} ref={gridItemRef}>
				<div className={styles.inner}></div>
			</div>
        </div>
    );
}

export default PortfolioGrid;