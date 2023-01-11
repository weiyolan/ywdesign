
export default function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => {
        setMatches(media.matches);
      };

      media.addEventListener(listener);

      return () => media.removeEventListener(listener);
    }, [matches, query]);
  
    return matches;
  }

export const useIsSmall = () => useMediaQuery('(min-width: 640px)');
export const useIsMedium = () => useMediaQuery('(min-width: 768px)');


// import { motion } from 'framer-motion'
// import { useIsSmall } from 'src/hooks/utils'

// const Component = () => {
// 	const isSmall = useIsSmall() /* or useMediaQuery('(min-width: 480px)'); */
 
// 	const variants = isSmall
// 	? {
// 	    animate: {
// 	      opacity: 1,
// 	      scale: 1,
// 				y: 0,
// 	    },
// 	    exit: {
// 	      opacity: 1,
// 	      scale: 1,
// 				y: 500,
// 	    },
// 	  }
// 	: {
// 	    animate: {
// 	      opacity: 1,
// 	      scale: 1,
// 	      y: 0,
// 	    },
// 	    exit: {
// 	      opacity: 0,
// 	      scale: 0.9,
// 	      y: -10,
// 	    },
// 	  };
	
// 	return (
// 		<motion.div initial="exit" animate="animate" exit="exit">Animated</div>
// 	);
// }