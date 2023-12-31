import { motion } from 'framer-motion';
import { NestedState } from './PageIndicator.types';

function PageIndicatorPoint({
  isSelected,
  nestedScroll,
}: {
  isSelected: boolean;
  nestedScroll?: NestedState;
  isNested?: boolean;
}) {
  if (nestedScroll && isSelected) {
    const { numberOfChilds, currentIndex } = nestedScroll;

    return (
      <motion.div
        animate={{
          left: '35%',
          height: '120px',
          width: '20px',
        }}
        style={{ position: 'relative' }}
      >
        <PageIndicator nestedScroll={null} pagesNumber={numberOfChilds} selectedPage={currentIndex} isNested={true} />
      </motion.div>
    );
  }

  return (
    <motion.div
      //initial={{ width: '14px', height: '14px' }}
      animate={{ opacity: isSelected ? 1 : 0.2 }}
      style={{
        display: 'flex',
        width: '20px',
        height: '20px',
        border: '3px solid white',
        borderRadius: '99999px',
        margin: '20px',
      }}
    >
      {isSelected && (
        <motion.div
          style={{ width: '10px', height: '10px', margin: 'auto', borderRadius: 999 }}
          className='bg-transparent w-0.5 h-0.5 lg:w-2.5 lg:h-2.5 m-auto rounded-full'
          layoutId='indicator'
          initial={false}
          animate={{ backgroundColor: 'white' }}
        />
      )}
    </motion.div>
  );
}

function PageIndicator({
  pagesNumber = 4,
  selectedPage = 0,
  nestedScroll,
  isNested = false,
}: {
  pagesNumber?: number;
  selectedPage?: number;
  nestedScroll?: NestedState;
  isNested?: boolean;
}) {
  const childs = Array.from(Array(pagesNumber).keys()).map((el: number) => {
    const isSelected = selectedPage === el;
    return <PageIndicatorPoint key={el} isSelected={isSelected} nestedScroll={nestedScroll} isNested={isNested} />;
  });

  return (
    <motion.div
      initial={{ transform: 'translateX: -100%' }}
      animate={{ transform: 'translateX: 0%' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
        margin: 'auto',
        height: isNested ? '100%' : 'fit-content',
        justifyContent: 'space-between',
      }}
    >
      {childs}
    </motion.div>
  );
}

export default function PageIndicatorContainer({
  pagesNumber = 4,
  selectedPage = 0,
  nestedScroll,
}: {
  pagesNumber?: number;
  selectedPage?: number;
  nestedScroll?: NestedState;
}) {
  return (
    <div
      style={{ position: 'absolute', width: '10%', height: '100vh', display: 'flex', top: 0, left: 0, zIndex: 99999 }}
    >
      <PageIndicator {...{ pagesNumber, selectedPage, nestedScroll }} />{' '}
    </div>
  );
}
